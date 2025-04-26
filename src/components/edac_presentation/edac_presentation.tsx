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
import BitSuspicious from './resources/Bit_suspicious.png';
import ErrorDetection from './resources/error_detection.jpg';
import EthernetMsg from './resources/ethernet_msg.png';
import CheckSum1 from './resources/checksum1.jpg';
import CheckSum2 from './resources/checksum2.jpg';
import CheckSum3 from './resources/checksum3.jpg';
import CheckSumProblem from './resources/checksum_problem.jpg';
import CRCvsCheckSum from './resources/CRCvsChecksum.webp';
import CRC_use1 from './resources/crc_use1.png';
import CRC_use2 from './resources/crc_use2.png';
import CRC_use3 from './resources/crc_use3.png';
import CRC_use4 from './resources/crc_use4.png';
import CycleCode from './resources/cycle_code.png';
import PolynomialGenerator from './resources/generator_crc.png';
import CrcQuestion from './resources/crc_questions.gif';
import CrcProcess from './resources/CRC_example.jpg';
import XOR from './resources/xor.png';
import Magic from './resources/magic.png'
import ControlBits from './resources/hamming_controlbyte.png';
import HammingCheck from './resources/hamming_check.png';
import HammingEx0 from './resources/hamming_ex0.png';
import HammingEx1 from './resources/hamming_ex1.png';
import HammingEx21 from './resources/hamming_ex2_1.png';
import HammingEx2 from './resources/hamming_ex2.png';
import HammingEx31 from './resources/hamming_ex31.png'; 
import HammingEx3 from './resources/hamming_ex3.png'; 
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
        <section>
          <section>
            <div>
              <h2> Контроль ошибок при передаче данных </h2>
            </div>
          </section>
          <section>
            <div>
              <h3> Обнаруживающие методы </h3>
              <div>
                <img src={BitSuspicious} width="90%" />
              </div>
            </div>
          </section>
          <section>
            <div>
              <h2> Корректирующие методы </h2>
              <div className="two-columns-container">               
                <ol>
                  <li> Упреждающая коррекция ошибок (FEC)</li>
                  <li> Коррекция ошибок с повторной передачей (Backward Error Correction)</li>
                </ol>
                <div>
                  <img src={ErrorDetection} width="90%" />
                </div>
              </div>
            </div>
          </section>  
        </section>
        <section>
          <section>
            <h3>
              Теоретические основы
            </h3>
          </section>
          <section>
            <h3>
              Сначала было слово и слово было "код"
            </h3>
          </section>
          <section>
            <h3>
              Блочное кодирование
            </h3>
          </section>
          <section>
            <h3>
              Метрики
            </h3>
          </section>
          <section>
            <h3>
            Сколько ошибок мы способны найти? А исправить?
            </h3>
          </section>
          <section>
            <h3>
             А что если код - это полином? 
            </h3>
          </section>
        </section>
        <section>
          <section>
            <div>
              <h3> Обнаружение ошибок с помощью контрольных сумм </h3>
            </div>
            <div>
              <img className="fragment" src={EthernetMsg} width="90%" />
            </div>
          </section>
          <section>
            <div>
            <img className="fragment" src={CheckSum1} width="90%" />
            <img className="fragment" src={CheckSum2} width="90%" />
            <img className="fragment" src={CheckSum3} width="90%" />
            </div>
          </section>
          <section>
            <div>
              <h3>Проблема простой контрольной суммы</h3>
            </div>
            <div>
              <img className="fragment" src={CheckSumProblem} width="80%" />
            </div>
            <div className='fragment bold'>
              Увеличение разрядности не помогает, если используется простое линейное суммирование!
            </div>
          </section>
          <section>
            <div>
              <h3>Что же делать?</h3>
            </div>
            <div>
              <img src={CRCvsCheckSum} width="60%" />
            </div>
          </section>
        </section>
        <section>
          <section>
            <div>
              <h3>Циклический избыточный код (CRC)</h3>
            </div>
            <div>
            Циклический избыточный код (CRC, Cyclic Redundancy Check) — это один из ключевых методов обеспечения целостности данных при передаче и хранении.
            </div>
          </section>
          <section>
              <h3>Где применяется? (CRC)</h3>
              <div className="r-stack">
                <img className="fragment fade-in-then-out" src={EthernetMsg} width="90%" />
                <img className="fragment fade-in-then-out" src={CRC_use1} width="90%" />
                <img className="fragment fade-in-then-out" src={CRC_use2} width="90%" />
                <img className="fragment fade-in-then-out" src={CRC_use3} width="80%" />
                <img className="fragment" src={CRC_use4} width="90%" />
              </div>
          </section>
          <section>
            <div>
              <h3> Что такое циклический код?</h3>
            </div>
            <div>
              <img src={CycleCode} width="15%" />
            </div>
            <div className='small-text'>
              Все строки матрицы могут быть получены циклическим сдвигом одной строки, которая называется образующей или производящей.
            </div>  
          </section>
          <section>
            <h3>Порождающий полином</h3>
            <div className='r-stack'>
              <div className='fragment fade-out'>Любая разрешенная кодовая комбинация циклического кода может быть образована в результате умножения образующего полинома на некоторый другой полином. Т.е., при соответствующем выборе образующего полинома, любой многочлен циклического кода (или нашем случае кодовое слово) будет делиться на него без остатка</div>
              <div className ='fragment' >
                <img src={PolynomialGenerator} width="100%" />
              </div>
            </div>
          </section>
          <section>
            <h3>Собственно, а зачем нам это нужно?</h3>
              <div>
                <img src={CrcQuestion} width="40%" />
              </div>
              <div className='fragment'>
                Цель кодировщика CRC - превратить сообщение в кодовое слово циклического кода
              </div>
          </section>
          <section>
            <h3> Как мы это делаем? </h3>
            <div className='r-stack'>
              <div className='fragment fade-in-then-out'>
                <img src={CrcProcess} width="65%" />
              </div>
              <div className='fragment fade-in-then-out'>
                <p> Полиномиальная арифметика или двоичная арифметика без учёта переносов</p>
                <img src={XOR} width="65%" />
              </div>
              <div className='fragment'>
                <img src={CrcProcess} width="65%" />
              </div>
            </div>
            <div className='fragment small-text'>
                Закодированное сообщение - 11010110111110 
              </div>
          </section>
        </section>
        <section>
          <section>           
            <h3> Код Хэмминга </h3>
            <div>
              Коды, в которых возможно автоматическое исправление ошибок, называются самокорректирующимися. 
            </div>
          </section>
          <section>
          <h3> Параметры кода Хэмминга </h3>
          <div>
              Классический код Хэмминга имеет параметры (n, k), где:
              <ul>
                <li> n = 2r − 1 — длина кодового слова; </li>
                <li> k = n − r — число информационных битов; </li>
                <li> r — число проверочных битов. </li>
              </ul> 
          </div>
          </section>
          <section>
            <h3> Где используется?</h3>
              <ul>
                <li> В некоторых прикладных программах в области хранения данных;</li>
                <li> При построении дисковых массивов RAID 2;</li>
                <li> В памяти типа ECC и позволяет «на лету» исправлять однократные и обнаруживать двукратные ошибки.</li>
              </ul>
          </section>
          <section>
            <h2> Предупреждение! </h2>
            <div>
              Далее будет представлено описание работы кодов Хэмминга, но почему так происходит в рамках данного доклада мы рассматривать не будем. В целом аудитория вполне может считать это магией! 
            </div>
            <div>
              <img src={Magic} width="30%" />
            </div>
          </section>
          <section>
            <h3> Контрольные биты </h3>
            <ol>
              <li> Контрольные биты a<sub>i</sub> размещаются на позициях, соответствующих степеням двойки</li>
              <li> Каждый контрольный бит a<sub>i</sub> отвечает за проверку чётности совокупности битов, номера позиций которых в двоичном представлении содержат единицу в i–м разряде</li>
            </ol>
          </section>
          <section>
            <div>
              А вот так выглядит вычисление контрольных битов:
            </div>
            <div>
              <img src={ControlBits} width="50%" />
            </div>
          </section>
          <section>
            <h3> Декодер </h3>
            <div>
              Правило построение контрольной суммы:
              <ul>
                <li> S1 - все нечетные разряды;</li>
                <li> S2 - начиная со второго разряда по два разряда подряд через два разряда;</li>
                <li> S3 - начиная с 4го разряда по 4 разряда через 4;</li>
                <li> S4 - начиная с 8го разряда по 8 разрядов через 8 разрядов</li>
              </ul>
            </div>
          </section>
          <section>
            <h3> Декодер </h3>
            <div>
              <img src={HammingCheck} width="50%" />
            </div>
          </section>
          <section>
            <h3>
              Пример кодирования
            </h3>
            <p> Предположим, необходимо закодировать сообщение: "010110100111"</p>
            <div className='r-stack'>
              <div className='fragment fade-in-then-out'>
                Определим число контрольных разрядов:
                <img src={HammingEx0} width="50%" />
              </div>
              <div className='fragment fade-in-then-out'>
                Установим контрольные разряды:
                <img src={HammingEx1} width="50%" />
              </div>
              <div className='fragment fade-in-then-out'>
                Определим значения разрядов:
                <img src={HammingEx21} width="50%" />
              </div>
              <div className='fragment fade-in-then-out'>
                Полученное сообщение:
                <img src={HammingEx2} width="90%" />
              </div>
            </div>
          </section>
          <section>
            <h3>Пример декодирования</h3>
            <div className='small-text'>
                Предположим, что при передаче данного сообщения произошло искажение в каком-либо информационном разряде, например, в третьем
                <img src={HammingEx3} width="40%" />
            </div>
            <div className='r-stack'>
              <div className='fragment fade-in-then-out'>
                Найдем контрольные суммы:
                <img src={HammingEx31} width="50%" />
              </div>
              <div className='fragment'>
              Полученный код S4S3S2S1 = `0011, следовательно искажение произошло в третьем разряде.
              </div>
            </div>
          </section>
        </section>
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
