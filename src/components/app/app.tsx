import LogisticRegressionPresentation from "../logistic_regression_presentation/logistic_regression_presentation";
import RecurrentNeuralNetwork from "../recurrent_neural_network_presentation/recurrent_neural_network";
import { BrowserRouter, Routes, Route } from 'react-router'
import TheBestRoutingPage from "../the_best_routing_page/the_best_routing_pate";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="romanova-slides" >
                    <Route index element={<TheBestRoutingPage />} />
                    <Route path="logreg" element={<LogisticRegressionPresentation />} />
                    <Route path="rnn" element={<RecurrentNeuralNetwork />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
