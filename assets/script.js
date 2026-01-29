let currentSlide = 0;

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const dotsContainer = document.querySelector('.dots')
const arrowLeft = document.querySelector('.arrow_left');// cherhche le premier element qui a la classe arrow_left
const arrowRight = document.querySelector('.arrow_right');

function updateSlider() {
	const bannerImage = document.querySelector('.banner-img');
	const bannerTagLine = document.querySelector('.banner-tagline');

	if(currentSlide >= slides.length) {
		currentSlide = 0;
	}
	if (currentSlide < 0) {
		currentSlide = slides.length - 1;
	  }

	const newSlide = slides[currentSlide]

	if (bannerImage) {
		bannerImage.src = "./assets/images/slideshow/" +newSlide.image;
	}
	if (bannerTagLine) {
		bannerTagLine.innerHTML = newSlide.tagLine;
	}

	if (dotsContainer) {
		const dots = dotsContainer.querySelectorAll('.dot');

		dots.forEach((dot) => {
			dot.classList.remove('dot_selected');
		});

		const currentDot = dots[currentSlide]
		if (currentDot) {
			currentDot.classList.add('dot_selected');
		}
	}
}

// event listener pour les fleches cest une fonction qui attend un evenement ( la on attend le clic )

arrowRight.addEventListener('click', () => {
	currentSlide = currentSlide + 1;
	updateSlider();
  });
  
  arrowLeft.addEventListener('click', () => {
	currentSlide = currentSlide - 1;
	updateSlider();
  });

function createDots(){
for (let i = 0; i < slides.length; i++) {

  const dot = document.createElement('div')

  dot.classList.add('dot')

  if (i === 0) {
    dot.classList.add('dot_selected')
  }

  dotsContainer.appendChild(dot)
}
}
createDots()
updateSlider()