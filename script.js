
const myLibrary = [
  {title: "Harry Potter", author: "J.K Rowling", pages: 12, read: false},
  {title: "The Beginning After The End", author: "TurtleMe", pages: 1239, read: true}
];

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

function printingLibrary() {
  const Books = document.querySelector(".new-books");
  Books.textContent = ''
  
  
  myLibrary.forEach((element) => {
  const bookCard = document.createElement("div");
  
  Books.appendChild(bookCard);
  const Title = document.createElement("div");
  const Author = document.createElement("div");
  const Pages = document.createElement("div");
  const Read = document.createElement("div");

  bookCard.appendChild(Title);
  bookCard.appendChild(Author);
  bookCard.appendChild(Pages);
  bookCard.appendChild(Read);

  Title.textContent = element.title
  Author.textContent = element.author
  Pages.textContent = element.pages
  Read.textContent = element.read
  
  
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