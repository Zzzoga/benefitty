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
	const itemOne = document.querySelector('span.progress__check.item__1')
	const itemTwo = document.querySelector('span.progress__check.item__2')
	const itemThree = document.querySelector('span.progress__check.item__3')
	const progressBar = document.querySelector('.progress__bar')

	function progressBarAnimation() {
		setTimeout(() => {
			progressBar.classList.add('active')
			itemOne.classList.add('active')
		}, 0)
		setTimeout(() => {
			itemTwo.classList.add('active')
			topSlider.slideTo(1)
		}, 5000)
		setTimeout(() => {
			itemThree.classList.add('active')
			topSlider.slideTo(2)
		}, 10000)
		setTimeout(() => {
			topSlider.slideTo(0)
			progressBar.classList.remove('active')
			itemOne.classList.remove('active')
			itemTwo.classList.remove('active')
			itemThree.classList.remove('active')
		}, 15000)
	}

	progressBarAnimation()
	let progressTimer = setInterval(() => progressBarAnimation(), 15000);
})


