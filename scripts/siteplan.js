
let d = new Date();
document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()}`;
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;
// Set current year in footer
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// Optional: Highlight active section on scroll (future enhancement)
const sections = document.querySelectorAll("main section");
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle("visible", entry.isIntersecting);
    });
  },
  { threshold: 0.3 }
);

sections.forEach(section => observer.observe(section));

// Optional: Theme toggle logic (if you add a button later)
const toggleTheme = () => {
  document.body.classList.toggle("dark-theme");
};
