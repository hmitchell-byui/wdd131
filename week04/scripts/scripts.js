// Temple data
const temples = [
  {
    templeName: "Aba Nigeria Temple",
    location: "Aba, Nigeria",
    dedicated: "2005-08-07",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/800x500/aba-nigeria-temple-lds-1636397-wallpaper.jpg"
  },
  {
    templeName: "Arequipa Peru Temple",
    location: "Arequipa, Peru",
    dedicated: "2019-12-15",
    area: 10000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/arequipa-peru/800x500/1-55f6c59ce8f9c093a9c689067f8674335de544e2.jpeg"
  },
  {
    templeName: "Barranquilla Colombia Temple",
    location: "Barranquilla, Colombia",
    dedicated: "2018-12-09",
    area: 25000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/barranquilla-colombia/800x500/3-Barranquilla-Columblia-Temple-2135198.jpg"
  },
  {
    templeName: "Bentonville Arkansas Temple",
    location: "Bentonville, Arkansas",
    dedicated: "2023-09-17",
    area: 18000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bentonville-arkansas/800x800/Bentonville-Temple-Exterior-13.jpg"
  },
  {
    templeName: "Bern Switzerland Temple",
    location: "Bern, Switzerland",
    dedicated: "1955-09-11",
    area: 35000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/800x500/bern-switzerland-temple-lds-784295-wallpaper.jpg"
  },
  {
    templeName: "Boise Idaho Temple",
    location: "Boise, Idaho",
    dedicated: "1984-05-25",
    area: 35000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/boise-idaho/2018/800x500/1-Boise-Idaho-Temple-1968984.jpg"
  },
  {
    templeName: "Bountiful Utah Temple",
    location: "Bountiful, Utah",
    dedicated: "1995-01-08",
    area: 104000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bountiful-utah/800x500/bountiful-temple-lds-1059079-wallpaper.jpg"
  },
  {
    templeName: "Calgary Alberta Temple",
    location: "Calgary, Alberta",
    dedicated: "2012-10-28",
    area: 33000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/calgary-alberta/800x500/calgary-alberta-temple-lds-1025065-wallpaper.jpg"
  },
  {
    templeName: "Curitiba Brazil Temple",
    location: "Curitiba, Brazil",
    dedicated: "2008-06-01",
    area: 34000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/curitiba-brazil/800x1280/curitiba-brazil-temple-lds-538368-wallpaper.jpg"
  },
{
  templeName: "Salt Lake Temple",
  location: "Salt Lake City, Utah",
  dedicated: "1893-04-06",
  area: 253015,
  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/1280x800/slctemple7.jpg"
}
];

// Render temple cards
function renderTemples(templeArray) {
  const container = document.querySelector(".imageList");
  container.innerHTML = "";

  templeArray.forEach(temple => {
    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";

    const caption = document.createElement("figcaption");
    caption.textContent = temple.templeName;

    const details = document.createElement("p");
    details.innerHTML = `
      <strong>Location:</strong> ${temple.location}<br>
      <strong>Dedicated:</strong> ${temple.dedicated}<br>
      <strong>Area:</strong> ${temple.area.toLocaleString()} sq ft
    `;

    figure.appendChild(img);
    figure.appendChild(caption);
    figure.appendChild(details);
    container.appendChild(figure);
  });
}

// Filter logic
function filterTemples(criteria) {
  let filtered = [];

  switch (criteria) {
    case "old":
      filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
      break;
    case "new":
      filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
      break;
    case "large":
      filtered = temples.filter(t => t.area > 90000);
      break;
    case "small":
      filtered = temples.filter(t => t.area < 10000);
      break;
    default:
      filtered = temples;
  }

  renderTemples(filtered);
}

// Navigation event listeners
document.addEventListener("DOMContentLoaded", () => {
  renderTemples(temples); // Initial render

  document.querySelectorAll(".navigation a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const filter = link.textContent.toLowerCase();
      filterTemples(filter);
    });
  });

  // Hamburger toggle
  const hamButton = document.querySelector('#menu');
  const navigation = document.querySelector('.navigation');
  hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
  });
});
