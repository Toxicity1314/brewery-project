fetch('https://api.openbrewerydb.org/breweries')
    .then(resp => resp.json())
    .then(breweries => breweries.forEach(brewery => breweryList(brewery)))

const reviewForm = document.querySelector('form')
reviewForm.addEventListener('submit', e => displayReview(e))
let currentBrewery = {}
const reviewDiv = document.querySelector('#reviews')


function breweryList(brewery){
    const breweryListDiv = document.querySelector('#brewery-list')
    const breweryName = document.createElement('span')
    breweryListDiv.appendChild(breweryName)
    breweryName.textContent = brewery.name
    breweryName.addEventListener('click', () => displayBreweryData(brewery))    
}

function displayBreweryData(brewery){
    currentBrewery = brewery
    const name = document.querySelector('#brewery-name')
    name.textContent = brewery.name
    
    const breweryPhone = document.querySelector('#brewery-phone')
    breweryPhone.textContent = brewery.phone
    
    const address = document.querySelector('#brewery-address')
    address.innerHTML = adressSetter(brewery)

    const website = document.querySelector('#brewery-website')
    website.textContent = brewery.website_url ? brewery.website_url : "no website"
  
    
    const breweryType = document.querySelector('#brewery-type')
    breweryType.textContent = brewery.brewery_type
    reviewDiv.innerHTML = ""
    if(brewery.comment){
        if(brewery.comment.length===1){
            reviewDiv.appendChild(brewery.comment[0])

        }else{
            brewery.comment.forEach(comment => reviewDiv.appendChild(comment));
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
    if(Object.keys(currentBrewery).length !== 0){
    const reviewToAdd = document.createElement('p')
    reviewToAdd.textContent = e.target['random-name'].value
    if (!currentBrewery.comment){
        currentBrewery.comment = []
    }
    currentBrewery.comment.unshift(reviewToAdd)  
    console.log(currentBrewery)
    displayBreweryData(currentBrewery)
    }else{
        alert('please select a brewery before leaving a review')
    }

    reviewForm.reset()
}

