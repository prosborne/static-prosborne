import styled from 'styled-components';

const Nav = styled.nav`
    width: 100%;
    display: grid;
    grid-template: none | 1fr 1fr / 6.5rem;

    aside {
        display: grid;
        grid-template: none | repeat()(1fr, 4) / 6.5rem;
    }
`;

export default Nav;
