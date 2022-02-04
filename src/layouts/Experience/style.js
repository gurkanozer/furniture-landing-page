import styled from 'styled-components';

export const Section = styled.section`
    padding:0;
    margin-bottom:8rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    @media (min-width:992px){
        display:grid;
        grid-template-columns:1fr 1.1fr;
        padding-top:30.6rem;
        max-width:144rem;
        margin:0 auto 8rem;
    }
`
export const ImageContainer = styled.div`
    margin-bottom:12.8rem;
    position:relative;
    @media (min-width:768px){
        padding-right:6rem;
        max-width:62.9rem;
        &::after{
            content:'';
            position:absolute;
            top:50%;
            right:0rem;
            transform:translateY(-50%);
            width:6rem;
            height:56%;
            border-bottom-right-radius:2.8rem;
            border-top-right-radius:2.8rem;
            background:var(--color-light-gray);
        }
    }
    @media (min-width:992px){
        &::before{
            content:'';
            position:absolute;
            top:-6.6rem;
            left:0;
            width:50%;
            height:6.6rem;
            border-top-right-radius:2.8rem;
            background:var(--color-light-gray);
        }
    }

`
export const Image = styled.img`
box-shadow: 0px 10px 20px -10px rgba(0,0,0,0.815);
`
export const ContentContainer = styled.div`
    padding:0 2.8rem;
    @media (min-width:992px){
        max-width:630px;
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