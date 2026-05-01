import React, { Suspense, useEffect, useState } from "react";
import Book from "../../components/Book/Book";

const Books = ({ data }) => {
  const [allBooks, setAllBooks] = useState([]);
  console.log(data);

  // 1st way to fetch data
  // useEffect(() => {
  //   fetch(
  //     "https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json",
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setAllBooks(data));
  // }, []);
  // console.log(allBooks);
  // 2nd way to fetch data using promise
  // const bookPromises = fetch(
  //   "https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json",
  // ).then((res) => res.json());
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mx-auto my-10">Books</h1>

      <div className="grid grid-cols-3 gap-4">
        {data.map((singleBook) => (
          <Book key={singleBook.bookId} singleBook={singleBook} />
        ))}
      </div>
    </div>
  );
};

export default Books;
