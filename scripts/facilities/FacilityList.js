import { getFacilities, useFacilities } from "../facilities/FacilityProvider.js";
import { facilityHtml } from "./FacilityHtml.js";
import { useCriminals } from "../criminals/CriminalProvider.js";
import { getCriminalFacilities, useCriminalFacilities } from "../facilities/CriminalFacilityProvider.js";

const contentTarget = document.querySelector(".container__facilities")
const eventHub = document.querySelector(".container")


const render = (facilities, allCriminals, allRelationships) => {
    const htmlRepresentations = facilities.map(facility => {               
        const relationshipsForThisFacility = allRelationships.filter(cf => cf.facilityId === facility.id)
        const criminals = relationshipsForThisFacility.map(cf => {
            const matchingCriminalObj = allCriminals.find(criminal => criminal.id === cf.criminalId)
            return matchingCriminalObj
        })
        
        return facilityHtml(facility, criminals)
        }
    ).join("")
    
    contentTarget.innerHTML =  `
        <h2>Facilities</h2>
            <article class="facility__list">
            ${htmlRepresentations}
            </article>
        `                   
}


export const facilityList = () => {
    getFacilities()                                         
    .then(getCriminalFacilities)
    .then(() => {
        const facilities = useFacilities()                   
        const criminals = useCriminals()                     
        const criminalFacilities = useCriminalFacilities()   

        render(facilities, criminals, criminalFacilities)     
    })
}


eventHub.addEventListener ("showFacilitiesClicked", facilityList)
