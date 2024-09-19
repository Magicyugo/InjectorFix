function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    const hamburger = document.querySelector('.hamburger-menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        hamburger.classList.remove('open');
    } else {
        menu.style.display = 'block';
        hamburger.classList.add('open');

        // Setze die Position des Menüs relativ zur Hamburger-Position
        const hamburgerOffset = hamburger.getBoundingClientRect();
        menu.style.top = hamburgerOffset.bottom + 'px'; // Immer auf der Höhe des Symbols aufklappen
    }
}
