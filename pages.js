//global variables to be used for setting up next and previous buttons
let nextPage = false
let prevPage = false
const container = document.querySelector('#container')

//function checks to see if a next or previous button is applicable
//if so it then checks to see if that button exists. If that button doesnt exist
//it then creates the button and adds an event listener that points to the newPage function
//if that button is not applicable it checks to see if the button exists and if it does it 
//removes the button
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


//function checks to see what button has been pressed and updates currentSortOption.pageNumber accordingly
//function then calls the fetchSort function in fetch.js with the updated data
function newPage(e){
    if(e.target.id === "next-page"){
    currentSortOption.pageNumber++
    }else if(e.target.id === "previous-page"){
        currentSortOption.pageNumber--
    }
    fetchSort()
}