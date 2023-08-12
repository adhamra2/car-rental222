document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.getElementById("navbar");

    menuIcon.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll(".navbar a");

    navbarLinks.forEach(link => {
        link.addEventListener("click", function() {
            // Remove "active" class from all links
            navbarLinks.forEach(link => {
                link.classList.remove("active");
            });

            // Add "active" class to the clicked link
            this.classList.add("active");
        });
    });
});
