import { useRef, useEffect } from 'react';
import Reveal from 'reveal.js';
import RevealNotes from 'reveal.js/plugin/notes/notes.esm';
import RevealMath from 'reveal.js/plugin/math/math';

// generateRef generates react ref to be binded to presentation
export const generateRef = () => {
	const deckDivRef = useRef<HTMLDivElement>(null);
	const deckRef = useRef<Reveal.Api | null>(null);

	useEffect(() => {
		// Prevents double init in strict
		if (deckRef.current) return;

		deckRef.current = new Reveal(deckDivRef.current!, {
			plugins: [RevealNotes, RevealMath.KaTeX],
			transition: 'slide',
			katex: { local: 'node_modules/katex' },
		});

		deckRef.current.initialize();

		return () => {
			try {
				if (deckRef.current) {
					deckRef.current.destroy();
					deckRef.current = null;
				}
			} catch (e) {
				console.warn("Reveal.js destroy call failed.");
			}
		};
	}, []);
	return deckDivRef;
}

