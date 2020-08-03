import { useNotes, getNotes } from "./NoteProvider.js";
import { noteHtml } from "./NoteHtml.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".container__noteList")

// event listener--hear "noteHistory" click event
// eventHub.addEventListener("noteHistoryButtonClicked", noteList)



const render = (notes) => {
    contentTarget.innerHTML = notes.map((noteObj) => {
        return noteHtml(noteObj)
    }
    ).join("")
}

export const noteList = () => {
    getNotes()
    .then (useNotes)
    .then (render)
}