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

const ProductCard = ({data}) => {
  const setStars = () =>{
    let item = [];
    for(let i = 0; i < data.stars -1 ; i++){
      item.push(i);
    }
    return (
      <StarContainer>
      {  item.map(e => 
          <Star key={e}/>
        )}
    </StarContainer>
    )
  }
  return (
    <Container>
      <Header>
        <Image src={`${process.env.PUBLIC_URL}/assets/${data.img}`} />
      </Header>
      <Body>
        <CategoryTitle>{data.category}</CategoryTitle>
        <ProductName>{data.productName}</ProductName>
        {
          setStars()
        }
        <PriceContainer>
          <ProductPrice>${data.price}</ProductPrice>
          <AddButton aria-label="Add this item to cart"><PlusIcon/></AddButton>
        </PriceContainer>
      </Body>
    </Container>
  );
};

export default ProductCard;
