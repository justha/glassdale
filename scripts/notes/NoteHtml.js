// Module Responsibility: to convert data to an html string

export const noteHtml = (noteObj) => {
    return `
        <section class="note__card">
            <div class="note__author"><b>Author: </b>${noteObj.author}</div>
            <div class="note__suspect"><b>Possible Suspect: </b>${noteObj.name}</div>
            <div class="note__comment"><b>Comments: </b>${noteObj.comment}</div>
            <div class="note__timestamp"><b>Timestamp: </b>${new Date(noteObj.timestamp).toLocaleDateString('en-US')}</div>
        </section>
    `
}