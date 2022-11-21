// 2d canvas element
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d"); // getContext works for canvas element

// player state drop down
let playerState = 'idle'
const dropdown = document.getElementById('animations')
dropdown.addEventListener('change', (e) => {
    playerState = e.target.value;
})


const playerImage = new Image();
playerImage.src = "shadow_dog.png";
const spriteWidth = canvas.width = 575; // calculate from image source
const spriteHeight = canvas.height = 523; // calculate from image source

let gameFrame = 0
const staggerFrames = 5

const spriteAnimations = []
const animationStates = [
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    },
    {
        name: 'fall',
        frames: 7,
    },
    {
        name: 'run',
        frames: 9,
    },
    {
        name: 'dizzy',
        frames: 11,
    },
    {
        name: 'sit',
        frames: 5,
    },
    {
        name: 'roll',
        frames: 7,
    },
    {
        name: 'bite',
        frames: 7,
    },
    {
        name: 'ko',
        frames: 12,
    },
    {
        name: 'getHit',
        frames: 4,
    },
]

animationStates.forEach((state, row) => {
    let stateFrames = {
        loc: []
    }
    for (let col = 0; col < state.frames; col++) {
        let posX = col * spriteWidth;
        let posY = row * spriteHeight;
        stateFrames.loc.push({ x: posX, y: posY })
    }
    spriteAnimations[state.name] = stateFrames;
})

const animate = () => {
    ctx.clearRect(0, 0, spriteWidth,spriteHeight);
    let position = Math.floor(gameFrame / staggerFrames) % spriteAnimations[playerState].loc.length;
    let positionX = spriteAnimations[playerState].loc[position].x
    let positionY    = spriteAnimations[playerState].loc[position].y
    /*
    drawImage input parameters:
    [1] image source
    [2] source x
    [3] source y
    [4] source w
    [5] source h
    [6] destination x
    [7] destination y
    [8] destination w
    [9] destination h
    */
    ctx.drawImage(playerImage, positionX, positionY , spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

    gameFrame++
    requestAnimationFrame(animate);
}

animate();
