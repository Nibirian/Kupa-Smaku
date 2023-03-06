const footerYear = document.querySelector(".footer__year");

const cookieBox = document.querySelector(".cookie-box");
const cookieBtn = document.querySelector(".cookie-btn");

const navMobile = document.querySelector(".nav-mobile");
const navBtn = document.querySelector(".hamburger");
const allNavItems = document.querySelectorAll(".menu-item");

const sliderBox = document.querySelector(".slider-box");
const leftBtn = document.querySelector(".btn-slider-left");
const rightBtn = document.querySelector(".btn-slider-right");
const carouselImages = document.querySelectorAll(".slider-img");

let box=document.querySelector('.slider');
const carouselWidth = box.offsetWidth;
const carouselSpeed = 4000;

const handleNav= () => {
    navMobile.classList.toggle("nav-mobile--active")
    
    navBtn.classList.toggle("is-active")

allNavItems.forEach(item =>{
    item.addEventListener("click",()=>{
        navBtn.classList.remove("is-active")
        
    })
})
allNavItems.forEach(item =>{
    item.addEventListener("click",()=>{
        navMobile.classList.remove("nav-mobile--active")
    })
    })
}

navBtn.addEventListener("click", handleNav)

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();

const showCookie = () => {
	const cookieEaten = localStorage.getItem("cookie");
	if (cookieEaten) {
		cookieBox.classList.add("hide");
	}
};

const handleCookieBox = () => {
	localStorage.setItem("cookie", "true");
	cookieBox.classList.add("hide");
};

cookieBtn.addEventListener("click", handleCookieBox);
showCookie();

let index = 0;

const handleCarousel = () => {
	index++;
	changeImage();
};

let startCarousel = setInterval(handleCarousel, carouselSpeed);

const changeImage = () => {
	if (index > carouselImages.length - 1) {
		index = 0;
	} else if (index < 0) {
		index = carouselImages.length - 1;
	}

	sliderBox.style.transform = `translateX(${-index * carouselWidth}px)`;
};

const handleRightArrow = () => {
	index++;
	resetInterval();
};

const handleLeftArrow = () => {
	index--;
	resetInterval();
};

const resetInterval = () => {
	changeImage();
	clearInterval(startCarousel);
	startCarousel = setInterval(handleCarousel, carouselSpeed);
};

rightBtn.addEventListener("click", handleRightArrow);

leftBtn.addEventListener("click", handleLeftArrow);


