import { ThemeProvider } from 'styled-components';
import theme from '../components/styles/theme';
import Template from '../components/Template';
import Meta from '../components/Meta';

const Services = () => (
    <ThemeProvider theme={theme}>
        <Template>
            <Meta
                title={`Services provided by Peter Riley Osborne - Musician, Developer, Speaker | Eugene, Oregon`}
                description={`Peter Riley Osborne is a musician, developer, and speaker from Eugene, Oregon.  If you are looking for development consultation, these are the lanes that he works in, and the expectations of said work relationship.`} />
            <h1>These are the things I can do for you!</h1>
        </Template>
    </ThemeProvider>
)
export default Services
