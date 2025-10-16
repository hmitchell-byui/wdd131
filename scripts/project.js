// Data for your gallery items
const items = [
  { name: "Banghai Cardinal",     category: "salt",      src: "project-images/banghai-cardinal.webp",     alt: "Fish: Banghai Cardinal" },
  { name: "Christmas Moss",       category: "decor",     src: "project-images/christmas-moss.webp",       alt: "Plant: Christmas Moss" },
  { name: "Clownfish",            category: "salt",      src: "project-images/clownfish.webp",            alt: "Fish: Clownfish" },
  { name: "Decor Ornament",       category: "decor",     src: "project-images/decor.webp",                alt: "Decor: Aquarium Ornament" },
  { name: "Dotted Platy",         category: "fresh",     src: "project-images/dotted-platy.webp",         alt: "Fish: Dotted Platy" },
  { name: "Fancy Guppy",          category: "fresh",     src: "project-images/fancy-guppy.webp",          alt: "Fish: Fancy Guppy" },
  { name: "Filter",               category: "equipment", src: "project-images/filter.webp",               alt: "Equipment: Filter" },
  { name: "Freshwater Food",      category: "equipment", src: "project-images/food-freshwater.webp",      alt: "Food: Freshwater Flakes" },
  { name: "Saltwater Food",       category: "equipment", src: "project-images/food-saltwater.webp",       alt: "Food: Saltwater Pellets" },
  { name: "Heater",               category: "equipment", src: "project-images/heater.webp",               alt: "Equipment: Heater" },
  { name: "Live Rock Crab",       category: "salt",      src: "project-images/liverock-crab.webp",        alt: "Creature: Live Rock Crab" },
  { name: "Purple Decor",         category: "decor",     src: "project-images/purple-decor.webp",         alt: "Decor: Purple Ornament" },
  { name: "Starfish",             category: "salt",      src: "project-images/starfish.webp",             alt: "Creature: Starfish" },
  { name: "Tank",                 category: "equipment", src: "project-images/tank.webp",                 alt: "Equipment: Aquarium Tank" }
];

// Render the grid of items
function renderGallery(array) {
  const container = document.querySelector(".imageList");
  container.innerHTML = "";
  array.forEach(item => {
    const figure = document.createElement("figure");
    figure.classList.add(item.category);

    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt;
    img.loading = "lazy";

    const caption = document.createElement("figcaption");
    caption.textContent = item.name;

    figure.append(img, caption);
    container.appendChild(figure);
  });
}

// Filter items by category
function filterGallery(category) {
  if (category === "all") {
    renderGallery(items);
  } else {
    renderGallery(items.filter(i => i.category === category));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Initial render
  renderGallery(items);

  // Set up filter links
  document.querySelectorAll(".navigation a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const cat = link.dataset.filter;
      filterGallery(cat);

      // Close mobile nav after selection
      document.querySelector(".navigation").classList.remove("open");
      document.getElementById("menu").classList.remove("open");
    });
  });

  // Toggle the hamburger menu
  const ham = document.getElementById("menu");
  const nav = document.querySelector(".navigation");
  ham.addEventListener("click", () => {
    nav.classList.toggle("open");
    ham.classList.toggle("open");
  });

  // Inject year & last-modified
  document.getElementById("currentYear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent =
    `Last Modification: ${document.lastModified}`;
});
