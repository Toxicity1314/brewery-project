//initial fetch to populate website
fetch('https://api.openbrewerydb.org/breweries?page=1&per_page=50')
    .then(resp => resp.json())
    .then(breweries => {
        breweries.forEach(brewery => breweryList(brewery))
        pages(breweryListDiv.querySelectorAll('p').length)   
    })

//function called whenever fetching new data
function fetchSort(){
    breweryListDiv.innerHTML =""
    reviewDiv.innerHTML = ""
    fetch(`https://api.openbrewerydb.org/breweries?${currentSortOption.sortingMethod}=${currentSortOption.sortingOption}&per_page=50&page=${currentSortOption.pageNumber}`)
    .then(resp => resp.json())
    .then(breweries => {
        breweries.forEach(brewery => breweryList(brewery))
        pages(breweryListDiv.querySelectorAll('p').length)
    })
}