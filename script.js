const list = document.querySelector('#wishlist'); 
console.log(list);

// Add new items to the list 

let newItem = 'The Dark Knight'; 


function createNewItem(newMovie) {
   let movie = document.createElement('li') // Creates the element
   let text = document.createTextNode(newMovie); // Creates Text Node
   movie.appendChild(text) // Appends text node 

   let button = createButton('remove-button')
   movie.appendChild(button); 

   list.appendChild(movie); // Adds movie to the list


}

function createButton(classes) {
    let button = document.createElement('button'); 
    button.className = classes;
    button.textContent = 'Remove'
    return button
}
 
createNewItem(newItem)

// You can use the following node properties to navigate between nodes with JavaScript:

// parentNode
// childNodes[nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling

// InsertAdjacent Methods

// <!-- beforebegin -->
// <p>
//   <!-- afterbegin -->
//   foo
//   <!-- beforeend -->
// </p>
// <!-- afterend -->

function addNewMovie(film) {

let firstMovie = list.firstElementChild; 


let movie = document.createElement('li')
movie.textContent = film
let button = createButton('remove-button')
movie.appendChild(button); 



firstMovie.insertAdjacentElement('afterend', movie); 
    
}

addNewMovie('Pulp fiction');

function insertBefore(film) {
let firstMovie = list.firstElementChild; 


let movie = document.createElement('li')
movie.textContent = film
let button = createButton('remove-button')
movie.appendChild(button); 



firstMovie.insertAdjacentElement('beforebegin',movie)

}

insertBefore('Boyhood')

// Remove Functions 

let button = document.querySelector('.clear'); 
let clearAll = document.querySelectorAll('li'); 
let addButton = document.querySelector('#addButton')

function remove() {
    
   clearAll.forEach(item => {
    item.remove()
   })

}

button.onclick = remove; 

function addMoive() {
    console.log('button clicked')
    createNewItem(newItem);
    
}

addButton.onclick = addMoive; 

