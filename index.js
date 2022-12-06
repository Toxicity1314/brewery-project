fetch('https://api.openbrewerydb.org/breweries')
    .then(resp => resp.json())
    .then(breweries => breweries.forEach(brewery => breweryList(brewery)))

let currentBrewery = {}

function breweryList(brewery){
    console.log(brewery)
    const breweryListBox = document.querySelector('#left')
    const breweryName = document.createElement('span')
    breweryName.textContent = brewery.name
    breweryName.addEventListener('click', () => displayBreweryData(brewery))
    breweryListBox.appendChild(breweryName)
}

function displayBreweryData(brewery){
    currentBrewery = brewery
    const breweryDetails = document.querySelector('#brewery-detail')
    const address = document.querySelector('#brewery-description')
    const name = document.querySelector('#brewery-name')
    name.textContent = brewery.name
    let adressSetter = ""
    if(brewery.street){
        adressSetter = `${brewery.street}<br>`
    }
    if(brewery.address_2){
        adressSetter+= `${brewery.address_2}<br>`
    }
    if(brewery.address_3){
        adressSetter+= `${brewery.address_3}<br>`
    }
    if(brewery.city){
        adressSetter+=`${brewery.city}, `
    }
    if(brewery.state){
        adressSetter+=`${brewery.state}, `
    }
    if(brewery.postal_code){
        adressSetter+=`${brewery.postal_code}<br>`
    }
    if(brewery.country){
        adressSetter+=`${brewery.country}`
    }
    console.log(adressSetter)
    address.innerHTML = adressSetter
    breweryDetails.appendChild(address)
}
//     const address_2
//     const address_3
//     const city
//     const state
//     const postal_code
//     const country
//     const phone
//     const website_url


// }
// brewery_type": "micro",
//         "street": "400 Brown Cir",
//         "address_2": null,
//         "address_3": null,
//         "city": "Knox",
//         "state": "Indiana",
//         "county_province": null,
//         "postal_code": "46534",
//         "country": "United States",
//         "longitude": "-86.627954",
//         "latitude": "41.289715",
//         "phone": "6308165790",
//         "website_url": null,
//         "updated_at": "2022-11-11T05:07:58.723Z",
//         "created_at": "2022-11-11T05:07:58.723Z"