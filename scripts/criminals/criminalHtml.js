// Criminal--Name, Age, Conviction, Dates of Incarceration

export const criminalHtml = (criminalObj) => {
    return `
        <section class="criminals">
        <div><b>Name: </b>${criminalObj.name}</div>
        <div><b>Age: </b>${criminalObj.age}</div>
        <div><b>Conviction: </b>${criminalObj.conviction}</div>
        <div><b>Incarceration Start: </b>${criminalObj.incarceration.start}</div>
        <div><b>Incarceration End: </b>${criminalObj.incarceration.end}</div>
        </section>`
}