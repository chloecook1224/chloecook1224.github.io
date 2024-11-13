// app.js

// Select DOM elements
const comicButton = document.getElementById('comic-button');
const comicImage = document.getElementById('comic-image');
const comicTitle = document.getElementById('comic-title');
const comicDate = document.getElementById('comic-date');

// Function to fetch and display a random comic (comic number 100 for testing)
function getRandomComic() {
    const comicNumber = 100;  // Use comic number 100 for testing
    const apiURL = `https://cors-anywhere.herokuapp.com/https://xkcd.com/${comicNumber}/info.0.json`;

    console.log('Fetching comic from:', apiURL);  // Log the URL to verify

    fetch(apiURL)
        .then(response => {
            console.log('Response status:', response.status);  // Log the status code
            if (!response.ok) {
                throw new Error('Comic not found, status code: ' + response.status);
            }
            return response.json();  // Convert response to JSON
        })
        .then(data => {
            console.log('Fetched comic data:', data);  // Log the data received from the API

            // Update the comic image, alt text, title, and date
            comicImage.src = data.img;
            comicImage.alt = data.alt;
            comicTitle.textContent = data.title;
            comicDate.textContent = `Published on: ${data.year}-${data.month}-${data.day}`;
        })
        .catch(error => {
            console.error('Error fetching comic:', error.message);  // Log the error
            alert(`Failed to fetch comic. Error: ${error.message}`);
        });
}

// Add event listener to the button
comicButton.addEventListener('click', getRandomComic);
