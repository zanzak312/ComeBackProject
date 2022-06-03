// * Scroll to top button start

mybutton = document.getElementById("upbutton");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// * Scroll to top button end

// ! Slider start

const prev = document.getElementById('prev'),
		next = document.getElementById('next'),
		slides = document.querySelectorAll('.bio__row'),
		dots = document.querySelectorAll('.slider__option');

let index = 0;

const activeSlide = n => {
	for(let slide of slides) {
		slide.classList.remove('active');
	}
	slides[n].classList.add('active');
}

const activeDot = n => {
	for(let dot of dots) {
		dot.classList.remove('active');
	}
	dots[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
	activeSlide(ind);
	activeDot(ind);
}

const nextSlide = () => {
	if(index == slides.length - 1) {
		index = 0;
		prepareCurrentSlide(index);
	} else {
		index++;
		prepareCurrentSlide(index);
	}
}

const prevSlide = () => {
	if(index == 0) {
		index = slides.length - 1;
		prepareCurrentSlide(index);
	} else {
		index--;
		prepareCurrentSlide(index);
	}
}

dots.forEach((item, indexDot) => {
	item.addEventListener('click', () => {
		index = indexDot;
		prepareCurrentSlide(index);
	})
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

setInterval(nextSlide, 3000);

// ! Slider end