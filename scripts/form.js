let d = new Date();
document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()}`;
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;

document.addEventListener('DOMContentLoaded', () => {
  // Populate product dropdown
  const productSelect = document.getElementById('product');
  const products = [
    'EcoSmart LED Bulb',
    'Nest Thermostat',
    'Ring Doorbell',
    'Philips Hue Lightstrip',
    'Dyson Air Purifier'
  ];

  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.toLowerCase().replace(/\s+/g, '-');
    option.textContent = product;
    productSelect.appendChild(option);
  });

  // Set current year in footer
  const yearSpan = document.getElementById('year');
  yearSpan.textContent = new Date().getFullYear();
});
