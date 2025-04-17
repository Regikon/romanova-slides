import "./the_best_routing_pate.scss";
import { Link } from "react-router";

function TheBestRoutingPage() {
    return (
        <div className="routing-page">
            <ol>
                <li><Link to="logreg"> Логистическая регрессия </Link></li>
                <li><Link to="rnn"> Рекуррентные нейронные сети </Link></li>
                <li><Link to="python"> Основы Python </Link></li>
            </ol>
        </div >
    )
}

export default TheBestRoutingPage;
