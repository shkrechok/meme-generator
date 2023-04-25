'use strict'

let imageService = {
    imgs: [{ id: 1, url: 'images/1.jpg', keywords: ['funny', 'gov'] },
    { id: 2, url: 'images/2.jpg', keywords: ['funny', 'cat'] },
    { id: 3, url: 'images/3.jpg', keywords: ['funny', 'cat'] },],

    getImg: function (id) {
        return this.imgs.find(img => img.id === id)
    },

    getImges: function () {
        return this.imgs
    },
    onInit: function () {
    }
}
let memService = {
    memes: [{
        id: 1,
        selectedImgId: 1,
        selectedLineIdx: 0,
        lines: [
            {
                id: 1,
                txt: 'I sometimes eat Falafel',
                size: 20,
                align: 'left',
                color: 'red',
                pos: { x: 35, y: 35 },
            }
        ]
    }],

    getMeme: function (id) {
        return this.memes.find(meme => meme.id === id)
    },
    onInit: function () {

    }
}




