import { saveNote } from "./NoteProvider.js";
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".container__noteForm")
const saveTarget = document.querySelector(".note__saveButton")


// hear "noteSaved" click event + render saveNote()
eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "saveNoteButton") {
        const noteAuthor = document.querySelector("#noteForm--author")
        const noteCriminal = document.querySelector("#noteForm--suspect")
        const noteComment = document.querySelector("#noteForm--comment")
        
        const newNote = {
            author: noteAuthor.value, 
            criminalId: noteCriminal.value,
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
        <h2>Enter Your Notes Here</h2>
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
    `
    
    saveTarget.innerHTML = `
        <button id="saveNoteButton">Save</button>
    `
}


export const noteForm = () => {
    getCriminals()
    .then (()=> {
        const criminals = useCriminals()
        render(criminals)
    })
}