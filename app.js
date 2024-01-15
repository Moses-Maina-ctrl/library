const bookName = document.querySelector('#bookName');
const authorName = document.querySelector('#authorName');
const statuse = document.querySelector('#status');
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
  if (myLibrary.length == 0){
  
  }else{
    for (let i=0; i<myLibrary.length; i++){

    }
  }
 }


