'use strict'

const galleryController = {
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
        const elNavTo = document.querySelector('.main-nav-item.editor-btn')
        onSwitchNav(elNavTo)
        memeController.renderMem()
    }

}
