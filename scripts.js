document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !date) {
        alert("Please fill in all required fields.");
        return;
    }

    alert(Thank you for booking, ${name}! We will contact you soon.);
    document.getElementById("booking-form").reset();
});