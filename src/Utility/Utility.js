export const getStoredBooks = () => {
  const readStoredBooks = localStorage.getItem("readBooks");
  if (readStoredBooks) {
    return JSON.parse(readStoredBooks);
  }
  return [];
};

export const getStoredWishlistBooks = () => {
  const wishlistStoredBooks = localStorage.getItem("wishlistBooks");
  if (wishlistStoredBooks) {
    return JSON.parse(wishlistStoredBooks);
  }
  return [];
};

export const addToReadBooks = (bookId) => {
  const storedBooks = getStoredBooks();
  if (storedBooks.includes(bookId)) {
    alert("This book is already marked as read.");
  } else {
    storedBooks.push(bookId);
    const newBooks = JSON.stringify(storedBooks);
    // alert(newBooks);
    localStorage.setItem("readBooks", newBooks);
  }
  //   return storedBooks;
};

export const addToWishlistBooks = (bookId) => {
  const storedBooks = getStoredWishlistBooks();
  if (!storedBooks.includes(bookId)) {
    storedBooks.push(bookId);
    localStorage.setItem("wishlistBooks", JSON.stringify(storedBooks));
  }
  return storedBooks;
};
