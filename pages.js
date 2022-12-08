let nextPage = false
let prevPage = false
const container = document.querySelector('#container')
function pages(number){
    if(!nextPage){
        const btn = document.createElement('button')
        btn.textContent = "next page"
        btn.id = "next-page"
        container.insertAdjacentElement('beforebegin',btn)
        btn.addEventListener('click', (e) => newPage(e))
        nextPage = true
    }else if(number <50){
        const nextBtn = document.querySelector('#next-page')
            nextBtn.remove()
            nextPage = false
        }

    if(currentSortOption.pageNumber > 1 && !prevPage){
        const btn = document.createElement('button')
        btn.textContent = "previous page"
        btn.id = "previous-page"
        sortForm.insertAdjacentElement('afterend',btn)
        btn.addEventListener('click', (e) => newPage(e))
        prevPage = true
    }else if(currentSortOption.pageNumber === 1 && prevPage){
        const prevBtn = document.querySelector('#previous-page')
        prevBtn.remove()
        prevPage = false
        
    }
}

function newPage(e){
    if(e.target.id === "next-page"){
    currentSortOption.pageNumber++
    }else if(e.target.id === "previous-page"){
        currentSortOption.pageNumber--
    }
    fetchSort(currentSortOption)
}