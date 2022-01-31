import React from 'react';
import {Section, Container, Title, SubTitle} from './style';
import {TestimonialCard} from '../../components';

const Testimonials = () => {
  return (
      <Section>
          <Container>
            <Title>Testimonials</Title>
            <SubTitle>Our Client Reviews</SubTitle>
          </Container>
          <TestimonialCard/>
      </Section>
  );
};

export default Testimonials;
