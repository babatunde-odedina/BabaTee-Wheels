import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import C1 from '../../images/car-1.png';
import C2 from '../../images/car-2.png';
import C3 from '../../images/car-3.png';
import C4 from '../../images/car-4.png';
import C5 from '../../images/car-5.png';
import C6 from '../../images/car-6.png';
import C7 from '../../images/car-7.png';
import C8 from '../../images/car-8.png';
import './Featured.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

SwiperCore.use([Autoplay, Pagination, Navigation]);
const Featured = () => {
  return (
    <section className='featured' id='featured'>
      <h1 className='heading'>
        <span>featured</span> cars
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
        className='featured_slider'
      >
        <SwiperSlide className='box'>
          <img src={C1} alt='c1' />
          <h3>new model</h3>
          <div className='stars'>
            <FontAwesomeIcon className='star_icon' icon={faStar} />
            <FontAwesomeIcon className='star_icon' icon={faStar} />
            <FontAwesomeIcon className='star_icon' icon={faStar} />
            <FontAwesomeIcon className='star_icon' icon={faStar} />
            <FontAwesomeIcon className='star_icon' icon={faStarHalfAlt} />
          </div>
          <div className='price'>#50,000/-</div>
          <Link className='btn'>Check out</Link>
        </SwiperSlide>
        <SwiperSlide className='box'>
          <img src={C2} alt='c1' />
          <h3>new model</h3>
          <div className='stars'>
            <FontAwesomeIcon className='star_icon' icon={faStar} />
            <FontAwesomeIcon className='star_icon' icon={faStar} />
            <FontAwesomeIcon className='star_icon' icon={faStar} />
            <FontAwesomeIcon className='star_icon' icon={faStar} />
            <FontAwesomeIcon className='star_icon' icon={faStarHalfAlt} />
          </div>
          <div className='price'>#50,000/-</div>
          <Link className='btn'>Check out</Link>
        </SwiperSlide>
        <SwiperSlide className='box'>
          <img src={C3} alt='c1' />
          <h3>new model</h3>
          <div className='stars'>
            <FontAwesomeIcon className='star_icon' icon={faStar} />
            <FontAwesomeIcon className='star_icon' icon={faStar} />
            <FontAwesomeIcon className='star_icon' icon={faStar} />
            <FontAwesomeIcon className='star_icon' icon={faStar} />
            <FontAwesomeIcon className='star_icon' icon={faStarHalfAlt} />
          </div>
          <div className='price'>#50,000/-</div>
          <Link className='btn'>Check out</Link>
        </SwiperSlide>

        <SwiperSlide className='box'>
          <img src={C4} alt='c1' />
          <h3>new model</h3>
          <div className='stars'>
            <FontAwesomeIcon className='star_icon' icon={faStar} />
            <FontAwesomeIcon className='star_icon' icon={faStar} />
            <FontAwesomeIcon className='star_icon' icon={faStar} />
            <FontAwesomeIcon className='star_icon' icon={faStar} />
            <FontAwesomeIcon className='star_icon' icon={faStarHalfAlt} />
          </div>
          <div className='price'>#50,000/-</div>
          <Link className='btn'>Check out</Link>
        </SwiperSlide>
      </Swiper>
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
        className='featured_slider'
      >
        <SwiperSlide className='box'>
          <img src={C5} alt='c1' />
          <h3>new model</h3>
          <div className='stars'>
            <FontAwesomeIcon className='star_icon' icon={faStar} />
            <FontAwesomeIcon className='star_icon' icon={faStar} />
            <FontAwesomeIcon className='star_icon' icon={faStar} />
            <FontAwesomeIcon className='star_icon' icon={faStar} />
            <FontAwesomeIcon className='star_icon' icon={faStarHalfAlt} />
          </div>
          <div className='price'>#50,000/-</div>
          <Link className='btn'>Check out</Link>
        </SwiperSlide>

        <SwiperSlide className='box'>
          <img src={C6} alt='c1' />
          <h3>new model</h3>
          <div className='stars'>
            <FontAwesomeIcon className='star_icon' icon={faStar} />
            <FontAwesomeIcon className='star_icon' icon={faStar} />
            <FontAwesomeIcon className='star_icon' icon={faStar} />
            <FontAwesomeIcon className='star_icon' icon={faStar} />
            <FontAwesomeIcon className='star_icon' icon={faStarHalfAlt} />
          </div>
          <div className='price'>#50,000/-</div>
          <Link className='btn'>Check out</Link>
        </SwiperSlide>

        <SwiperSlide className='box'>
          <img src={C7} alt='c1' />
          <h3>new model</h3>
          <div className='stars'>
            <FontAwesomeIcon className='star_icon' icon={faStar} />
            <FontAwesomeIcon className='star_icon' icon={faStar} />
            <FontAwesomeIcon className='star_icon' icon={faStar} />
            <FontAwesomeIcon className='star_icon' icon={faStar} />
            <FontAwesomeIcon className='star_icon' icon={faStarHalfAlt} />
          </div>
          <div className='price'>#50,000/-</div>
          <Link className='btn'>Check out</Link>
        </SwiperSlide>

        <SwiperSlide className='box'>
          <img src={C8} alt='c1' />
          <h3>new model</h3>
          <div className='stars'>
            <FontAwesomeIcon className='star_icon' icon={faStar} />
            <FontAwesomeIcon className='star_icon' icon={faStar} />
            <FontAwesomeIcon className='star_icon' icon={faStar} />
            <FontAwesomeIcon className='star_icon' icon={faStar} />
            <FontAwesomeIcon className='star_icon' icon={faStarHalfAlt} />
          </div>
          <div className='price'>#50,000/-</div>
          <Link className='btn'>Check out</Link>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Featured;
