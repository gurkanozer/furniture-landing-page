import React, {useState, useEffect} from 'react';
import {HeaderContainer, InnerContainer, Brand, Button, MenuButton} from './style';
import {MdOutlineShoppingBag, MdMenu} from 'react-icons/md';
import {Navbar} from '../../components';
import {useScrollPosition,useWindowDimensions} from '../../hooks';

const Header = () => {
    const [navbarIsActive, setNavbarIsActive] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const {scrollY} = useScrollPosition();
    const {width} = useWindowDimensions();
    const body = document.querySelector('body');
    
    const handleToggleNavbar = () => {
        setNavbarIsActive(!navbarIsActive);
        body.classList.toggle('overlay-active')
    }
  useEffect(()=>{
    if(width >= 992){
        setNavbarIsActive(false);
        body.classList.remove('overlay-active')
    }
  },[width]);

  useEffect(()=>{
    if(scrollY > 120){
        setIsScrolled(true);
    }
    else setIsScrolled(false);
  },[scrollY]);
  return (
      <HeaderContainer isscrolled={isScrolled}>
          <InnerContainer isscrolled={isScrolled}>
              <MenuButton aria-label='Open Menu' onClick={handleToggleNavbar}><MdMenu/></MenuButton>
              <Brand href="#">Panto</Brand>
              <Navbar isActive={navbarIsActive} handleClose={handleToggleNavbar}/>
              <Button aria-label='Open Cart'><MdOutlineShoppingBag/></Button>
          </InnerContainer>
      </HeaderContainer>
  );
};

export default Header;
