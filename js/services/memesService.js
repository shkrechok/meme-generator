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
        selectedLineId: 1,
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
        this.setToDefault()
    },
    consoleLog: function () { console.log('currMeme:', this.currMeme) },
    setCurrMeme: function (id) {
        this.currMeme = this.memes.find(meme => meme.id === id)
        // this.consoleLog()
    },

    setToDefault: function () {
        this.currMeme = JSON.parse(JSON.stringify(this.difaultMeme))
    },
    

    getSelectedLineid: function () {
        return this.currMeme.selectedLineId
    },
    getSelectedLine: function () {
        return this.currMeme.lines.find(line => line.id === this.currMeme.selectedLineId)
    },
    switchLine: function (diff) {
        const meme = this.currMeme
        let selectedLineIdx = meme.lines.indexOf(this.getSelectedLine())
        selectedLineIdx += diff
        if (selectedLineIdx >= meme.lines.length) selectedLineIdx = 0
        this.currMeme.selectedLineId = this.currMeme.lines[selectedLineIdx].id
    },
    addLine: function () {
        const meme = this.currMeme
        const newLineId = Math.max(...meme.lines.map(d=>d.id)) + 1
         meme.lines.push({
            id: newLineId,
            txt: 'New Line',
            font: 'Impact',
            size: 20,
            align: 'left',
            strokeColor: 'black',
            fillColor: 'white',
            pos: { x: 35, y: 35 },
        }),
            meme.selectedLineId = newLineId
        // this.consoleLog()
    },

    deleteLine: function () {
        const meme = this.currMeme
        const selectedLineIdx = meme.lines.indexOf(this.getSelectedLine())
        meme.lines.splice(selectedLineIdx, 1) 

        meme.selectedLineId = (meme.lines.length === 0)? undefined : meme.lines[0].id
    },

    setLineTxt: function (txt) {
        this.getSelectedLine().txt = txt
    },

    setLineFillColor: function (colorValue) {
        this.getSelectedLine().fillColor = colorValue
    },

    setLineStrokeColor: function (colorValue) {
        this.getSelectedLine().strokeColor = colorValue
    },

    setLineFontSize: function (diff) {
        this.getSelectedLine().size += diff
    },

    saveMeme: function (dataUrl) {
        this.currMeme = JSON.parse(JSON.stringify(this.currMeme)) //  creating a new object, didn`t work with other dictructuring syntax
        this.currMeme.id = this.memes.length + 1
        this.currMeme.dataUrl = dataUrl
        this.memes.push(this.currMeme)
        localStorageService.saveToStorage('memes', this.memes)
        this.loadMemesFromStorage()
        this.setToDefault()
    },

    
}