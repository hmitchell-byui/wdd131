// Function to filter images based on category
function filterImages(category) {
  const figures = document.querySelectorAll('.image-grid figure');
  figures.forEach(fig => {
    if (category === 'all') {
      fig.style.display = '';
    } else {
      fig.style.display = fig.classList.contains(category) ? '' : 'none';
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Footer logic: inject current year and page last-modified timestamp
  const yearSpan = document.getElementById("year");
  const lastModifiedSpan = document.getElementById("lastModified");

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
  if (lastModifiedSpan) {
    lastModifiedSpan.textContent = document.lastModified;
  }
});
