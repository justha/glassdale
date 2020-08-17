import { saveNote } from "./NoteProvider.js";
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".container__noteForm")

// hear "noteSaved" click event + render saveNote()
eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "noteForm--saveButton") {
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


// NOTE: button has to reside OUTSIDE of <form> tags
// Note Form: input fields + drop-down option selector
const render = (criminals) => {
    contentTarget.innerHTML = `
    <h3>Enter Your Notes Here</h3>
    <form id="noteForm">
        <input type="text" id="noteForm--author" placeholder="enter your name..."></input>
        
        <select id="noteForm--suspect" placeholder="possible suspect">
            <option value="0">select a criminal...</option>
            ${
                criminals.map(criminalObj => {
                return `<option value="${criminalObj.id}">${criminalObj.name}</option>`
                })
            }
        </select>
        
        <textarea id="noteForm--comment" placeholder="comments here..."></textarea>
    </form>

    <button id="noteForm--saveButton">Save</button>
    `
}


export const noteForm = () => {
    getCriminals()
    .then (()=> {
        const criminals = useCriminals()
        render(criminals)
    })
}