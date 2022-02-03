import styled from 'styled-components';
import { MdStarRate } from "react-icons/md";

export const Container = styled.div`
    max-width:37rem;
    position:relative;
`

export const ImageContainer = styled.div`
    // width:${({width})=>width ? width : '100%'};
    // height:${({height})=>height ? height: 'auto'};
    // border-radius:${({radius})=>radius ? radius: 0};
    // border: ${({border})=>border ? border : 0};    
`
export const Image = styled.img``
export const CardContainer = styled.div`
    position:absolute;
    bottom:1.8rem;
    left:50%;
    transform:translateX(-50%);
    background:var(--color-white);
    width:100%;
    max-width:33.4rem;
    padding:4.4rem 4rem 0rem;
    text-align:center;
    border-radius:2rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify:content:center;

`
export const ProfileContainer = styled.div`
    width:8.2rem;
    height:8.2rem;
    border:1.6rem solid var(--color-white);
    border-radius:50%;
    position:absolute;
    top:-4.1rem;
    left:50%;
    transform:translateX(-50%);
    &::before{
        content:'';
        position:absolute;
        bottom:2.5rem;
        left:-3.2rem;
        background:transparent;
        width:2rem;
        height:1.8rem;
        border-bottom-right-radius:100%;
        box-shadow: 0.6rem 0.6rem 0 0.5rem var(--color-white);
    }
    &::after{
        content:'';
        position:absolute;
        bottom:2.5rem;
        right:-3.2rem;
        background:transparent;
        width:2rem;
        height:1.8rem;
        border-bottom-left-radius:100%;
        box-shadow: -0.6rem 0.6rem 0 0.5rem var(--color-white);
    }
`
export const ProfileImage = styled.img`
`
export const ClientName = styled.h4`
    font-size:1.8rem;
    font-weight:var(--fw-bold);
    color:var(--color-black);
    margin-bottom:4rem;
   
`
export const Paragraph = styled.p`
    font-size:1.4rem;
    line-height:120%;
    margin-bottom:2.8rem;
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