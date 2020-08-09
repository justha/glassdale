import { useCriminals } from "./CriminalProvider.js";

const eventHub = document.querySelector(".container")

// event listener -- hear "alibiClicked"; .showModal() method 
eventHub.addEventListener("alibiClicked", (clickEvent) => {

    const contentTarget = document.querySelector (".criminal__alibiDialogBox")   
    const criminalId = clickEvent.detail.criminalChosen
    const allCriminals = useCriminals()

    const targetCriminal = allCriminals.find(
        (criminal) => criminal.id === parseInt(criminalId)
        )
    
    const htmlRepresentation = targetCriminal.known_associates.map(associate => {
        return `
            <section class="criminal__alibiAssociate">
            <div><b>Associate:</b> ${associate.name}</div>
            <div><b>Alibi:</b> ${associate.alibi}</div>
            </section>
        `
        }).join("")
        

    contentTarget.innerHTML = htmlRepresentation
    
    // show dialog
    contentTarget.showModal()
})

 
//export alibiDialog() to add to CriminalList.js innerHTML
export const alibiDialog = () => {
    return `
    <dialog class="criminal__alibiDialogBox"></dialog>
    `
}

