/**
 * Бесконечная циклическая анимация групп в SVG
 * @param {string[]} ids — массив id элементов <g>
 * @param {number} interval — задержка в мс между переключениями
 */
function animatePins(ids, interval = 4000) {
	const elements = ids.map(id => document.getElementById(id));

	if (elements.length === 0) return;

	// Скрываем все, кроме первого
	elements.forEach((el, i) => {
		el.style.transition = "opacity 0.5s ease";
		el.style.opacity = i === 0 ? "1" : "0";
		el.style.display = i === 0 ? "inline" : "none";
	});

	let index = 0;

	setInterval(() => {
		const current = elements[index];
		const nextIndex = (index + 1) % elements.length;
		const next = elements[nextIndex];

		// Скрываем текущий
		current.style.opacity = "0";
		setTimeout(() => {
			current.style.display = "none";
			next.style.display = "inline";
			// Показываем следующий
			requestAnimationFrame(() => {
				next.style.opacity = "1";
			});
		}, 500); // должно совпадать с transition-duration

		index = nextIndex;
	}, interval);
}

export { animatePins };