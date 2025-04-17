import select
import socket
from socket import SHUT_RDWR
from typing import Tuple, Union

from csman.common.error.base_error import BaseError
from csman.common.error.connection_error import ConnectionError
from csman.common.logging.logging import debug as log_debug
from csman.common.stream.interfaces.i_stream import IReadStream, IWriteStream


class TcpStream(IReadStream, IWriteStream):
    def __init__(self, hostname: str, port: int, connection_timeout: float = 1.0):
        """
        Initialize a TcpStream object.

        This constructor initializes a TCP stream and attempts to connect to the specified server.

        :param hostname: The hostname of the server to connect to.
        :type hostname: str
        :param port: The port number for the connection.
        :type port: int
        :param connection_timeout: The connection timeout in seconds. Default is 1.0.
        :type connection_timeout: float, optional
        """
        super().__init__()
        self.hostname = hostname
        self.port = port
        self.socket = None
        self.is_connected = False
        self.connection_timeout = connection_timeout

    def connect_to_server(self) -> Union[BaseError, None]:
        """
        Establish a connection to the specified TCP server.

        This method attempts to connect to the specified server and set the connection timeout.
        If the connection is already established, it raises a ConnectionError.
        If the connection could not be established, it also raises a ConnectionError.

        :rtype: Union[BaseError, None]
        """
        if not self.is_connected:
            self.socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            try:
                self.socket.settimeout(self.connection_timeout)
                self.socket.connect((self.hostname, self.port))
                self.is_connected = True
                log_debug(f"Opened TCP client socket at {self.hostname}:{self.port}")

            except socket.error:
                self.is_connected = False
                if self.socket is not None:
                    return ConnectionError(
                        f"connection could not be established with {self.hostname}:{self.port}"
                    )
        else:
            return ConnectionError(
                f"connection is already established with {self.hostname}:{self.port}"
            )

    def disconnect_from_server(self) -> Union[BaseError, None]:
        """
        Disconnect from the TCP server.

        This method closes the connection to the TCP server by shutting down the socket
        and setting the connection status to False. If an error occurs during the process,
        a ConnectionError is returned.

        :return: None if disconnection is successful, otherwise a ConnectionError.
        :rtype: Union[BaseError, None]
        """

        try:
            if self.socket is not None and self.is_connected:
                self.socket.shutdown(SHUT_RDWR)
                self.socket.close()
                self.is_connected = False
        except socket.error:
            return ConnectionError(
                f"error occurred when disconnecting from server {self.hostname}:{self.port}"
            )

    def reconnect_to_server(self) -> Union[BaseError, None]:
        """
        Reconnect to the TCP server.

        This method disconnects from the current TCP server if already connected,
        and then reconnects to the server. If the disconnection or reconnection
        fails, it returns a ConnectionError.

        :return: None if reconnection is successful, otherwise a ConnectionError.
        :rtype: Union[BaseError, None]
        """
        if self.is_connected:
            error = self.disconnect_from_server()
            if error is not None:
                return error
        error = self.connect_to_server()
        if error is not None:
            return error

    def send_data(self, raw_data) -> Union[BaseError, None]:
        """
        Send data to the connected TCP server.

        This method attempts to send the provided data to the connected TCP server.
        If the connection is not established, it returns a ConnectionError.
        If an error occurs during the sending process, it also returns a ConnectionError.

        :param data_to_send: The data to be sent to the server.
        :type data_to_send: object
        :return: None if sending is successful, otherwise a ConnectionError.
        :rtype: Union[BaseError, None]
        """
        if not self.is_connected:
            return ConnectionError(
                f"Connection is not established with {self.hostname}:{self.port}"
            )
        try:
            if self.socket is None:
                return ConnectionError("Socket is not initialized")
            self.socket.sendall(raw_data)
        except socket.error:
            return ConnectionError(
                f"Could not send data to {self.hostname}:{self.port}"
            )

    def receive_data(
        self, bytes_to_receive: int = 1
    ) -> Tuple[Tuple[Union[bytes, None], bool], Union[BaseError, None]]:
        """
        Receive data from the connected TCP server.

        This method attempts to receive the specified amount of bytes from the connected TCP server.
        If the connection is not established, it returns a ConnectionError.
        If an error occurs during the receiving process, it also returns a ConnectionError.

        :param bytes_to_receive: The number of bytes to receive from the server. Defaults to 1.
        :type bytes_to_receive: int, optional
        :return: A tuple containing the received data and a boolean indicating
            whether data was successfully received, and a possible error object.
        :rtype: Tuple[Tuple[bytes, bool], [BaseError or None]]
        """
        if not self.is_connected:
            return (None, False), ConnectionError("Connection is not established")
        buffer_not_empty, _, _ = select.select([self.socket], [], [], 0.05)
        if buffer_not_empty:
            try:
                if self.socket is None:
                    return (None, False), ConnectionError("Socket is not initialized")
                raw_data = self.socket.recv(bytes_to_receive)
                has_received = True
                error = None
            except socket.timeout:
                raw_data = None
                has_received = False
                error = ConnectionError("Timeout occurred when receiving data")
            return (raw_data, has_received), error
        return (None, False), None

    def __del__(self):
        if self.is_connected:
            self.disconnect_from_server()
