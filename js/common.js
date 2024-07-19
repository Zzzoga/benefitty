// Doc done scripts
document.addEventListener('DOMContentLoaded', () => {

	// play video
	if (document.querySelector('span.play__btn') != null) {
		document.querySelectorAll('span.play__btn').forEach(btn => {
			btn.addEventListener('click', e => {
				e.target.closest('.video__wrapper').querySelector('video').controls = 'true'
				e.target.closest('.video__wrapper').querySelector('video').play()
				e.target.closest('.video__wrapper').querySelector('span.play__btn').remove()
			})
		})
	}

	// FIXED HEADER ON SCROLL
	// document.addEventListener('scroll', e => {
	// 	if (this.pageYOffset > 10) {
	// 		document.querySelector('header').classList.add('fixed')
	// 		document.querySelector('a.logo img').src = '../img/logo_color.svg'
	// 	} else {
	// 		document.querySelector('header').classList.remove('fixed')
	// 		document.querySelector('a.logo img').src = '../img/logo.svg'
	// 	}
	// })

	// Modal nav open/hidden
	document.querySelector('.burger').addEventListener('click', e => {
		e.preventDefault()
		if (!e.target.closest('.burger').classList.contains('active')) {
			e.target.closest('.burger').classList.add('active')
			document.querySelector('.modal__nav').classList.add('active')
			document.querySelector('body').classList.add('hidden')
		} else {
			e.target.closest('.burger').classList.remove('active')
			document.querySelector('.modal__nav').classList.remove('active')
			document.querySelector('body').classList.remove('hidden')
		}
	})

	// Modal nav link action events
	document.querySelectorAll('a.modal__nav__link').forEach(link => {
		link.addEventListener('click', e => {
			document.querySelector('.burger').classList.remove('active')
			document.querySelector('.modal__nav').classList.remove('active')
			document.querySelector('body').classList.remove('hidden')
		})
	})
	
	// Smooth scroll when link clicked
	const $page = $('html, body');
	$('a[href*="#"]').click(function() {
		$page.animate({
			scrollTop: $($.attr(this, 'href')).offset().top - 100
		}, 800);
		return false;
	});

	// Phone mask
	function maskPhone(selector, masked = '+7 (___) ___-__-__') {
		const elems = document.querySelectorAll(selector);
	
		function mask(event) {
			const keyCode = event.keyCode;
			const template = masked,
				def = template.replace(/\D/g, ""),
				val = this.value.replace(/\D/g, "");
			console.log(template);
			let i = 0,
				newValue = template.replace(/[_\d]/g, function (a) {
					return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
				});
			i = newValue.indexOf("_");
			if (i !== -1) {
				newValue = newValue.slice(0, i);
			}
			let reg = template.substr(0, this.value.length).replace(/_+/g,
				function (a) {
					return "\\d{1," + a.length + "}";
				}).replace(/[+()]/g, "\\$&");
			reg = new RegExp("^" + reg + "$");
			if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
				this.value = newValue;
			}
			if (event.type === "blur" && this.value.length < 5) {
				this.value = "";
			}
	
		}
	
		for (const elem of elems) {
			elem.addEventListener("input", mask);
			elem.addEventListener("focus", mask);
			elem.addEventListener("blur", mask);
		}
		
	}
		
	maskPhone('input[type="tel"]')

	// BENEFITS ITEMS 
	if (document.querySelector('.benefits__item') != null) {
		const benefitsItems = document.querySelectorAll('.benefits__item')
		const benefitsImgs = document.querySelectorAll('.benefits__device img')

		benefitsItems.forEach(item => {
			item.addEventListener('click', e => {
				const itemNum = e.target.closest('.benefits__item').dataset.num
				if (!e.target.closest('.benefits__item').classList.contains('active')) {
					benefitsItems.forEach(item => item.classList.remove('active'))
				}
				benefitsImgs.forEach(img => img.classList.remove('active'))
				benefitsImgs.forEach(img => {
					if (img.dataset.num == itemNum) {
						img.classList.add('active')
					}
				})
				e.target.closest('.benefits__item').classList.add('active')
			})
		})
	}

	// PROFIT CALCULATOR
	if (document.querySelector('.direction') != null) {

		const calculatorDirection = document.querySelectorAll('.direction')
		const calculatorInputsItems = document.querySelectorAll('p.direction__item')
		const calculatorCategory = document.querySelector('.direction.category')
		
		let direction = ''
		let profit = ''
		
		calculatorDirection.forEach(input => {
			input.addEventListener('click', e => {
				e.preventDefault()

				if (!e.target.closest('.direction').classList.contains('active')) {
					e.target.closest('.direction').classList.add('active')
					e.target.closest('.direction').querySelector('.direction__list').classList.add('active')
				} else {
					e.target.closest('.direction').classList.remove('active')
					e.target.closest('.direction').querySelector('.direction__list').classList.remove('active')
				}
			})
		})
		
		calculatorInputsItems.forEach(item => {
			item.addEventListener('click', e => {
				e.preventDefault()

				e.target.closest('.direction').querySelector('span.direction__name').innerHTML = e.target.innerHTML
				e.target.closest('.direction').querySelector('span.direction__name').classList.add('active')
				direction = e.target.innerHTML

				if (e.target.closest('.direction.base')) {
					if (direction == 'Розничная торговля') {
						calculatorCategory.classList.remove('disabled')
					} else {
						calculatorCategory.classList.add('disabled')
					}
				} 

				setTimeout(() => {
					e.target.closest('.direction').classList.remove('active')
					e.target.closest('.direction').querySelector('.direction__list').classList.remove('active')
				}, 0)
			})
		})

		let amount = document.getElementById('marzha');
		amount.addEventListener('input', function(){
			const n = amount.value.replace('%','');
			if ( n >= 0 && n <= 100 ) {
				amount.value = amount.value.replace('%','')     
			} else {
				amount.value = n.slice(0, -1) 
			}
		})
	
	}

	// TOP SCREEN PROGRESSBAR SLIDER
	const items = document.querySelectorAll('span.progress__check')
	const imgItems = document.querySelectorAll('.mobile__device__item')
	const progressBar = document.querySelector('.progress__bar')
	const fullTime = items.length == 3 ? 16000 : 21000

	function progressBarAnimation() {
		const progressTime = items.length == 3 ? 15000 : 20000

		setTimeout(() => {
			progressBar.classList.add('active')
		}, 0)
		setTimeout(() => {
			items[1].classList.add('active')
			imgItems[0].classList.remove('active')
			imgItems[1].classList.add('active')
			topSlider.slideTo(1)
		}, 5000)
		setTimeout(() => {
			items[2].classList.add('active')
			imgItems[1].classList.remove('active')
			imgItems[2].classList.add('active')
			topSlider.slideTo(2)
		}, 10000)
		if (items.length > 3) {
			setTimeout(() => {
				items[3].classList.add('active')
				imgItems[2].classList.remove('active')
				imgItems[3].classList.add('active')
				topSlider.slideTo(3)
			}, 15000)
		}
		setTimeout(() => {
			topSlider.slideTo(0)
			progressBar.classList.remove('active')
			items.forEach(item => item.classList.remove('active'))
			imgItems.forEach(item => item.classList.remove('active'))
			items[0].classList.add('active')
			imgItems[0].classList.add('active')
		}, progressTime)
	}

	progressBarAnimation()
	let progressTimer = setInterval(() => progressBarAnimation(), fullTime);

})


