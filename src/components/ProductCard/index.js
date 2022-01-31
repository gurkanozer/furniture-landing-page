import React from "react";
import {
  Container,
  Header,
  Image,
  Body,
  CategoryTitle,
  ProductName,
  StarContainer,
  Star,
  PriceContainer,
  ProductPrice,
  AddButton,
  PlusIcon
} from "./style";

const ProductCard = () => {
  return (
    <Container>
      <Header>
        <Image src={`${process.env.PUBLIC_URL}/assets/chair1.png`} />
      </Header>
      <Body>
        <CategoryTitle>Chair</CategoryTitle>
        <ProductName>Nyantuy Chair</ProductName>
        <StarContainer>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </StarContainer>
        <PriceContainer>
          <ProductPrice>$921</ProductPrice>
          <AddButton aria-label="Add this item to cart"><PlusIcon/></AddButton>
        </PriceContainer>
      </Body>
    </Container>
  );
};

export default ProductCard;
