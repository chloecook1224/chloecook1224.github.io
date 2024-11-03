const customName = document.getElementById("customName");
const randomize = document.getElementById("randomize");
const story = document.getElementById("story");

function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}


const storyText = "Once upon a time, :insertx: went to the :inserty: and saw a :insertz:. Bob weighed 300 pounds and was 94 fahrenheit.";

const insertX = ["Shrek", "Donkey", "Fiona"];
const insertY = ["mythical forest", "castle", "swamp"];
const insertZ = ["hotdog", "sandwich", "hamburger"];


randomize.addEventListener("click", result);

function result() {
    let newStory = storyText;

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(/:insertx:/g, xItem);
    newStory = newStory.replace(/:inserty:/g, yItem);
    newStory = newStory.replace(/:insertz:/g, zItem);

    if (customName.value !== "") {
        const name = customName.value;
        newStory = newStory.replace(/Bob/g, name);
    }

    const uk = document.getElementById("uk").checked;
    if (uk) {
        const weight = Math.round(300 / 14) + ' stone';
        const temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade';

        newStory = newStory.replace(/300 pounds/g, weight);
        newStory = newStory.replace(/94 fahrenheit/g, temperature);
    }

    story.textContent = newStory;
}
