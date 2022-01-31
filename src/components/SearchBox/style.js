import styled from 'styled-components';
import {MdSearch} from 'react-icons/md';

export const Container = styled.div`
    width:100%;
    max-width:34.4rem;
    position:relative;
`
export const Input = styled.input`
    height:5.6rem;
    width:100%;
    border-radius:4.2rem;
    border:1px solid var(--color-white);
    background-color: rgba(255,255,255,0.15);
    backdrop-filter:blur(3px);
    color:var(--color-white);
    padding:0 2rem;

    outline-color:var(--color-orange);
    //PLACE HOLDER COLOR
    &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: var(--color-white);
        opacity: 1; /* Firefox */
    }
    &:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: var(--color-white);
    }
    &::-ms-input-placeholder { /* Microsoft Edge */
    color: var(--color-white);
    }
`
export const Button = styled.button`
    width:4rem;
    height:4rem;
    border-radius:50%;
    background-color:var(--color-orange);
    padding:0.6rem;
    position:absolute;
    bottom:0.8rem;
    right:0.8rem;
    transition: all .3s ease;
    &:hover{
        filter:brightness(1.1);
        transform:scale(1.1);
    }

`
export const Icon = styled(MdSearch)`
    color:var(--color-white);
    width:100%;
    height:100%;
`