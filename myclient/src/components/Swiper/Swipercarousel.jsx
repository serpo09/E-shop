// import Swiper core and required modules
import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import gallerypic1 from "../../images/pic1.jpg";
import gallerypic2 from "../../images/pic2.jpg";
import gallerypic3 from "../../images/pic3.jpg";
import gallerypic4 from "../../images/pic4.jpg";
import gallerypic5 from "../../images/pic5.jpg";
import gallerypic6 from "../../images/pic6.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "../Swiper/swiper.css";



const Swipercarousel = () => {
  return (
    <>
      <div className="container-xl">
        <div className="row">
          <div className="col-12">
            <Swiper
              modules={[Navigation]}
              navigation
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
            >
              <SwiperSlide>
                <img src={gallerypic1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={gallerypic2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={gallerypic3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={gallerypic4} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={gallerypic5} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={gallerypic6} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Swipercarousel;
