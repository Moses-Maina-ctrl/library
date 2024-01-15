const bookName = document.querySelector('#bookName');
const authorName = document.querySelector('#authorName');
const statuse = document.querySelector('#status');
const bookDisplay = document.querySelector("#bookDisplay")
const myLibrary = [];
  
function book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = read;
}

 function addBookToLibrary() {
  let bookNameValue =  bookName.value;
  let authorNameValue =authorName.value;
  
  let statusValue = statuse.value;

  let newBook = new book( bookNameValue, authorNameValue, statusValue)
  myLibrary.push(newBook);
  console.log(myLibrary);
  if (myLibrary.length == 0){
    bookDisplay.innerText = "Please add books"
  }else{
   
    bookDisplay.innerText = "There is  books"

    // for (let i=0; i<myLibrary.length; i++){
//TODO function to show books

    //}
  }
 }


