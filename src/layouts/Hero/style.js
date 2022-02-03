import styled from 'styled-components';

export const Section = styled.section`
    width:100%;
    background:url('${process.env.PUBLIC_URL}/assets/hero-bg.png') no-repeat top center;
    background-size:cover;
    height:108.4rem;
    `
export const Container = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    padding-top:11.5rem;
    @media (min-width:550px){
        max-width:62rem;
        text-align:center;
        margin:0 auto;
    }
`
export const Title = styled.h1`
    margin-bottom:6.2rem;
`
export const Paragraph = styled.p`
    display:none;
    color:var(--color-white);
    margin-bottom:2.4rem;
    @media (min-width:550px){
        display:block;
        font-size:2.4rem;
    }
`