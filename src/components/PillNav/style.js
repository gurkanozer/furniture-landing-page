import styled from "styled-components";

export const Container = styled.nav`
    width:100%;
    min-height:5.6rem;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-wrap: wrap;
    background:var(--color-gray);
    margin-bottom:2.8rem;
    @media (min-width:550px){
        max-width:36.2rem;
        border-radius:4.2rem;
    }
`

export const Item = styled.button`
    font-size:1.6rem;
    line-height:4.6rem;
    padding:0 2rem;
    border-radius:4.2rem;
    &:not(:last-child){
        margin-right:1rem;
    }
    &.active, &:hover{
        background:var(--color-white);
    }
    @media (min-width:550px){
        font-size:1.8rem;
    }
`