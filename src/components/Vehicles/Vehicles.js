import React from 'react';
import './Vehicles.css';
import V1 from '../../images/vehicle-1.png';
import V2 from '../../images/vehicle-2.png';
import V3 from '../../images/vehicle-3.png';
import V4 from '../../images/vehicle-4.png';
import V5 from '../../images/vehicle-5.png';
import V6 from '../../images/vehicle-6.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
SwiperCore.use([Autoplay, Pagination, Navigation]);

function Vehicles() {
  return (
    <section className='vehicles' id='vehicles'>
      <h1 className='heading'>
        Popular <span>Vehicles</span>
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
        className='swiper vehicles_slider'
      >
        <SwiperSlide className='swiper-slide box'>
          <div>
            <img className='img' src={V1} alt='v1' />
            <div className='content'>
              <h3>new model</h3>
              <div className='price'>
                <span>price: </span> #65,000,000
              </div>
              <p>
                new
                <span>
                  <FontAwesomeIcon icon={faCircle} />
                </span>
                2021
                <span>
                  <FontAwesomeIcon icon={faCircle} />
                </span>
                automatic
                <span>
                  <FontAwesomeIcon icon={faCircle} />
                </span>
                petrol
                <span>
                  <FontAwesomeIcon icon={faCircle} />
                </span>
                183mph
              </p>
              <Link to='/' className='btn'>
                Check Out
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide box'>
          <div>
            <img className='img' src={V2} alt='v1' />
            <div className='content'>
              <h3>new model</h3>
              <div className='price'>
                <span>price: </span> #65,000,000
              </div>
              <p>
                new
                <span>
                  <FontAwesomeIcon icon={faCircle} />
                </span>
                2021
                <span>
                  <FontAwesomeIcon icon={faCircle} />
                </span>
                automatic
                <span>
                  <FontAwesomeIcon icon={faCircle} />
                </span>
                petrol
                <span>
                  <FontAwesomeIcon icon={faCircle} />
                </span>
                183mph
              </p>
              <Link to='/' className='btn'>
                Check Out
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide box'>
          <div>
            <img className='img' src={V3} alt='v1' />
            <div className='content'>
              <h3>new model</h3>
              <div className='price'>
                <span>price: </span> #65,000,000
              </div>
              <p>
                new
                <span>
                  <FontAwesomeIcon icon={faCircle} />
                </span>
                2021
                <span>
                  <FontAwesomeIcon icon={faCircle} />
                </span>
                automatic
                <span>
                  <FontAwesomeIcon icon={faCircle} />
                </span>
                petrol
                <span>
                  <FontAwesomeIcon icon={faCircle} />
                </span>
                183mph
              </p>
              <Link to='/' className='btn'>
                Check Out
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide box'>
          <div>
            <img className='img' src={V4} alt='v1' />
            <div className='content'>
              <h3>new model</h3>
              <div className='price'>
                <span>price: </span> #65,000,000
              </div>
              <p>
                new
                <span>
                  <FontAwesomeIcon icon={faCircle} />
                </span>
                2021
                <span>
                  <FontAwesomeIcon icon={faCircle} />
                </span>
                automatic
                <span>
                  <FontAwesomeIcon icon={faCircle} />
                </span>
                petrol
                <span>
                  <FontAwesomeIcon icon={faCircle} />
                </span>
                183mph
              </p>
              <Link to='/' className='btn'>
                Check Out
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide box'>
          <div>
            <img className='img' src={V5} alt='v1' />
            <div className='content'>
              <h3>new model</h3>
              <div className='price'>
                <span>price: </span> #65,000,000
              </div>
              <p>
                new
                <span>
                  <FontAwesomeIcon icon={faCircle} />
                </span>
                2021
                <span>
                  <FontAwesomeIcon icon={faCircle} />
                </span>
                automatic
                <span>
                  <FontAwesomeIcon icon={faCircle} />
                </span>
                petrol
                <span>
                  <FontAwesomeIcon icon={faCircle} />
                </span>
                183mph
              </p>
              <Link to='/' className='btn'>
                Check Out
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide box'>
          <div>
            <img className='img' src={V6} alt='v1' />
            <div className='content'>
              <h3>new model</h3>
              <div className='price'>
                <span>price: </span> #65,000,000
              </div>
              <p>
                new
                <span>
                  <FontAwesomeIcon icon={faCircle} />
                </span>
                2021
                <span>
                  <FontAwesomeIcon icon={faCircle} />
                </span>
                automatic
                <span>
                  <FontAwesomeIcon icon={faCircle} />
                </span>
                petrol
                <span>
                  <FontAwesomeIcon icon={faCircle} />
                </span>
                183mph
              </p>
              <Link to='/' className='btn'>
                Check Out
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Vehicles;
