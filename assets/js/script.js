function toggleMenu() {
    console.log("Hamburger menu clicked"); // Debugging-Zweck
    const menu = document.getElementById('sideMenu');
    const hamburger = document.querySelector('.hamburger-menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        hamburger.classList.remove('open');
    } else {
        menu.style.display = 'block';
        hamburger.classList.add('open');
    }
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