import { ThemeProvider } from 'styled-components';
import theme from '../components/styles/theme';
import Template from '../components/Template';
import Meta from '../components/Meta';

const Contact = () => (
    <ThemeProvider theme={theme}>
        <Template>
            <Meta
                title={`Contact Peter Riley Osborne - Musician, Developer, Speaker | Eugene, Oregon`}
                description={`Peter Riley Osborne is a musician, developer, and speaker from Eugene, Oregon.  If you have any interest in contacting him about development opportunities, music needs, or just to say hi, this is the page to contact us.`} />
            <h1>3 - 2 - 1 Contact! (... is the reason, is the moment, where everything happens...)</h1>
        </Template>
    </ThemeProvider>
)
export default Contact
