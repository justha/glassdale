const eventHub = document.querySelector(".container")

let notes = []

export const getNotes = () => {
    return fetch ("http://localhost:8088/notes")
        .then(response => response.json())
        .then(notesArray => {
            notes = notesArray
        })
} 

export const useNotes = () => {
    return notes.slice()
}


// dispatch "noteSaved" to event hub 
const dispatchEvent = () => {
    const changeEventNote = new CustomEvent ("noteSaved")
    eventHub.dispatchEvent(changeEventNote)
}


export const saveNote = (note) => {
    const jsonNote = JSON.stringify(note)

    return fetch (`http://localhost:8088/notes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonNote
    })
        .then(getNotes)
        .then(dispatchEvent)
} 