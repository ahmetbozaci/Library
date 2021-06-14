let library = [{name:"Digital Fortress", author:"Dan Brown"},{name:"Improbable", author:"Adam Fawer"}]

function Book(name, author){
  this.name =  name;
  this.author = author;
}

function addLibrary(){
  book_name = prompt("Write a book name")
  book_author = prompt("Write a book author")
  let book = new Book(book_name,book_author)
  library.push(book)
}
addLibrary()

for(let i=0; i<library.length; i++){
 console.table(library[i])
  
}