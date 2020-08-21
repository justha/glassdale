const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".button__showFacilities")

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showFacilitiesButton") {
        const customEvent = new CustomEvent ("showFacilitiesClicked")
        eventHub.dispatchEvent(customEvent)
    }
    console.log("dispatched >> showFacilitiesClicked")
})

export const showFacilitiesButton = () => {
    contentTarget.innerHTML = `<button id="showFacilitiesButton">Show Facilities</button>`
}