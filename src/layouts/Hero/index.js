import React from 'react';
import {Section, Container, Title, Paragraph} from './style';
import {SearchBox} from '../../components';

const Hero = () => {
  return (
    <Section>
      <Container>
        <Title>Make Your Interior More Minimalistic & Modern</Title>
        <Paragraph>Turn your room with panto into a lot more minimalist and modern with ease and speed</Paragraph>
        <SearchBox/>
      </Container>
    </Section>
  );
};

export default Hero;
