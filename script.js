const libraryContainer = document.querySelector(".library-container");
const addButton = document.querySelector("#addButton");
const clearButton = document.querySelector("#clearButton");

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
	libraryContainer.innerHTML = "";

	for (let book of myLibrary) {
		const card = document.createElement("div");
		card.classList.add("book-card");

		const title = document.createElement("h3");
		title.classList.add("title");

		const author = document.createElement("span");
		author.classList.add("author");

		const pages = document.createElement("span");
		pages.classList.add("pages");

		const read = document.createElement("span");
		read.classList.add("read");

		title.textContent = `${book.title}`;
		author.textContent = `By: ${book.author}`;
		pages.textContent = `Pages: ${book.pages}`;
		read.textContent = `Status: ${book.read}`;

		card.append(title, author, pages, read);
		libraryContainer.append(card);
	}
}

addButton.addEventListener("click", function () {
	addBookToLibrary();
	displayBooks();
});

// addButton.addEventListener("click", function () {
// 	addBookToLibrary("It", "Stephen King", 1116, "Not Read");
// 	displayBooks();
// });

// displayButton.addEventListener("click", displayBooks);

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
