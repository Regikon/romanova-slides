import { generateRef } from "../../modules/reveal";
import ROS2Config from './ros2_config.jpg'
import IdaPro from './ida_pro.jpg'
import IdaPython from './ida_python.jpg'
import SmallPython from './small_python.jpg'
import Django from './django.jpg'
import Pytorch from './pytorch.png'
import GarbageCollector from './garbage_collector.png'

function PythonPres() {
	const deckDivRef = generateRef();

	return (
		<div className="reveal" ref={deckDivRef}>
			<div className="slides">
				<section>
					<h2> Основы Python </h2>
					<div className="right-side-text">
						<p>И.М. Андриянов</p>
						<p>Группа: СМ7-43М</p>
					</div>
					<span className="bottom-text">
						{new Date(Date.now()).toLocaleDateString("ru-RU")}
					</span>
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
							>
							</iframe>
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
			</div>
		</div >
	)
}

export default PythonPres
