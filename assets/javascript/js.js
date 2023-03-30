var trimite = document.querySelector("#contact button[type='submit']");

trimite.addEventListener("click", function(event) {
    event.preventDefault();

    trimite.classList.add("trimite");

    setTimeout(function() {
        trimite.classList.remove("trimite");
        trimite.classList.add("sent");
        trimite.textContent = "Trimis!";
    }, 2000);
});
