$(document).ready(function() {
	var imgSwiper = new Swiper('#img-swiper', {
		spaceBetween: 10,
		effect: 'fade',
		autoplay: {
			delay: 3500
		},
		loop: true,
		loopedSlides: 5,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	var tabSwiper = new Swiper('#tab-swiper', {
		slidesPerView: 3,
		touchRatio: 0.2,
		loop: true,
		loopedSlides: 5,
		slideToClickedSlide: true,
		autoplay: 2000,
		direction: 'vertical',
		centeredSlides: true
	});
	if (imgSwiper && imgSwiper.controller && tabSwiper && tabSwiper.controller) {
		imgSwiper.controller.control = tabSwiper;
		tabSwiper.controller.control = imgSwiper;
	}
});
