import React, { useEffect, useState } from "react";
//Styles
import { Section, Container, Title, ProductSlider, Link } from "./style";
//Components
import { PillNav, ProductCard } from "../../components";
//Icons
import { MdTrendingFlat } from "react-icons/md";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import {useWindowDimensions} from '../../hooks';

const BestSelling = () => {
  const data = ["chair", "beds", "sofa", "lamp"];
  const [slidesPerView, setSlidesPerView] = useState(1);
  const products =[
    {
      productName:'Nyantuy Chair',
      category:'Chair',
      img:'chair1.png',
      stars:4,
      price:'921'
    },
    {
      productName:'Nyantuy Chair',
      category:'Chair',
      img:'chair2.png',
      stars:3,
      price:'756'
    },
    {
      productName:'Nyantuy Chair',
      category:'Chair',
      img:'chair3.png',
      stars:5,
      price:'1000'
    },
    {
      productName:'Nyantuy Chair',
      category:'Chair',
      img:'chair4.png',
      stars:5,
      price:'1245'
    }
  ];
  const {width} = useWindowDimensions(); 
  const [activeTab, setActiveTab] = useState("chair");
  const handleOnClick = (e) => {
    setActiveTab(e.target.value);
  };

  useEffect(()=>{
    if(width >= 990){
      setSlidesPerView(3);
      }
    else if(width < 990 && width > 550){
      setSlidesPerView(2);
    }
    else setSlidesPerView(1)
  },[width]);

  return (
    <Section>
      <Container>
        <Title>Best Selling Product</Title>
        <PillNav onClick={handleOnClick} data={data} activeTab={activeTab} />
        <ProductSlider>
          <Swiper
            spaceBetween={0}
            slidesPerView={slidesPerView}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
          {  
            products.map((pr, index) =>
              <SwiperSlide key={index}>
                <ProductCard data={pr} />
              </SwiperSlide>
            )
            }
          </Swiper>
        </ProductSlider>
        <Link href="#">
          Veiw All <MdTrendingFlat />
        </Link>
      </Container>
    </Section>
  );
};

export default BestSelling;
