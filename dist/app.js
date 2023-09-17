document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".filter-button");
    const contentDivs = document.querySelectorAll(".content-div");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const btnId = button.getAttribute("data-btn");

            contentDivs.forEach((content) => {
                if (content.id === `content${btnId}`) {
                    content.classList.remove("hidden");
                } else {
                    content.classList.add("hidden");
                }
            });
        });
    });
});

       // Toggle mobile menu
       const mobileMenuButton = document.getElementById('mobile-menu-button');
       const mobileMenu = document.getElementById('mobile-menu');

       mobileMenuButton.addEventListener('click', () => {
           mobileMenu.classList.toggle('hidden');
       });







      //Filename: script.js
/* let rev = 0;
carousel(rev);

function previousReview() {
	rev = rev - 1;
	carousel(rev);
}

function nextReview() {
	rev = rev + 1;
	carousel(rev);
}

function carousel(review) {
	let reviews = document.getElementsByClassName("review__items");

	if (review >= reviews.length) {
		review = 0;
		rev = 0;
	}
	if (review < 0) {
		review = reviews.length - 1;
		rev = reviews.length - 1;
	}
	for (let i = 0; i < reviews.length; i++) {
		reviews[i].style.display = "none";
	}
	reviews[review].style.display = "flex";
} */
