document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger-menu');
    const menu = document.getElementById('sideMenu');

    // Funktion zum Umschalten des Menüs
    function toggleMenu() {
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    }

    // Hamburger-Klick-Ereignis
    hamburger.addEventListener('click', toggleMenu);
});
