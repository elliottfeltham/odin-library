// DOM References //

// Page
const libraryContainer = document.querySelector(".library-container");
const addButton = document.querySelector("#addButton");
const clearButton = document.querySelector("#clearButton");

// Form
const bookDialog = document.querySelector("#book-form-dialog");
const form = document.querySelector(".book-form");
const formAddButton = document.querySelector(".add-form-btn");
const formCloseButton = document.querySelector(".close-form-btn");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");

// Create an array to add too
const myLibrary = [];

// Functions //

// Book Constructor
function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = Number(pages);
	this.read = read;
}

// Prototype method to change read status
Book.prototype.changeReadStatus = function () {
	this.read = this.read === "Not Read" ? "Read" : "Not Read";
};

// Add books to library
function addBookToLibrary(title, author, pages, read) {
	const book = new Book(title, author, pages, read);

	myLibrary.push(book);
}

// Display books on the page
function displayBooks() {
	libraryContainer.innerHTML = "";

	myLibrary.forEach((book, index) => {
		const card = document.createElement("div");
		card.classList.add("book-card");

		// This index number is used to delete the specific book
		card.dataset.indexNumber = index;

		const title = document.createElement("h3");
		title.classList.add("title");
		title.textContent = `${book.title}`;

		const author = document.createElement("span");
		author.classList.add("author");
		author.textContent = `By: ${book.author}`;

		const pages = document.createElement("span");
		pages.classList.add("pages");
		pages.textContent = `Pages: ${book.pages}`;

		const read = document.createElement("span");
		read.classList.add("read");
		read.textContent = `Status: ${book.read}`;

		const removeBookButton = document.createElement("button");
		removeBookButton.classList.add("remove-book-button");
		removeBookButton.textContent = "Remove";

		const readStatusButton = document.createElement("button");
		readStatusButton.classList.add("read-status-button");
		readStatusButton.textContent = "Toggle Read";

		card.append(
			title,
			author,
			pages,
			read,
			removeBookButton,
			readStatusButton
		);

		libraryContainer.append(card);
	});
}

// Clear library
function clearLibrary() {
	myLibrary.length = 0;
	displayBooks();
}

// Close form
function closeForm() {
	form.reset();
	bookDialog.close();
}

// Event Listeners //

// Open form pop up
addButton.addEventListener("click", () => {
	bookDialog.showModal();
});

// Use form data from user to add books to library
formAddButton.addEventListener("click", (event) => {
	event.preventDefault();

	const title = titleInput.value.trim();
	const author = authorInput.value.trim();
	const pages = pagesInput.value.trim();

	// Optional chaining avoids error if user skips the buttons, defaults to "Not Read"
	const read =
		document.querySelector("input[name='read']:checked")?.value ||
		"Not Read";

	addBookToLibrary(title, author, pages, read);

	displayBooks();
	closeForm();
});

// Close form pop ups
formCloseButton.addEventListener("click", (event) => {
	event.preventDefault();
	closeForm();
});

// Check for remove button clicks and delete based on elements index number
libraryContainer.addEventListener("click", (event) => {
	if (event.target.classList.contains("remove-book-button")) {
		const index = event.target.parentElement.dataset.indexNumber;
		myLibrary.splice(index, 1);
		displayBooks();
	}
});

// Change the read status on the individual book that's clicked
libraryContainer.addEventListener("click", (event) => {
	if (event.target.classList.contains("read-status-button")) {
		const bookCard = event.target.parentElement;
		const bookIndex = bookCard.dataset.indexNumber;
		const book = myLibrary[bookIndex];

		book.changeReadStatus();
		displayBooks();
	}
});

// Clear library array
clearButton.addEventListener("click", clearLibrary);
