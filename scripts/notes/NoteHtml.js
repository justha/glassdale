import { deleteNote } from "./NoteProvider.js";

export const noteHtml = (noteObj) => {
    return `
        <section class="note__card">
            <div class="note__author"><b>Author: </b>${noteObj.author}</div>
            <div class="note__suspect"><b>Possible Suspect: </b>${noteObj.criminal.name}</div>
            <div class="note__comment"><b>Comments: </b>${noteObj.comment}</div>
            <div class="note__timestamp"><b>Timestamp: </b>${new Date(noteObj.timestamp).toLocaleDateString('en-US')}</div>
            
            <button class="note__deleteButton" id="deleteButton--${noteObj.id}">Delete</button>
        </section>
    `
}


// hear click event "deletButton--" + render deleteNote()
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteButton--")) {
        const [ prompt, noteId ] = clickEvent.target.id.split("--")
    
    deleteNote(noteId)
    }
})




// Module Responsibility: to convert data to an html string
