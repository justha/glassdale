import { getOfficers, useOfficers } from "./OfficerProvider.js";

const contentTarget = document.querySelector(".filters__officer")

const render = officersCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
                ${
                    officersCollection.map(
                        officersObj => {
                            return `<option>${officersObj.name}</option>`
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