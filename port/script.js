function toggleNav() {
    const sidenav = document.getElementById('mySidenav');
    const menuToggle = document.getElementById('menuToggle');

    const isOpen = sidenav.classList.toggle('open');
    menuToggle.classList.toggle('open');

    sidenav.style.left = isOpen ? '0' : '-250px';
}

// Close the nav when clicking outside
document.addEventListener('click', function(event) {
    const sidenav = document.getElementById('mySidenav');
    const menuToggle = document.getElementById('menuToggle');

    if (!sidenav.contains(event.target) && !menuToggle.contains(event.target) && sidenav.classList.contains('open')) {
        sidenav.classList.remove('open');
        menuToggle.classList.remove('open');
        sidenav.style.left = '-250px';
    }
});
