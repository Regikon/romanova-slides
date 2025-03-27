import LogisticRegressionPresentation from "../logistic_regression_presentation/logistic_regression_presentation";
import RecurrentNeuralNetwork from "../recurrent_neural_network_presentation/recurrent_neural_network";
import { HashRouter, Routes, Route } from 'react-router'
import TheBestRoutingPage from "../the_best_routing_page/the_best_routing_pate";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="romanova-slides" >
                    <Route index element={<TheBestRoutingPage />} />
                    <Route path="logreg" element={<LogisticRegressionPresentation />} />
                    <Route path="rnn" element={<RecurrentNeuralNetwork />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
