import React from 'react';
import { Section, ImageContainer, ImageInner, Image, ContentContainer, Title, SubTitle, Paragraph, Link} from './style';
import {MdTrendingFlat} from 'react-icons/md';
const Material = () => {
  return (
      <Section>
          <ContentContainer>
              <Title>Materials</Title>
              <SubTitle>Very serious materials for making furniture</SubTitle>
              <Paragraph>Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</Paragraph>
              <Link href='#'>More Info <MdTrendingFlat/></Link>
          </ContentContainer>
          <ImageContainer>
              <ImageInner>
                <Image width="223" height="229" src={`${process.env.PUBLIC_URL}/assets/material-bg-2.png`}/>
                <Image width="223" height="317" src={`${process.env.PUBLIC_URL}/assets/material-bg-3.png`}/>
              </ImageInner>
              <Image src={`${process.env.PUBLIC_URL}/assets/material-bg-1.png`}/>
          </ImageContainer>
      </Section>
  );
};

export default Material;
