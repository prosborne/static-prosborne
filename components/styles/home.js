import styled from 'styled-components';

const HomeContainer = styled.div`
    h2 {
        text-align: center;
        font-size: 2.4rem;
    }
    section {
        margin: ${props => props.theme.templatePadding} 0;

        header {
            text-align: center;
            figure {
                .blog-grace {
                    background: url('../../static/blog-grace.svg') no-repeat;
                    display: block;
                    margin: ${props => props.theme.templatePadding} auto;
                    width: 15rem;
                    height: 15rem;
                    background-size: contain;
                }
            }
            h3 {
                text-transform: lowercase;
                color: ${props => props.theme.orange};
                padding: ${props => props.theme.templatePadding} 0 0;
            }
        }

        &.schedule {
            text-align: center;
            >div {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
            }
        }

        &.latest-blog {

        }
    }
`;

export default HomeContainer;
