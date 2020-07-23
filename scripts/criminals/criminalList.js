import { useCriminals, getCriminals } from "./criminalProvider.js";
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
        <article class="title">Criminals</article>
        ${htmlRepresentations}
        `        
    })
}