import React from 'react';
import {Container, Title, Description, Link} from './style';
import {MdTrendingFlat} from 'react-icons/md';

const InfoCard = ({title, description, link}) => {
  return (
      <Container>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Link href={link}>More Info <MdTrendingFlat/></Link>
      </Container>
  );
};

export default InfoCard;
