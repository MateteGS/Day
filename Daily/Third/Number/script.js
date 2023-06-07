const hint = document.getElementById("hint");
const noOfGuesssesRef = document.getElementById("no-of-guesses");
const guessedNumsRef = document.getElementById("guessed-nums");
const restartButton = document.getElementById("restart");
const game = document.getElementById("game");
const guessInput = document.getElementById("guess");
const checkButton = document.getElementById("check-btn")

let answer, noOfGuesses, guessedNumsArr;

const play = () => {
    const userGuess = guessInput.value;
    if (userGuess < 1 || userGuess > 100 || isNaN){
        alert("Please enter a valid number between 1 and 100.");
        return;
    }
    if(userGuess != answer) {
        if(userGuess < answer){
           hint.innerHTML = "Too low. Try Again!"
        } else {
            hint.innerHTML = "Too high. Try Again!"
        }
        noOfGuesssesRef.innerHTML = `<span>No. Of Guesses:</span> ${noOfGuesses}`;
        guessedNumsRef.innerHTML = `<span>Guessed Numbers are: </span>${guessedNumsArr.join(",")}`;
        hint.classList.remove("error");
        setTimeout(() => {
            hint.classList.add("error");
        },10)
    }
    else {
        hint.innerHTML = `congratulations!<br> The number  was <span> ${answer}</span>.<br>You guessed the number in <span>${noOfGuesses}</span>triess.`;
        hint.classList.add("success");
        game.style.display = "none";
        restartButton.style.display = "block";
    }
};

const init = () => {
    console.log("Game Started");
    answer = Math.floor(Math.random() * 100) + 1
    console.log(answer);
    noOfGuesses = 0;
    guessedNumsArr = [];
    noOfGuesssesRef.innerHTML = "No. Of Guesses: 0";
    guessedNumsRef.innerHTML = "Guessed Numbers are: None";
    guessInput.value = "";
    hint.classList.remove("success","error");
}

guessInput.addEventListener("keydown", (event) => {
   if(event.keyCode === 13) {
    event.preventDefault();
    play();
   }
});

restartButton.addEventListener("click", () => {
    game.style.display = "grid";
    restartButton.style.display = "";
    hint.innerHTML = "";
    hint.classList.remove("success");
    init();
})

window.addEventListener("load", init);

checkButton.addEventListener("click",play)