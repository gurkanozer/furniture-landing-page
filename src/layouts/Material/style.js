import styled from 'styled-components';

export const Section = styled.section`
    padding:0;
    margin-bottom:8rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-end;
`
export const ImageContainer = styled.div`
    margin-bottom:12.8rem;
    position:relative;
    @media (min-width:550px){
        max-width:62.9rem;
        &::after{
            content:'';
            position:absolute;
            top:50%;
            left:-6rem;
            transform:translateY(-50%);
            width:6rem;
            height:56%;
            border-bottom-left-radius:2.8rem;
            border-top-left-radius:2.8rem;
            background:var(--color-light-gray);
        }
    }
`
export const Image = styled.img`

`
export const ContentContainer = styled.div`
    padding:0 2.8rem;
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