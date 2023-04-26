'use strict'

const memeController = {
    elCanvas: null,
    ctx: null,
    currMeme: null,

    onInit: function () {
        this.elCanvas = document.querySelector('canvas')
        this.ctx = this.elCanvas.getContext('2d')
        this.currMeme = memService.getMeme(1)
        this.renderMem()
    },

    loadImg: function (id) {
        const image = imageService.getImg(id)
        const elImg = new Image() // Create a new html img element
        elImg.src = image.url // Set the image source
        console.log('elImg:', elImg)

        return elImg;
    },
    
    onTextEdit: function (elLineInput) {
        memService.setLineTxt(elLineInput.value)
        this.renderMem()
    },

    onFontFillChange: function (colorValue) {
        memService.setLineFillColor(colorValue)
        this.renderMem()
    },

    onFontSizeChange: function (diff) {
        memService.setLineFontSize(diff)
        this.renderMem()
    },
    
    renderMem: function () {

        const img = this.loadImg(this.currMeme.selectedImgId)  // Load the image

        // When the image ready draw it on the canvas
        img.onload = () => {
            this.ctx.drawImage(img, 0, 0, this.elCanvas.width, this.elCanvas.height)
            this.currMeme.lines.forEach(line => {
                this.ctx.font = `${line.size}px ${line.font}`
                this.ctx.strokeStyle = line.strokeColor
                this.ctx.fillStyle = line.fillColor
                this.ctx.strokeText(line.txt, line.pos.x, line.pos.y)
                this.ctx.fillText(line.txt, line.pos.x, line.pos.y)
            })
        }
    },

}