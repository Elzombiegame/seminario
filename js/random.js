const leaves = document.querySelector("#leaves");
const bird = document.querySelector("#bird");

const birdHeight = bird.clientHeight;
const birdWidth = bird.clientWidth;

const leavesHeight = leaves.clientHeight;
const leavesWidth = leaves.clientWidth;

let numX = Math.floor(Math.random() * (leavesWidth-birdWidth));
let numY = Math.floor(Math.random() * (leavesHeight-birdHeight));

bird.style = `top: ${numY}px; left: ${numX}px; `;