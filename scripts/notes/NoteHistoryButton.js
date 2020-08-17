const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".note__historyButton")

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "noteHistory") {
        const customEvent = new CustomEvent ("historyClicked")
        eventHub.dispatchEvent(customEvent)
    }
    console.log("EventListener dispatched historyClicked")
})

export const noteHistoryButton = () => {
    contentTarget.innerHTML = `<button class="button__noteHistory" id="noteHistory">Note History</button>`
}

