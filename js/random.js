for (let index = 1; index <= cuenta ; index++) {
    const leaves = document.querySelector("#leaves");
    const bird = document.getElementById("bird "+index);

    const birdHeight = bird.clientHeight;
    const birdWidth = bird.clientWidth;

    const leavesHeight = leaves.clientHeight;
    const leavesWidth = leaves.clientWidth;
    console.log(leavesHeight+" "+leavesWidth)

    let numX = Math.floor(Math.random() * (leavesWidth-birdWidth));
    let numY = Math.floor(Math.random() * (leavesHeight-birdHeight));

    console.log(numX+" "+numY)
    bird.style = `top: ${numY}px; left: ${numX}px; `;
    
}