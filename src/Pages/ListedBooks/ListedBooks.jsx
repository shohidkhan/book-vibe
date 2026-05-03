import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBooks, getStoredWishlistBooks } from "../../Utility/Utility";
import { useLoaderData } from "react-router";
import ListedBook from "../../components/ListedBook/ListedBook";

const ListedBooks = () => {
  const [storedBooks, setStoredBooks] = useState([]);
  const [storedWishlistBooks, setStoredWishlistBooks] = useState([]);
  const [sort, setSort] = useState("");

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

  const handleSort = (e) => {
    const value = e.target.value;

    if (value === "ratings") {
      const sortBk = storedBooks.sort((a, b) => a.rating - b.rating);
      const sortWl = storedWishlistBooks.sort((a, b) => a.rating - b.rating);
      setStoredWishlistBooks(sortWl);
      setStoredBooks(sortBk);
    }
    if (value == "pages") {
      const sortBk = storedBooks.sort((a, b) => a.totalPages - b.totalPages);
      const sortWl = storedWishlistBooks.sort(
        (a, b) => a.totalPages - b.totalPages,
      );
      setStoredWishlistBooks(sortWl);
      setStoredBooks(sortBk);
    }
    setSort(value);
  };

  return (
    <div>
      <title>Find Books - Listed Books</title>

      <div className="p-10 rounded-lg my-6 flex justify-center  bg-green-100">
        <form>
          <label className="block my-2" htmlFor="">
            Sort : {sort}
          </label>
          <select
            name="sort"
            id=""
            onChange={handleSort}
            className="w-50 py-2 font-semibold text-base text-green-700 px-5 border border-gray-500 rounded-md"
          >
            <option value="">Select sort type</option>
            <option value="ratings">Ratings</option>
            <option value="pages">Pages</option>
          </select>
        </form>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist</Tab>
        </TabList>

        <TabPanel>
          {storedBooks.map((book) => (
            <ListedBook
              key={book.bookId}
              book={book}
              setStoredBooks={setStoredBooks}
              allBooks={allBooks}
              setStoredWishlistBooks={setStoredWishlistBooks}
              type="read"
            ></ListedBook>
          ))}
        </TabPanel>
        <TabPanel>
          {storedWishlistBooks.map((book) => (
            <ListedBook
              key={book.bookId}
              book={book}
              setStoredBooks={setStoredBooks}
              allBooks={allBooks}
              setStoredWishlistBooks={setStoredWishlistBooks}
              type="wishlist"
            ></ListedBook>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
