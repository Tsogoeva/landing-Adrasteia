
(function () {
	const svg = document.getElementById("hero-wave");
	const spacing = 40;
	const width = 1400;
	const height = 1080;
	const cols = Math.round(width / spacing);
	const rows = Math.round(height / spacing);
	const startX = -width / 2;
	const startY = -height / 2;

	// группа, повернутая на -30°
	const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
	g.setAttribute("transform", "translate(800,700) rotate(-43)");
	svg.appendChild(g);

	for (let r = 0; r < rows; r++) {
		const y = startY + r * spacing;
		for (let c = 0; c < cols; c++) {
			const x = startX + c * spacing;
			const delay = (c / cols) * 2; // волна слева направо

			const e = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
			e.setAttribute("cx", x);
			e.setAttribute("cy", y);
			e.setAttribute("rx", 1.42);
			e.setAttribute("ry", 1.42);
			e.setAttribute("fill", "rgba(20, 34, 81, 0.44)");

			// создаём SVG-анимацию, которая двигает cy
			const anim = document.createElementNS("http://www.w3.org/2000/svg", "animate");
			anim.setAttribute("attributeName", "cy");
			anim.setAttribute("values", `${y};${y - 40};${y}`);
			anim.setAttribute("dur", "2s");
			anim.setAttribute("repeatCount", "indefinite");
			anim.setAttribute("begin", `${delay}s`);

			e.appendChild(anim);
			g.appendChild(e);
		}
	}
})();
