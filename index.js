const closeIcon = document.getElementById("js-close-icon"),
    navBarToggle = document.getElementById("js-nav-toggle"),
    slideBar = document.getElementById("js-slide-bar");

navBarToggle.addEventListener("click", function () {
    slideBar.classList.add("open");
});

closeIcon.addEventListener("click", function () {
    slideBar.classList.remove("open");
});