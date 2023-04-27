'use strict'



function onInit() {
    imageService.onInit()
    memService.onInit()
    editorController.onInit()
    memeController.onInit()
    galleryController.onInit()
}

function onNavTo(elNavTo) {
    if (elNavTo.classList.contains('active')) return
    onSwitchNav(elNavTo)
    
}

function onSwitchNav(elNavTo) {
    const elNavToData = elNavTo.dataset.section
    const elNavItems = document.querySelectorAll('.main-nav-item')
    const elMainContentItems = document.querySelectorAll('.main-item')
    elNavItems.forEach(elNavItem => elNavItem.classList.remove('active'))
    elMainContentItems.forEach(elMainContentItem => {
        if (!elMainContentItem.classList.contains('hidden')) 
        elMainContentItem.classList.add('hidden')
    })
    elNavTo.classList.add('active')
    const classToCheck = elNavToData
    const elMainContentToShow = document.querySelector(`.${classToCheck}`)
    elMainContentToShow.classList.remove('hidden')

}









