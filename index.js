fetch('https://api.openbrewerydb.org/breweries')
    .then(resp => resp.json())
    .then(breweries => breweries.forEach(brewery => breweryList(brewery)))

const reviewForm = document.querySelector('form')
reviewForm.addEventListener('submit', e => displayReview(e))
let currentBrewery = {}
const newReview = document.querySelector('#reviews')


function breweryList(brewery){
    const breweryListBox = document.querySelector('#left')
    const breweryName = document.createElement('span')
    breweryListBox.appendChild(breweryName)
    breweryName.textContent = brewery.name
    breweryName.addEventListener('click', () => displayBreweryData(brewery))    
}

function displayBreweryData(brewery){
    currentBrewery = brewery
    const name = document.querySelector('#brewery-name')
    name.textContent = brewery.name
    
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
    newReview.innerHTML = ""
    if(brewery.comment){
        if(brewery.comment.length===1){
            newReview.appendChild(brewery.comment[0])

        }else{
            brewery.comment.forEach(comment => newReview.appendChild(comment));
    }
}
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

function displayReview(e){
    e.preventDefault()
    const reviewToAdd = document.createElement('p')
    reviewToAdd.textContent = e.target['random-name'].value
    if (!currentBrewery.comment){
        currentBrewery.comment = []
    }
    currentBrewery.comment.unshift(reviewToAdd)  
    console.log(currentBrewery)
    displayBreweryData(currentBrewery)
    reviewForm.reset()
}

