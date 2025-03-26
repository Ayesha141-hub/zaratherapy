// Auto typing...
var typed = new Typed('#brand_name', {
    strings: ['<b>ZARA THERAPY CLINIC</b>'],
    typeSpeed: 200,    // Typing speed
    backSpeed: 50,     // Deleting speed
    backDelay: 2000,   // 2 sec tak text dikhne ke baad delete hoga
    fadeOut: true,     // Soft fade-out effect ke saath remove hoga
    loop: true,        // Loop enable karna
    showCursor: false  // Cursor hide karna
});


// Toggle button
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-linkss");

    toggleButton.addEventListener("click", function () {
        // Toggle the display of nav links
        if (navLinks.style.display === "block") {
            navLinks.style.display = "none";
        } else {
            navLinks.style.display = "block";
        }
    });
});
// preloader
window.onload = function () {
    setTimeout(function () {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 1000); // 1 seconds delay
};
// AOS Animation
AOS.init({
    duration: 1000,  // Animation speed
    easing: "ease-in-out", // Smooth effect
    once: true,  // Repeats animation on scroll
});
// Back to top button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var backToTopButton = document.getElementById("back-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
        setTimeout(function () {
            backToTopButton.classList.add("show"); // Add class for smooth transition
        }, 10); // Small delay to trigger CSS transition
    } else {
        backToTopButton.classList.remove("show"); // Remove class for smooth transition
        setTimeout(function () {
            backToTopButton.style.display = "none";
        }, 500); // Wait for transition to complete before hiding
    }
}
document.getElementById("back-to-top").onclick = function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
};


// COMMENT SECTION
document.addEventListener("DOMContentLoaded", function () {
    let commentSection = document.getElementById("comment-section");

    // Default comments with ratings
    let defaultComments = [
        { name: "Ayesha Khan", comment: "This product has helped me stay organized! 101% Recommended", rating: 5 },
        { name: "Ahmed Raza", comment: "Really loved the this product! Helped me a lot.", rating: 4 },
    ];

    defaultComments.forEach(entry => {
        let newComment = document.createElement("div");
        newComment.classList.add("comment");
        newComment.innerHTML = `<strong>${entry.name}:</strong> <span class="rating">${"⭐".repeat(entry.rating)}</span>
                                <p>${entry.comment}</p>`;
        commentSection.appendChild(newComment);
    });
});

// Adding new comments with ratings
document.getElementById("comment-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let comment = document.getElementById("comment").value;
    let rating = document.getElementById("rating").value;

    if (name.trim() === "" || comment.trim() === "") {
        alert("Please fill out all fields.");
        return;
    }

    let commentSection = document.getElementById("comment-section");
    let newComment = document.createElement("div");
    newComment.classList.add("comment");
    newComment.innerHTML = `<strong>${name}:</strong> <span class="rating">${"⭐".repeat(rating)}</span>
                            <p>${comment}</p>`;

    commentSection.prepend(newComment);

    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";
    document.getElementById("rating").value = "5";
});
