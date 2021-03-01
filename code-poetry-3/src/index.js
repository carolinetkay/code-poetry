const button = document.querySelector(".button");
const text = document.querySelector("p");

button.addEventListener('click', (event) => {
    const question = encodeURIComponent(document.querySelector("input").value);
    const url = "https://8ball.delegator.com/magic/JSON/" + question;
    fetch(url)
        .then(response => response.json())
        .then((json) => {
            text.style.display = "none";
            const results = `<p style="margin-top: 40vh; text-align: center; font: normal 24px monospace;">${json['magic']['answer']}</p>`;
            text.insertAdjacentHTML('afterend', results);
        });
});