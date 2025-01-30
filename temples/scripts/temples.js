let d = new Date();
document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()}`;
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;

document.addEventListener('DOMContentLoaded', function(){
    const hamButton = document.getElementById('menu');
    const navigation = document.getElementById('nav-menu');

    hamButton.addEventListener('click', function() {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });
});