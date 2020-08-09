import { useCriminals } from "./CriminalProvider.js";

const eventHub = document.querySelector(".container")

// event listener -- hear "alibiClicked"; .showModal() method 
eventHub.addEventListener("alibiClicked", (clickEvent) => {

    const contentTarget = document.querySelector (".alibiDialog")   
    const criminalId = clickEvent.detail.criminalChosen
    const allCriminals = useCriminals()

    const targetCriminal = allCriminals.find(
        (criminal) => criminal.id === parseInt(criminalId)
        )
    
    const htmlRepresentation = targetCriminal.known_associates.map(associate => {
        return `
            <h3>${associate.name}</h3>
            <div>${associate.alibi}</div>
        `
        }).join("")
        

    contentTarget.innerHTML = htmlRepresentation
    
    // show dialog
    contentTarget.showModal()

})

 

export const alibiDialog = () => {
    return `
    <dialog class="alibiDialog"></dialog>
    `
}

