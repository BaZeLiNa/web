export const getBooksFromServerAndRender = () => {
  fetch('/api/book')
    .then(response => response.json())
    .then(data => {
      renderItemsList(data);
    })
    .catch(error => {
      console.error('Помилка при отриманні даних з серверу:', error);
    });
}

export const renderItemsList = (books) => {
  const objectsSection = document.getElementById("objects_section");
  objectsSection.innerHTML = "";

  books.forEach((book) => {
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
        <input id="edit" class="edit btn-dark" type="button" value="Edit" data-id="${book.id}">
      </div>
      <div class="delete-button mt-3">
        <input id="delete" class="delete btn-danger" type="button" value="Delete" data-id="${book.id}" >
      </div>
    </div>
  `;
  return listItem;
}