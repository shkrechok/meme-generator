'use strict'

const memService = {
    currMeme: null,
    memes: [{
        id: 1,
        selectedImgId: 1,
        selectedLineIdx: 0,
        lines: [
            {
                id: 1,
                txt: 'I sometimes eat Falafel',
                font: 'Impact',
                size: 20,
                align: 'left',
                strokeColor: 'black',
                fillColor: 'white',
                pos: { x: 35, y: 35 },
            },
            {
                id: 2,
                txt: 'I never eat Falafel',
                font: 'Impact',
                size: 20,
                align: 'left',
                strokeColor: 'black',
                fillColor: 'white',
                pos: { x: 60, y: 60 },
            },
        ]
    }],
    consoleLog: () => {console.log('currMeme:', this.currMeme)},
    getMeme: function (id) {
        this.currMeme = this.memes.find(meme => meme.id === id)
        return this.currMeme
    },
    setLineTxt: function (txt) {
        const meme = this.currMeme
        meme.lines[meme.selectedLineIdx].txt = txt
    },

    setLineFillColor: function (colorValue) {
        const meme = this.currMeme
        meme.lines[meme.selectedLineIdx].fillColor = colorValue
    },
    setLineFontSize: function (diff) {
        const meme = this.currMeme
        meme.lines[meme.selectedLineIdx].size += diff
    },
    onInit: function () {

    }
}