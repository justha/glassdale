import { useCriminals, getCriminals } from "./CriminalProvider.js";
import { criminalHtml } from "./CriminalHtml.js";

const contentTarget = document.querySelector(".container__criminals")

export const criminalList = () => {
    getCriminals() 

    .then (() => {
        const criminals = useCriminals()
        let htmlRepresentations = ""
        criminals.forEach(criminal => {
            htmlRepresentations += criminalHtml(criminal)
        })
        contentTarget.innerHTML =  
        `
        <h4>Glassdale Criminals</h4>
        <article class="criminal__list">
        ${htmlRepresentations}
        </article>
        `        
    })
}