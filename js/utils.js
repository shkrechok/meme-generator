
const colorsPalete = { 
    colors: [
    '#f44336', '#e91e63', '#9c27b0', '#673ab7',
    '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4',
    '#009688', '#4caf50', '#8bc34a', '#cddc39',
    '#ffeb3b', '#ffc107', '#ff9800', '#ff5722',
    '#795548', '#9e9e9e', '#607d8b', '#ffffff',
    '#000000',
],
    getColors: function () {
        return this.colors
    },
}




// function renderColorPalette() {
//     const colorPicker = document.querySelector('.color-picker')
//     const colors = colorsPalete.getColors()

//     colors.forEach(function (color) {
//         var colorElement = document.createElement('div')
//         colorElement.className = 'color'
//         colorElement.style.backgroundColor = color
//         colorElement.onclick = function () {
//             onFontFillChange(color)
//         }
//         colorPicker.appendChild(colorElement)
//     })
// }

// colorPickerController = {
//     elColorPicker: document.querySelector('.color-picker'),
//     onInit: function () {
//         this.renderColorPicker()
//     },
//     getColorPalette: function () {
//         const colors = [
//             '#f44336', '#e91e63', '#9c27b0', '#673ab7',
//             '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4',
//             '#009688', '#4caf50', '#8bc34a', '#cddc39',
//             '#ffeb3b', '#ffc107', '#ff9800', '#ff5722',
//             '#795548', '#9e9e9e', '#607d8b', '#ffffff',
//             '#000000',
//         ]

//         return colors
//     },

//     renderColorPalete: function () {
//         const colors = this.getColorPalette()
//         colors.forEach(function (color) {
//             var colorElement = document.createElement('div')
//             const strColors = `<div class="color" style="background-color:${color}" onclick="onFontFillChange(${color})"></div>`
//             colorElement.className = 'color'
//             colorElement.style.backgroundColor = color
//             colorElement.onclick = function () {
//                 onFontFillChange(color)
//             }
//             this.elColorPicker.appendChild(colorElement)
//         })
//     }