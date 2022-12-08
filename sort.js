
//global variables and event listeners needed for sorting

const currentSortOption = {sortingMethod:"", sortingOption:"", pageNumber: 1}
const sortOptions = document.querySelector('#sort-options')
const brewerySortElement = document.querySelector('#select-how-to-sort')
brewerySortElement.addEventListener('change', e => brewerySortingMethod(e))
const sortForm =document.querySelector('#sort-form')
sortForm.addEventListener('reset', ()=> formReset())

function brewerySortingMethod(e){
    formReset()
    count = 1

    if(e.target.value === "by_state"){
        const statesArray = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado',
        'Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho',
        'Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine',
        'Maryland','Massachusetts','Michigan','Minnesota','Mississippi',
        'Missouri','Montana','Nebraska','Nevada','New Hampshire',
        'New Jersey','New Mexico','New York','North Carolina','North Dakota',
        'Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island',
        'South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont',
        'Virginia','Washington','West Virginia','Wisconsin','Wyoming']
        currentSortOption.sortingMethod = e.target.value
        sortFunction(currentSortOption, statesArray)
    }else if(e.target.value === 'by_type'){
        const breweryTypeOptions =['micro', 'nano', 'regional', 'brewpub', 'large', 'planning',
                                   'bar', 'contract']
        currentSortOption.sortingMethod = e.target.value
        
        sortFunction(currentSortOption, breweryTypeOptions)
    }
}

function sortFunction(currentSortOption, arrayOptions){
    currentSortOption.pageNumber = 1
    const select = document.createElement('select')
    const features = document.querySelector('#sort-options')
    const sort = document.createElement('label')
    sort.textContent = `Sort brewerys by ${currentSortOption.sortingMethod.split('by_')[1]}:`
    features.appendChild(sort)
    features.appendChild(select)
    select.appendChild(document.createElement('option')).textContent = "--please make a selection--"
    arrayOptions.forEach(option =>{
        const choice = document.createElement('option')
        choice.textContent = option
        choice.value = option.replaceAll(' ', '_')
        select.appendChild(choice)
    })
    select.addEventListener('change', (e)=> {
        currentSortOption.sortingOption =e.target.value
        fetchSort(currentSortOption)})
    


}
function formReset(){
    sortOptions.innerHTML =""
}