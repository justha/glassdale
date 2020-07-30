import { getCrimes, useCrimes } from "./CrimeProvider.js";


const contentTarget = document.querySelector(".filters__crime")
const eventHub = document.querySelector(".container")


// Event Listener--Dispatch ============================================
contentTarget.addEventListener("change", (changeEvent) => {
        const crimeSelectEvent = new CustomEvent ("crimeSelected", {
            detail: {
                crimeId: changeEvent.target.value
            }
        })
        eventHub.dispatchEvent(crimeSelectEvent)
}) 



// CrimeSelect Button ================================================
const render = crimesCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
                ${
                    crimesCollection.map(
                        crimesObj => {
                            return `<option>${crimesObj.name}</option>`
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

