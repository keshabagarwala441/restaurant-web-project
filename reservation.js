// ========================================
// RESERVATION FORM VALIDATION
// ========================================

const reservationForm = document.getElementById("reservationForm");

if (reservationForm) {

    reservationForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const guests = document.getElementById("guests").value;
        const message = document.getElementById("message").value.trim();

        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            date === "" ||
            time === "" ||
            guests === ""
        ) {
            alert("Please fill in all required fields.");
            return;
        }

        // Email Validation
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Phone Validation (10 digits)
        const phonePattern =
            /^[0-9]{10}$/;

        if (!phonePattern.test(phone)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        // Prevent Past Date
        const selectedDate = new Date(date);
        const today = new Date();

        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
            alert("Reservation date cannot be in the past.");
            return;
        }

        alert(
`Reservation Successful!

Name: ${name}
Guests: ${guests}
Date: ${date}
Time: ${time}

Thank you for choosing Delizia Restaurant.`
        );

        reservationForm.reset();

    });

}

// ========================================
// SET MINIMUM DATE
// ========================================

const dateInput = document.getElementById("date");

if (dateInput) {

    const today = new Date();

    const year = today.getFullYear();

    const month = String(today.getMonth() + 1).padStart(2, "0");

    const day = String(today.getDate()).padStart(2, "0");

    dateInput.min = `${year}-${month}-${day}`;

}

// ========================================
// CHARACTER COUNTER
// ========================================

const messageField = document.getElementById("message");

if (messageField) {

    const counter = document.createElement("small");

    counter.style.display = "block";
    counter.style.marginTop = "8px";
    counter.style.color = "#777";

    messageField.parentNode.appendChild(counter);

    messageField.addEventListener("input", () => {

        counter.textContent =
            `${messageField.value.length}/250 characters`;

        if (messageField.value.length > 250) {
            messageField.value =
                messageField.value.substring(0, 250);
        }

    });

}

// ========================================
// GUESTS LIMIT
// ========================================

const guestInput = document.getElementById("guests");

if (guestInput) {

    guestInput.addEventListener("change", () => {

        if (guestInput.value < 1) {
            guestInput.value = 1;
        }

        if (guestInput.value > 20) {
            guestInput.value = 20;
            alert("Maximum 20 guests per reservation.");
        }

    });

}

console.log("Reservation JS Loaded Successfully");