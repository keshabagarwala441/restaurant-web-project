// ==============================
// MENU FILTER
// ==============================

const filterButtons = document.querySelectorAll(".filter-btn");
const menuItems = document.querySelectorAll(".menu-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const category = button.dataset.filter;

        menuItems.forEach(item => {

            if (category === "all") {

                item.style.display = "block";

            } else {

                if (item.classList.contains(category)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }

            }

        });

    });

});

// ==============================
// SEARCH MENU
// ==============================

const search = document.getElementById("menuSearch");

if (search) {

    search.addEventListener("keyup", () => {

        const value = search.value.toLowerCase();

        menuItems.forEach(item => {

            const title = item.querySelector("h3").textContent.toLowerCase();

            if (title.includes(value)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }

        });

    });

}

// ==============================
// SORT MENU
// ==============================

const sortSelect = document.getElementById("sortMenu");

if (sortSelect) {

    sortSelect.addEventListener("change", function () {

        const container = document.querySelector(".menu-grid");

        const items = [...document.querySelectorAll(".menu-item")];

        items.sort((a, b) => {

            const priceA = parseFloat(a.dataset.price);
            const priceB = parseFloat(b.dataset.price);

            if (this.value === "low") {
                return priceA - priceB;
            }

            if (this.value === "high") {
                return priceB - priceA;
            }

            return 0;

        });

        items.forEach(item => container.appendChild(item));

    });

}

console.log("Menu JS Loaded");