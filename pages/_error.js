import { ThemeProvider } from 'styled-components';
import theme from '../components/styles/theme';
import Template from '../components/Template';
import Meta from '../components/Meta';

const Error = () => (
  <ThemeProvider theme={theme}>
    <Template>
      <Meta
        title={`Whoops!  THis page doesn't exist in the website of Peter Riley Osborne - Musician, Developer, Speaker | Eugene, Oregon`}
        description={`Peter Riley Osborne is a musician, developer, and speaker from Eugene, Oregon.  In this section of his site, tried to come to a page that doesn't exist. For this I am sorry, and will try harder to anticipate people's needs on my website.`} />
      <h1>404 error? Hmm, there just isn't anything here!</h1>
      <p>I apologize, but it appears that this page you tried to visit doesn't exist.  While I have tried to convey all of the pertinent information about myself that I thought people would want, I didn't forsee this page being one of them. I apologize for my lack of forethought and hope that you can find something of value on the other pages outlined in the navigation above.</p>

      <p>Huzzah!</p>
    </Template>
  </ThemeProvider>
)
export default Error
