let d = new Date();
document.getElementById("currentYear").textContent = `©${d.getFullYear()}`;
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
hamButton.addEventListener('click', function () {
  navigation.classList.toggle('open');
  hamButton.classList.toggle('open');
});
