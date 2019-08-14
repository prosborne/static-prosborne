import styled from 'styled-components';

const Template = styled.main`
    max-width: ${props => props.theme.contentMaxWidth};
    margin: ${props => props.theme.templatePadding} auto;
    font-size: 2rem;
    position: relative;
    color: ${props => props.theme.black};

    h1 {
        font-size: 3.6rem;
        line-height: 1.6;
    }

    h2 {
        font-size: 2.8rem;
    }

    h3 {
        font-size: 1.8rem;
    }

    h4 {
        font-size: 4.8rem;
    }

    a {
        color: ${props => props.theme.purple};
        text-decoration: none;
    }
    blockquote {
        font-size: 4.2rem;
        line-height: 1.4;
        weight: 300;
        color: ${props => props.theme.orange};
    }
`;

export default Template;
