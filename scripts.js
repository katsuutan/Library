const myLibrary = [];

function Book(title, author, read) {
    // Book constructor
    this.title = title;
    this.author = author;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayLibrary(libraryArray) {
    const libraryContainer = document.querySelector(".library-container");

    libraryArray.forEach((book, index) => {
        const bookContainer = document.createElement("div");
        bookContainer.classList.add("bookCard");
        libraryContainer.appendChild(bookContainer);

        const bookTitle = document.createElement("h1");
        bookTitle.textContent = `${book.title}`;
        bookContainer.appendChild(bookTitle);

        const bookAuthor = document.createElement("h3");
        bookAuthor.textContent = `${book.author}`;
        bookContainer.appendChild(bookAuthor);

        // Creates Read Button on each Book Card
        const readButton = document.createElement("button");
        readButton.classList.add("read-btn");
        readButton.textContent = myLibrary[index].read;
        if (readButton.textContent === "") { // Default Value
            myLibrary[index].read = "Unread";
            readButton.textContent = "Unread";
        }
        // Button Functions
        readButton.onclick = () => {
            if (myLibrary[index].read === "Read") {
                myLibrary[index].read = "Unread";
                readButton.textContent = "Unread";
            } else {
                myLibrary[index].read = "Read";
                readButton.textContent = "Read";
            }
        };
        bookContainer.appendChild(readButton);

        // Creates Delete Button on each Book Card
        const deleteButton = document.createElement("button");
        deleteButton.textContent = 'X';
        deleteButton.classList.add("del-btn");
        deleteButton.onclick = () => {
            myLibrary.splice(index, 1);
            reloadLibrary();
        };
        bookContainer.appendChild(deleteButton);
    });
}

function removeLibrary() {
    const libraryContainer = document.querySelector(".library-container");
    while (libraryContainer.firstChild) {
        libraryContainer.removeChild(libraryContainer.firstChild);
    }
}

function toggleForm() {
    const formfield = document.getElementById("addBookForm");
    if (formfield.style.visibility === "hidden") {
        formfield.style.visibility = "visible";
    }
    else {
        formfield.style.visibility = "hidden";
    }
}

function addBook() {
    const inputSelector = document.querySelector("#form-container");

    const title = inputSelector.querySelector("#title");
    const author = inputSelector.querySelector("#author");

    addBookToLibrary(new Book(title.value, author.value));
    reloadLibrary();
}

function reloadLibrary() {
    removeLibrary();
    displayLibrary(myLibrary);
}

const book1 = new Book('Overgeared', 'God Grid');
const book2 = new Book('Strongest Sword God', 'random MC');

// Initial Display
addBookToLibrary(book1);
addBookToLibrary(book2);

displayLibrary(myLibrary);


