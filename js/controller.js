'use strict'

let memeController = {
    ElCanvas: null,
    Ctx: null,
    
    drawImg: function (id) {
        const image = imageService.getImg(id)
        const elImg = new Image() // Create a new html img element
        elImg.src = image.url // Send a network req to get that image, define the img src
        console.log('elImg:', elImg)
        // When the image ready draw it on the canvas
        elImg.onload = () => {
            this.Ctx.drawImage(elImg, 0, 0, this.ElCanvas.width, this.ElCanvas.height)
        }
    },
    onInit: function () {
        this.ElCanvas = document.querySelector('canvas')
        this.Ctx = this.ElCanvas.getContext('2d')
    },
    renderMem: function () {

    },

}



function onInit() {
    imageService.onInit()
    memService.onInit()
    memeController.onInit()

    memeController.drawImg(1)
}
