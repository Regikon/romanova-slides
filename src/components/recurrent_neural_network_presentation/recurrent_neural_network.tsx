import "@/scss/reveal.scss";
import "@/scss/themes/white.scss";
import { generateRef } from "../../modules/reveal";
import "./recurrent_neural_network.scss"
import HumanTranslator from "./human_translator.jpg"
import BobrKurwa from "./bobr_kurwa.jpeg"
import ExponentaTranslate from "./exponenta_translate.png"
import NnTranslate from "./nn_translate.jpg"

function RecurrentNeuralNetwork() {
    const deckDivRef = generateRef();

    return (
        <div className="reveal" ref={deckDivRef}>
            <div className="slides">
                <section>
                    <h2> Рекуррентные нейронные сети </h2>
                    <div className="right-side-text">
                        <p>И.М. Андриянов<br />Н.А. Козлова</p>
                        <p>Группа: СМ7-43М</p>
                    </div>
                    <span className="bottom-text">
                        {new Date(Date.now()).toLocaleDateString("ru-RU")}
                    </span>
                </section>
                <section>
                    <div>План</div>
                    <ol>
                        <li>Зачем нам нужны рекуррентные нейронные сети?</li>
                        <li>Что такое рекуррентная нейронная сеть и как она работает?</li>
                        <li>Разновидности моделей и их применение</li>
                    </ol>
                </section>
                <section> 
                    {/* У меня было время экспериментов, но сам цвет мне не нравится, надо поменять*/}
                    <section data-background-color="aquamarine">
                        <div className = "container">
                            <img className = "img_col" src={BobrKurwa}/>
                            <div>Задача: перевести новую книгу Анджея Сапковского</div>
                        </div>
                    </section>
                    <section>
                        <div className = "container">
                            <img src={HumanTranslator} />
                            <div>
                                <p className="fragment green-text">Качественный перевод</p>
                                <p className="fragment red-text">Большие временные затраты</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className = "container">
                            <img className = "image-left" src={ExponentaTranslate} />
                            <div>
                                <p className="fragment red-text"> Низкое качество перевода</p>
                                <p className="fragment green-text"> Быстрая обработка текста</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className = "container">
                            <img className = "image-left" src={NnTranslate} />
                            <div>
                                <p className="fragment green-text"> Качественный перевод</p>
                                <p className="fragment green-text"> Быстрая обработка текста</p>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </div >
    )
}

export default RecurrentNeuralNetwork;
