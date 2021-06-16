const library = [];

function Book(name, author, pages, status) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addLibrary(){
  let book_name = document.getElementById("newBookName").value;
  let book_author = document.getElementById("newBookAuthor").value;
  var pages_read =  parseInt(document.getElementById("pages").value);
  let read_status = ""

  //  let read_status = read_status_no.checked ? "no" : "yes"
   var ele = document.getElementsByName('Status');

   for(i = 0; i < ele.length; i++) {
       if(ele[i].checked)

              read_status = ele[i].value;
   }

  let book = new Book(book_name,book_author,pages_read,read_status);
  library.push(book)
  console.log(library)
}

// Insert data function
function insertData() {
  const table = document.getElementById('datas');
  table.innerHTML = '';
  let tr = '';
  library.forEach((x) => {
    tr += '<tr>';
    tr += `<td> ${x.name} </td> <td>${x.author}</td><td>${x.pages}</td> <td>${x.status}</td> <td><button onclick="changeStatus(this)">Status</button></td><td><button onclick="removeBook(this)">Remove</button></td></td>`;
    tr += '</tr>';
  });
  table.innerHTML += tr;
}

// remove book
function removeBook(r) {
  const index = r.parentNode.parentNode.rowIndex;
  library.splice(index - 1, 1);
  document.getElementById('myTable').deleteRow(index);
}

function changeStatus(r) {
  const index = r.parentNode.parentNode.rowIndex;
if (library[index -1].status =='Unread'){
  library[index - 1].status = 'Read';
}
  else{
  library[index - 1].status = 'Unread';
 }
 insertData();

}
