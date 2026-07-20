console.log("welcome to simon says game");

let gameSeq = [];
let userSeq = [];
let level = 0;
let started = false;
let btnColors = ["G", "R", "Y", "B"];

let startbtn = document.getElementById("start-button");
startbtn.addEventListener("click", function () {
    if (!started) {
        console.log("game started");
        started = true;
        levelUp();
    }
});

function levelUp() {
    level++;
    document.getElementById("level").innerText = "Level: " + level;

    let randColor = random();
    gameSeq.push(randColor); // Store in sequence

    flashBtn(randColor);
}

function random() {
    let randomindex = Math.floor(Math.random() * 4);
    return btnColors[randomindex];
}

function flashBtn(color) {
    let btn = document.getElementById(color); // Fixed ID selection
    btn.setAttribute("style", "opacity: 0.5");
    setTimeout(() => {
        btn.setAttribute("style", "opacity: 1");
    }, 100);
}