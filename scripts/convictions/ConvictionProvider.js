let crimes = []

export const getCrimes = () => {
    return fetch("https://criminals.glassdale.us/crimes")
    .then(response => response.json())
    .then (crimesArray => {
        crimes = crimesArray
    })
}

export const useCrimes = () => {
    return crimes.slice()
}