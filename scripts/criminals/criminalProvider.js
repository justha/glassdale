const eventHub = document.querySelector(".container")

let criminals = []

export const getCriminals = () => {
    return fetch ("https://criminals.glassdale.us/criminals") 
        .then (response => response.json())
        .then (criminalsArray => {
            criminals = criminalsArray
        })
}

export const useCriminals = () => {
    return criminals.slice()
}

// dispatch "filterStateChanged"
export const dispatchFilterStateChange = () => {
    const customEvent = new CustomEvent ("filterStateChanged")
    eventHub.dispatchEvent(customEvent)
}