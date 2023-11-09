import React from 'react';
import BookIcon from '..//assets/books.7481a139.svg';
import BigLogo from '..//assets/bigLogo.svg';
import { BsCart2 } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { useState, useContext } from 'react';
// import useHistory from "react-dom"
import { BooksContext } from '../context/BooksContext';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
  let navigate = useNavigate();
  const { setSearchedBooks, books } = useContext(BooksContext);
  const { toggleCart } = useContext(CartContext);

  const onSearchedBooksChanged = () => {
    navigate('/search');

    setSearchedBooks(
      books?.filter((book) => book?.title.toLowerCase().includes(searchTerm))
    );
  };

  const [toggleMobile, setToggleMobile] = useState(false);
  const toggleSearch = () => {
    setToggleMobile(!toggleMobile);
  };
  return (
    <>
      <div className='w-full shadow-2xl z-10 bg-white flex items-center justify-between px-2 py-4 border-b-2 fixed top-0 left-0'>
        <div className='w-64 md:text-center'>
          <img src={BigLogo} alt='biglogo' />
          <p className='pl-2 text-transparent text-sm bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-extrabold'>
            Cozy~Dev
          </p>
        </div>
        <div className=' hidden md:flex justify-center items-center border w-[400px] '>
          <input
            onKeyUp={onSearchedBooksChanged}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type='text'
            placeholder='Search books, genres,authors, etc.'
            className='w-[30rem] border p-2 outline-none px-4 rounded-tl rounded-bl'
          />
          <div className='border cursor-pointer p-2 bg-slate-100'>
            <BiSearch size={24} />
          </div>
        </div>
        <div
          onClick={toggleSearch}
          className='border cursor-pointer p-2 md:hidden bg-slate-100'
        >
          <BiSearch size={24} />
        </div>
        <div className='w-32 p-2 flex items-center justify-between'>
          <div className='rounded-full p-2 bg-zinc-400'>
            <img src={BookIcon} alt='book_icon' />
          </div>
          <div>
            <button onClick={toggleCart}>{<BsCart2 size={24} />}</button>
          </div>
        </div>
        {toggleMobile && (
          <div className='w-full gap-2 absolute animateSearch  backdrop-blur-lg flex item-center justify-between top-0 left-0 p-6 border-red-600 z-30'>
            <button className='font-extrabold ' onClick={toggleSearch}>
              Back
            </button>
            <input
              onKeyUp={onSearchedBooksChanged}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type='text'
              placeholder='Search books, genres,authors, etc.'
              className='w-[25rem] border p-2 outline-none px-4 rounded-tl rounded-bl'
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
