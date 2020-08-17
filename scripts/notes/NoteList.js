import { useNotes, getNotes } from "./NoteProvider.js";
import { noteHtml } from "./NoteHtml.js";
import { useCriminals } from "../criminals/CriminalProvider.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".note__list")


// renders all notes 
const renderNoteList = (notes) => {   
   let htmlRepresentations = ""

    notes.forEach(note => {
        htmlRepresentations += noteHtml(note)
    })
    
    contentTarget.innerHTML =  `
        <h2>Note History</h2>
            <div class="noteList">
            ${htmlRepresentations}
            </div>
        `                   
}
// export entire module to main.js so that noteList() loads on initial page load 
export const noteList = () => {
    getNotes()
    .then (useNotes)
    .then (renderNoteList)
}


// hear "historyClicked" + render noteList()
eventHub.addEventListener ("historyClicked", noteList)
// hear "noteStateChanged" + render note list
eventHub.addEventListener("noteStateChanged", () => {
    const newNotes = useNotes()
    renderNoteList(newNotes)
})

