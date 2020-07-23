import { useCriminals, getCriminals } from "./criminalProvider.js";
import { criminalHtml } from "./criminalHtml.js";

const contentTarget = document.querySelector(".criminalsContainer")

export const criminalList = () => {
    getCriminals() 

    .then (() => {
        const criminals = useCriminals()
        let criminalHtmlRepresentations = ""
        criminals.forEach(criminal => {
            criminalHtmlRepresentations += criminalHtml(criminal)
        })
        contentTarget.innerHTML =  
        `
        <article class="title">Criminals</article>
        ${criminalHtmlRepresentations}
        `        
    })
}