import { useNotes, getNotes } from "./NoteProvider.js";
import { noteHtml } from "./NoteHtml.js";
import { useCriminals } from "../criminals/CriminalProvider.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".container__noteList")


// add found-criminal-obj to collection of notes under new "criminal:" key + render all notes using that mapped array
const renderNoteList = notes => {
    const criminals = useCriminals()

    const htmlRepresentations = 
        notes.reverse()
        .map(noteObj => {
            noteObj.criminal = criminals.find(criminalObj => {
                return criminalObj.id === noteObj.criminalId
            })
            console.log("console log noteObj.criminal >>", noteObj.criminal)
            return noteHtml(noteObj)
        }).join("")

    contentTarget.innerHTML = `
        <h2>Note History</h2>
        <div class="noteList">
            ${htmlRepresentations}
        </div>
    `
}


// render all notes w/o mapping notes.json criminalId[fk] to criminals array id[pk]
// const renderNoteList = (notes) => {      
//     let htmlRepresentations = ""

//     notes.reverse().forEach(note => {
//         htmlRepresentations += noteHtml(note)
//     })
    
//     contentTarget.innerHTML =  `
//         <h2>Note History</h2>
//             <div class="noteList">
//             ${htmlRepresentations}
//             </div>
//         `                   
// }


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

