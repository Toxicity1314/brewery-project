fetch('https://api.openbrewerydb.org/breweries')
    .then(resp => resp.json())
    .then(breweries => breweries.forEach(brewery => breweryList(brewery)))

let currentBrewery = {}

function breweryList(brewery){
    const breweryListBox = document.querySelector('#left')
    const breweryName = document.createElement('span')
    breweryListBox.appendChild(breweryName)
    breweryName.textContent = brewery.name
    breweryName.addEventListener('click', () => displayBreweryData(brewery))
    
}

function displayBreweryData(brewery){
    currentBrewery = brewery
    console.log(brewery)
    const name = document.querySelector('#brewery-name')
    name.textContent = "hello"
    
    const breweryPhone = document.querySelector('#brewery-phone')
    breweryPhone.textContent = brewery.phone
    
    const address = document.querySelector('#brewery-description')
    address.innerHTML = adressSetter(brewery)

    const website = document.querySelector('#brewery-website')
    if(brewery.website_url){
    website.textContent = brewery.website_url
    }else{
        website.textContent = "no website"
    }
    
    const breweryType = document.querySelector('#brewery-type')
    breweryType.textContent = brewery.brewery_type
}

function adressSetter(brewery){
    let breweryAddress =""
    if(brewery.street){
        breweryAddress = `${brewery.street}<br>`
    }
    if(brewery.address_2){
        breweryAddress+= `${brewery.address_2}<br>`
    }
    if(brewery.address_3){
        breweryAddress+= `${brewery.address_3}<br>`
    }
    if(brewery.city){
        breweryAddress+=`${brewery.city}, `
    }
    if(brewery.state){
        breweryAddress+=`${brewery.state}, `
    }
    if(brewery.postal_code){
        breweryAddress+=`${brewery.postal_code}<br>`
    }
    if(brewery.country){
        breweryAddress+=`${brewery.country}`
    }
    return breweryAddress

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