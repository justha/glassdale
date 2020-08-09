import { saveNote } from "./NoteProvider.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".container__noteForm")

// event listener -- hear "noteSaved" click event
eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "noteForm--saveNote") {
        const noteAuthor = document.querySelector("#noteForm--author")
        const noteSuspect = document.querySelector("#noteForm--suspect")
        const noteComment = document.querySelector("#noteForm--comment")

        const newNote = {
            author: noteAuthor.value, 
            suspect: noteSuspect.value,
            comment: noteComment.value, 
            timestamp: Date.now()
        }
        saveNote(newNote)
    }
})


// NOTE--button needs to reside outside of the <form> tags 
const render = () => {
contentTarget.innerHTML = `
<h3>Enter Your Notes Here</h3>
<form id="noteForm">
    <input type="text" id="noteForm--author" placeholder="enter your name"></input>
    <input type="text" id="noteForm--suspect" placeholder="possible suspect(s)"></input>
    <textarea id="noteForm--comment" placeholder="comments here"></textarea>
</form>
<button id="noteForm--saveNote">Save Note</button>
`
}


export const noteForm = () => {
    render()
}