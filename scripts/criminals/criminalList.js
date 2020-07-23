import { useCriminals, getCriminals } from "./CriminalProvider.js";
import { criminalHtml } from "./criminalHtml.js";

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
        <h3>Glassdale Criminals</h3>
        <article class="criminal__list">
        ${htmlRepresentations}
        </article>
        `        
    })
}