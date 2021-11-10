import React from 'react';
import IMG1 from '../../images/pic-1.png';
import IMG2 from '../../images/pic-2.png';
import IMG3 from '../../images/pic-3.png';
import IMG4 from '../../images/pic-4.png';
import IMG5 from '../../images/pic-5.png';
import IMG6 from '../../images/pic-6.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import './Review.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Review = () => {
  return (
    <section className='review' id='review'>
      <h1 className='heading'>
        Client's <span>review</span>
      </h1>
      <Swiper
        Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        grabCursor={true}
        navigation={false}
        centeredSlides={true}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 3,
          },
        }}
        className='review_slider'
      >
        <SwiperSlide className='box'>
          <img src={IMG1} alt='img1' />
          <div className='content'>
            <p>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum.
            </p>
            <h3>Nicolas Smith</h3>
            <div className='stars'>
              <FontAwesomeIcon className='star_icon' icon={faStar} />
              <FontAwesomeIcon className='star_icon' icon={faStar} />
              <FontAwesomeIcon className='star_icon' icon={faStar} />
              <FontAwesomeIcon className='star_icon' icon={faStar} />
              <FontAwesomeIcon className='star_icon' icon={faStarHalfAlt} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='box'>
          <img src={IMG2} alt='img2' />
          <div className='content'>
            <p>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum.
            </p>
            <h3>Nicolas Smith</h3>
            <div className='stars'>
              <FontAwesomeIcon className='star_icon' icon={faStar} />
              <FontAwesomeIcon className='star_icon' icon={faStar} />
              <FontAwesomeIcon className='star_icon' icon={faStar} />
              <FontAwesomeIcon className='star_icon' icon={faStar} />
              <FontAwesomeIcon className='star_icon' icon={faStarHalfAlt} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='box'>
          <img src={IMG3} alt='img3' />
          <div className='content'>
            <p>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum.
            </p>
            <h3>Nicolas Smith</h3>
            <div className='stars'>
              <FontAwesomeIcon className='star_icon' icon={faStar} />
              <FontAwesomeIcon className='star_icon' icon={faStar} />
              <FontAwesomeIcon className='star_icon' icon={faStar} />
              <FontAwesomeIcon className='star_icon' icon={faStar} />
              <FontAwesomeIcon className='star_icon' icon={faStarHalfAlt} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='box'>
          <img src={IMG4} alt='img4' />
          <div className='content'>
            <p>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum.
            </p>
            <h3>Nicolas Smith</h3>
            <div className='stars'>
              <FontAwesomeIcon className='star_icon' icon={faStar} />
              <FontAwesomeIcon className='star_icon' icon={faStar} />
              <FontAwesomeIcon className='star_icon' icon={faStar} />
              <FontAwesomeIcon className='star_icon' icon={faStar} />
              <FontAwesomeIcon className='star_icon' icon={faStarHalfAlt} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='box'>
          <img src={IMG5} alt='img5' />
          <div className='content'>
            <p>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum.
            </p>
            <h3>Nicolas Smith</h3>
            <div className='stars'>
              <FontAwesomeIcon className='star_icon' icon={faStar} />
              <FontAwesomeIcon className='star_icon' icon={faStar} />
              <FontAwesomeIcon className='star_icon' icon={faStar} />
              <FontAwesomeIcon className='star_icon' icon={faStar} />
              <FontAwesomeIcon className='star_icon' icon={faStarHalfAlt} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='box'>
          <img src={IMG6} alt='img6' />
          <div className='content'>
            <p>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum.
            </p>
            <h3>Nicolas Smith</h3>
            <div className='stars'>
              <FontAwesomeIcon className='star_icon' icon={faStar} />
              <FontAwesomeIcon className='star_icon' icon={faStar} />
              <FontAwesomeIcon className='star_icon' icon={faStar} />
              <FontAwesomeIcon className='star_icon' icon={faStar} />
              <FontAwesomeIcon className='star_icon' icon={faStarHalfAlt} />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Review;
