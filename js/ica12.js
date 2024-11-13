const factDisplay = document.getElementById('fact-display');
const factButton = document.getElementById('fact-button');

const apiEndpoint = "https://catfact.ninja/fact";

function getFact() {
    console.log("Button clicked! Fetching fact...");

    fetch(apiEndpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch cat fact");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            displayRes(data);
        })
        .catch(error => {
            console.error("Error fetching cat fact:", error);
            alert("Error fetching cat fact! Please try again later.");
        });
}
function displayRes(data) {
    if (data && data.fact) {
        factDisplay.textContent = data.fact;
    } else {
        factDisplay.textContent = "No fact found.";
    }
}

factButton.addEventListener('click', getFact);

window.onload = getFact;
