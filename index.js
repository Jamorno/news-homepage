const closeIcon = document.querySelector(".close-icon"),
    navBarToggle = document.querySelector(".nav-toggle"),
    slideBar = document.querySelector(".slide-bar");

navBarToggle.addEventListener("click", function () {
    slideBar.classList.add("open");
});

closeIcon.addEventListener("click", function () {
    slideBar.classList.remove("open");
});
