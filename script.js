let secretNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;
let guesses = [];

function checkGuess() {

    let guess =
        Number(document.getElementById("guessInput").value);

    attempts++;
    guesses.push(guess);

    document.getElementById("attempts").innerText =
        attempts;

    let li = document.createElement("li");
    li.innerText = guess;
    document.getElementById("guessList")
        .appendChild(li);

   if (guess > secretNumber) {
    document.getElementById("result")
        .innerText = "Too High";
}
else if (guess < secretNumber) {
    document.getElementById("result")
        .innerText = "Too Low";
}
else {
    document.getElementById("result")
        .innerText = "🎉 Correct Guess!";
}
    }
    function resetGame() {

    secretNumber = Math.floor(Math.random() * 100) + 1;

    attempts = 0;

    guesses = [];

    document.getElementById("attempts").innerText = 0;

    document.getElementById("result").innerText = "";

    document.getElementById("guessInput").value = "";

    document.getElementById("guessList").innerHTML = "";

}
