const libraryContainer = document.querySelector(".library-container");
const addButton = document.querySelector("#addButton");
const clearButton = document.querySelector("#clearButton");
const bookDialog = document.querySelector("#book-form-dialog");
const form = document.querySelector(".book-form");
const formAddButton = bookDialog.querySelector("#add-form-btn");
const formCloseButton = document.querySelector("#close-form-btn");

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
	bookDialog.showModal();
});

formAddButton.addEventListener("click", (event) => {
	event.preventDefault();

	const title = document.querySelector("#title").value.trim();
	const author = document.querySelector("#author").value.trim();
	const pages = document.querySelector("#pages").value.trim();
	const read =
		document.querySelector("input[name='read']:checked")?.value ||
		"Not Read";

	addBookToLibrary(title, author, pages, read);

	displayBooks();
	form.reset();
	bookDialog.close();
});

formCloseButton.addEventListener("click", (event) => {
	event.preventDefault();
	form.reset();
	bookDialog.close();
});

clearButton.addEventListener("click", clearLibrary);
