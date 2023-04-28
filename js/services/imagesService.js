'use strict'
let imageService = {
    imgs: [{ id: 1, url: 'images/1.jpg', keywords: ['funny', 'gov'] },
    { id: 2, url: 'images/2.jpg', keywords: ['funny', 'cat'] },
    { id: 3, url: 'images/3.jpg', keywords: ['funny', 'cat'] },
    { id: 4, url: 'images/9.jpg', keywords: ['funny', 'baby'] },],

    getImg: function (id) {
        return this.imgs.find(img => img.id === id)
    },

    getImges: function () {
        return this.imgs
    },
    onInit: function () {
    }
}