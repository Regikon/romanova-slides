import { useReveal } from '../../modules/reveal';
import ROS2Config from './ros2_config.jpg';
import IdaPro from './ida_pro.jpg';
import IdaPython from './ida_python.jpg';
import SmallPython from './small_python.jpg';
import Django from './django.jpg';
import Pytorch from './pytorch.png';
import GarbageCollector from './garbage_collector.png';
import LogoutFunc from './logout_func.jpg';
import LambdaFunc from './lambda_func.jpg';
import SocketTry from './socket_try.jpg';
import Imports from './imports.jpg';
import ProjectStructure from './project_structure.jpg';
import PythonClass from './python_class.jpg';
import TcpStream from '/tcp_stream.py?url';

function PythonPres() {
  const deckDivRef = useReveal();

  return (
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">
        <section>
          <h2> Основы Python </h2>
          <div className="right-side-text">
            <p>И.М. Андриянов</p>
            <p>Группа: СМ7-43М</p>
          </div>
          <span className="bottom-text">{new Date(Date.now()).toLocaleDateString('ru-RU')}</span>
        </section>
        <section>
          <section>
            <h3>Мотивация</h3>
          </section>
          <section>
            <h4>TIOBE Index (April 2025)</h4>
            <div>
              <iframe
                src="https://www.tiobe.com/tiobe-index/"
                width="800"
                height="600"
                className="full-fill"
              ></iframe>
            </div>
          </section>
        </section>
        <section>
          <section>
            <h3>Когда можно использовать Python?</h3>
          </section>
          <section>
            <h4>Встраиваемость</h4>
            <img src={IdaPro} />
            <img src={IdaPython} />
          </section>
          <section>
            <h4>Конфигурация</h4>
            <img src={ROS2Config} width="800" />
          </section>
          <section>
            <h4>Небольшие приложения</h4>
            <img src={SmallPython} />
          </section>
          <section>
            <h4>Фреймворки</h4>
            <img src={Django} />
          </section>
          <section>
            <h4>Легковесное API</h4>
            <img src={Pytorch} />
          </section>
        </section>
        <section>
          <h3> Когда точно не надо применять Python?</h3>
          <ol>
            <li>Драйвера</li>
            <li>Высоконагруженные вычисления</li>
            <li>Большие программы</li>
            <li>Многопоточные нагруженные программы</li>
            <li>...</li>
          </ol>
        </section>
        <section>
          (Ненастоящая) модель памяти и сборщик мусора
          <img src={GarbageCollector} />
        </section>
        <section>
          <section>
            <h5>Неизменяемые типы данных</h5>
            <ul>
              <li>int - любое произвольное целое число</li>
              <li>float - любое произовольная десятичная дробь</li>
              <li>str - строка</li>
              <li>tuple - упорядоченная неизменяемая коллекция (кортеж)</li>
            </ul>
          </section>
          <section>
            <h5>Изменяемые типы данных</h5>
            <ul>
              <li>List - список значений любого типа</li>
              <li>Dict - ассоциативный массив (отображение)</li>
            </ul>
          </section>
          <section>
            <h1>Ахтунг!</h1>
          </section>
        </section>
        <section>
          <section>
            <h5>Функции</h5>
            <div>
              Функции в Python являются объектами первого рода. Это означает, что их можно
              использовать как переменные.
            </div>
          </section>
          <section>
            <img src={LogoutFunc} />
          </section>
          <section>
            <img src={LambdaFunc} />
          </section>
        </section>
        <section>
          <h5>Обработка ошибок</h5>
          <img src={SocketTry} />
        </section>
        <section>
          <section>
            <div>
              Программы в Python как правило делят на модули. Модули подключаются при помощи
              директивы import
            </div>
            <img src={ProjectStructure} />
          </section>
          <section>
            <img src={Imports} />
          </section>
        </section>
        <section>
          <section>
            <a href={TcpStream}>
              <h5>Классы</h5>
            </a>
            <img src={PythonClass} />
          </section>
        </section>
      </div>
    </div>
  );
}

export default PythonPres;
