import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBooks, getStoredWishlistBooks } from "../../Utility/Utility";
import { useLoaderData } from "react-router";
import ListedBook from "../../components/ListedBook/ListedBook";

const ListedBooks = () => {
  const [storedBooks, setStoredBooks] = useState([]);
  const [storedWishlistBooks, setStoredWishlistBooks] = useState([]);

  const allBooks = useLoaderData();

  useEffect(() => {
    const readBooks = getStoredBooks();
    const wishlistBooks = getStoredWishlistBooks();

    const filteredBooks = allBooks.filter((book) =>
      readBooks.includes(book.bookId),
    );

    const filteredWishlistBooks = allBooks.filter((book) =>
      wishlistBooks.includes(book.bookId),
    );
    // console.log(filteredBooks);

    setStoredBooks(filteredBooks);
    setStoredWishlistBooks(filteredWishlistBooks);
  }, []);
  //   console.log(storedBooks);

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist</Tab>
        </TabList>

        <TabPanel>
          {storedBooks.map((book) => (
            <ListedBook key={book.bookId} book={book}></ListedBook>
          ))}
        </TabPanel>
        <TabPanel>
          {storedWishlistBooks.map((book) => (
            <ListedBook key={book.bookId} book={book}></ListedBook>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
