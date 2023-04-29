'use strict'

const localStorageService = {
    saveToStorage: function (key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    },

    loadFromStorage: function (key) {
        return JSON.parse(localStorage.getItem(key))
    }
}