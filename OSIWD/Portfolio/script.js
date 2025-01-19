let roles = ["Full-stack Developer", "Programmer", "Front-end Developer"];
let currentIndex = 0;

function changeRole() {
    currentIndex = (currentIndex + 1) % roles.length;
    document.getElementById("role").textContent = roles[currentIndex];
}

setInterval(changeRole, 3000);

function toggleDarkMode() {
    const body = document.body;
    const toggleButton = document.getElementById("dark-mode-toggle");

    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        toggleButton.textContent = "Villu";
    } else {
        toggleButton.textContent = "Pinky";
    }
}
document.getElementById("dark-mode-toggle").addEventListener("click", toggleDarkMode);
