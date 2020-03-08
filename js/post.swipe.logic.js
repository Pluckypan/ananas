$(document).ready(function() {
	$.fancybox.defaults.hash = false;
	var imgdefereds = [];
	$('.swiper-slide img').each(function() {
		var dfd = $.Deferred();
		$(this).bind('load', function() {
			dfd.resolve();
		});
		if (this.complete) {
			dfd.resolve();
		}
		imgdefereds.push(dfd);
	});
	$.when.apply(null, imgdefereds).done(function() {
		var swiper = new Swiper('.swiper-container', {
			slidesPerView: 'auto',
			height: 300,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			on: {
				slideNextTransitionEnd: function() {
					if (swiper.progress == 1) {
						swiper.activeIndex = swiper.slides.length - 1;
					}
				}
			}
		});
		var mLazy = new Mlazy({
			selector: 'img,.mlazy'
		});
	});
});