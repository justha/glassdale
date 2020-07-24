import { getCrimes, useCrimes } from "./CrimeProvider.js";

const contentTarget = document.querySelector(".filters__crime")

const render = crimesCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Crime:</option>
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