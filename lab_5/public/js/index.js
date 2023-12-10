import { renderItemsList, clearInputs, getBooksFromServerAndRender } from "./dom_util.js";
const searchButton = document.getElementById("search_button");
const clearButton = document.getElementById("clear_button");
const findInput = document.getElementById("search_input");
const sortSwitch = document.getElementById("sort_switch");
const countButton = document.getElementById("count_button");
const totalPriceLabel = document.getElementById("result");
const addElement = document.querySelector(".create_button");

let descendingSort = false;

window.addEventListener("DOMContentLoaded", () => {
  getBooksFromServerAndRender();
});

searchButton.addEventListener("click", () => {
  const searchTerm = findInput.value.toLowerCase();
  searchBooks(searchTerm);
});

clearButton.addEventListener("click", () => {
  clearInputs();
  getBooksFromServerAndRender();
});

function calculateTotalPrice() {
  const displayedBooksData = Array.from(document.querySelectorAll(".first_book:not(.d-none)")).map((book) => {
    return {
      author: book.querySelector(".book_author").textContent.trim().replace("Author: ", ""),
      pages: book.querySelector(".book_pages").textContent.trim().replace("Pages: ", ""),
      price: parseFloat(book.querySelector(".book_price").textContent.trim().replace(/(₴|Price:)/g, "")),
    };
  });

  let total = 0;
  displayedBooksData.forEach((book) => {
    total += book.price;
  });
  return total;
}


countButton.addEventListener("click", () => {
  const total = calculateTotalPrice();
  totalPriceLabel.textContent = total + "₴";
});

sortSwitch.addEventListener("change", () => {
  descendingSort = sortSwitch.checked;
  const displayedBooks = document.querySelectorAll(".first_book");

  const displayedBooksData = Array.from(displayedBooks).map((bookElement) => {
    const bookAuthor = bookElement.querySelector(".book_author")?.textContent.trim().replace("Author: ", "");
    const bookPages = bookElement.querySelector(".book_pages")?.textContent.trim().replace("Pages: ", "");
    const bookPriceElement = bookElement.querySelector(".book_price");
    const bookPriceText = bookPriceElement ? bookPriceElement.textContent.trim().replace("Price: ", "") : "0";
    const bookPrice = parseFloat(bookPriceText.replace("₴", ""));

    return {
      author: bookAuthor || "",
      pages: bookPages || "",
      price: bookPrice || 0,
    };
  });

  const sortedBooks = displayedBooksData.slice().sort((a, b) => {
    const priceA = a.price;
    const priceB = b.price;
    return descendingSort ? priceB - priceA : priceA - priceB;
  });
  renderItemsList(sortedBooks);
});



addElement.addEventListener("click", () => {
  const pagesInput = document.querySelector("#pages_input");
  const priceInput = document.querySelector("#price_input");
  const authorSelect = document.querySelector("#author_input");

  const pages = pagesInput.value;
  const price = priceInput.value;
  const author = authorSelect.value;

  const testPages = parseFloat(pagesInput.value);
  const testPrice = parseFloat(priceInput.value);

  if (!(pages && price && author)) {
    alert("Input all values.");
  } else if (testPages <= 0 || testPrice <= 0) {
    alert("Incorrect values!");
  } else {
    createBookOnServer(pages, author, price);
    pagesInput.value = "";
    priceInput.value = "";
    authorSelect.value = "John";
  }
  getBooksFromServerAndRender();
});

function createBookOnServer(pages, author, price) {
  const url = '/api/book';
  const data = {
    pages: parseFloat(pages),
    author: author,
    price: parseFloat(price),
  };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(newBook => {
      console.log('New book created:', newBook);
    })
    .catch(error => {
      console.error('Error creating book:', error);
    });
};


// deleteBook.addEventListener("click", () => {
//     const bookId = deleteButton.getAttribute('data-id');
//     deleteBookOnServer(bookId);
// });

async function findBookById(bookId) {
  const url = `/api/book/${bookId}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const book = await response.json();
    return book;
  } catch (error) {
    console.error('Error fetching book:', error);
    return {};
  }
};
function submitFunction(editWindow, bookId) {
  const submitButton = editWindow.querySelector("#submit_button");
  const pagesInput = editWindow.querySelector("#edit_pages_input");
  const priceInput = editWindow.querySelector("#edit_price_input");
  const authorSelect = editWindow.querySelector("#edit_author_input");

  submitButton.addEventListener("click", async () => {
    const pages = pagesInput.value;
    const price = priceInput.value;
    const author = authorSelect.value;

    try {
      const response = await fetch(`/api/book/${bookId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pages, author, price }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const updatedBook = await response.json();
      console.log('Book updated:', updatedBook);
      getBooksFromServerAndRender();
      editWindow.remove();
    } catch (error) {
      console.error('Error updating book:', error);
    }
  });
};


const objectsContainer = document.getElementById("objects_section");

objectsContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    const bookId = event.target.getAttribute('data-id');
    deleteBookOnServer(bookId);
  }
});

objectsContainer.addEventListener("click", async (event) => {
  if (event.target.classList.contains("edit")) {
    const bookId = event.target.getAttribute('data-id');
    
    try {
      const book = await findBookById(bookId);
      editBook(book);
    } catch (error) {
      console.error('Error fetching book:', error);
    }
  }
});


function editBook(book) {
  const editWindow = document.createElement("div");
  editWindow.classList.add("edit-window");
  editWindow.innerHTML = `
    <h2>Edit book</h2>
    <label>Enter the number of pages </label>
    <input type="number" id="edit_pages_input" min="1" value="${book.pages}">
    <label>Enter price of book</label>
    <input type="number" id="edit_price_input" min="1" value="${book.price}">
    <label>Chose author</label>
    <select id="edit_author_input" name="authors">
      <option value="John" ${book.author === 'John' ? 'selected' : ''}>John</option>
      <option value="Stepan" ${book.author === 'Stepan' ? 'selected' : ''}>Stepan</option>
      <option value="Ivan" ${book.author === 'Ivan' ? 'selected' : ''}>Ivan</option>
      <option value="Antony" ${book.author === 'Antony' ? 'selected' : ''}>Antony</option>
    </select>
    <button id="submit_button" class="submit_button btn-success">Submit</button>`;

    editWindow.style.backgroundColor = "#9ee89f";
    editWindow.style.position = "fixed";
    editWindow.style.top = "35%";
    editWindow.style.left = "50%";
    editWindow.style.transform = "translate(-50%, -50%)";
    editWindow.style.zIndex = "999"; 

    const elements = editWindow.querySelectorAll("label, input, select, button");
    elements.forEach((element) => {
    element.style.display = "block";
    element.style.marginBottom = "10px";
  });
  document.body.appendChild(editWindow);
  submitFunction(editWindow, book.id);
};

function deleteBookOnServer(bookId) {
  const url = `/api/book/${bookId}`;

  fetch(url, {
    method: 'DELETE',
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(deletedBook => {
      console.log('Book deleted:', deletedBook);
      getBooksFromServerAndRender();
    })
    .catch(error => {
      console.error('Error deleting book:', error);
    });
};

function searchBooks(searchTerm) {
  const displayedBooks = document.querySelectorAll(".first_book");

  displayedBooks.forEach((bookElement) => {
    const bookAuthor = bookElement.querySelector(".book_author").textContent.trim().replace("Author: ", "");

    if (bookAuthor.toLowerCase().includes(searchTerm)) {
      bookElement.classList.remove("d-none");
    } else {
      bookElement.classList.add("d-none");
    }
  });
};


