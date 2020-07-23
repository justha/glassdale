import { useOfficers, getOfficers } from "./officerProvider.js";
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
        <article class="title">Officers</article>
        ${htmlRepresentations}
        `        
    })
}