import { useCriminals, getCriminals } from "./CriminalProvider.js";
import { criminalHtml } from "./CriminalHtml.js";
import { useCrimes } from "../crimes/CrimeProvider.js";
import { alibiDialog } from "./AlibiDialog.js";

const contentTarget = document.querySelector(".container__criminals")
const eventHub = document.querySelector(".container")


// Event Listener--hear "crimeSelected" =========================
eventHub.addEventListener ("crimeSelected", changeEvent => {

    const crimeSelected = changeEvent.detail.crimeId 
    
    
    // .find() the crime obj that correlates to the crimeId selected from CrimeSelect drop-down
    // use parseInt() to convert crime.id value string into an integer (to match value format in crimesArray)
    const crimesArray = useCrimes()
    const crimeObj = crimesArray.find((crime) => {
        return parseInt(crimeSelected) === crime.id
    })


    const allCriminals = useCriminals()
    const filteredCriminals = allCriminals.filter((criminalObj) => {
        return crimeObj.name === criminalObj.conviction
    })

    render(filteredCriminals)
})


// Event Listener--hear "officerSelected"=========================
eventHub.addEventListener("officerSelected", changeEvent => {
    const officerSelected = changeEvent.detail.officerName
    const allCriminals = useCriminals()

    const filteredCriminals = allCriminals.filter((officerObj) => {
        return officerSelected === officerObj.arrestingOfficer
    })

    render(filteredCriminals)   
})   


// render function ========================================
const render = (criminals) => {
    let htmlRepresentations = ""

    criminals.forEach(criminal => {
        htmlRepresentations += criminalHtml(criminal)
    })
    
    contentTarget.innerHTML =  `
        <h2>Glassdale Criminals</h2>
            <article class="criminal__list">
            ${htmlRepresentations}
            </article>
            ${alibiDialog()}
        `                   
}


// initial list of criminals; renders upon page load--invoked in main.js ===========
export const criminalList = () => {
    getCriminals() 
        .then (() => {
            const criminals = useCriminals()   
            render(criminals)   
        })
}
