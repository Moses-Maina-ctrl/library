const bookName = document.querySelector('#bookName');
const authorName = document.querySelector('#authorName');
const statuse = document.querySelector('#status');
  
const myLibrary = [{title:"The Lord of the Rings",author:"J.R.R. Tolkein",read:'Not yet'}];
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
	
 }
