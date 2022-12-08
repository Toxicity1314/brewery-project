
//global variables and event listeners needed for sorting
const statesArray = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
const sortOptions = document.querySelector('#sort-options')
const brewerySortElement = document.querySelector('#select-how-to-sort')
brewerySortElement.addEventListener('change', e => brewerySortingMethod(e))
const sortForm =document.querySelector('#sort-form')
sortForm.addEventListener('reset', ()=> formReset())

//function creates a drop down menu of states to choose from
function states(){
    sortOptions.style.display = "block"
    const stateSelect = document.createElement('select')
    const sortFeatures = document.querySelector('#sort-options')
    const stateSort = document.createElement('label')
    stateSort.textContent = "Please select a state:"
    sortFeatures.appendChild(stateSort)
    sortFeatures.appendChild(stateSelect)
    statesArray.forEach(state =>{
        const option = document.createElement('option')
        option.textContent = state
        option.value = state.replaceAll(' ', '_')
        stateSelect.appendChild(option)
    })

    stateSelect.addEventListener('change', (e)=> fetchSort('by_state', e.target.value))

}

function brewerySortingMethod(e){
    formReset()

    if(e.target.value === "by_state"){
   // brewerySortElement.style.display = "none"
    states()
    }else if(e.target.value === 'by_type'){
        console.log('micro time')
    }
}
function formReset(){
    sortOptions.innerHTML =""
}

function fetchSort(method, option){
    breweryListDiv.innerHTML =""
    reviewDiv.innerHTML = ""
    fetch(`https://api.openbrewerydb.org/breweries?${method}=${option}`)
    .then(resp => resp.json())
    .then(breweries => breweries.forEach(brewery => breweryList(brewery)))
}