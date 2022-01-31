import React from 'react';
import { Section, ImageContainer, Image, ContentContainer, Title, SubTitle, Paragraph, Link } from './style';
import {MdTrendingFlat} from 'react-icons/md';

const Experience = () => {
  return (
      <Section>
          <ImageContainer><Image src={`${process.env.PUBLIC_URL}/assets/experience-bg.png`}/></ImageContainer>
          <ContentContainer>
            <Title>Experiences</Title>
            <SubTitle>We Provide You The Best Experience</SubTitle>
            <Paragraph>You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</Paragraph>
            <Link href='#'>More Info <MdTrendingFlat/></Link>
          </ContentContainer>
      </Section>
  );
};

export default Experience;
