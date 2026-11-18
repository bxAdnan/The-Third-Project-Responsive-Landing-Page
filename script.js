
// Get Elements

let menuBtn = document.getElementById("menuBtn");
let navLinks = document.getElementById("navLinks");

// Open and Close Menu

menuBtn.addEventListener("click", function() {

    navLinks.classList.toggle("active");

});

// Close Menu After Clicking a Link

let links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

    });

});
