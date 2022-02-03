import React, {useState, useEffect} from 'react';
import {HeaderContainer, InnerContainer, Brand, MenuButton} from './style';
import {MdOutlineShoppingBag, MdMenu} from 'react-icons/md';
import {Navbar} from '../../components';
import {useScrollPosition} from '../../hooks';

const Header = () => {
    const [navbarIsActive, setNavbarIsActive] = useState(false);
    const handleToggleNavbar = () => {
        setNavbarIsActive(!navbarIsActive);
        const body = document.querySelector('body');
        body.classList.toggle('overlay-active')
    }
    
  const [isScrolled, setIsScrolled] = useState(false);
  const {scrollY} = useScrollPosition();
  useEffect(()=>{
    if(scrollY > 120){
        setIsScrolled(true);
    }
    else setIsScrolled(false);
  },[scrollY]);
  return (
      <HeaderContainer isscrolled={isScrolled}>
          <InnerContainer>
              <MenuButton aria-label='Open Menu' onClick={handleToggleNavbar}><MdMenu/></MenuButton>
              <Brand href="#">Panto</Brand>
              <Navbar isActive={navbarIsActive} handleClose={handleToggleNavbar}/>
              <MenuButton aria-label='Open Cart'><MdOutlineShoppingBag/></MenuButton>
          </InnerContainer>
      </HeaderContainer>
  );
};

export default Header;
