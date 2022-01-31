import React, {useState} from 'react';
import {Section, Container, Title, ProductSlider, Link} from './style';
import {PillNav, ProductCard} from '../../components';
import {MdTrendingFlat} from 'react-icons/md';

const BestSelling = () => {
    const [data, setData] = useState(["chair","beds","sofa","lamp"]);
    const [activeTab,setActiveTab] = useState("chair");
    const handleOnClick = (e) => {
        setActiveTab(e.target.value)
    }
  return (
      <Section>
          <Container>
              <Title>Best Selling Product</Title>
              <PillNav onClick={handleOnClick} data={data} activeTab={activeTab}/>
              <ProductSlider>
                <ProductCard/>
              </ProductSlider>
              <Link href='#'>Veiw All <MdTrendingFlat/></Link>
          </Container>
      </Section>
  );
};

export default BestSelling;
