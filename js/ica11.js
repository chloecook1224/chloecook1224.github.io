
// Function 1: tellFortune
function tellFortune(children, partnerName, location, jobTitle) {
    return `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${children} kids.`;
}

// Function to randomize the number of kids, partner, location, and job title in the fortune
function randomizeFortune() {
    const partners = ["Alice", "Bob", "Charlie", "Dana", "Eve"];
    const locations = ["New York", "London", "Paris", "Tokyo", "Berlin"];
    const jobs = ["Software Engineer", "Teacher", "Artist", "Doctor", "Scientist"];
    
    const randomKids = Math.floor(Math.random() * 6);  // Random number of kids between 0 and 5
    const randomPartner = partners[Math.floor(Math.random() * partners.length)];
    const randomLocation = locations[Math.floor(Math.random() * locations.length)];
    const randomJob = jobs[Math.floor(Math.random() * jobs.length)];

    // Use the fortune string and inject it into the page
    const fortune = tellFortune(randomKids, randomPartner, randomLocation, randomJob);
    document.getElementById('fortuneOutput').innerHTML = `<p>${fortune}</p>`;
}

// Function 2: calculateDogAge
function calculateDogAge(humanAge) {
    const dogAge = humanAge * 7;
    return `Your doggie is ${dogAge} years old in dog years!`;
}

// Function to handle user input and calculate their dog's age
function calculateUserDogAge() {
    const userAge = document.getElementById('userDogAge').value;
    if (userAge) {
        const result = calculateDogAge(userAge);
        alert(result); // Showing the result in an alert box
    } else {
        alert("Please enter a valid age for your dog.");
    }
}

// Calling calculateDogAge 3 times with different ages and displaying the result
const dogAge1 = calculateDogAge(2);
const dogAge2 = calculateDogAge(4);
const dogAge3 = calculateDogAge(6);

document.getElementById('dogAgeOutput').innerHTML = `
    <p>${dogAge1}</p>
    <p>${dogAge2}</p>
    <p>${dogAge3}</p>
`;

// Function 3: reverseNumber
function reverseNumber(x) {
    return x.toString().split('').reverse().join('');
}

// Calling reverseNumber 2 times with different values
const reversed1 = reverseNumber(32243);
const reversed2 = reverseNumber(98765);

// Outputting reversed numbers to DOM
document.getElementById('reversedNumbers').innerHTML = `
    <p>Reversed 32243: ${reversed1}</p>
    <p>Reversed 98765: ${reversed2}</p>
`;

// Function 4: alphabetOrder
function alphabetOrder(str) {
    return str.split('').sort().join('');
}

// Calling alphabetOrder 2 times with different strings
const ordered1 = alphabetOrder('webmaster');
const ordered2 = alphabetOrder('hello');

// Outputting alphabetically ordered strings to DOM
document.getElementById('alphabetOrdered').innerHTML = `
    <p>Ordered "webmaster": ${ordered1}</p>
    <p>Ordered "hello": ${ordered2}</p>
`;

// Function 5: capitalizeWords
function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Calling capitalizeWords 2 times with different sentences
const capitalized1 = capitalizeWords('the quick brown fox');
const capitalized2 = capitalizeWords('hello world');

// Outputting capitalized strings to DOM
document.getElementById('capitalizedWords').innerHTML = `
    <p>Capitalized "the quick brown fox": ${capitalized1}</p>
    <p>Capitalized "hello world": ${capitalized2}</p>
`;
