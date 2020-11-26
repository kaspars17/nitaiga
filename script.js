const translate = document.querySelectorAll(".translate");
const bigTitle = document.querySelector(".big-title");
const cottages = document.getElementById("cottages");
// const scrollTotal = document.inner
// let bounding = cottages.getBoundingClientRect();
// console.log(bounding);

// function isInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     if (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }

// function isAnyPartOfElementInViewport(el) {

//     const rect = el.getBoundingClientRect();

//     const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
//     const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
//     const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
//     const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

//     return (vertInView && horInView);
// }

window.addEventListener('scroll', () => {
	const scrollToTopBtn = document.querySelector(".scrollToTopBtn");
	let scroll = window.pageYOffset;
	let titlePosition = bigTitle.offsetTop;
	// let result = isAnyPartOfElementInViewport(cottages);

	// console.log(showBtn);

	if (scroll > 0) {
		scrollToTopBtn.classList.add("showBtn")
	} else {
		scrollToTopBtn.classList.remove("showBtn")

	}


	// event.preventDefault();
// let y = window.scrollY;
	// let stickyTitlePosition = false;

	// console.log(scroll);

	// console.log(titlePosition);
	
	translate.forEach(element => {
		let speed = element.dataset.speed;
		element.style.transform = `translateY(${scroll * speed}px)`;

	});

	// if (scroll - titlePosition >= titlePosition - 50) {
	// 	$( bigTitle ).addClass('sticky');
	// 	// let newSpeed = bigTitle.dataset.speed;
	// 	// bigTitle.style.transform = `none`;
	// 	return false;

	// } else {
	// 	$( bigTitle ).removeClass('sticky');
	// }

})

// const navLink = document.querySelectorAll(".nav-link");
// let isActive = false;

// .addEventListener('click', () => {
// 	if (isActive) {
// 		$( navLink ).addClass('active');
// 	} else {
// 		$( navLink ).find('active').removeClass('active');
// 		$( navLink ).addClass('active');
// 	}
// });
// let card = document.querySelectorAll(".card");

// $(".card").velocity({ width: 325 }, 1000);



