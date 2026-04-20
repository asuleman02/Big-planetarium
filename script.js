// This gets the contrast button from the page
const contrastBtn = document.getElementById("contrastBtn");

// Check if the button exists before using it
if (contrastBtn) {
  contrastBtn.addEventListener("click", function () {
    // This adds or removes the high contrast class on the body
    document.body.classList.toggle("high-contrast");
  });
}