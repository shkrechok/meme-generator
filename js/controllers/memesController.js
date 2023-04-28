'use strict'

const memeController = {
    elCanvas: null,
    elCanvasContainer: document.querySelector('.canvas-container'),
    ctx: null,
    currMeme: null,

    onInit: function () {
        this.elCanvasContainer.innerHTML = ''
        this.elCanvasContainer.innerHTML = `<canvas class="canvas"></canvas>`
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
        const imgWidth = img.naturalWidth
        const imgHeight = img.naturalHeight
        console.log(`Image size is ${imgWidth}W x ${imgHeight}H`)
        const imgRatio = imgHeight / imgWidth
        const canvasContainerRatio = canvasService.getCanvasContainerSize().height / canvasService.getCanvasContainerSize().width
        const sideSize = canvasContainerRatio < 1 ? canvasService.getCanvasContainerSize().height : canvasService.getCanvasContainerSize().width
        this.elCanvas.width = sideSize
        this.elCanvas.height = sideSize * imgRatio


        console.log(`Canvas size set to ${this.elCanvas.width}W x ${this.elCanvas.height}H`)

        // When the image ready draw it on the canvas
        img.onload = () => {
            this.ctx.drawImage(img, 0, 0, this.elCanvas.width, this.elCanvas.height)
            this.currMeme.lines.forEach(line => {
                this.ctx.textAlign = line.align
                this.ctx.font = `${line.size}px ${line.font}`
                // this.ctx.font = `${line.size*5}% ${line.font}`
                this.ctx.strokeStyle = line.strokeColor
                this.ctx.fillStyle = line.fillColor
                console.log('line length:', this.ctx.measureText(line.txt).width)
                line.pos.x = (this.elCanvas.width / 2) - (this.ctx.measureText(line.txt).width / 2)
                line.pos.y = (line.id === 1) ? 50 : this.elCanvas.height - 50 - (line.id-2) * 50
                this.ctx.strokeText(line.txt, line.pos.x, line.pos.y)
                this.ctx.fillText(line.txt, line.pos.x, line.pos.y)
                
            })
        }
          
    },

}