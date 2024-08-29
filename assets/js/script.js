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

function closeMenu() {
    const menu = document.getElementById('sideMenu');
    const hamburger = document.querySelector('.hamburger-menu');
    menu.style.display = 'none';
    hamburger.classList.remove('open');
}

// Event listener für das Schließen des Menüs auf Mobilgeräten
document.querySelectorAll('#sideMenu ul li a').forEach(link => {
    link.addEventListener('click', () => {
        closeMenu();
    });
});

// Event listener für das Schließen des Menüs durch Klicken auf das X
document.querySelector('.hamburger-menu').addEventListener('click', (e) => {
    if (e.target.closest('.hamburger-menu').classList.contains('open')) {
        closeMenu();
    } else {
        toggleMenu();
    }
});
