fetch('https://api.openbrewerydb.org/breweries')
    .then(resp => resp.json())
    .then(breweries => breweries.forEach(brewery => breweryList(brewery)))

let currentBrewery = {}

function breweryList(brewery){
    const breweryListBox = document.querySelector('.left')
    const breweryName = document.createElement('p')
    breweryName.textContent = brewery.name
    breweryName.addEventListener('click', () => displayBreweryData(brewery))
    breweryListBox.appendChild(breweryName)
}

function displayBreweryData(brewery){
    currentBrewery = brewery

    const address = document.querySelector("")
    let adressSetter = ""
    if(brewery.street){
        adressSetter = brewery.street
    }
    if(brewery.address_2){
        adressSetter+= `/n${brewery.address_2}`
    }
    if(brewery.address_3){
        adressSetter+= `/n${brewery.address_3}`
    }
    if(brewery.city){
        adressSetter+=`/n${brewery.city}`
    }
    if(brewery.county_province){
        adressSetter+=`/n${brewery.county_province}`
    }
    if(brewery.state){
        adressSetter+=`/n${brewery.state}`
    }
    if(brewery.postal_code){
        adressSetter+=`/n${brew.postal_code}`
    }
    if(brewery.country){
        adressSetter+=`/n${brewery.country}`
    }
    address.textContent = adressSetter
    const address_2
    const address_3
    const city
    const state
    const postal_code
    const country
    const phone
    const website_url


}