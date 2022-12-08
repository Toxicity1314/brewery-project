# brewery-project
This website allows a user to get basic brewery information from the database Open Brewery DB.  When a user first loads the site the first 50 Brewerys from the database are loaded and displayed on the lefthand side of the screen.  The user has the ability to click on any brewery in the list to populate all the information about the brewery.

If the brewery the user is looking for is not on the initial page they have multiple options to choose from.  First there is a next page button they can click. This button will populate the next 50 breweries in the database.  This button will only be available if there are more breweries in the database. A previous page button will also become available once the user moves past the first 50 breweries.

This is a verly large database so the user can narrow there search by first choosing a sorting method(state or brewery type).  Once they have selected which method to sort by another dropdown menu will appear allowing the user to further narrow there search.

for navigation around this repository the 

## fetch.js 
handles all the Get requests to Open Brewery DB

## index.js
handles populating the brewery list, brewery data when clicked, and any reviews made about the brewery

## pages.js
handles functionality and visibility of the next and previous page buttons

## sort.js
This is where the magic happens.  This file handles the functionality and visibility of the select sorting elements.  This file also takes data based on the choices the user makes saves it into an object that will later be used to make another get request to our database.