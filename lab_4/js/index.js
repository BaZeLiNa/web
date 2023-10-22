import {
  renderItemsList,
  clearInputs,
  bookList,
} from "./dom_util.js";

const searchButton = document.getElementById("search_button");
const clearButton = document.getElementById("clear_button");
const findInput = document.getElementById("search_input");
const sortSwitch = document.getElementById("sort_switch");
const countButton = document.getElementById("count_button");
const totalPriceLabel = document.getElementById("result");
const addElement = document.querySelector(".create_button");


let descendingSort = false;

searchButton.addEventListener("click", () => {
  const searchTerm = findInput.value.toLowerCase();
  const foundBooks = bookList.filter((book) => {
    const bookAuthor = book.author.toLowerCase();
    return bookAuthor.includes(searchTerm);
  });
  const sortedBooks = sortSwitch.checked
    ? sortBooksByPrice(foundBooks)
    : foundBooks;
  renderItemsList(sortedBooks);
});

clearButton.addEventListener("click", () => {
  clearInputs();
  renderItemsList(bookList);
});

function calculateTotalPrice() {
  const displayedBooks = document.querySelectorAll(".first_book");
  let total = 0;
  displayedBooks.forEach((book) => {
    const bookPriceElement = book.querySelector(".book_price");
    if (bookPriceElement) {
      const bookPriceText = bookPriceElement.textContent.trim();
      const bookPrice = parseFloat(bookPriceText.replace(/(₴|Price:)/g, ""));

      if (!isNaN(bookPrice)) {
        total += bookPrice;
      }
    }
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

function sortBooksByPrice(books) {
  return books.slice().sort((a, b) => {
    const priceA = parseInt(a.price);
    const priceB = parseInt(b.price);
    return descendingSort ? priceB - priceA : priceA - priceB;
  });
}




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
    alert("Incorrect values!")
  } else {
    const newBook = {
      pages: pages,
      author: author,
      price: price,
    };
  
    bookList.push(newBook);
    renderItemsList(bookList);
  
    pagesInput.value = "";
    priceInput.value = "";
    authorSelect.value = "John";
  }
});


const objectsContainer = document.getElementById("objects_section");

objectsContainer.addEventListener("click", (event) => {
  if(event.target.classList.contains("edit")){
    const index = Array.from(objectsContainer.querySelectorAll(".edit")).indexOf(event.target);
    const currentBook = bookList[index];

    editBook(currentBook, index);
  }
});

function editBook (book, index) {
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

    submitFunction(editWindow, index);
  };

function submitFunction (editWindow, index){
  const submitButton = editWindow.querySelector("#submit_button");
  submitButton.addEventListener("click", () => {
    const editedPages = editWindow.querySelector("#edit_pages_input").value;
    const editedPrice = editWindow.querySelector("#edit_price_input").value;
    const editedAuthor = editWindow.querySelector("#edit_author_input").value;

    const testPages = parseFloat(editedPages);
    const testPrice = parseFloat(editedPrice);

    if (!(editedPages && editedPrice && editedAuthor)) {
      alert("Input all values.");
    } else if (testPages <= 0 ||  testPrice <= 0) {
      alert("Incorrect values!")
    } else {

      bookList[index].pages = editedPages;
      bookList[index].price = editedPrice;
      bookList[index].author = editedAuthor;
      
      renderItemsList(bookList);

      editWindow.remove();
    }
  });
}
  
  
window.addEventListener("DOMContentLoaded", () => {
  renderItemsList(bookList);
});