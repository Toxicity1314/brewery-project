
//global variables and event listeners needed for sorting
const statesArray = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
const brewerySortElement = document.querySelector('#select-how-to-sort')
brewerySortElement.addEventListener('change', e => brewerySortFunction(e))
const sortForm =document.querySelector('#sort-form')
sortForm.addEventListener('reset', ()=> console.log('huzzah'))

//function creates a drop down menu of states to choose from
function states(){
    console.log('it found me')
    const select = document.createElement('select')
    const sortFeatures = document.querySelector('#sort-features')
    console.log(select)
    console.log(sortFeatures)
    sortFeatures.appendChild(select)
    statesArray.forEach(state =>{
        const option = document.createElement('option')
        option.textContent = state
        option.value = state.replaceAll(' ', '_')
        select.appendChild(option)
    })

}

function brewerySortFunction(e){
   // brewerySortElement.style.display = "none"
    states()
    // breweryListDiv.innerHTML =""
    // reviewDiv.innerHTML = ""
    // fetch(`https://api.openbrewerydb.org/breweries?${e.target.value}=micro`)
    // .then(resp => resp.json())
    // .then(breweries => breweries.forEach(brewery => breweryList(brewery)))
}