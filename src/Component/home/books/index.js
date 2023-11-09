import React from 'react';
// import Data from "../../../db.json";
import Bookcard from './Bookcard';
import { useContext } from 'react';
import { BooksContext } from '../../../context/BooksContext';

function Books({ book }) {
  return (
    <>
      <div className='mt-[100px]'>
        <div className='pl-6'>
          <h1 className='py-4 backdrop-blur-lg text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-extrabold '>
            All Books
          </h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-2 lg:gap-8'>
          {book?.map((book) => {
            return (
              <div key={book.id}>
                <Bookcard key={book.id} book={book} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Books;
