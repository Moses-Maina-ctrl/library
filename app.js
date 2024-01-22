const bookName = document.querySelector('#bookName');
const authorName = document.querySelector('#authorName');
const statuse = document.querySelector('#status');
const bookDisplay = document.querySelector("#bookDisplay")
const showAuthor = document.querySelector("#Author")
const showStatus = document.querySelector("#Status")
const table = document.querySelector('tbody')
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
  //This looks kinda sloppy but it works i'll fix it later
  table.innerHTML= ''
  bookDisplay.innerText =''
 showBooks()
  document.getElementById("form").style.display = "none"
  }

function showBooks(){
 if (myLibrary.length == 0){
    bookDisplay.innerText = "Please add books"
  }else{
  table.innerHTML = "<thead><th>Title</th><th>Author</th><th>Status</th></thead>";

   myLibrary.forEach(book => {
        table.innerHTML +=  `<tr>
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.read}</td>

        </tr>`
      
    });

 
 }
}

function openForm(){
  document.getElementById("form").style.display = "block"
}

function closeForm(){
  
  document.getElementById("form").style.display = "none"

}
showBooks();
