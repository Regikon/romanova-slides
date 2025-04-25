import '@/scss/reveal.scss';
import '@/scss/themes/white.scss';
import { useReveal } from '../../modules/reveal';
import './recurrent_neural_network.scss';
import HumanTranslator from './human_translator.jpg';
import BobrKurwa from './bobr_kurwa.jpeg';
import ExponentaTranslate from './exponenta_translate.png';
import NnTranslate from './nn_translate.jpg';
import SimpleRnn from './description-block-rnn-ltr.png';
import RnnModel from './architecture-rnn-ltr.png';
import RnnExample1 from './easy_example_p1.jpg';
import RnnExample2 from './easy_example_p2.jpg';
import RnnExample3 from './easy_example_p3.jpg';
import RnnExample4 from './easy_example_p4.jpg';
import CatOnLaptop from './cat_on_laptop.gif';
import RnnOneToOne from './rnn-one-to-one-ltr.png';
import Pathetic from './skinner-pathetic.jpg';
import RnnOneToMany from './rnn-one-to-many-ltr.png';
import TomConductor from './tom-conductor.gif';
import RnnMusic from './hell_noise.mp3';
import RnnManyToOne from './rnn-many-to-one-ltr.png';
import RnnManyToManySame from './rnn-many-to-many-same-ltr.png';
import Smugjak from './smugjack.jpeg';
import RnnManyToManyDifferent from './rnn-many-to-many-different-ltr.png';
import MagicWand from './magic_wand.jpg';
import VanishingGradient from './vanishing_gradient.jpeg';
import NoNoNo from './nonono.mp4';
import BuffDoge from './buff-doge.webp';
import AdvancedRnn from './advanced-rnn.jpg';

function RecurrentNeuralNetwork() {
  const deckDivRef = useReveal();

  return (
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">
        <section>
          <h2> Рекуррентные нейронные сети </h2>
          <div className="right-side-text">
            <p>
              И.М. Андриянов
              <br />
              Н.А. Козлова
            </p>
            <p>Группа: СМ7-43М</p>
          </div>
          <span className="bottom-text">{new Date(Date.now()).toLocaleDateString('ru-RU')}</span>
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
            <div className="container-in-half-slide">
              <img src={BobrKurwa} />
              <div>Представим, что нам нужно перевести новую книгу Анджея Сапковского</div>
            </div>
          </section>
          <section>
            <div className="container-in-half-slide">
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
            <div className="container-in-half-slide">
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
            <div className="container-in-half-slide">
              <img src={NnTranslate} />
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
          <h4>Рекуррентный слой</h4>
          <div>
            <img src={SimpleRnn} />
            <small>
              <p className="fragment">
                Ключевая идея: Имеется «внутреннее состояние» [a(t)], которое обновляется по мере
                обработки последовательности.
              </p>
            </small>
          </div>
        </section>
        <section>
          <h4>Простейшая RNN</h4>
          <div>
            <img src={RnnModel} className="img_horizontal" />
            <div className="r-fit-text">
              Мы можем обрабатывать последовательность векторов x, применяя рекуррентную формулу на
              каждом временном шаге:
              <p>{String.raw`$$ a^{<t>} = g_1(W_{aa}a^{t-1} + W_{ax}x^{<t>} + b_a)$$`}</p>
              <p>{String.raw`$$ y^{<t>} = g_2(W_{ya}a^{<t>} + b_y)$$`}</p>
            </div>
          </div>
        </section>
        <section>
          <section data-background-image={CatOnLaptop}>
            <h4 className="white_text"> Пример из жизни</h4>
            <div className="r-stack">
              <img src={RnnExample1} className="fragment fade-up fade-in-then-out" />
              <img src={RnnExample2} className="fragment fade-up fade-in-then-out" />
              <img src={RnnExample3} className="fragment fade-up fade-in-then-out" />
              <img src={RnnExample1} className="fragment fade-up fade-in-then-out" />
              <img src={RnnExample4} className="fragment fade-up" />
            </div>
          </section>
        </section>
        <section>
          <section>
            <div className="r-fit-text">А теперь посмотрим, как можно посоединять</div>
          </section>
          <section>
            <div className="horizontal-align some-gap">
              <img src={Pathetic} className="fragment fade-in" />
              <img src={RnnOneToOne} />
            </div>
          </section>
          <section>
            <audio controls src={RnnMusic} className="fragment fade-in"></audio>
            <div className="horizontal-align some-gap">
              <img src={RnnOneToMany} />
              <img src={TomConductor} className="fragment fade-in" />
            </div>
          </section>
          <section>
            <div className="r-stack">
              <div className="r-fit-text">
                Меня зовут Кира Йошикагэ.Мне 33 года. Мой дом находится в северо-восточной части
                Морио, в районе поместий. Работаю в офисе сети магазинов Kame Yu и домой
                возвращаюсь, самое позднее, в восемь вечера. Не курю, выпиваю изредка. Ложусь спать
                в 11 вечера и убеждаюсь, что получаю ровно восемь часов сна, несмотря ни на что.
                Перед сном я пью тёплое молоко, а также минут двадцать уделяю разминке, поэтому до
                утра сплю без особых проблем. Утром я просыпаюсь, не чувствуя ни усталости, ни
                стресса, словно младенец. На медосмотре мне сказали, что никаких проблем нет. Я
                пытаюсь донести, что я обычный человек, который хочет жить спокойной жизнью. Я не
                забиваю себе голову проблемами вроде побед или поражений, и не обзавожусь врагами,
                из-за которых не мог бы уснуть. Я знаю наверняка: в таком способе взаимодействия с
                обществом и кроется счастье. Хотя, если бы мне пришлось сражаться, я бы никому не
                проиграл.
              </div>
              <img src={RnnManyToOne} className="fragment fade-up r-frame white-background" />
            </div>
          </section>
          <section>
            <div>
              <img src={RnnManyToManySame} className="fragment" />
              <div className="fragment horizontal-align fade-in">
                <img src={Smugjak} />
                <div className="r-fit-text">
                  Named Entity Recognition (NER) — это задача в области обработки естественного
                  языка (NLP), направленная на выделение и классификацию именованных сущностей в
                  тексте, таких как имена людей, названия организаций, даты, местоположения, суммы
                  денег и другие типы специфических объектов.
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="r-stack">
              <img src={RnnManyToManyDifferent} className="fragment" />
              <img src={MagicWand} className="fragment fade-in" />
            </div>
          </section>
        </section>
        <section>
          <section>
            <div className="r-fit-text">Всё работает?</div>
          </section>
          <section>
            <video data-autoplay src={NoNoNo}></video>
          </section>
          <section>
            <div>
              <img src={VanishingGradient} className="fragment fade-in" />
              <img src={RnnModel} />
            </div>
          </section>
          <section>
            <div className="r-stack">
              <img src={BuffDoge} className="fragment fade-up" />
              <img src={AdvancedRnn} className="fragment fade-up" />
            </div>
          </section>
        </section>
        <section>
          <h4>Достоинства и недостатки</h4>
          <ul>
            <li className="fragment highlight-green ">Возможность обрабатывать вход любой длины</li>
            <li className="fragment highlight-green ">
              Размер модели не увеличивается от длины входа
            </li>
            <li className="fragment highlight-green ">
              Вычисления используют ранее полученную информацию (можно экономить)
            </li>
            <li className="fragment highlight-green ">Веса модели не зависят от времени</li>
            <li className="fragment highlight-red ">Вычисления могут быть долгими</li>
            <li className="fragment highlight-red ">
              Трудно получить результаты из далекого прошлого
            </li>
            <li className="fragment highlight-red ">
              Нельзя предсказать будущее для текущего состояния
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default RecurrentNeuralNetwork;
