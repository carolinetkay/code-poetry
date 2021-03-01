const button = document.querySelector(".button");
const text = document.querySelector("p");

button.addEventListener('click', (event) => {
    let params = encodeURIComponent("Is today going to be a good day?");
    let url = "https://8ball.delegator.com/magic/JSON/" + params;
    fetch(url)
        .then(response => response.json())
        .then((json) => {
            text.style.display = "none";
            const results = `<p style="margin-top: 40vh; text-align: center; font: normal 24px monospace;">${json['magic']['answer']}</p>`;
            // console.log(json['magic']['answer'])
            text.insertAdjacentHTML('afterend', results);
        });
});