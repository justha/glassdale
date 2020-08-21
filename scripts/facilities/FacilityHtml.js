const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".container__criminals")


export const facilityHtml = (facilityObj, criminals) => {
    return `
        <section class="facility__card">
            <h3 class="facility__name">${facilityObj.facilityName}</h3>
            <divclass="facility__security><b>Security Level: </b>${facilityObj.securityLevel}</div>
            <divclass="facility__capacity><b>Capacity: </b>${facilityObj.capacity}</div>
            <div class="facility__criminals"><b>Criminals: </b></div>
                <ul>${criminals.map(criminal => `<li>${criminal.name}</li>`).join("")}</ul>
        </section>
    `
}