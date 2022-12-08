const breweryListDiv = document.querySelector('#brewery-list')
const reviewForm = document.querySelector('#review-form')
reviewForm.addEventListener('submit', e => displayReview(e))


let currentBrewery = {}
const reviewDiv = document.querySelector('#reviews')

//creates a paragraph element, adds a click event to it, updates the elements text content to equal
//the name of the brewery, and finally appends the element to the #brewery-list element
function breweryList(brewery){
    const breweryName = document.createElement('p')
    breweryListDiv.appendChild(breweryName)
    breweryName.textContent = brewery.name
    breweryName.addEventListener('click', () => displayBreweryData(brewery))
      
}

//when a brewery name in #brewery-list is clicked this function is activated.
//this function takes in the brewery object that is associated with the brewery
//that was clicked and sets currentBrewery equal to said brewery object.
//This function then updates the text content of the child nodes of brewery-detail
//with the appropriate information from the brewery object. The function will then
//clear out any information in the #reviews element. Once cleared if there is any reviews associated
//with the brewery object then the function will append those reviews as a child element
//to the #reviews element
function displayBreweryData(brewery){
    currentBrewery = brewery
    const breweryDetail = document.querySelector('#brewery-detail')
    const name = document.querySelector('#brewery-name')
    name.textContent = brewery.name
    
    const breweryPhone = document.querySelector('#brewery-phone')
    breweryPhone.textContent = brewery.phone
    
    const address = document.querySelector('#brewery-address')
    address.innerHTML = addressSetter(brewery)

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
    breweryDetail.style.border = "solid"

}

//Each brewery object has all the address information set into seperate keys.
//this function first checks to make sure there is a value associated with the key.
//if there is a value it adds that information onto our breweryAddress variable.
//This allows all of our brewery address data to be returned as one string
function addressSetter(brewery){
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

//this function is activated when the #reviews-form is submitted
//it checks to see if the currentBrewery object has a comment key.
//If it does not have a comment key it creates a comment key as an empty array.  
//It then takes the data from the forms text box and appends it onto the front
//of the array associated with the comment key. It then resets the form
//and updates the DOM by sending the updated currentBrewry data to the
//displayBreweryData function 
function displayReview(e){
    e.preventDefault()
    if(Object.keys(currentBrewery).length !== 0){
    const reviewToAdd = document.createElement('p')
    reviewToAdd.textContent = e.target['random-name'].value
    if (!currentBrewery.comment){
        currentBrewery.comment = []
    }
    currentBrewery.comment.unshift(reviewToAdd)  
    displayBreweryData(currentBrewery)
    }else{
        alert('please select a brewery before leaving a review')
    }

    reviewForm.reset()
}