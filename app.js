console.log("Welcome to Simon Says Game");

let level = 0;
let gameSeq = [];
let userSeq = [];
let btnColors = ["G", "R", "Y", "B"];

// Start Button
let startBtn = document.getElementById("start-button");

startBtn.addEventListener("click", function () {
    if (level === 0) {
        console.log("Game Started");
        levelUp();
    }
});

// Color Button Click Events
let btns = document.getElementsByClassName("color-button");

for (let btn of btns) {
    btn.addEventListener("click", appendToUserSeq);
}

// Increase Level
function levelUp() {
    userSeq = []; // Clear previous user sequence

    level++;
    document.getElementById("level").innerText = "Level: " + level;

    appendToGameSeq();
}

// Generate Random Color
function random() {
    let randomIndex = Math.floor(Math.random() * 4);
    return btnColors[randomIndex];
}

// Add Color to Game Sequence
function appendToGameSeq() {
    let color = random();

    gameSeq.push(color);

    console.log("Game Sequence:", gameSeq);

    flashBtn(color);
}

// Flash Animation
function flashBtn(color) {
    let btn = document.getElementById(color);

    btn.style.opacity = "0.5";

    setTimeout(() => {
        btn.style.opacity = "1";
    }, 300);
}

// User Click
function appendToUserSeq() {

    let color = this.id;

    userSeq.push(color);

    flashBtn(color);

    console.log("User Sequence:", userSeq);

    check();
}

// Check User Input
function check() {

    let idx = userSeq.length - 1;

    if (userSeq[idx] === gameSeq[idx]) {

        console.log("Correct");

        // User completed the whole sequence
        if (userSeq.length === gameSeq.length) {

            setTimeout(() => {
                levelUp();
            }, 700);
        }

    } else {

        console.log("Game Over");

        document.getElementById("level").innerText =
            "Game Over! Click Start to Play Again";

        resetGame();
    }
}

// Reset Game
function resetGame() {

    level = 0;
    gameSeq = [];
    userSeq = [];
}
