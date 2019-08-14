import { ThemeProvider } from 'styled-components';
import theme from '../components/styles/theme';
import Template from '../components/Template';
import Meta from '../components/Meta';

const Development = () => (
  <ThemeProvider theme={theme}>
    <Template>
      <Meta
        title={`Development History of Peter Riley Osborne - Musician, Developer, Speaker | Eugene, Oregon`}
        description={`Peter Riley Osborne is a musician, developer, and speaker from Eugene, Oregon.  In this section of his site, you will find his philosophy on development, his history as a developer, the languages he utilizes, and his reusme.`} />
      <h1>For over 20 years, I have been doing code things and computer whats-its.</h1>
    </Template>
  </ThemeProvider>
)
export default Development
