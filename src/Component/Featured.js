import FeaturedBooks from "./FeaturedBooks";
import Data from "../db.json";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
function Featured() {
  return (
    <>
      <div className="mt-[100px]">
        <h1>Featured</h1>
        <div className="">
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
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            // className="mySwiper"
          >
            {Data?.filter((book) => book.featured === true)?.map((book) => {
              return (
                <div key={book.id} className="w-32 border">
                  <SwiperSlide className="my-12">
                    <FeaturedBooks id={book.id} {...book} />
                  </SwiperSlide>
                </div>
              );
            })}
          </Swiper>
        </div>
        {console.log(Data)}
      </div>
    </>
  );
}

export default Featured;
