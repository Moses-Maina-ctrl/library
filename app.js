const bookName = document.querySelector('#bookName');
const authorName = document.querySelector('#authorName');
const statuse = document.querySelector('#status');
const bookDisplay = document.querySelector("#bookDisplay")
const showAuthor = document.querySelector("#Author")
const showAddbook = document.querySelector("#Addbook")
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
  if (bookNameValue==''||authorNameValue==''){
    bookDisplay.innerText ="Please, fill in all the fields"
  }else{
    let newBook = new book( bookNameValue, authorNameValue, statusValue)
    myLibrary.push(newBook);
    console.log(myLibrary);
    //This looks kinda sloppy but it works i'll fix it later
    table.innerHTML= ''
    bookDisplay.innerText =''
   showBooks()
    document.getElementById("form").style.display = "none"
  }
}

function showBooks(){
 if (myLibrary.length == 0){
    showAddbook.innerHTML = `<p>Please add books<p>`
  }else{
    showAddbook.innerHTML =''
    table.innerHTML = "<thead><th>Title</th><th>Author</th><th>Status</th><th></th></thead>";
    myLibrary.forEach(book => {
        table.innerHTML +=  `<tr>
          <td class="title">${book.title}</td>
          <td>${book.author}</td>
          <td><button class="status" onclick="changeStatus(this)">${book.read}</button></td>
          <td><button class="delete" onclick="delBooks(this)">delete</button></td>

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

function delBooks(button){
  let row = button.closest('tr');
  let val = row.querySelector(".title").textContent;
  let index = myLibrary.findIndex(function(book){
        return book.title === val;
  });

  if (index != -1){
    myLibrary.splice(index,1);
    row.remove();
  }
 if (myLibrary.length == 0){
    showAddbook.innerHTML = `<p>Please add books<p>`
  }
}

function changeStatus(button){
  let row = button.closest('tr');
  let val = row.querySelector(".title").textContent;
  let index = myLibrary.findIndex(function(book){
        return book.title === val;
  });

  if (index != -1){
    if(myLibrary[index].read === "Read"){
      myLibrary[index].read = "Not Read"
      button.textContent = "Not Read"

  }else if (myLibrary[index].read ==="Not Read"){
      myLibrary[index].read = "Read"
      button.textContent = "Read"


    } 

  }
} 
