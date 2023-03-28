const jokeElement = document.getElementById('joke');
const jokeButton = document.getElementById('joke-button');

jokeButton.addEventListener('click', generateJoke)

generateJoke();

// Using Async/Await
async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        },
    }

    // Fetch is async, so we need to await untill it's done fetching.
    // Whenever you use await inside a function you have to  label that function 'async'.
    // The function you label async and any promises you need to put in a variable use await before it.
    const response = await fetch('https://icanhazdadjoke.com', config)

    // This will return a response but we need .json
    // This also returns a promise to we put await on that too
    const data = await response.json();

    jokeElement.innerHTML = data.joke

    // This is cleaner than fetch,
    // We are setting what we get back from fetch into a variable
    // And whatever we get from variable.json() into a variable
    // And then move on with the coding
}


// Using .then()
// function generateJoke() {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         },
//     }

//     fetch('https://icanhazdadjoke.com', config)
//         .then((response) => response.json())
//         .then((data) =>
//             jokeElement.innerHTML = data.joke
//         );
// }