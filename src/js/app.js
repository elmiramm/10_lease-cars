import * as flsFunctions from "./modules/functions.js";
import Swiper, { Navigation, Pagination, Parallax } from 'swiper';
import mixitup from 'mixitup';

flsFunctions.isWebp();

//--------MixitUp---------
// if (document.querySelector(".gallery__inner")) {
// 	var mixer = mixitup('.gallery__inner', {
// 		load: {
// 			filter: '.living',
// 		}
// 	});
// }
//--------MixitUp-End--------


// ------Swiper-------
Swiper.use([Navigation, Pagination, Parallax]);

if (document.querySelector('.slider-contact__body')) {
	new Swiper('.slider-contact__body', {
		observer: true,
		observeParents: true,
		slidesPerView: 10,
		slidesPerGroup: 4, //если нужно чтобы кол-во dots было меньше кол-ва slides
		spaceBetween: 18,
		watchOverflow: false,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImage: false,
		// parallax: true,
		pagination: {
			el: '.slider-contact__controls .dots',
			clickable: true,
			dynamicBullets: true,
		},
		// navigation: {
		// 	nextEl: '.slider-section .slider-arrow--next',
		// 	prevEl: '.slider-section .slider-arrow--prev',
		// },
		breakpoints: {
			0: {
				slidesPerView: 1.5,
				spaceBetween: 0,
			},
			450: {
				slidesPerView: 2.5,
				spaceBetween: 0,
			},
			768: {
				slidesPerView: 3.5,
				spaceBetween: 0,
			},
			992: {
				slidesPerView: 5,
				spaceBetween: 15,
			},
			1200: {
				slidesPerView: 6
			},
			1750: {
				slidesPerView: 8
			},
		}
	});
}

// ------Swiper-End-------

window.onload = function () {
	document.addEventListener('click', documentActions);

	//-------Active links on Page--------
	// const page = document.querySelector('.page');
	// if (page.classList.contains("about")) {
	// 	const about = document.querySelectorAll('.menu__list-link').forEach(elem => {
	// 		if (elem.textContent === "About") {
	// 			elem.classList.add('active-header-link');
	// 		}
	// 	})
	// }
	// if (page.classList.contains("gallery")) {
	// 	const gallery = document.querySelectorAll('.menu__list-link').forEach(elem => {
	// 		if (elem.textContent === "Gallery") {
	// 			elem.classList.add('active-header-link');
	// 		}
	// 	})
	// }
	// if (page.classList.contains("contact")) {
	// 	const contact = document.querySelectorAll('.menu__list-link').forEach(elem => {
	// 		if (elem.textContent === "Contact") {
	// 			elem.classList.add('active-header-link');
	// 		}
	// 	})
	// }
	// if (page.classList.contains("blog-page")) {
	// 	const contact = document.querySelectorAll('.menu__list-link').forEach(elem => {
	// 		if (elem.textContent === "Blog") {
	// 			elem.classList.add('active-header-link');
	// 		}
	// 	})
	// }
	//-------Active links on Page-End-------



	//------Действия-при-кликах------
	function documentActions(e) {
		const targetElement = e.target;

		//------------Close/Open-rightsite-menu-------------
		// if (targetElement.classList.contains('header__btn') || targetElement.closest('.header__btn')) {
		// 	document.querySelector(".rightsite-menu").classList.remove('rightsite-menu--close');
		// }
		// if (targetElement.classList.contains('rightsite-menu__close') || targetElement.closest('.rightsite-menu__close')) {
		// 	document.querySelector(".rightsite-menu").classList.add('rightsite-menu--close');
		// }
		//------------Close/Open-rightsite-menu-End------------

		// ---------Если кликнули на бургер---------
		if (targetElement.classList.contains('burger') || targetElement.closest('.burger')) {

			const elem = targetElement.classList.contains('burger') ? targetElement : targetElement.closest('.burger');
			elem.classList.toggle('active-burger');

			const menuBody = document.querySelectorAll('.menu');
			menuBody.forEach(item => {
				item.classList.toggle('menu--open');
			})
		}
		// -------Если кликнули на бургер-End----------
	}
	//------Действия-при-кликах-End-----

}