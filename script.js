const url = 'https://api.thecatapi.com/v1/images/search';
const generateButton = document.querySelector('#generate-button');
const image = document.querySelector('.image');

generateButton.addEventListener("click", async () => {

    try {

        image.style.display = "block";
        image.src = "images/loading.gif";
        const request = await fetch(url);
        const response = await request.json();
        const imageUrl = response[0].url;

        setTimeout(function () {
            image.src = imageUrl;
        }, 500);

    } catch (error) {
        image.src = 'images/image-error.png';
    }

});