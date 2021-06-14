let library = [{name:"Digital Fortress", author:"Dan Brown"},{name:"Improbable", author:"Adam Fawer"}]

function Book(name, author){
  this.name =  name;
  this.author = author;
}

function addLibrary(){
  let book_name = document.getElementById("newBookName").value;
  let book_author = document.getElementById("newBookAuthor").value;
  let book = new Book(book_name,book_author)
  library.push(book)
}
//addLibrary()

// for(let i=0; i<library.length; i++){
//  console.table(library[i])
  
// }

console.table(library)