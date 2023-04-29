'use strict'
const canvasService = {
    canvasSize: { width: 500, height: 500 },
    elCanvasContainer: document.querySelector('.canvas-container'),

    getCanvasContainerSize: function () {
        return { width: this.elCanvasContainer.offsetWidth, height: this.elCanvasContainer.offsetHeight }
    }
}


const memService = {
    currMeme: null,
    difaultMeme: {
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
                align: 'middle',
                strokeColor: 'black',
                fillColor: 'white',
                pos: { x: 60, y: 60 },
            },
        ]
    },
    
    memes: [],

    getMemes: function () {
        return this.memes
    },
    getMeme: function () {
        return this.currMeme
    },
    
    loadMemesFromStorage: function () {
        const memes = localStorageService.loadFromStorage('memes')
        if (memes)
        {
            this.memes = memes
        }
        console.log('this.memes:', this.memes)
        
    },
    onInit: function () {
        this.loadMemesFromStorage()
        this.currMeme = this.difaultMeme
    },
    consoleLog: function () { console.log('currMeme:', this.currMeme) },
    setCurrMeme: function (id) {
        this.currMeme = this.memes.find(meme => meme.id === id)
        this.consoleLog()
    },

    setToDefault: function () {
        this.currMeme = this.difaultMeme
    },
    

    getSelectedLineidx: function () {
        return this.currMeme.selectedLineIdx
    },
    getSelectedLine: function () {
        return this.currMeme.lines[this.currMeme.selectedLineIdx]
    },
    switchLine: function (diff) {
        const meme = this.currMeme
        meme.selectedLineIdx += diff
        if (meme.selectedLineIdx >= meme.lines.length) meme.selectedLineIdx = 0
        this.currMeme.selectedLineIdx = meme.selectedLineIdx
    },
    addLine: function () {
        const meme = this.currMeme
        meme.lines.push({
            id: meme.lines.length + 1,
            txt: 'New Line',
            font: 'Impact',
            size: 20,
            align: 'left',
            strokeColor: 'black',
            fillColor: 'white',
            pos: { x: 35, y: 35 },
        }),
            meme.selectedLineIdx = meme.lines.length - 1
        this.consoleLog()
    },

    deleteLine: function () {
        const meme = this.currMeme
        meme.lines.splice(meme.selectedLineIdx, 1)
        meme.selectedLineIdx = 0
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

    saveMeme: function (dataUrl) {
        this.currMeme = JSON.parse(JSON.stringify(this.currMeme)) //  creating a new object
        this.currMeme.id = this.memes.length + 1
        this.currMeme.dataUrl = dataUrl
        this.memes.push(this.currMeme)
        localStorageService.saveToStorage('memes', this.memes)
        this.loadMemesFromStorage()
        this.setToDefault()
    },

    
}