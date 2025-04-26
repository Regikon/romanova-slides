import '@/scss/reveal.scss';
import '@/scss/themes/white.scss';
import { useReveal } from '../../modules/reveal';
import './edac_presentation.scss';

import SolomonReed from './resources/solomon_reed.webp';
import CompactDisk from './resources/compact_disks.jpg';
import Barcode from './resources/barcode.jpg';
import Sputnik from './resources/sputnik.jpg';
import DigitalTv from './resources/digital_tv.webp';
import Qr from './resources/qr.png';
import Dushka from './resources/dushka.jpg';
import SadEmoji from './resources/sad_emoji.webp';
import RSDecoder from './resources/decoder.png';
import VeryInteresting from './resources/very_interesting.png';

// Error detection and correction (Edac)
function EdacPresentation() {
  const deckDivRef = useReveal();

  return (
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">
        <section>
          <h2> Контроль ошибок при передаче данных </h2>
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
        {/* Здесь мы идем от начала кодов Рида-Соломона, как прочтешь, можно удалить этот коммент */}
        <section>
          <section>
            <div className="two-columns-container">
              <h3> Коды Рида-Соломона </h3>
              <div>
                <img src={SolomonReed} width="50%" />
              </div>
            </div>
          </section>
          <section>
            <h3> Особенности </h3>
            <ol>
              <li>Кодовое слово может содержать исходную информацию в явном виде, а может и нет</li>
              <li>Не зависят от метрики, но мы будем рассматривать в метрике Хэмминга</li>
              <li>Так как являются блочными, то тоже обозначаются через {String.raw`$(n, k)$`}</li>
              <li>Один кодер, много декодеров</li>
              <li>Справляются хорошо</li>
              <li>Большинство не понимают, как они работают</li>
            </ol>
          </section>
          <section>
            <h3>А где используется?</h3>
            <div className="r-stack">
              <img className="fragment" src={CompactDisk} />
              <img className="fragment" src={Barcode} />
              <img className="fragment" src={Sputnik} />
              <img className="fragment" src={DigitalTv} />
              <img className="fragment" src={Qr} width="60%" />
            </div>
          </section>
        </section>
        <section>
          <div className="r-stack">
            <img src={Dushka} alt="Искал эту фотку полчаса, и не жалею" />
            <h1 className="dushka-caption">Dushka Warning</h1>
          </div>
        </section>
        <section>
          <section>
            <h5> Поле {String.raw`$F_2$`} </h5>
            <ul>
              <li>{String.raw`$F_2$ = {0, 1}`}</li>
              <li>Сложение = XOR = Вычитание, происходит по модулю 2</li>
              <li>Умножение = деление = как обычно, но по модулю 2 </li>
            </ul>
            <div>{String.raw`$1 + 1 = (1 + 1)\ mod\ 2 = 0$`}</div>
            <div>{String.raw`$1 \cdot 1 = (1 \cdot 1)\ mod\ 2 = 0$`}</div>
          </section>
          <section>
            <h5> Поле {String.raw`$F_3$`} </h5>
            <ul>
              <li>{String.raw`$F_3$ = {0, 1, 2}`}</li>
              <li>Сложение != Вычитание, происходит по модулю 3</li>
              <li>Умножение != деление, происходит по модулю 3 </li>
            </ul>
            <div>{String.raw`$2 + 2 = (2 + 2)\ mod\ 3 = 1$`}</div>
            <div>{String.raw`$2 \cdot 2 = (2 \cdot 2)\ mod\ 3 = 1$`}</div>
          </section>
          <section>
            <h5> Поле {String.raw`$F_6$`} </h5>
            <div> Мы не знаем удобной модели, чтобы выразить это поле.</div>
          </section>
          <section>
            <h4>Примечание</h4>
            <ol>
              <li> Все поля из конечного числа элементов называют
                <span className='italic'> полями Галуа</span>
              </li>
              <li>
                Удобные модели полей существуют только для полей из простого числа элементов
              </li>
            </ol>
          </section>
        </section>
        <section>
          <h5>Кодер</h5>
          <span>Рассматривается произвольное поле {String.raw`$F_q$`}</span>
          <div>
            <div>{String.raw`$(f_0, f_1, \dots, f_{k-1})$`}</div>
            <div>{String.raw`$\downarrow$`}</div>
            <div>{String.raw`$(f(a_1), f(a_2), \dots, f(a_n))$`}</div>
          </div>
          <ul>
            <li>{String.raw`$(f_i)$`} - исходное сообщение длины k из элементов {String.raw`$F_q$`}</li>
            <li>{String.raw`$f(x) = \sum_{i=0}^{k-1} f_i x^i $`} - кодирующая функция</li>
            <li>{String.raw`$(a_i)$`} - n разных элемента поля {String.raw`$F_q$`}</li>
          </ul>
        </section>
        <section>
          <section>
            <div>
              <h4>Код Рида-Соломона в {String.raw`$F_2$`}</h4>
              <div>
                Все {String.raw`$a_i$`} должны быть различными, и их должно быть n, то есть столько же, сколько
                символов в кодовом слове. То есть в {String.raw`$F_2$`} {String.raw`$n <= 2$`}.
              </div>
              <img className='fragment' src={SadEmoji} />
            </div>
          </section>
        </section>
        <section>
          <h2>Но выход есть</h2>
        </section>
        <section>
          <section>
            <h4>Поле {String.raw`$F_{2^2}$`} </h4>
            <ul>
              <li>{String.raw`$F_{2^2}$ = {(0, 0), (0, 1), (1, 0), (1, 1)}`}</li>
              <li>Сложение = Вычитание = XOR. Работает как с векторами, но по модулю 2</li>
              <li>Умножение... немного неочевидное</li>
            </ul>
            <div className="normal-text">
              <div>{String.raw`$(1, 0) + (1, 1) = (2, 1)\ mod\ 2 = (0, 1);$`}</div>
              <span>{String.raw`$(1, 0) \cdot (1, 1) \sim \\ (1 \cdot x + 0 \cdot x^0) \cdot (1 \cdot x + 1 \cdot x^0) =\\ (x^2 + x)\ mod\ (x^2 + 1) =\\ (x^2 + 1 + x + 1)\ mod\ (x^2 + 1) =\\ x + 1 \sim (1, 1)\ mod\ 2 = (1, 1)$`}</span>
            </div>
          </section>
          <section>
            <h4>А как выглядит кодирование для такого поля?</h4>
          </section>
          <section>
            <div className="small-text">
              <div className="left-align">Возьмем для простоты n = 2 и {String.raw`$a_1 = (0, 1); a_2 = (1, 0)$`}. Будем кодировать последовательность из двух символов {String.raw`$[(1, 0), (1, 1)]$`}.</div>
              <div>
                <ol>
                  <li>{String.raw`$f(x) = (1, 0)x  + (1, 1)$`}</li>
                  <li>
                    {String.raw`$f(a_1) = (1, 0)\cdot (0, 1) + (1, 1) = (1, 0) + (1, 1) = (0, 1)$`}
                  </li>
                  <li>
                    {String.raw`$f(a_2) = (1, 0)\cdot (1, 0) + (1, 1) = (0, 1) + (1, 1) = (1, 0)$`}
                  </li>
                </ol>
                Закодировано сообщение {String.raw`[(0, 1), (1, 0)]`} 🤓
              </div>
            </div>
          </section>
        </section>
        <section>
          <section>
            <h4>Декодер Гао</h4>
            <div className='left-align'>
              <ul>
                <li>Декодер Гао, а также другие декодеры способны исправить {String.raw`$w \le \lfloor\frac{(n - k)}{2}\rfloor$`} ошибок. </li>
                <li> Для одного из
                  популярных кодов (255, 233) это число составляет 11 символов по 8 бит, то есть 11 байт).
                  Всего мы передаем при этом 32 байта. </li>
                <li>Приведенное число ошибок является максимально возможным для однозначного декодирования</li>
              </ul>
            </div>
          </section>
          <section>
            <img src={RSDecoder} />
          </section>
          <section>
            <div>Если ваше лицо хотя бы такое</div>
            <img src={VeryInteresting} />
            <div>то наша работа выполнена</div>
          </section>
        </section>
      </div>
    </div>
  );
}

export default EdacPresentation;
