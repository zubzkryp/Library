
const myLibrary = [];

function Book(title, author, pages, read){
  if(!new.target){
    throw Error("You must use the new operator to call")
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = self.crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read)
  myLibrary.push(newBook)
}

Book.prototype.toggleRead = function () {
  if(this.read.toLowerCase() == "no") {
    this.read = "Yes"
  }
  else {
    this.read = "No"
  }
}


function printingLibrary() {
  const Books = document.querySelector(".new-books");
  Books.textContent = ''
  
  
  myLibrary.forEach((element) => {
  const bookCard = document.createElement("div");
  bookCard.classList.add("bookCard");
  Books.appendChild(bookCard);

  const clear = document.createElement("button");
  clear.classList.add("clear");
  bookCard.appendChild(clear);
  clear.dataset.userID = element.id
  clear.textContent = "Clear"
  

  clear.addEventListener("click", (e) => {
    const ID = (element) => element.id == e.target.dataset.userID;
    const index = myLibrary.findIndex(ID);
    myLibrary.splice(index, 1);
    printingLibrary();
    
  })

  const readStatus = document.createElement("button")
  readStatus.classList.add("readStatus")
  bookCard.appendChild(readStatus)
  readStatus.dataset.userID = element.id
  readStatus.textContent = "Read Status"

  readStatus.addEventListener("click", (e) => {
    const ID = (element) => element.id == e.target.dataset.userID;
    const index = myLibrary.findIndex(ID);
    myLibrary[index].toggleRead()
    readStatus.textContent = "Read Status"
    ifRead.textContent = myLibrary[index].read
  })
  



  const titlePair = document.createElement("div");
  titlePair.classList.add("titlePair");
  const authorPair = document.createElement("div");
  authorPair.classList.add("authorPair");
  const pagesPair = document.createElement("div");
  pagesPair.classList.add("pagesPair");
  const readPair = document.createElement("div");
  readPair.classList.add("readPair");

  const Title = document.createElement("div");
  const Author = document.createElement("div");
  const Pages = document.createElement("div");
  const Read = document.createElement("div");

  const titleName = document.createElement("div");
  const authorName = document.createElement("div");
  const numberOfPages = document.createElement("div");
  const ifRead = document.createElement("div");
  
  // Pairs appending to the bookcard so now we can have format Title: Harry potter
  bookCard.appendChild(titlePair);
  bookCard.appendChild(authorPair);
  bookCard.appendChild(pagesPair);
  bookCard.appendChild(readPair);

  //title Pair
  titlePair.appendChild(Title);
  titlePair.appendChild(titleName);
  authorPair.appendChild(Author);
  authorPair.appendChild(authorName);
  pagesPair.appendChild(Pages);
  pagesPair.appendChild(numberOfPages);
  readPair.appendChild(Read);
  readPair.appendChild(ifRead);

  
  Title.textContent = "Title: "
  Author.textContent = "Author: "
  Pages.textContent = "Pages: "
  Read.textContent = "Read: "
  
  titleName.textContent = element.title
  authorName.textContent = element.author
  numberOfPages.textContent = element.pages
  ifRead.textContent = element.read
  
  
    }
  )
}




// const addButton = document.querySelector(".add-button");

// addButton.addEventListener("click", (e) =>{
    
// })

const submitButton = document.querySelector(".form_class");

submitButton.addEventListener("submit", (e) => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").value;
  addBookToLibrary(title, author, pages, read);
  printingLibrary()
  e.preventDefault();
})

const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", (e) =>{
  const Books = document.querySelector(".new-books");
  Books.textContent = ''
  myLibrary.length = 0;
  for(let i = 0; i < myLibrary.length; i++) {
    myLibrary.pop();
  }
  
})
