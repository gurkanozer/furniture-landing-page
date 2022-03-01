import React from "react";
import {
  Container,
  CloseButton,
  CloseIcon,
  List,
  SubList,
  ListItem,
  Link,
  DownArrow,
  UpArrow,
  SubItem,
} from "./style";

const Navbar = ({ isActive, handleClose }) => {
  const handleSubList = (e) => {
    const target = e.target;
    if (target.classList.contains("active")) {
      target.classList.remove("active");
      target.parentElement.querySelector('ul').style.display = 'none';
    } 
    else{ 
      target.classList.add("active");
      target.parentElement.querySelector('ul').style.display = 'flex';
    }
  };
  return (
    <Container className={isActive ? "active" : ""}>
      <CloseButton aria-label="Close Menu" onClick={handleClose}>
        <CloseIcon />
      </CloseButton>
      <List>
        <ListItem >
          <SubItem onClick={(e) => handleSubList(e)}>
            Furniture
            <DownArrow />
            <UpArrow />
          </SubItem>
          <SubList>
            <ListItem>
              <Link href="#">Beds</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Chair</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Lamp</Link>
            </ListItem>
          </SubList>
        </ListItem>
        <ListItem>
          <Link href="#">Shop</Link>
        </ListItem>
        <ListItem>
          <Link href="#">About Us</Link>
        </ListItem>
        <ListItem>
          <Link href="#">Contact</Link>
        </ListItem>
      </List>
    </Container>
  );
};

export default Navbar;
