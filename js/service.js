'use strict'

let imageService = {
    imgs: [{ id: 1, url: 'images/1.jpg', keywords: ['funny', 'cat'] }],
    getImg: function (id) {
        return this.imgs.find(img => img.id === id)
    },
    onInit: function () {
    }
}
let memService = {
    memes: [{
        id: 1,
        selectedImgId: 5,
        selectedLineIdx: 0,
        lines: [
            {
                txt: 'I sometimes eat Falafel',
                size: 20,
                align: 'left',
                color: 'red'
            }
        ]
    }],

    curMeme: null,
    getMeme: function (id) {
        return this.memes.find(meme => meme.id === id)
    },
    onInit: function () {
        this.curMeme = this.getMeme(1)
    }
}




