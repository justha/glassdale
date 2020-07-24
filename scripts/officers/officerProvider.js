let officers = []

export const getOfficers = () => {
    return fetch ("https://criminals.glassdale.us/officers") 
        .then (response => response.json())
        .then (officersArray => {
            officers = officersArray
        })
}

export const useOfficers = () => {
    return officers.slice()
}