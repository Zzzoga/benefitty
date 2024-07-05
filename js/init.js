var topSlider = new Swiper(".slider__content.swiper", {
	slidesPerView: 1,
	spaceBetween: 0,
	loop: true,
	effect: 'fade',
	// autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },
});

var reviewsSlider = new Swiper(".reviews__slider.swiper", {
	slidesPerView: 1,
	spaceBetween: 10,
	loop: true,
	// navigation: {
	// 	nextEl: ".suggestion__control .arrow.next",
	// 	prevEl: ".suggestion__control .arrow.prev",
	// },
	pagination: {
        el: ".reviews__slider__dots",
		clickable: true,
    },
	breakpoints: {
        992: {
		  	slidesPerView: 2,
          	spaceBetween: 13,
        },
        1180: {
		  	slidesPerView: 2,
          	spaceBetween: 16,
        },
		1600: {
			slidesPerView: 3,
			spaceBetween: 36,
		},
    },
});

var advantagesSlider = new Swiper(".advantages__items.swiper", {
	slidesPerView: 1,
	spaceBetween: 10,
	loop: true,
	pagination: {
        el: ".advantages__slider__dots",
		clickable: true,
    },
	breakpoints: {
        992: {
		  	slidesPerView: 2,
          	spaceBetween: 13,
        },
        1180: {
		  	slidesPerView: 2,
          	spaceBetween: 16,
        },
		1600: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
    },
});

var mediaSlider = new Swiper(".media__items.swiper", {
	slidesPerView: 1,
	spaceBetween: 10,
	loop: true,
	pagination: {
        el: ".media__items__dots",
		clickable: true,
    },
	breakpoints: {
        992: {
		  	slidesPerView: 2,
          	spaceBetween: 13,
        },
        1180: {
		  	slidesPerView: 2,
          	spaceBetween: 16,
        },
		1600: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
    },
});
