const body = document.body;
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    // console.log(window.pageYOffset);

    const currentScroll = window.pageYOffset;

    if(currentScroll <= 0) {
        navbar.classList.remove("scroll-up");
    }

    if(currentScroll > lastScroll && !navbar.classList.contains("scroll-down")) {
        navbar.classList.remove("scroll-up")
        navbar.classList.add("scroll-down")

    }

    if(currentScroll < lastScroll && navbar.classList.contains("scroll-down")) {
        navbar.classList.remove("scroll-down")
        navbar.classList.add("scroll-up")
    }


    lastScroll = currentScroll;
})

