import styled from "styled-components";

export const FooterContainer = styled.footer`
width:100%;
background: var(--color-light-gray);
padding-top:9.9rem;
padding-bottom:12.7rem;
`
export const Container = styled.div`
    padding:0 2.8rem;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
`
export const BrandContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
    margin-bottom:4rem;
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
`
export const OtherLinkItem = styled.li``
export const OtherLink = styled.a`
    font-size:1.7rem;
    color:var(--color-light-black);
`
export const Copy = styled.span`
    font-size:1.7rem;
    color:var(--color-dark-gray);
`