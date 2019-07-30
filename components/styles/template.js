import styled from 'styled-components';

const Template = styled.main`
    max-width: ${props => props.theme.contentMaxWidth};
    margin: ${props => props.theme.templatePadding} auto;
    font-size: 1.6rem;
    position: relative;

    h1 {
        font-size: 3.6rem;
        line-height: 1.6;
        font-family: dolly-new, sans-serif;
    }


`;

export default Template;
