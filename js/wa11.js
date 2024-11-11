const imageFilenames = [
    '/img/cat_1.jpg',
    '/img/cat_2.jpg',
    '/img/cat_3.jpg',
    '/img/cat_4.jpg',
    '/img/cat_5.jpg'
  ];
  
  const altTexts = {
    '/img/cat_1.jpg': 'Closeup of a blue human eye',
    '/img/cat_2.jpg': 'Mountain landscape at sunset',
    '/img/cat_3.jpg': 'A forest path during autumn',
    '/img/cat_4.jpg': 'Beach with golden sands',
    '/img/cat_5.jpg': 'City skyline at night'
  };
  
  // Reference to the thumb-bar div
  const thumbBar = document.querySelector('.thumb-bar');
  
  imageFilenames.forEach(filename => {
    const newImage = document.createElement('img');
    newImage.src = filename;  
    newImage.alt = altTexts[filename];
    thumbBar.appendChild(newImage);
  });
  
  thumbBar.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', () => {
      const displayedImg = document.querySelector('.displayed-img');
      displayedImg.src = img.src;
      displayedImg.alt = img.alt;
    });
  });
  

  const btn = document.querySelector('button.dark');
  const overlay = document.querySelector('.overlay');
  
  // Add a click event listener to the darken/lighten button
  btn.addEventListener('click', () => {
    if (btn.classList.contains('dark')) {
      // Switch to lighten mode
      btn.classList.remove('dark');
      btn.classList.add('light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)'; 
    } else {
      // Switch to darken mode
      btn.classList.remove('light');
      btn.classList.add('dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)'; 
    }
  });
  
  
