const inputURL = document.querySelector("div.container > input.url");
const shortButton = document.querySelector("div.container > button.shorturl");
const shortenedUrl = document.querySelector("div.container > a.shortenedurl");

shortButton.addEventListener("click", async (event) => {
    event.preventDefault();

    // Desabilita o botão
    event.target.disabled = true;

    console.log(inputURL.value);
    
    const request = await fetch(`${location.href}shorturl`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            url: inputURL.value
        })
    });

    const response = await request.text();

    shortenedUrl.href = location.href + response;
    shortenedUrl.textContent = location.href + response;

    // Reabilita o botão
    event.target.disabled = false;
});
