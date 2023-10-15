import { Rating } from "@mui/material";
import React from "react";
import { MdOutlineGroup } from "react-icons/md";
import { VscHeart } from "react-icons/vsc";
function Bookcard({
  title,
  image_url,
  authors,
  rating,
  tags,
  number_of_purchases,
  likes,
  available_copies,
  price,
}) {
  return (
    <>
      <div className="md:max-w-[400px] h-[250px] p-3 flex hover:shadow-2xl ">
        <div>
          <img src={image_url} className=" w-fit h-full" alt="img" />
        </div>
        <div className="pl-3">
          <div>
            <h1 className="font-bold">{title}</h1>
            <p className="font-semibold">
              {authors.slice(0, 2).map((author, i) => {
                return (
                  <span key={i}>
                    {author.name}
                    {i !== authors.length - 1 ? ", " : ""}
                  </span>
                );
              })}
            </p>
          </div>
          <p className="text-base">
            {tags.slice(0, 2).map((tag, i) => {
              return (
                <span key={i}>
                  {tag.name}
                  {i !== tags.length - 1 ? ", " : ""}
                </span>
              );
            })}
          </p>
          <div className="flex items-center justify-start">
            <div className="flex justify-start space-x-4 w-16">
              <div>
                <MdOutlineGroup />
                <p>{number_of_purchases}</p>
              </div>
              <div>
                <VscHeart />
                <p>{likes}</p>
              </div>
            </div>
            <div>
              <p>Ratings: {rating}</p>
              <div>
                <Rating name="simple-controlled" value={rating} />
              </div>
            </div>
          </div>
          <div className="flex space-x-5">
            <div>
              <p>${price}</p>
            </div>
            {available_copies > 0 && <p> {available_copies} copies left</p>}
          </div>
          {available_copies > 0 && (
            <button className="border text-white bg-gray-700 px-3 rounded outline-none  font-bold hover:bg-black py-1 ease-in-out duration-500">
              Add to cart
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Bookcard;
