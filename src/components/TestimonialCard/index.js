import React from "react";
import {
  Container,
  ImageContainer,
  Image,
  CardContainer,
  ProfileContainer,
  ProfileImage,
  ClientName,
  Paragraph,
  StarContainer,
  Star,
} from "./style";

const TestimonialCard = ({data}) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={`${process.env.PUBLIC_URL}/assets/${data.productImg}`} />
      </ImageContainer>
      <CardContainer>
        <ProfileContainer>
          <ProfileImage
            src={`${process.env.PUBLIC_URL}/assets/${data.profileImg}`}
          />
        </ProfileContainer>
        <ClientName>{data.userName}</ClientName>
        <Paragraph>
          {data.description}
        </Paragraph>
        <StarContainer>
          <Star />
        </StarContainer>
      </CardContainer>
    </Container>
  );
};

export default TestimonialCard;
