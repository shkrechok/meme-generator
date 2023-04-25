'use strict'

let memeController
let editorController
let galleryController


function onInit() {
    imageService.onInit()
    memService.onInit()
    memeController.onInit()
    galleryController.onInit()
    generateColorPalette()

}

function onTextEdit(elLineInput) {
    editorController.setLineTxt(elLineInput.value)
    memeController.renderMem()
}

function onFontFillChange(colorValue) {
    const meme = memService.getMeme(1)
    meme.lines[meme.selectedLineIdx].fillColor = colorValue
    memeController.renderMem()
    editorController.toggleColorPicker()// Closes the color picker after selecting a color
}

function onOpenPalete() {
   editorController.toggleColorPicker()
    
}



galleryController = {
    elGallery: document.querySelector('.g-images'),
    onInit: function () {
        galleryController.renderGallery()
    },

    renderGallery: function () {
        const imgs = imageService.getImges()
        imgs.forEach(img => { 
            const strHtmls = `<img src="${img.url}" onclick="galleryController.onSelectImg(${img.id})">`
            this.elGallery.innerHTML += strHtmls
        })
    },

    onSelectImg: function (id) {
        memService.getMeme(1).selectedImgId = id
        memeController.renderMem()
    }
    
}


editorController = {
    elLineInput: null,
    colorPicker: document.querySelector('.color-picker'),

    setLineTxt: function (txt) {
        const meme = memService.getMeme(1)
        meme.lines[meme.selectedLineIdx].txt = txt
    },

    toggleColorPicker: function () {
        this.colorPicker.classList.toggle('hidden')
        console.log('this.colorPicker:', this.colorPicker)
    }


}


memeController = {
    elCanvas: null,
    ctx: null,
    curMeme: null,

    loadImg: function (id) {
        const image = imageService.getImg(id)
        const elImg = new Image() // Create a new html img element
        elImg.src = image.url // Send a network req to get that image, define the img src
        console.log('elImg:', elImg)

        return elImg;
    },
    onInit: function () {
        this.elCanvas = document.querySelector('canvas')
        this.ctx = this.elCanvas.getContext('2d')
        this.curMeme = memService.getMeme(1)
        this.renderMem()
    },
    renderMem: function () {

        const img = this.loadImg(this.curMeme.selectedImgId)

        // When the image ready draw it on the canvas
        img.onload = () => {
            this.ctx.drawImage(img, 0, 0, this.elCanvas.width, this.elCanvas.height)
            this.curMeme.lines.forEach(line => {
                this.ctx.font = `${line.size}px ${line.font}`
                this.ctx.strokeStyle = line.strokeColor
                this.ctx.fillStyle = line.fillColor
                this.ctx.strokeText(line.txt, line.pos.x, line.pos.y)
                this.ctx.fillText(line.txt, line.pos.x, line.pos.y)
            })
        }
    },

}



