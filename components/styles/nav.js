import styled from 'styled-components';

const Nav = styled.nav`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-start: center;
    grid-row-start: center;

    aside {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        align-items: center;
        a {
            text-transform: lowercase;
            font-size: 800;
        }
    }
`;

export default Nav;
