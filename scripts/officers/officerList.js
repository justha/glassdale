import { useOfficers, getOfficers } from "./OfficerProvider.js";
import { officerHtml } from "./officerHtml.js";

const contentTarget = document.querySelector(".container__officers")

export const officerList = () => {
    getOfficers() 

    .then (() => {
        const officers = useOfficers()
        let htmlRepresentations = ""
        officers.forEach(officer => {
            htmlRepresentations += officerHtml(officer)
        })
        contentTarget.innerHTML =  
        `
        <h3>Glassdale Police Officers</h3>
        <article class="officer__list">
        ${htmlRepresentations}
        </article>
        `        
    })
}