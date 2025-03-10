import "@/scss/reveal.scss";
import "@/scss/themes/black.scss";
import { generateRef } from "../../modules/reveal";

function LogisticRegressionPresentation() {
	const deckDivRef = generateRef();

	return (
		<div className="reveal" ref={deckDivRef}>
			<div className="slides">
				<section>Slide 1</section>
				<section>
					<section>
						<h2>The Lorenz Equations</h2>
						{String.raw`\[\begin{aligned} \dot{x} &= \sigma(y-x) \\ \dot{y} &= \rho x - y -xz \\ \dot{z} &= -\beta z + xy \end{aligned} \]`}
					</section>
					<section>The floor is here</section>
				</section>
				<section>Slide 3</section>
			</div>
		</div>
	)
}

export default LogisticRegressionPresentation;
