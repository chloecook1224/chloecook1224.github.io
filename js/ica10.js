const img = document.getElementById("clickable-image");
const img2 = document.getElementById("second-image");
const pandaText = document.getElementById("pandaText"); // Use the correct ID
const pandaInfo = document.getElementById("pandaInfo"); // Use the correct ID

img.style.imageRendering = "pixelated";
img2.style.imageRendering = "pixelated";

img.addEventListener('click', function() {
    img.style.display = "none"; // Hide the first image
    img2.style.display = "block"; // Show the second image

    setTimeout(function() {
        img2.style.display = "none"; // Hide the second image after 2 seconds
        img.style.display = "block"; // Show the first image again
    }, 2000);
});

// Show additional text on hover
pandaText.addEventListener('mouseenter', function() {
    pandaInfo.style.display = "block"; // Show additional text
});

pandaText.addEventListener('mouseleave', function() {
    pandaInfo.style.display = "none"; // Hide additional text
});
