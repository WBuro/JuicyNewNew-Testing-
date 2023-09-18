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







       const slideContainers = document.querySelectorAll('.slide-container');
       let currentIndex = 0;
       
       function showSlide(index) {
           slideContainers.forEach((container, i) => {
               if (i === index) {
                   container.style.display = 'block';
               } else {
                   container.style.display = 'none';
               }
           });
       }
       
       function nextSlide() {
           currentIndex = (currentIndex + 1) % slideContainers.length;
           showSlide(currentIndex);
       }
       
       function prevSlide() {
           currentIndex = (currentIndex - 1 + slideContainers.length) % slideContainers.length;
           showSlide(currentIndex);
       }
       
       // Başlangıçta ilk slaydı göster
       showSlide(currentIndex);
       
       // Düğmelere tıklama olaylarını ekle
       document.getElementById('next').addEventListener('click', nextSlide);
       document.getElementById('prev').addEventListener('click', prevSlide);