import { useNotes, getNotes } from "./NoteProvider.js";
import { noteHtml } from "./NoteHtml.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteHistory__list")


eventHub.addEventListener("noteSaved", () => {
    const newNotes = useNotes()
    renderNoteList(newNotes)
})


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


export const noteList = () => {
    getNotes()
    .then (useNotes)
    .then (renderNoteList)
}