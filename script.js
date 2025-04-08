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