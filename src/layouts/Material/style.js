import styled from 'styled-components';

export const Section = styled.section`
    padding:0;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-end;
    flex-direction:column-reverse;
    @media (min-width:992px){
        display:grid;
        grid-template-columns:1fr 1fr;
        align-items:center;
        margin-bottom:10rem;
        max-width:144rem;
        margin:0 auto;
    }
    `
export const ImageContainer = styled.div`
    margin-bottom:12.8rem;
    position:relative;
    display:flex;
    align-items:center;
    @media (min-width:550px){
        &::after{
            content:'';
            position:absolute;
            top:-6.6rem;
            right:0;
            width:56%;
            max-width:22rem;
            height:6.6rem;
            border-top-left-radius:2.8rem;
            background:var(--color-light-gray);
        }
    }
    @media (min-width:992px){
        max-width:100%;
        display:flex;
        justify-content:right;
        margin-bottom:0;
    }
    @media (min-width:1440px){
        &::after{
            top:0;
        }
    }

`
export const ImageInner = styled.div`
    display:none;
    @media (min-width:1440px){
        display:flex;
        flex-direction:column;
        gap:2.6rem;
        margin-right:4.2rem;
    }
`
export const Image = styled.img`
    max-width:44.4rem;
    max-height:44.5rem;
    box-shadow: 0px 10px 20px -10px rgba(0,0,0,0.815);
`
export const ContentContainer = styled.div`
    padding:0 2.8rem;
    justify-self:right;
    @media (min-width:992px){
        max-width:57.6rem;
    }
`
export const Title = styled.h2`
    font-size:1.8rem;
    color:var(--color-orange);
    text-transform:uppercase;
    margin-bottom:2.8rem;
`
export const SubTitle = styled.h3`
    font-size:3.6rem;
    margin-bottom:2.8rem;
`
export const Paragraph = styled.p`
margin-bottom:2.8rem;
`
export const Link = styled.a`
    font-size:1.6rem;
    color:var(--color-orange);
`