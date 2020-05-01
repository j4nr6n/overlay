import '../../css/default/homepage.scss';

(() => {
    const toggleDarkMode = (darkMode) => {
        let elements = document.getElementsByClassName('overlay');

        elements.forEach((overlay) => {
            if (darkMode) {
                overlay.classList.remove('overlay-light');
                overlay.classList.add('overlay-dark');
            } else {
                overlay.classList.remove('overlay-dark');
                overlay.classList.add('overlay-light');
            }
        });
    };

    let darkModeToggle = document.getElementById('js-dark-mode-toggle');

    darkModeToggle.addEventListener('change', (event) => {
       toggleDarkMode(event.currentTarget.checked);
    });

    toggleDarkMode(darkModeToggle.checked);
})();
