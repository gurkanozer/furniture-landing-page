import styled from 'styled-components';

export const ListContainer = styled.ul`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
    margin-bottom:2.8rem;
`
export const ListItem = styled.li`
padding:1rem 0;
`
export const ListLink = styled.a`
    font-size:1.7rem;
    color:${({isTitle})=>isTitle ? 'var(--color-orange)' : 'var(--color-light-black)'};
    &:hover{
        color: var(--color-orange);
    }
`