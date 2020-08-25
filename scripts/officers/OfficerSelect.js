import { getOfficers, useOfficers } from "./OfficerProvider.js";

const contentTarget = document.querySelector(".filters__officer")
const eventHub = document.querySelector(".container")



// Event Listener--dispatch to Event Hub ============================
contentTarget.addEventListener("change", (changeEvent) => {
    const customOfficerEvent = new CustomEvent ("officerSelected", {
        detail: {
            officerName: changeEvent.target.value
        }
    })
    eventHub.dispatchEvent(customOfficerEvent)
})


// OfficerSelect button ===============================================
const render = officersCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Select an officer...</option>
                ${
                    officersCollection.map(
                        officersObj => {
                            return `<option value="${officersObj.name}">${officersObj.name}</option>`
                        }
                    ).join("")
                }
        </select>
    `
}

export const OfficerSelect = () => {
    getOfficers().then(() => {
        const officers = useOfficers()
        render(officers)
    })
}