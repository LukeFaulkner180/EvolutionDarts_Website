/* Count down + menu */
document.addEventListener('DOMContentLoaded', function() {

    /* COUNTDOWN (only runs if elements exist) */
    const daysEl = document.getElementById('days');

    if (daysEl) {
        const competitionDate = new Date('April 18, 2026 19:00:00').getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = competitionDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById('days').textContent = days;
            document.getElementById('hours').textContent = hours;
            document.getElementById('minutes').textContent = minutes;
            document.getElementById('seconds').textContent = seconds;

            if (distance < 0) {
                document.querySelector('.timer-countdown').innerHTML = '<h3>Competition has started!</h3>';
                clearInterval(timerInterval);
            }
        }

        updateCountdown();
        const timerInterval = setInterval(updateCountdown, 1000);
    }

    /* SIDE MENU */
    const hamburger = document.querySelector('.hamburger');
    const sideMenu = document.querySelector('.side-menu');
    const closeBtn = document.querySelector('.close-btn');

    if (hamburger && sideMenu && closeBtn) {
        hamburger.addEventListener('click', function() {
            sideMenu.classList.toggle('open');
        });

        closeBtn.addEventListener('click', function() {
            sideMenu.classList.remove('open');
        });

        document.addEventListener('click', function(event) {
            if (!hamburger.contains(event.target) && !sideMenu.contains(event.target)) {
                sideMenu.classList.remove('open');
            }
        });
    }
});