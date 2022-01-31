import React from "react";
import {
  Container,
  ImageContainer,
  Image,
  CardContainer,
  ProfileImage,
  ClientName,
  Paragraph,
  StarContainer,
  Star,
} from "./style";

const TestimonialCard = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src={`${process.env.PUBLIC_URL}/assets/testimonial-1.png`} />
      </ImageContainer>
      <CardContainer>
        <ProfileImage
          src={`${process.env.PUBLIC_URL}/assets/profile-image.png`}
        />
        <ClientName>Ibuk Sukijan</ClientName>
        <Paragraph>
          “Makasih Panto, aku sekarang berasa tinggal di apartment karena
          barang-barang yang terlihat mewah“
        </Paragraph>
        <StarContainer>
          <Star />
        </StarContainer>
      </CardContainer>
    </Container>
  );
};

export default TestimonialCard;