const comicButton = document.getElementById('comic-button');
const comicImage = document.getElementById('comic-image');
const comicTitle = document.getElementById('comic-title');
const comicDate = document.getElementById('comic-date');

function getRandomComic() {

    const comicNumber = Math.floor(Math.random() * 3000) + 1;

    const apiURL = `https://api.allorigins.win/raw?url=https://xkcd.com/${comicNumber}/info.0.json`;

    console.log('Fetching comic from:', apiURL); 

    fetch(apiURL)
        .then(response => {
            console.log('Response status:', response.status);
            if (!response.ok) {
                throw new Error('Comic not found, status code: ' + response.status);
            }
            return response.json();  // Convert response to JSON
        })
        .then(data => {
            console.log('Fetched comic data:', data);  

            // Update the comic image, alt text, title, and date
            comicImage.src = data.img;
            comicImage.alt = data.alt;
            comicTitle.textContent = data.title;
            comicDate.textContent = `Published on: ${data.year}-${data.month}-${data.day}`;
        })
        .catch(error => {
            console.error('Error fetching comic:', error.message); 
            alert(`Failed to fetch comic. Error: ${error.message}`);
        });
}

comicButton.addEventListener('click', getRandomComic);
