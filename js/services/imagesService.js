'use strict'
let imageService = {
    imgs: [{ id: 1, url: 'images/1.jpg', keywords: ['funny', 'gov'] },
    { id: 2, url: 'images/2.jpg', keywords: ['funny', 'cat'] },
    { id: 3, url: 'images/3.jpg', keywords: ['funny', 'cat'] },
    { id: 4, url: 'images/4.jpg', keywords: ['funny', 'cat'] },
    { id: 5, url: 'images/5.jpg', keywords: ['funny', 'baby'] },
    { id: 6, url: 'images/6.jpg', keywords: ['funny', 'baby'] },
    { id: 7, url: 'images/7.jpg', keywords: ['funny', 'baby'] },
    { id: 8, url: 'images/8.jpg', keywords: ['funny', 'baby'] },
    { id: 9, url: 'images/9.jpg', keywords: ['funny', 'baby'] },
    { id: 10, url: 'images/10.jpg', keywords: ['funny', 'baby'] },
    { id: 11, url: 'images/11.jpg', keywords: ['funny', 'baby'] },
    { id: 12, url: 'images/12.jpg', keywords: ['funny', 'baby'] },
    { id: 13, url: 'images/13.jpg', keywords: ['funny', 'baby'] },
    { id: 14, url: 'images/14.jpg', keywords: ['funny', 'baby'] },
    { id: 15, url: 'images/15.jpg', keywords: ['funny', 'baby'] },
    { id: 16, url: 'images/16.jpg', keywords: ['funny', 'baby'] },
    { id: 17, url: 'images/17.jpg', keywords: ['funny', 'baby'] },
    { id: 18, url: 'images/18.jpg', keywords: ['funny', 'baby'] },
     ],
    

    getImg: function (id) {
        return this.imgs.find(img => img.id === id)
    },

    getImges: function () {
        return this.imgs
    },
    onInit: function () {
    },
    
}