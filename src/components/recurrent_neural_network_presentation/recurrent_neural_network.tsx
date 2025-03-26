import "@/scss/reveal.scss";
import "@/scss/themes/white.scss";
import { generateRef } from "../../modules/reveal";
import "./recurrent_neural_network.scss"
import HumanTranslator from "./human_translator.jpg"
import BobrKurwa from "./bobr_kurwa.jpeg"
import ExponentaTranslate from "./exponenta_translate.png"
import NnTranslate from "./nn_translate.jpg"
import SimpleRnn from "./simple_rnn.png"
import RnnModel from "./rnn_model.jpg"
import RnnExample1 from "./easy_example_p1.jpg" 
import RnnExample2 from "./easy_example_p2.jpg"
import RnnExample3 from "./easy_example_p3.jpg"
import RnnExample4 from "./easy_example_p4.jpg"

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
                    <section>
                        <div className = "container-in-half-slide">
                            <img src={BobrKurwa}/>
                            <div>Представим, что нам нужно перевести новую книгу Анджея Сапковского</div>
                        </div>
                    </section>
                    <section>
                        <div className = "container-in-half-slide">
                            <img src={HumanTranslator} />
                            <div>
                                <span className="fragment"> 
                                    <p className="fragment highlight-green">Качественный перевод</p>
                                </span>
                                <span className="fragment"> 
                                    <p className="fragment highlight-red">Большие временные затраты</p>
                                </span>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className = "container-in-half-slide">
                            <img src={ExponentaTranslate} />
                            <div>
                                <span className="fragment"> 
                                    <p className="fragment highlight-green">Быстрая обработка текста</p>
                                </span>
                                <span className="fragment"> 
                                    <p className="fragment highlight-red">Низкое качество перевода</p>
                                </span>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className = "container-in-half-slide">
                            <img src={NnTranslate}/>
                            <div>
                                <span className="fragment"> 
                                    <p className="fragment highlight-green">Качественный перевод</p>
                                </span>
                                <span className="fragment"> 
                                    <p className="fragment highlight-green">Быстрая обработка текста</p>
                                </span>
                            </div>
                        </div>
                    </section>
                </section>
                <section>
                    <h4>Рекуррентная нейронная сеть</h4>
                    <div className="container-center">
                        <img src={SimpleRnn}/>
                            <small> 
                                <p className="fragment">
                                Ключевая идея: RNN имеют «внутреннее состояние», которое обновляется по мере обработки последовательности.
                                </p>
                            </small>
                    </div>
                </section>
                <section>
                    <h4>Модель рекуррентной нейронной сети</h4>
                    <div>
                        <img src={RnnModel} className="img_horizontal"/>
                        <div className="r-fit-text">
                            Мы можем обрабатывать последовательность векторов x, применяя рекуррентную формулу на каждом временном шаге:
                            <p>
                                {String.raw`$$ h_t = f_W(h_{t-1}, x_t)$$`}
                            </p>
                            <p>
                                {String.raw`$$ y_t = f_{W_{hy}}(h_t)$$`}
                            </p>
                        </div>
                    </div>
                </section>
                <section> 
                    <section data-background-image="https://i.pinimg.com/originals/6c/90/28/6c90288d7e10d46d18895f17f420a92c.gif">
                        <h4 className="white_text"> Пример из жизни</h4>
                        <div className="r-stack">
                            <img src={RnnExample1} className="fragment fade-up fade-in-then-out"/>
                            <img src={RnnExample2} className="fragment fade-up fade-in-then-out"/>
                            <img src={RnnExample3} className="fragment fade-up fade-in-then-out"/>
                            <img src={RnnExample1} className="fragment fade-up fade-in-then-out"/>
                            <img src={RnnExample4} className="fragment fade-up"/>
                        </div>
                    </section>
                </section>
            </div>
        </div >
    )
}

export default RecurrentNeuralNetwork;
