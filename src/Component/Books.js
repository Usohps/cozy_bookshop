import React from "react";
import Data from "../db.json";
import Bookcard from "./Bookcard";

function Books() {
  return (
    <>
    <div className="mt-[100px]">
    <div className="pl-6">
        <h1 className="font-bold text-lg backdrop-blur-lg">All Books</h1>
     </div>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-2 lg:gap-8">

        {Data?.map(book =>{
            return <div key={book.id}>
                
             <Bookcard id={book.id} {...book}/>
            </div>
        })}

    </div> 
    </div>
    </>
     
  );
}
export default Books;
