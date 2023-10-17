export const bookList = [
    {
      pages: "300",
      author: "John",
      price: "20",
    },
    {
      pages: "250",
      author: "John",
      price: "15",
    },
    {
      pages: "400",
      author: "Stepan",
      price: "29",
    }
  ];

  export const renderItemsList = (bookList) => {
    const objectsSection = document.getElementById("objects_section");
    objectsSection.innerHTML = "";

    bookList.forEach((book) => {
        const listItem = addItemToPage(book);
        objectsSection.appendChild(listItem);
    });
};


export const clearInputs = () => {
    const searchInput = document.getElementById("search_input");
    searchInput.value = "";
};

export const addItemToPage = (book) => {
    const listItem = document.createElement("li");
    listItem.classList.add("first_book", "col-md-2.5", "mt-2");
    listItem.innerHTML = `
      <div class="first_book_item">
        <div class="book_author">Author: ${book.author} </div>
        <div class="book_pages">Pages: ${book.pages}</div>
        <div class="book_price">Price: ${book.price} ₴</div>
        <div class="edit-button mt-3">
          <input class="edit btn-dark" type="button" value="Edit">
        </div>
      </div>
      `;
    return listItem;
}