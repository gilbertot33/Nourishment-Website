// ----------------------
// PRICING CALCULATOR
// ----------------------

document.addEventListener("DOMContentLoaded", () => {

    const calcBtn = document.getElementById("calcBtn");
    if (calcBtn) {
        calcBtn.addEventListener("click", () => {
            const units = parseInt(document.getElementById("units").value);
            const workshop = document.getElementById("workshop").checked;
            const maintenance = document.getElementById("maintenance").checked;
            const solar = document.getElementById("solar").checked;

            let startup = units * 500; // base cost per unit
            let monthly = units * 20;  // base monthly cost

            if (workshop) startup += 300;
            if (maintenance) monthly += 50;
            if (solar) startup += 200;

            document.getElementById("calcResult").innerHTML =
                `<p><strong>Estimated Startup Cost:</strong> $${startup}</p>
                 <p><strong>Estimated Monthly Cost:</strong> $${monthly}</p>`;
        });
    }

    // ----------------------
    // CONTACT FORM VALIDATION
    // ----------------------

    const form = document.getElementById("pilotForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const org = document.getElementById("org").value.trim();
            const email = document.getElementById("email").value.trim();
            const date = document.getElementById("date").value;

            if (!org || !email || !date) {
                document.getElementById("formMessage").innerHTML =
                    "<p class='error'>Please fill out all required fields.</p>";
                return;
            }

            const today = new Date().toISOString().split("T")[0];
            if (date < today) {
                document.getElementById("formMessage").innerHTML =
                    "<p class='error'>Date cannot be in the past.</p>";
                return;
            }

            document.getElementById("formMessage").innerHTML =
                "<p class='success'>Thank you! We will contact you soon.</p>";

            form.reset();
        });
    }
});

