import React from 'react';
import {Container, Item} from './style';

const PillNav = ({data, onClick, activeTab}) => {
  return (
      <Container>
            {
                data.map((item,index)=>
                    <Item onClick={onClick} key={index} value={item} className={activeTab == item ? 'active':''}>{item}</Item>
                )
            }
      </Container>
  );
};

export default PillNav;
