import React from 'react';
import {Container, Input, Button, Icon} from './style';


const SearchBox = () => {
  return (
    <Container>
      <Input type="search" placeholder='Search...'/>
      <Button><Icon/></Button>
    </Container>
  );
};

export default SearchBox;
