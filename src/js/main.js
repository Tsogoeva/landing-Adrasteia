import '../scss/style.scss';
import { animatePoints } from './hero-bg.js';
import { animatePins } from './pins.js';

document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
    animatePoints();
    animatePins(["pin1", "pin2", "pin3", "pin4"], 1000);
});
