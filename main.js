const menuBtn = document.querySelector(".m-menu");
const menuSidebar = document.querySelector(".menu-sidebar");

menuBtn.addEventListener('click', () => {
    menuSidebar.classList.toggle("active");
})