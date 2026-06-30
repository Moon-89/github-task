// Simple interactive script for the page
document.addEventListener("DOMContentLoaded", () => {
  const heading = document.querySelector("h1");

  if (heading) {
    heading.addEventListener("click", () => {
      heading.textContent = "You clicked the heading!";
    });
  }

  console.log("Page loaded successfully.");
});
