const contentTarget = document.querySelector(".container__noteHistory")
const eventHub = document.querySelector(".container")

// eventHub.addEventListener("click", (clickEvent) => {
//     if (clickEvent.target.id === "noteHistory") {
//         const customEvent = new CustomEvent ("noteHistoryButtonClicked")
//         eventHub.dispatchEvent(customEvent)
//     }
// })

export const noteHistoryButton = () => {
    contentTarget.innerHTML = "<button id=`noteHistory`>View History</button>"
    // console.log("note button rendered")
    // debugger
}