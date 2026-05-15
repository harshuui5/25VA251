// script.js

// 🔍 Search functionality
document.querySelector(".search-icon").addEventListener("click", function () {
    const query = document.querySelector(".search-input").value.trim();
    if (query) {
        alert(`Searching for: ${query}`);
    } else {
        alert("Please enter something to search!");
    }
});

document.querySelector(".nav-cart").addEventListener("click", function () {
    alert("Cart clicked! Redirecting to your cart page...");

});

document.querySelector(".foot-pannel1").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelector(".nav-signin").addEventListener("click", function () {
    alert("Redirecting to login page...");
    window.location.href = "/login.html";
});

const boxes = document.querySelectorAll(".box");
boxes.forEach(box => {
    box.addEventListener("mouseenter", () => {
        box.style.transform = "scale(1.05)";
        box.style.transition = "transform 0.3s ease";
    });
    box.addEventListener("mouseleave", () => {
        box.style.transform = "scale(1)";
    });
});
