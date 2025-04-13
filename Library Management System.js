// Base constrctor function
function librarymanagement(title, author, page_no, genre){
  this.title = title;
  this.author = author;
  this.page_no = page_no;
  this.genre = page_no;
  this.checkout = false;
  this.checkedoutby = null;
  }
// checkout function
librarymanagement.prototype
