'use strict'

const editorController = {
    colorPicker: document.querySelector('.color-picker'),
    strokeFill: 'fill',
    elLineInput: document.querySelector('.line-input'),
    
    onInit() {
        this.renderLinePlaceholder()
    },

    toggleColorPicker: function (strokeFill) {
        this.colorPicker.classList.toggle('hidden')
        this.strokeFill = strokeFill
        this.renderColorsPalette()
        console.log('this.strokeFill:', this.strokeFill)
        console.log('this.colorPicker:', this.colorPicker)
    },

    renderColorsPalette: function () {
        const colorPicker = document.querySelector('.color-picker')
        const colors = colorsPalete.getColors()
        colorPicker.innerHTML = ''
        if (this.strokeFill === 'stroke') {
          
        colors.forEach(color => {
            const strHtmls = `<div class="color" style="background-color: ${color}" onclick="editorController.onFontStrokeChange('${color}')"></div>`
            colorPicker.innerHTML += strHtmls
        })
     } else {
        colors.forEach(color => {
            const strHtmls = `<div class="color" style="background-color: ${color}" onclick="editorController.onFontFillChange('${color}')"></div>`
            colorPicker.innerHTML += strHtmls
        })
    }

    },
    
    renderLinePlaceholder: function () {
        this.elLineInput.placeholder = memService.getSelectedLine().txt
    },
    
    onFontFillChange: function (colorValue) {
        memeController.onFontFillChange(colorValue)
        this.toggleColorPicker()// Closes the color picker after selecting a color
    },

    onFontStrokeChange: function (colorValue) {
        memeController.onFontStrokeChange(colorValue)
        this.toggleColorPicker()// Closes the color picker after selecting a color
    },

    onFontSizeChange: function (diff) {
        memeController.onFontSizeChange(diff)
    },

    onInputFocus: function () {
        this.elLineInput.value = memService.getSelectedLine().txt
    },


    onSwitchLine: function (diff) {
        memService.switchLine(diff)
        document.querySelector('.line-input').value = ''
        this.renderLinePlaceholder()
    },

    onAddLine: function () {
        memService.addLine()
        this.renderLinePlaceholder()
        memeController.renderMem()
    },

    onDeleteLine: function () {
        memService.deleteLine()
        this.renderLinePlaceholder()
        memeController.renderMem()
    },

    onDownloadMeme: function (elLink) {
        const data = memeController.elCanvas.toDataURL()
        elLink.href = data
        elLink.download = 'my-meme.jpg'
    },

    onSaveMeme: function () {
        const dataUrl = memeController.elCanvas.toDataURL('image/png')
        memService.saveMeme(dataUrl)
    },
}