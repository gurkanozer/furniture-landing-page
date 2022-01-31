import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
    margin-bottom:4.8rem;
`
export const Title = styled.h2`
    margin-bottom:1.6rem;
    color:var(--color-black);
    font-size:2rem;
    @media (min-width:992px){
        font-size:2.4rem;
    }
`
export const Description = styled.p`
    margin-bottom:1.6rem;
`
export const Link = styled.a`
    color:var(--color-orange);
    font-size:1.4rem;
`