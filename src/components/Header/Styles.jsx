import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.header`
    width: 100%;
    padding: 10px 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--dark-gray-color);
    color: var(--white-color);
    transition: var(--transition);

    .button-menu { display: none; }

    ${ props => props.mode === 'light' && css`
        background-color: var(--white-color);
    ` }
    
    @media only screen and (max-width: 425px) { 
        padding: 10px 20px;
        .button-menu { display: flex; }
    }
`;

export const Logo = styled(Link)`
    font-size: var(--fs-20);
    color: var(--white-color);
    letter-spacing: 1px;
    display: inline-flex;
    align-items: center;
    gap: 5px;

    svg { 
        transition: var(--transition);
        color: var(--primary-color);
     }

    &:hover svg { 
        transform: translateY(-3px);
    }

    ${ props => props.mode === 'light' && css`
        color: var(--font-color);
    ` }
`;

export const Links = styled.ul`
    display: flex;
    align-items: center;
    gap: 5px;
    transition: var(--transition);

    ${ props => props.mode === 'light' && css`
        a {
            color: var(--font-color);

            &:hover {
                background-color: var(--white-gray-color);
                color: var(--font-color);
            }
        }
    ` }

    @media only screen and (max-width: 425px) { 
        position: absolute;
        background-color: var(--dark-gray-color);
        flex-direction: column;
        width: 250px;
        left: 0;
        top: 53px;
        border-top-right-radius: var(--radius);
        border-bottom-right-radius: var(--radius);
        transform: translateY(-20px);
        opacity: 0;
        visibility: hidden;
        
        ${props => props.activated === 'true' && css`
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        ` }

        ${ props => props.mode === 'light' && css`
            background-color: var(--white-color);
            a, li { color: var(--font-color); }
            box-shadow: var(--shadow-down);
        ` }
    }
`;

export const LinkItem = styled.li`
    @media only screen and (max-width: 425px) { 
        width: 100%;
        padding: 10px 20px;
    }
`;

export const LinkElement = styled(Link)`
    padding: 10px 20px;
    border-radius: var(--radius);
    color: var(--white-gray-color);
    
    &:hover { 
        color: var(--white-color);
        background-color: var(--dark-background-color); 
    }

    @media only screen and (max-width: 425px) { 
        padding: 10px 0;
    }
`;

export const Button = styled.button`
    background-color: transparent;
    border-color: var(--primary-color);
    color: var(--primary-color);
    padding: 8px 10px;
    display: flex;
    align-items: center;
    gap: 5px;
    border-radius: var(--radius);
    cursor: pointer;
    transition: var(--transition);

    &:hover {
        color: var(--white-color);
        background-color: var(--primary-color);
    }
`;