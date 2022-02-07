import React, {useState, useEffect} from 'react';
import {Section, Container, Title, SubTitle,TestimonialSlider} from './style';
import {TestimonialCard} from '../../components';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import {useWindowDimensions} from '../../hooks';

const Testimonials = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);
  const {width} = useWindowDimensions(); 
  const testimonials = [
    {
      profileImg:'profile-image-1.png',
      productImg:'testimonial-1.png',
      userName:'Bang Upin',
      description:`“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“`
    },
    {
      profileImg:'profile-image-2.png',
      productImg:'testimonial-2.png',
      userName:'Ibuk Sukijan',
      description:`“Makasih Panto, aku sekarang berasa tinggal di apartment karena
      barang-barang yang terlihat mewah“`
    },
    {
      profileImg:'profile-image-1.png',
      productImg:'testimonial-1.png',
      userName:'Ibuk Sukijan',
      description:`“Makasih Panto, aku sekarang berasa tinggal di apartment karena
      barang-barang yang terlihat mewah“`
    }
  ]
  useEffect(()=>{
    if(width >= 990){
      setSlidesPerView(3);
      }
    else if(width < 990 && width > 550){
      setSlidesPerView(2);
    }
    else setSlidesPerView(1)
  },[width])
  return (
      <Section>
          <Container>
            <Title>Testimonials</Title>
            <SubTitle>Our Client Reviews</SubTitle>
            <TestimonialSlider>
            <Swiper
              spaceBetween={50}
              slidesPerView={slidesPerView}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              >
          {
            testimonials.map((t,index)=>(
              <SwiperSlide key={index}>
                <TestimonialCard data={t} />
              </SwiperSlide>
            ))
          }
          </Swiper>
          </TestimonialSlider>
          </Container>
      </Section>
  );
};

export default Testimonials;
