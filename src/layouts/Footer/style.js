import styled from "styled-components";

export const FooterContainer = styled.footer`
width:100%;
background: var(--color-light-gray);
padding-top:9.9rem;
`
export const Container = styled.div`
padding:0 2.8rem;
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:center;
max-width:133.6rem;
margin:0 auto;
`

export const BrandContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
    margin-bottom:4rem;
    @media (min-width:550px){
        max-width:36rem;
    }
`
export const BrandLogo = styled.a`
    font-size:2.8rem;
    color:var(--color-black);
    font-weight:var(--fw-bold);
    margin-bottom:2.8rem;
`
export const Paragraph = styled.p`
    font-size:1.5rme;
`
export const OtherLinks = styled.ul`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:2.8rem;
    @media (max-width:342px){
        flex-direction:column;
        align-items:flex-start;
    }
    @media (min-width:550px){
        width:auto;
        flex-direction:column;
        align-items:flex-start;
    }
    @media (min-width:768px){
        flex-direction:row;
        gap:2.6rem;
    }
`
export const OtherLinkItem = styled.li`
    margin-bottom:1.6rem;
`
export const OtherLink = styled.a`
    font-size:1.7rem;
    color:var(--color-light-black);
`
export const Copy = styled.span`
    font-size:1.7rem;
    color:var(--color-dark-gray);
`

export const InnerContainer = styled.div`
    width:100%;
    margin-bottom:4.4rem;
    display:flex;
    flex-direction:column;
    @media (min-width:550px){
        flex-direction:row;
        justify-content:space-between;
    }
`
export const LinkContainer = styled.div`
   display:flex;
   width:100%; 
   align-items:flex-start;
   justify-content:center;
   flex-direction:column;
   @media (min-width:768px){
       justify-content:space-between;
       flex-direction:row;
   }
   @media (min-width:992px){
       max-width:62.2rem;
    }
`