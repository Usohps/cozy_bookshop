import FeaturedBooks from './FeaturedBooks';
// import Data from "../../../db.json";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper';
function Featured({ book }) {
  return (
    <>
      <div className='mt-[100px]  text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-extrabold '>
        <h1 className='p-4'>Featured Books</h1>
        <div className=''>
          <Swiper
            // install Swiper modules
            breakpoints={{
              576: {
                width: 576,
                slidesPerView: 2,
              },
            }}
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            slidesPerView={2}
            spaceBetween={0}
            autoplay={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
            // className="mySwiper"
          >
            {book
              ?.filter((book) => book.featured === true)
              ?.map((book) => {
                return (
                  <SwiperSlide key={book.id} className='w-32 border my-12'>
                    <FeaturedBooks book={book} bookId={book.id} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
        {/* {console.log(Data)} */}
      </div>
    </>
  );
}

export default Featured;
