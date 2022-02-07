import styled from 'styled-components';
import { MdStarRate } from "react-icons/md";
import { TiPlus } from "react-icons/ti";

export const Container = styled.div`
    width:100%;
    max-width:26.8rem;
    height:44.2rem;
    background:var(--color-very-light-gray);
    display:flex;
    flex-direction:column;
    margin-top:8rem;
    margin-bottom:8rem;
    border-radius:2.8rem;
`
export const Header = styled.div``
export const Image = styled.img`
    margin-top:-5rem;
    height:33rem;
    object-fit:cover;
`
export const Body = styled.div`
    background:var(--color-white);
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
    text-align:left;
    padding:2.1rem;
    height:100%;
    border-radius:2.8rem;
`
export const CategoryTitle = styled.span`
    font-size:1.6rem;
    color:var(--color-light-black);
    margin-bottom:0.6rem;
`
export const ProductName = styled.a`
    color:var(--color-black);
    font-size:2.1rem;
    margin-bottom:0.6rem;
`
export const StarContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:left;
    margin-bottom:3.6rem;
`
export const Star = styled(MdStarRate)`
    width:1.6rem;
    height:1.6rem;
    color:var(--color-orange);
`

export const PriceContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:100%;
`
export const ProductPrice = styled.span`
    font-size:2.1rem;
    font-weight:var(--fw-bold);
    color:var(--color-black);
`
export const AddButton = styled.button`
    width:4.8rem;
    height:4.8rem;
    border-radius:50%;
    font-size:3.6rem;
    background:var(--color-light-black);
    color:var(--color-white);
    display:flex;
    align-items:center;
    justify-content:center;
    transition:all .3s ease;
    &:hover{
        background:var(--color-orange);
        transform:scale(1.1);
        font-size:4rem;
    }
`
export const PlusIcon = styled(TiPlus)`

`