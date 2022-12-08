let count =1
const container = document.querySelector('#container')
function pages(){
    if(count === 1){
    const btn = document.createElement('button')
    btn.textContent = "next page"
    container.insertAdjacentElement('beforebegin',btn)
    btn.addEventListener('click', () => nextPage())
    count++
    }
 
}

function nextPage(){
    currentSortOption[2]++
    fetchSort(currentSortOption)
}