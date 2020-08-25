const eventHub = document.querySelector(".container")

// dispatch "filterStateChanged"
export const dispatchFilterStateChange = () => {
    const customEvent = new CustomEvent ("filterStateChanged")
    eventHub.dispatchEvent(customEvent)
}