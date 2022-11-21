const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')

const canvasWidth = canvas.width = 800
const canvasHeight = canvas.height = 700

let gameSpeed = 8

class BgLayer {
    constructor(image, speedModifier) {
        this.x1 = 0
        this.x2 = image.width
        this.y = 0
        this.width = image.width
        this.height = image.height
        this.image = image
        this.speedModifier = speedModifier
        this.speed = gameSpeed * this.speedModifier
    }

    update() {
        this.speed = gameSpeed * this.speedModifier
        if (this.x1 <= -this.width) this.x1 = this.width - this.speed
        if (this.x2 <= -this.width) this.x2 = this.width - this.speed
        this.x1 = Math.floor(this.x1 - this.speed)
        this.x2 = Math.floor(this.x2 - this.speed)

    }

    draw() {
        ctx.drawImage(this.image, this.x1, this.y, this.width, this.height)
        ctx.drawImage(this.image, this.x2, this.y, this.width, this.height)
    }

}

const bgLayer1 = new Image()
bgLayer1.src = "layer-1.png"
const bgLayer2 = new Image()
bgLayer2.src = "layer-2.png"
const bgLayer3 = new Image()
bgLayer3.src = "layer-3.png"
const bgLayer4 = new Image()
bgLayer4.src = "layer-4.png"
const bgLayer5 = new Image()
bgLayer5.src = "layer-5.png"

const layer1 = new BgLayer(bgLayer1, 0.2)
const layer2 = new BgLayer(bgLayer2, 0.4)
const layer3 = new BgLayer(bgLayer3, 0.6)
const layer4 = new BgLayer(bgLayer4, 0.8)
const layer5 = new BgLayer(bgLayer5, 1.0)

const gameObjects = [layer1, layer2, layer3, layer4, layer5]

function animate() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
    gameObjects.forEach(object => {
        object.update()
        object.draw()
    })
    requestAnimationFrame(animate)
}

animate()


