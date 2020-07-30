// import { useOfficers, getOfficers } from "./OfficerProvider.js";
// import { officerHtml } from "./OfficerHtml.js";

// const contentTarget = document.querySelector(".container__officers")
// const eventHub = document.querySelector(".container")

// // Event Listener--Hear Event Hub =========================
// eventHub.addEventListener("officerSelected", (changeEvent) => {
//     const officerSelected = changeEvent.detail.officerName
//     const allOfficers = useOfficers()
//     const filteredOfficers = allOfficers.filter((officerObj) => {
//         return officerSelected === officerObj.arrestingOfficer
//     })
//     render(filteredOfficers)   
// })   

// // render function ========================================
// const render = (officers) => {
//     let htmlRepresentations = ""
//     officers.forEach(officer => {
//         htmlRepresentations += officerHtml(officer)
//     })
//     contentTarget.innerHTML =  
//     `
//     <h3>Glassdale Police Officers</h3>
//     <article class="officer__list">
//     ${htmlRepresentations}
//     </article>
//     ` 
// }


// export const officerList = () => {
//     getOfficers() 

//     .then (() => {
//         const officers = useOfficers()
//         render(officers)             
//     })
// }