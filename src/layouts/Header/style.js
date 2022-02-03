import styled from 'styled-components';
export const HeaderContainer = styled.header`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    z-index:var(--zi-level-2);
    background:${({isscrolled})=>isscrolled ? 'rgba(0,0,0,0.95)': 'transparent'};
    transition:.5s ease;
`
export const InnerContainer = styled.div`
    width:100%;
    max-width:133.6rem;
    margin:4.4rem auto 2rem;
    padding:0 2.8rem;
    display:flex;
    align-items:center;
    justify-content:space-between;
`

export const Brand = styled.a`
    font-size:2.8rem;
    font-weight:var(--fw-bold);
    color:var(--color-white);
`
export const MenuButton = styled.button`
    font-size:2.8rem;
    color:var(--color-white);
    width:3.2rem;
    height:3.2rem;
    padding-top:0.2rem;
    padding-right:0.2rem;
`