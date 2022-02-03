import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md';

export const Container = styled.div`
    width:100%;
    height:100%;
    min-height:100vh;
    background: rgba(0,0,0,0.95);
    position:absolute;
    top:0;
    left:-100%;
    transition:all .4s ease;
    padding:2.8rem 1.2rem;
    &.active{
    left:0;
    @media (min-width:570px){
        max-width:27rem;
    }
}
`

export const CloseButton = styled.button`
    padding:1.6rem;
    color:var(--color-white);
    &:hover{
        color:var(--color-orange);
    }
`

export const CloseIcon =styled(FaTimes)`
    width:2.8rem;
    height:2.8rem;
    color:inherit;
`
export const DownArrow = styled(MdKeyboardArrowDown)``
export const UpArrow = styled(MdKeyboardArrowUp)``
export const SubList = styled.ul`
display:none;
`
export const SubItem = styled.div`
    display:flex;
    align-items:center;
    cursor:pointer;
    ${DownArrow}{
        display:inline-block;
    }
    ${UpArrow}{
        display:none;
    }
    &.active{
        color:var(--color-orange);
        ${DownArrow}{
            display:none;
        }
        ${UpArrow}{
            display:inline-block;
        }
    }
`
export const List = styled.ul`
`

export const ListItem = styled.li`
    font-size:1.8rem;
    color:var(--color-white);
    padding:1.6rem;
    &:hover{
        color:var(--color-orange);
    }
`
export const Link = styled.a`
   color:inherit; 
`