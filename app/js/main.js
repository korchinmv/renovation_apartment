//BURGER MENU
const buttonMenu = document.querySelector('.burger');
const menuActive = document.querySelector('.menu');

buttonMenu.onclick = function () {
	menuActive.classList.toggle('menu--active');
	buttonMenu.classList.toggle('burger--active');
};

//HEADER FIXED
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	if (scrollDistance >= 1) {
		header.classList.add('header--fixed');
	} else {
		header.classList.remove('header--fixed');
	}
});

//RANGE-SLIDER
const rangeSlider = document.getElementById('range-slider');
const input = document.getElementById('input1');


if (rangeSlider) {
	noUiSlider.create(rangeSlider, {
		start: 20,
		step: 1,
		connect: 'lower',
		range: {
			'min': [20],
			'max': [200]
		}
	});
};

rangeSlider.noUiSlider.on('update', function (values, handle) {
	const value = values[handle];
	input.value = Math.round(value);
});

input.addEventListener('change', function () {
	rangeSlider.noUiSlider.set([this.value]);
});

//SWIPER - SLIDER
const slider = document.querySelector('.swiper');

let ourWorks = new Swiper(slider, {
	slidesPerView: '1',

	navigation: {
		nextEl: '.our-works__next',
		prevEl: '.our-works__prev',
	},

	pagination: {
		el: '.our-works__pagination',
		type: 'bullets',
		clickable: true,
	}
});






