// Criminal--Name, Age, Conviction, Dates of Incarceration

export const criminalHtml = (criminalObj) => {
    return `
        <section class="criminal__card">
            <div class="criminal__name">${criminalObj.name}</div>
            <div><b>Age: </b>${criminalObj.age}</div>
            <div><b>Crime: </b>${criminalObj.conviction}</div>
            <div><b>Term Start: </b>${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</div>
            <div><b>Term End: </b>${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</div>
        </section>
    `
}