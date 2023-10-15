import { Rating } from "@mui/material";
import { MdOutlineGroup } from "react-icons/md";
import { VscHeart } from "react-icons/vsc";

function FeaturedBooks({image_url,title,authors,genres,tags,rating,likes,number_of_purchases}) {
  return (
    <div>
        <div className="w-full h-64 border relative">
            <img src={image_url} className="h-full w-screen object-cover" alt="" />
        </div>
        <div className=" text-white opacity-0 h-full w-full text-center bg-black hover:h-full hover:opacity-[0.7] duration-500 border flex flex-col items-center justify-center absolute top-0 left-0 ">
          <h4 className="">Available</h4>
          <h1>{title}</h1>
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
            <p>Genre</p>
            <span>
            {genres.slice(0, 2).map((genre, i) => {
                return (
                  <span key={i}>
                    {genre.name}
                    {i !== genre.length - 1 ? ", " : ""}
                  </span>
                );
              })}
            </span>
            <p>Tag</p>
            <span>
            {tags.slice(0, 2).map((tag, i) => {
                return (
                  <span key={i}>
                    {tag.name}
                    {i !== tag.length - 1 ? ", " : ""}
                  </span>
                );
              })}
            </span>
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
        </div>
    </div>
  )
}

export default FeaturedBooks