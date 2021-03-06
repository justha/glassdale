import { getCrimes, useCrimes } from "./CrimeProvider.js";

const contentTarget = document.querySelector(".filters__crime")
const eventHub = document.querySelector(".container")


// Event Listener--dispatch to Event Hub ============================
contentTarget.addEventListener("change", (changeEvent) => {
        const customCrimeEvent = new CustomEvent ("crimeSelected", {
            detail: {
                crimeId: changeEvent.target.value
            }
        })
        eventHub.dispatchEvent(customCrimeEvent)
}) 



// CrimeSelect button ===============================================
const render = crimesCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Crime...</option>
                ${
                    crimesCollection.map(
                        crimesObj => {
                            return `<option value="${crimesObj.id}">${crimesObj.name}</option>`
                        }
                    ).join("")
                }
        </select>
    `
}

export const CrimeSelect = () => {
    getCrimes().then(() => {
        const crimes = useCrimes()
        render(crimes)
    })
}

