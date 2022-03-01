import React from 'react';
import {Section, Container,Title, ContentContainer} from './style';
import {InfoCard} from '../../components';

const WhyUs = () => {
  const content =[
    {
      title:"Luxury facilities",
      description:"The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.",
      link:"#"
    },
    {
      title:"Affordable Price",
      description:"You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.",
      link:"#"
    },
    {
      title:"Many Choices",
      description:"We provide many unique work space choices so that you can choose the workspace to your liking.",
      link:"#"
    }
  ];
  return (
    <Section>
        <Container>
            <Title>Why Choosing Us</Title>
            <ContentContainer>
              {
                content.map((item,index)=>
                  <InfoCard key={index} title={item.title} description={item.description} link={item.link}/>
                )
              }
            </ContentContainer>
        </Container>
    </Section>
  );
};

export default WhyUs;
