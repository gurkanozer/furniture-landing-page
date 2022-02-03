import styled from 'styled-components';

export const Section = styled.section`

`

export const Container = styled.div`
margin-top:11.4rem;
margin-bottom:11.4rem;
`
export const Title = styled.h2`
    text-align:center;
    padding:0 4rem;
    margin-bottom:4.8rem;
    @media (min-width:550px){
        margin-bottom:8rem;
    }
`
export const ContentContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
    @media (min-width:550px){
        flex-direction:row;
        gap:1rem;
    }
`