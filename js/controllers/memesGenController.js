'use strict'

const editorController = {
    elLineInput: null,
    colorPicker: document.querySelector('.color-picker'),

   
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
    onFontFillChange: function (colorValue) {
        memeController.onFontFillChange(colorValue)
        this.toggleColorPicker()// Closes the color picker after selecting a color
    },

    onFontSizeChange: function (diff) {
        memeController.onFontSizeChange(diff)
    },

    onSwitchLine: function () {
        memeController.onSwitchLine()
    },
}