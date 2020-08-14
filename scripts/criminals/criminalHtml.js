const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".container__criminals")


// Criminal card: name, age, conviction, dates of incarceration
export const criminalHtml = (criminalObj) => {
    return `
        <section class="criminal__card">
            <div class="criminal__name">${criminalObj.name}</div>
            <divclass="criminal__age><b>Age: </b>${criminalObj.age}</div>
            <div class="criminal__crime"><b>Crime: </b>${criminalObj.conviction}</div>
            <div class="criminal__termStart"><b>Term Start: </b>${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</div>
            <div class="criminal__termEnd"><b>Term End: </b>${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</div>
            <div class="criminal__officer"><b>Arresting Officer: </b>${criminalObj.arrestingOfficer}</div>

            <button class="criminal__alibiButton" id="criminal__alibiButton--${criminalObj.id}">Alibi</button>
        </section>
    `
}


// event listener -- dispatch "alibiClicked"; use .split() method to get criminalId from alibi button id
contentTarget.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id.startsWith("criminal__alibiButton")) {
        const [prompt, criminalId] = clickEvent.target.id.split("--")
        
        const alibiEvent = new CustomEvent ("alibiClicked", {
            detail: {
                criminalChosen: criminalId
            }
        })
        eventHub.dispatchEvent(alibiEvent)
        
        // console.log checkpoint -- click on "Alibi" button to confirm in console...
        console.log(`"alibiClicked" message dispatched...`, alibiEvent)
    }
})