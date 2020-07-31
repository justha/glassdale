const contentTarget = document.querySelector(".container__noteForm")

const render = () => {
contentTarget.innerHTML = `
<h3>Notes Form</h3>
<form id="noteForm">
    <input type="text" id="noteForm--author" placeholder="enter your name"></input>
    <input type="text" id="noteForm--suspect" placeholder="possible suspect(s)"></input>
    <textarea id="noteForm--comment" placeholder="comments"></textarea>

    <button id="noteForm--saveNote">Save Note</button>
</form>
`
}


export const noteForm = () => {
    render()
}