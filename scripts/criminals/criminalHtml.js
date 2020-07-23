// Criminal--Name, Age, Conviction, Dates of Incarceration

const criminalHtml = (criminalObj) => {
    return `
    <section>
    Name: ${criminalObj.name}
    Age: ${criminalObj.age}
    Conviction: ${criminalObj.conviction}
    Incarceration Start: ${criminalObj.incarceration.start}
    Incarceration End: ${criminalObj.incarceration.end}
    </section>
    `
}