import styled from 'styled-components';

export const Section = styled.section`

`

export const Container = styled.div`
    margin:11.4rem auto 0;
    margin-bottom:4.4rem;
    max-width:133.6rem;
    display:flex;
    flex-direction:column;
    @media (min-width:992px){
        flex-direction:row;
        align-items:center;
    }
    @media (min-width:1190px){
        align-items:flex-start;
    }
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
    
    @media (min-width:992px){
        flex-direction:column;
    }
    @media (min-width:1190px){
        flex-direction:row;
    }
`