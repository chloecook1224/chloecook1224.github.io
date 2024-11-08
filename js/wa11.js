// Array of image filenames (correct path relative to the current folder)
const imageFilenames = [
    '/img/unicorns/unicorn_(1).png',
    '/img/unicorns/unicorn_(2).png',
    '/img/unicorns/unicorn_(3).png',
    '/img/unicorns/unicorn_(4).png',
    '/img/unicorns/unicorn_(5).png'
  ];
  
  // Object containing alt text for each image
  const altTexts = {
    '/img/unicorns/unicorn_(1).png': 'Closeup of a blue human eye',
    '/img/unicorns/unicorn_(2).png': 'Mountain landscape at sunset',
    '/img/unicorns/unicorn_(3).png': 'A forest path during autumn',
    '/img/unicorns/unicorn_(4).png': 'Beach with golden sands',
    '/img/unicorns/unicorn_(5).png': 'City skyline at night'
  };
  
  // Reference to the thumb-bar div
  const thumbBar = document.querySelector('.thumb-bar');
  
  // Loop through the array of image filenames to insert thumbnail images
  imageFilenames.forEach(filename => {
    const newImage = document.createElement('img');
    newImage.src = filename;  // Correct image path
    newImage.alt = altTexts[filename];
    thumbBar.appendChild(newImage);
  });
  
  // Add a click event listener to each thumbnail
  thumbBar.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', () => {
      const displayedImg = document.querySelector('.displayed-img');
      displayedImg.src = img.src;
      displayedImg.alt = img.alt;
    });
  });
  
  // Reference to the darken/lighten button and overlay div
  const btn = document.querySelector('button.dark');
  const overlay = document.querySelector('.overlay');
  
  // Add a click event listener to the darken/lighten button
  btn.addEventListener('click', () => {
    if (btn.classList.contains('dark')) {
      // Switch to lighten mode
      btn.classList.remove('dark');
      btn.classList.add('light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)'; // Apply darken overlay
    } else {
      // Switch to darken mode
      btn.classList.remove('light');
      btn.classList.add('dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)'; // Remove darken overlay
    }
  });
  
  
