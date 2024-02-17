function getElementWithId (id) {
    return document.querySelector(`#${id}`)
}

function getElementsAllByClass(className) { 
    return document.querySelectorAll(`.${className}`)
};

function createNewElement(tag) {
    return document.createElement(tag)
};

function setInnerText (element, value) {
    element.innerText = value
}