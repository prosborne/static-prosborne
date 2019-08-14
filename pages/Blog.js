import { ThemeProvider } from 'styled-components';
import theme from '../components/styles/theme';
import Template from '../components/Template';
import Meta from '../components/Meta';

const Blog = () => (
  <ThemeProvider theme={theme}>
    <Template>
      <Meta
        title={`Blog by Peter Riley Osborne - Musician, Developer, Speaker | Eugene, Oregon`}
        description={`Peter Riley Osborne is a musician, developer, and speaker from Eugene, Oregon.  In this section of his site, you will find his thoughts on development, music, life, faith, politics, and pretty much whatever is on his mind.`} />
      <h1>Here are my thoughts about things.</h1>
    </Template>
  </ThemeProvider>
)
export default Blog
