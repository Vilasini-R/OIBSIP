const bodyElement = document.getElementById('body');
const colors = [
    ['#ffc0cb', '#7b113a'],
    ['#ffffff', '#808080'],
    ['#000000', '#ffffff'],
    ['#8a2be2', '#eeddff'],
];
let colorIndex = 0;

function changeBackgroundColor() {
    const currentColors = colors[colorIndex];
    bodyElement.style.backgroundColor = currentColors[0];
    colorIndex = (colorIndex + 1) % colors.length;
}

changeBackgroundColor();
setInterval(changeBackgroundColor, 2000);

function startCountdown() {
    const countdownElement = document.getElementById('countdown');
    const endDate = new Date('June 28, 2024 23:59:59').getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = endDate - now;

        if (distance < 0) {
            countdownElement.innerHTML = "EXPIRED";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

window.onload = startCountdown;

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
