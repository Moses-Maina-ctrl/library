const bookName = document.querySelector('#bookName');
const authorName = document.querySelector('#authorName');
const statuse = document.querySelector('#status');
const bookDisplay = document.querySelector("#bookDisplay")
const showAuthor = document.querySelector("#Author")
const showStatus = document.querySelector("#Status")
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
 showBooks()
  }

function showBooks(){
 if (myLibrary.length == 0){
    bookDisplay.innerText = "Please add books"
  }else{
    myLibrary.forEach(book =>{


    bookDisplay.innerText = book.title
    showAuthor.innerText = book.author
      //TODO fix undefined output
    showStatus.innerText = book.status
  }) 
 }
}

showBooks();
