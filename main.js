// ================================
// MOBILE MENU
// ================================

const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (navbar.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
    });
}

// ================================
// CLOSE MENU AFTER CLICK
// ================================

document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        const icon = menuToggle?.querySelector("i");

        if (icon) {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }

    });
});

// ================================
// STICKY HEADER
// ================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.12)";
        header.style.background = "#ffffff";
    } else {
        header.style.boxShadow = "none";
        header.style.background = "#ffffff";
    }

});

// ================================
// BACK TO TOP BUTTON
// ================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn?.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ================================
// SMOOTH SCROLL
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// ================================
// ACTIVE NAVIGATION
// ================================

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".navbar a").forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage || (currentPage === "" && href === "index.html")) {
        link.classList.add("active");
    }

});

// ================================
// REVEAL ON SCROLL
// ================================

const revealElements = document.querySelectorAll(
    ".card, .feature-box, .about-content, .about-image, .testimonial-box"
);

const reveal = () => {

    revealElements.forEach(item => {

        const windowHeight = window.innerHeight;
        const top = item.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

};

revealElements.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "all .7s ease";

});

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// ================================
// PRELOADER (OPTIONAL)
// ================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

// ================================
// CURRENT YEAR (OPTIONAL)
// ================================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

console.log("Delizia Restaurant Loaded Successfully 🍽️");