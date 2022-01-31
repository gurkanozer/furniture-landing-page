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
`
export const Title = styled.h1`
    margin-bottom:6.2rem;
`