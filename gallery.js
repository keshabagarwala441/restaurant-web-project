// ==============================
// GALLERY LIGHTBOX
// ==============================

const galleryImages = document.querySelectorAll(".gallery-item img");

if (galleryImages.length > 0) {

    // Create Lightbox
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";

    lightbox.innerHTML = `
        <span id="closeLightbox">&times;</span>
        <img id="lightboxImg" src="" alt="">
        <button id="prevBtn">&#10094;</button>
        <button id="nextBtn">&#10095;</button>
    `;

    document.body.appendChild(lightbox);

    const lightboxImg = document.getElementById("lightboxImg");
    const closeBtn = document.getElementById("closeLightbox");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentIndex = 0;

    function showImage(index) {
        lightbox.style.display = "flex";
        lightboxImg.src = galleryImages[index].src;
    }

    galleryImages.forEach((img, index) => {

        img.addEventListener("click", () => {
            currentIndex = index;
            showImage(currentIndex);
        });

    });

    nextBtn.addEventListener("click", () => {

        currentIndex++;

        if (currentIndex >= galleryImages.length) {
            currentIndex = 0;
        }

        showImage(currentIndex);

    });

    prevBtn.addEventListener("click", () => {

        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = galleryImages.length - 1;
        }

        showImage(currentIndex);

    });

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }

    });

    document.addEventListener("keydown", (e) => {

        if (lightbox.style.display !== "flex") return;

        if (e.key === "Escape") {
            lightbox.style.display = "none";
        }

        if (e.key === "ArrowRight") {
            nextBtn.click();
        }

        if (e.key === "ArrowLeft") {
            prevBtn.click();
        }

    });

}

console.log("Gallery JS Loaded");