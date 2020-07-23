let criminals = []

export const getCriminals = () => {
    return fetch ("https://criminals.glassdale.us/criminals") 
        .then (Response => Response.json())
        .then (parseCriminals => {
            criminals = parseCriminals
        })
}

export const useCriminals = () => {
    return criminals.slice()
}