import React, { use } from "react";
import CardImg from "../../assets/pngwing 1.png";
import { Star } from "lucide-react";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  // console.log(singleBook);
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
  return (
    <>
      {/* {books.map((book, index) => (
        <div key={book.id ?? index} className="p-5 pb-0 border border-gray-300 rounded-lg">
          <div className="flex justify-center items-center bg-[#F5F5F5] p-10 rounded-[20px]">
            <img src={CardImg} className="w-[134px] h-[164px]" alt="Book Cover" />
          </div>
          <div className="my-4">
            <div className="flex gap-2">
              <span className="bg-green-100 font-bold text-sm text-green-500 px-5 py-1 rounded-full">
                Young Adult
              </span>
              <span className="bg-green-100 font-bold text-sm text-green-500 px-5 py-1 rounded-full">
                Identity
              </span>
            </div>
            <div className="border-b-2 border-dotted border-gray-300 py-3">
              <h2 className="text-xl font-bold">The Catcher in the Rye</h2>
              <p className="text-base text-gray-400">By : Awlad Hossain</p>
            </div>
            <div className="flex justify-between pt-3">
              <p className="text-base text-gray-500">Fiction</p>
              <div className="flex items-center gap-1">
                <span>5</span>
                <Star size={16} color="#6e6e6e" />
              </div>
            </div>
          </div>
        </div>
      ))} */}

      <Link to={`/bookDetails/${bookId}`}>
        <div className="p-5 pb-0 border border-gray-300 rounded-lg">
          <div className="flex justify-center items-center bg-[#F5F5F5] p-10 rounded-[20px]">
            <img src={image} className="w-[134px] h-[164px]" alt="Book Cover" />
          </div>
          <div className="my-4">
            <div className="flex gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-green-100 font-bold text-sm text-green-500 px-5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="border-b-2 border-dotted border-gray-300 py-3">
              <h2 className="text-xl font-bold">{bookName}</h2>
              <p className="text-base text-gray-400">By : {author}</p>
            </div>
            <div className="flex justify-between pt-3">
              <p className="text-base text-gray-500">{category}</p>
              <div className="flex items-center gap-1">
                <span>{rating}</span>
                <Star size={16} color="#6e6e6e" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Book;
