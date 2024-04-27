document.addEventListener("DOMContentLoaded", function() {
    const scrollButton = document.getElementById("scrollToBook");

    scrollButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior
        const bookSection = document.getElementById("book");
        if (bookSection) {
            bookSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});
