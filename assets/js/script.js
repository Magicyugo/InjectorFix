function toggleMenu() {
    console.log("Hamburger menu clicked"); // Debugging
    const menu = document.getElementById('sideMenu');
    const hamburger = document.querySelector('.hamburger-menu');

    // Füge ein Debugging-Log hinzu, um den aktuellen Display-Status zu überprüfen
    console.log("Menu display status before toggle:", menu.style.display);

    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        hamburger.classList.remove('open');
    } else {
        menu.style.display = 'block';
        hamburger.classList.add('open');
    }

    // Überprüfe nach dem Umschalten den Status erneut
    console.log("Menu display status after toggle:", menu.style.display);
}
