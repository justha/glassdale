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


// dispatch "noteStateChanged" to event hub 
export const dispatchNoteStateChange = () => {
    const customEvent = new CustomEvent ("noteStateChanged")
    eventHub.dispatchEvent(customEvent)
}

// saveNote
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
        .then(dispatchNoteStateChange)
} 