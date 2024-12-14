// script.js

// Function to change the main image when a thumbnail is clicked
function changeImage(gifName) {
    const mainImage = document.getElementById('main-image');
    mainImage.src = gifName; // Set the main image to the corresponding GIF
    mainImage.alt = "Project GIF"; // Update the alt text
  }
  
  // Optional: If you want to have a smooth transition back to the main image when clicked again
  document.getElementById('main-image').addEventListener('click', function() {
    const mainImage = document.getElementById('main-image');
    mainImage.src = 'main_image.jpg'; // Reset to original main image (non-GIF)
    mainImage.alt = 'Main Project Image';
  });
  
  // You can add more interactivity or effects here as per your needs
  