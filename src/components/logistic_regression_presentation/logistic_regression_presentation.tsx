import '@/scss/reveal.scss';
import '@/scss/themes/white.scss';
import { generateRef } from '../../modules/reveal';
import './logistic_regression_presentation.scss';
import SigmoidGraph from './sigmoid.jpg';
import FadeAwayGif from './fade_away.gif';
import ThumbUp from './thumb_up.jpg';

function LogisticRegressionPresentation() {
  const deckDivRef = generateRef();

  return (
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">
        <section>
          <h2> Логистическая регрессия</h2>
          <h4> (и немного о задачах классификации)</h4>
          <div className="right-side-text">
            <p>И.М. Андриянов</p>
            <p>СМ7-43М</p>
          </div>
          <span className="bottom-text">{new Date(Date.now()).toLocaleDateString('ru-RU')}</span>
        </section>
        <section>
          <div>План</div>
          <ol>
            <li>Постановка задачи классификации</li>
            <li>Что такое классификатор?</li>
            <li>Функция потерь задачи классификации</li>
            <li>Логистическая регрессия</li>
            <li>Многомерное обобщение регресии</li>
          </ol>
        </section>
        <section>
          <section>
            <span className="left-side-text">Пусть имеем</span>
            <div>
              <ul>
                <li>{String.raw`$X$`} - множество объектов (признаков)</li>
                <li>{String.raw`$Y$`} - множество ответов</li>
                <li>{String.raw`$y: X \rightarrow Y$`} - истинная зависимость</li>
              </ul>
            </div>
            <p className="left-side-text">
              <span>{String.raw`$Y = \{0, 1, 2, \dots , n\}$ - задача классификации`}</span>
              <span>{String.raw`$Y = \mathbb{R^n}$ - задача регрессии`}</span>
            </p>
          </section>
          <section>
            <span className="left-side-text">Признаки бывают</span>
            <div>
              <ul>
                <li>Числовые ({String.raw`$x \in \mathbb{R}$`})</li>
                <li>Категориальные ({String.raw`$x \in \{\text{серый}, \text{красный} \}$`})</li>
                <li>Порядковые (категориальные, но при этом упорядоченные)</li>
              </ul>
            </div>
          </section>
        </section>
        <section>
          <div>
            Будем искать решение задачи классификации в виде вероятностной модели
            <p>{String.raw` $$y = f(x) = P(y | x)$$`}</p>
          </div>
          <div>
            Тогда "хорошей" функцией потерь будет функция правдоподобия
            <p>{String.raw`$$F(X, Y, f) = \prod_{i=1}^N P(y = y_i | x_i) $$`}</p>
          </div>
        </section>
        <section>
          <section>
            <h4>Логистическая регрессия</h4>
            <div>{String.raw`$$y = \sigma (wx) = \sigma \left( \sum_{j=1}^K w_j x_j \right)$$`}</div>
            <div>
              {String.raw`$\sigma = \frac{1}{1 + e^{-x}}$`} - сигмоида
              <img src={SigmoidGraph} />
            </div>
          </section>
          <section>
            <div>
              {String.raw`$$
                            \begin{aligned}
(3.00,\ 3.00,\ 3.00) &\xrightarrow{\sigma} (0.95,\ 0.95,\ 0.95) \\
(p_1, p_2, p_3) &= (0.95, 0.95, 0.95)\\
p_1 + p_2 + p_3 &= 2.85 > 1
                            \end{aligned}$$`}
            </div>
            <img className="fragment" src={FadeAwayGif} />
          </section>
          <section>
            <div className="r-fit-text">
              {String.raw`
$$Logit(w, x) = wx =
\begin{pmatrix}
w^1 x\\
w^2 x\\
\dots \\
w^m x
\end{pmatrix} = 
\begin{pmatrix}
\sum_{i=1}^n w_i^1x_i \\
\sum_{i=2}^n w_i^2x_i \\
\dots \\
\sum_{i=m}^n w_i^mx_i \\
\end{pmatrix}
$$`}
            </div>
            <div className="r-fit-text">
              {String.raw`$$
Softmax(\alpha) = \begin{pmatrix}&\frac{e^{\alpha_1}}{\sum_{i=1}^m e^{\alpha_i}},
&\frac{e^{\alpha_2}}{\sum_{i=1}^m e^{\alpha_i}},
&\dots,
&\frac{e^{\alpha_m}}{\sum_{i=1}^m e^{\alpha_i}}
\end{pmatrix}
                            $$`}
            </div>
            <div>{String.raw`$$LogReg = Softmax(Logits(x))$$`}</div>
          </section>
          <section>
            <img className="stretch" src={ThumbUp} />
          </section>
        </section>
      </div>
    </div>
  );
}

export default LogisticRegressionPresentation;
