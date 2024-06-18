document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    var menuIcon = document.getElementById('menu-toggle');
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        menuIcon.classList.remove('change');
    } else {
        menu.classList.add('open');
        menuIcon.classList.add('change');
    }
});