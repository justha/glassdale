const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".button__showNotes")

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showNotesButton") {
        const customEvent = new CustomEvent ("showNotesClicked")
        eventHub.dispatchEvent(customEvent)
    }
    console.log("EventListener dispatched showNotesClicked")
})

export const showNotesButton = () => {
    contentTarget.innerHTML = `<button id="showNotesButton">Show Notes</button>`
}

