let dino = document.getElementById("dino");
let cactus = document.getElementById("cactus");

document.addEventListener("keydown", function () {
    jump();
});

function jump() {
    if (dino.classList.contains("jump")) return;

    dino.classList.add("jump");

    setTimeout(() => {
        dino.classList.remove("jump");
    }, 500);
}

let checkDead = setInterval(() => {
    let dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
    let cactusRight = parseInt(window.getComputedStyle(cactus).getPropertyValue("right"));

    // Collision
    if (cactusRight > 530 && cactusRight < 580 && dinoBottom <= 40) {
        alert("Game Over!");
    }
}, 10);
