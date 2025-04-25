import '@/scss/reveal.scss';
import '@/scss/themes/white.scss'
import { useReveal } from '../../modules/reveal';

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
			</div>
		</div>
	)
}

export default EdacPresentation;
