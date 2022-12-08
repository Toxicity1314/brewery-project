//creates an object that will track the sorting method sorting options and what page number
//of the api we are on. This is used to programatically make the call to the api
const currentSortOption = {sortingMethod:"", sortingOption:"", pageNumber: 1}


//creates a variable for the select element #select-how-to-start and adds an
//event listener that is waiting for a change event to occur on #select-how-to-start
// when a change occurs brewerySortingMethod is called
const brewerySortElement = document.querySelector('#select-how-to-sort')
brewerySortElement.addEventListener('change', e => brewerySortingMethod(e))

//creates a variable for our sort form and adds a reset event onto it and calls formReset
const sortForm =document.querySelector('#sort-form')
sortForm.addEventListener('reset', ()=> formReset())

//checks to see what sorting method was chosen updates our sortingMethod key in currentSortOption object and 
//passes information related to the sorting method chosen to our sort function
function brewerySortingMethod(e){
   formReset()
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
        sortFunction(statesArray)
    }else if(e.target.value === 'by_type'){
        const breweryTypeOptions =['micro', 'nano', 'regional', 'brewpub', 'large', 'planning',
                                   'bar', 'contract']
        currentSortOption.sortingMethod = e.target.value
        sortFunction(breweryTypeOptions)
    }
}


//populates a second select item on the DOM based off the information passed in from the brewery sorting method
//once the select item is created it listens for a change event.  Once that change has occured it updates our
//sortingOption key in our currentSortOption variable and calls our fetchSort function in our fetch.js file
function sortFunction(arrayOptions){
    const select = document.createElement('select')
    const features = document.querySelector('#sort-options')
    const sort = document.createElement('label')
    sort.textContent = `Sort breweries by ${currentSortOption.sortingMethod.split('by_')[1]}:`
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
        currentSortOption.pageNumber = 1
        fetchSort()})
    


}

//resets the sortForm to look like it did on page load
function formReset(){
    const sortOptions = document.querySelector('#sort-options')
    sortOptions.innerHTML =""
}