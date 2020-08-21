import { useCriminals, getCriminals } from "./CriminalProvider.js";
import { criminalHtml } from "./CriminalHtml.js";
import { useCrimes } from "../crimes/CrimeProvider.js";
import { alibiDialog } from "./AlibiDialog.js";
import { getFacilities, useFacilities } from "../facilities/FacilityProvider.js";
import { getCriminalFacilities, useCriminalFacilities } from "../facilities/CriminalFacilityProvider.js";

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


// render 
const render = (criminals, allFacilities, allRelationships) => {

    // Step 1 - Iterate all criminals
    const htmlRepresentations = criminals.map(criminal => {               
        // Step 2 - Filter all relationships to get only ones for this criminal
        const relationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminal.id)
        // Step 3 - Convert the relationships to facilities with map()
        const facilities = relationshipsForThisCriminal.map(cf => {
            const matchingFacilityObj = allFacilities.find(facility => facility.id === cf.facilityId)
            return matchingFacilityObj
        })
        
        // Step 4 - Must pass the matching facilities to the Criminal component
        return criminalHtml(criminal, facilities)
        }
    ).join("")
    
    contentTarget.innerHTML =  `
        <h2>Criminals</h2>
            <article class="criminal__list">
            ${htmlRepresentations}
            </article>
            ${alibiDialog()}
        `                   
}


// list of criminals; renders upon page load--invoked in main.js ===========
export const criminalList = () => {
    getFacilities()                                         // Kick off the fetching of both collections of data
    .then(getCriminalFacilities)
    .then(() => {
        const criminals = useCriminals()                     // Pull in the data now that it has been fetched
        const facilities = useFacilities()                   // Pull in the data now that it has been fetched
        const criminalFacilities = useCriminalFacilities()   // Pull in the data now that it has been fetched

        render(criminals, facilities, criminalFacilities)      // Pass all three collections of data to render()
    })
}




// original render function, before adding criminal-facility relationships ===========
// const render = criminals => {
//     let htmlRepresentations = ""
//     criminals.forEach(criminal => {
//         htmlRepresentations += criminalHtml(criminal)
//     })
    
//     contentTarget.innerHTML =  `
//         <h2>Glassdale Criminals</h2>
//             <article class="criminal__list">
//             ${htmlRepresentations}
//             </article>
//             ${alibiDialog()}
//         `                   
// }

// original list of criminals, before adding criminal-facility relationships; renders upon page load--invoked in main.js 
// export const criminalList = () => {
//     getCriminals() 
//     .then (() => {
//         const criminals = useCriminals()   
//         render(criminals)   
//     })
// }