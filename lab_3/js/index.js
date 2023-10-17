import{
renderItemsList,
clearInputs,
bookList,
/* addItemToPage */
} from "./dom_util.js"

const searchButton = document.getElementById("search_button");
const clearButton = document.getElementById("clear_button");
const findInput = document.getElementById("search_input");
const sortSwitch = document.getElementById("sort_switch");
const countButton = document.getElementById("count_button");
const totalPriceLabel = document.getElementById("result");
/* const addElement = document.getElementsByClassName(""); */

let descendingSort = false;
let currentBooks = bookList.slice();

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

function clalculateTotalPrice() {
    const displayedBooks = document.querySelectorAll(".first_book");
    let total = 0;
    displayedBooks.forEach((book) => {
        const bookPriceElement = book.querySelector(".book_price");
        if (bookPriceElement) {
            const bookPriceText = bookPriceElement.textContent.trim();
            const bookPrice = parseFloat(bookPriceText.replace(/(₴|Price:)/g, ""));

            if(!isNaN(bookPrice)) {
                total += bookPrice;
            }
        }
    });
    return total;
}

countButton.addEventListener("click", () => {
    const total = clalculateTotalPrice();
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

window.addEventListener("DOMContentLoaded", () =>{
    renderItemsList(bookList);
});