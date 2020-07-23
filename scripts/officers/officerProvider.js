let officers = []

export const getOfficers = () => {
    return fetch ("https://criminals.glassdale.us/officers") 
        .then (Response => Response.json())
        .then (parseOfficers => {
            officers = parseOfficers
        })
}

export const useOfficers = () => {
    return officers.slice()
}