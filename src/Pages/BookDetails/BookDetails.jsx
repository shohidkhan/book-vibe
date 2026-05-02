import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToReadBooks, addToWishlistBooks } from "../../Utility/Utility";

const BookDetails = () => {
  const books = useLoaderData();
  const id = useParams();

  const bkId = parseInt(id.id);

  const singleBook = books.find((book) => book.bookId === bkId);
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = singleBook;

  const handleMarkAsRead = (bookId) => {
    addToReadBooks(bookId);
    alert("Marked as read");
  };

  const handleAddToWishlist = (bookId) => {
    addToWishlistBooks(bookId);
    alert("Added to wishlist");
  };

  return (
    // <div className="grid grid-cols-[2fr_3fr]">
    //   <div className="bg-[#ececec]">
    //     <img
    //       src={image}
    //       alt={bookName}
    //       className="w-[325px] h-[364px] object-scale-down"
    //     />
    //   </div>
    //   <div>
    //     <h1>{bookName}</h1>
    //   </div>
    // </div>
    <div className="grid grid-cols-5 gap-5">
      <div className="bg-[#ececec] col-span-2 flex justify-center items-center rounded-lg p-10">
        <img
          src={image}
          alt={bookName}
          className="w-[400px] h-[425px] object-scale-down"
        />
      </div>
      <div className="col-span-3">
        <div className="p-5 border-b pl-0 pt-0 border-gray-400">
          <h1 className="text-4xl mb-3 font-bold">{bookName}</h1>
          <p className="text-base font-semibold text-gray-500 mb-2">
            By : {author}
          </p>
        </div>
        <div className="p-5 pl-0 border-b border-gray-400">
          <p className="text-base text-gray-500 font-semibold"> {category}</p>
        </div>
        <div className="py-7 border-b border-gray-400">
          <div className="flex items-start gap-2">
            <strong className="text-sm">Review:</strong>
            <p className="text-sm text-gray-500 text-justify">{review}</p>
          </div>

          <div className="flex gap-3 pt-5 border-gray-600">
            <strong className="text-sm">Tags :</strong>
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-green-100 font-bold text-sm text-green-500 px-5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="py-5 pt-0">
          <table className="border-separate border-spacing-y-3">
            <tbody>
              <tr>
                <td>Number of pages : </td>
                <td className="font-bold text-sm pl-20">{totalPages}</td>
              </tr>
              <tr>
                <td>Rating : </td>
                <td className="font-bold text-sm pl-20">{rating}</td>
              </tr>
              <tr>
                <td>Publisher : </td>
                <td className="font-bold text-sm pl-20">{publisher}</td>
              </tr>
              <tr>
                <td>Year of Publishing : </td>
                <td className="font-bold text-sm pl-20">{yearOfPublishing}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=" flex gap-2">
          <button
            onClick={() => handleMarkAsRead(bookId)}
            className="btn btn-success text-white"
          >
            Mark as Read
          </button>
          <button
            onClick={() => handleAddToWishlist(bookId)}
            className="btn btn-info text-white"
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
