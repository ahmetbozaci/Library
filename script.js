let library = [{name:"Digital Fortress", author:"Dan Brown"},{name:"Improbable", author:"Adam Fawer"}]

function Book(name, author){
  this.name =  name;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addLibrary(){
  let book_name = document.getElementById("newBookName").value;
  let book_author = document.getElementById("newBookAuthor").value;
  let pages_read =  parseInt(document.getElementById("pages").value);
  let read_status = document.getElementById("status").value;
  let book = new Book(book_name,book_author,pages_read,read_status);
  library.push(book)
  console.log
}
//addLibrary()

for(let i=0; i<library.length; i++){
 console.table(library[i])
  
}

//Insert data function
function Insert_Data() {
  var table = document.getElementById("datas");
  table.innerHTML="";
  var tr="";
  library.forEach(x=>{
     tr+='<tr>';
     tr+='<td>'+x.name+'</td>'+'<td>'+x.author+'</td>'+'<td>'+x.pages+'</td>'+'<td>'+x.status+'</td>'
     tr+='</tr>'

  })
  table.innerHTML+=tr;
  //Help......  
}