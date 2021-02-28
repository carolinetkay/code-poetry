const button = document.querySelector(".button");
const text = document.querySelector("p");

button.addEventListener('click', (event) => {
    text.style.display = "none";
    text.insertAdjacentHTML('afterend', '<p style="margin-top: 40vh; text-align: center; font: normal 24px monospace;">Your imagination</p>');
});