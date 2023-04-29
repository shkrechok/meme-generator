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
    
    loadMemesFromStorage: function () {
        this.memes = localStorageService.loadFromStorage('memes')
        if (!this.memes) this.memes = [this.difaultMeme]
        // adding the default meme to the beginning of the array so that it be the one to change
        // thus keeping the default meme intact
        this.memes.unshift(this.difaultMeme)
        console.log('this.memes:', this.memes)
        
    },
    onInit: function () {
        this.loadMemesFromStorage()
        this.currMeme = this.memes[0]
    },
    consoleLog: function () { console.log('currMeme:', this.currMeme) },
    setCurrMeme: function (id) {
        this.currMeme = this.memes.find(meme => meme.id === id)
        this.consoleLog()
    },

    setToDefault: function () {
        this.memes[0] = this.difaultMeme
        this.currMeme = this.memes[0]
    },
    getMeme: function () {
        return this.currMeme
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
        this.consoleLog()
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
        this.consoleLog()
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
        this.currMeme.id = this.memes.length + 1
        this.currMeme.dataUrl = dataUrl
        this.memes.push(this.currMeme)
        // removing the default meme from the beginning of the array so that it won't be saved
        // but it has to remain in the original array so that it can be used as a template again
        const memesToSave = this.memes.slice()
        memesToSave.splice(0, 1)
        localStorageService.saveToStorage('memes', memesToSave)
        this.loadMemesFromStorage()
          
    },

    
}