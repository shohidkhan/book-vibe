import { MapPinHouse, NotebookText, Users } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const ListedBook = ({ book }) => {
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
  } = book;
  return (
    <div className="p-5 my-3 flex gap-5 border border-gray-300 rounded-lg">
      <div className="bg-[#ececec] rounded-lg p-5 flex justify-center items-center">
        <img src={image} className="w-[100px] h-[130px]" alt={bookName} />
      </div>
      <div className="w-full">
        <div className="py-2">
          <h1 className="text-xl font-bold">{bookName}</h1>
          <p className="text-base text-gray-500">By : {author}</p>
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
          <span className="text-sm text-gray-400 flex gap-2 items-center">
            <MapPinHouse size={16} color="#b0b0b0" />
            Year of Publishing: {yearOfPublishing}
          </span>
        </div>
        <div className="flex gap-10 pb-3 border-b border-gray-200 pt-5 ">
          <span className="text-sm text-gray-400 flex gap-2 items-center">
            <Users size={16} color="#b0b0b0" />
            <strong>Publisher:</strong> {publisher}
          </span>
          <span className="text-sm text-gray-400 flex gap-2 items-center">
            <NotebookText size={16} color="#b0b0b0" />
            <strong>Pages:</strong> {totalPages}
          </span>
        </div>
        <div className="mt-3 flex gap-5">
          <span className="bg-blue-100 text-sm text-blue-500 px-5 py-1 rounded-full">
            Category : {category}
          </span>
          <span className="bg-yellow-100 text-sm text-yellow-600 px-5 py-1 rounded-full">
            Rating : {rating}
          </span>
          <Link
            to={`/bookDetails/${bookId}`}
            className="bg-green-500 text-sm text-white px-5 py-1 rounded-full"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedBook;
