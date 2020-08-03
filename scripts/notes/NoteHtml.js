export const noteHtml = (noteObj) => {
    return `
        <h4>Note History/h4>
        <section class="note__history">
            <div class="note__author">Author: ${noteObj.author}</div>
            <div class="note__suspect">Possible Suspect(s): ${noteObj.suspect}</div>
            <div class="note__comment">Comments: ${noteObj.comment}</div>
            <div class="note__timestamp">Timestamp: ${new Date(noteObj.timestamp).toLocaleDateString('en-US')}</div>
        </section>
    `
}