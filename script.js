const libraryContainer = document.querySelector(".library-container");
const addButton = document.querySelector("#addButton");
const clearButton = document.querySelector("#clearButton");
const displayButton = document.querySelector("#displayButton");

const myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = Number(pages);
	this.read = read;
	this.info = function () {
		return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
	};
}

function addBookToLibrary(title, author, pages, read) {
	const book = new Book(title, author, pages, read);

	myLibrary.push(book);
}

function clearLibrary() {
	myLibrary.length = 0;
	libraryContainer.textContent = "";
}

function displayBooks() {
	for (let books in myLibrary) {
		const card = document.createElement("div");
		card.classList.add("book-card");
		card.textContent = myLibrary[books].info();
		libraryContainer.append(card);
	}
}

addButton.addEventListener("click", function () {
	addBookToLibrary("It", "Stephen King", 1116, "not read yet");
	displayBooks();
});

displayButton.addEventListener("click", displayBooks);

clearButton.addEventListener("click", clearLibrary);

// addBookToLibrary("The Hobbit", "J.R.R Tolkien", 295, "not read yet");
// addBookToLibrary("Animal Farm", "George Orwell", 152, "read");
// addBookToLibrary(
// 	"Harry Potter and the Philosopher's Stone",
// 	"J.K. Rowling",
// 	223,
// 	"not read yet"
// );
addButton.addEventListener("click", function () {
	console.log(myLibrary);
});

// console.log(myLibrary[0].info());
// console.log(myLibrary[1].info());
// console.log(myLibrary[2].info());
