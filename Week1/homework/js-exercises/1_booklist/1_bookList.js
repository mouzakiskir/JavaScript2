
//I'd like to display my three favorite books inside a nice webpage!
const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
    cover:'https://productdork.com/uploads/default/original/1X/ddbda1150301e89cdf0119d84f2a7fb8930beffb.png'
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    cover:'https://images4.penguinrandomhouse.com/cover/9780385533072'
  },
];
/*1. Iterate through the array of books.
2. For each book, create a `<p>` element with the book title and author and append it to the page.
3. Use a `<ul>` and `<li>` to display the books.
4. Add an `<img>` to each book that links to a URL of the book cover.
5. Change the style of the book depending on whether you have read it (green) or not (red).
*/

var bookList = document.createElement('ul');
for (let i = 0; i < books.length; i++) {
  let bookItem = document.createElement('li');
  let bookImg = document.createElement('img');
  bookImg.src = books[i].cover;
  bookImg.style.width="200px";
  bookItem.appendChild(bookImg);
  let bookDescription = document.createTextNode(books[i].title + ' by ' + books[i].author);
  bookItem.appendChild(bookDescription);
  if (books[i].alreadyRead) {
    bookItem.style.color = 'green';
  }
  else bookItem.style.color='red';
  bookList.appendChild(bookItem);
}
document.body.appendChild(bookList);
