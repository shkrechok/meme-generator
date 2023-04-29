'use strict'

const editorController = {
    colorPicker: document.querySelector('.color-picker'),
    elLineInput: document.querySelector('.line-input'),
    
    onInit() {
        this.renderColorsPalette()
        this.renderLinePlaceholder()
    },

    toggleColorPicker: function () {
        this.colorPicker.classList.toggle('hidden')
        console.log('this.colorPicker:', this.colorPicker)
    },

    renderColorsPalette: function () {
        const colorPicker = document.querySelector('.color-picker')
        const colors = colorsPalete.getColors()

        colors.forEach(color => {
            const strHtmls = `<div class="color" style="background-color: ${color}" onclick="editorController.onFontFillChange('${color}')"></div>`
            colorPicker.innerHTML += strHtmls
        })

    },
    
    renderLinePlaceholder: function () {
        this.elLineInput.placeholder = memService.getSelectedLine().txt
    },
    
    onFontFillChange: function (colorValue) {
        memeController.onFontFillChange(colorValue)
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
        elLink.click()
    },

    onSaveMeme: function () {
        const dataUrl = memeController.elCanvas.toDataURL('image/png')
        memService.saveMeme(dataUrl)
    },
}