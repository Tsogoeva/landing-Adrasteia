import '@splidejs/splide/dist/css/splide-core.min.css';
import Splide from '@splidejs/splide';

const configSplideServices = {
	type: 'slide',
	perPage: 4,
	perMove: 1,
	focus: 'center',
	gap: '0.625rem',
	arrows: true,
	easing: 'ease',
	drag: 'free',
	direction: 'ltr',
	wheel: true,
	waitForTransition: true,
	wheelMinThreshold: 40,
	wheelSleep: 200,
	classes: {
		prev: 'splide__arrow--prev services-prev',
		next: 'splide__arrow--next services-next',
	},

};

const splideServices = new Splide('.splide', configSplideServices);

function initSplide() {
	splideServices.mount();

	let lastTimeServices = 0;
	splideServices.root.addEventListener('wheel', (e) => {
		if (!e.cancelable) return;
		const now = e.timeStamp;
		const { deltaX } = e;
		if (Math.abs(deltaX) > 40 && now - lastTimeServices > 200) {
			if (deltaX > 0) splideServices.go('>');
			else splideServices.go('<');
			lastTimeServices = now;
			e.preventDefault();
		}
	});

}

export { initSplide };
