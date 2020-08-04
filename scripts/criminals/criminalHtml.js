// Criminal--Name, Age, Conviction, Dates of Incarceration

export const criminalHtml = (criminalObj) => {
    return `
        <section class="criminal__card">
            <div class="criminal__name">${criminalObj.name}</div>
            <divclass="criminal__age><b>Age: </b>${criminalObj.age}</div>
            <div class="criminal__crime"><b>Crime: </b>${criminalObj.conviction}</div>
            <div class="criminal__termStart"><b>Term Start: </b>${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</div>
            <div class="criminal__termEnd"><b>Term End: </b>${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</div>
            <div class="criminal__officer"><b>Arresting Officer: </b>${criminalObj.arrestingOfficer}</div>

            <button class="criminal__alibiButton" id="${criminalObj.id}">Associate Alibi</button>
        </section>
    `
}