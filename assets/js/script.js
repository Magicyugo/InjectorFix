// Funktion zum Umschalten des Hamburger-Menüs
function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

// Funktion zum Schließen des Hamburger-Menüs
function closeMenu() {
    const menu = document.getElementById('sideMenu');
    menu.style.display = 'none';
}

// Event Listener für das Schließen des Menüs, wenn eine Option ausgewählt wird
document.querySelectorAll('#sideMenu ul li a').forEach(item => {
    item.addEventListener('click', closeMenu);
});

// Event Listener für das Öffnen und Schließen des Hamburger-Menüs
document.querySelector('.hamburger-menu').addEventListener('click', toggleMenu);
