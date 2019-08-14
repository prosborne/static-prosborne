import { ThemeProvider } from 'styled-components';
import theme from '../components/styles/theme';
import Template from '../components/Template';
import Meta from '../components/Meta';

const Music = () => (
  <ThemeProvider theme={theme}>
    <Template>
      <Meta
          title={`Music by Peter Riley Osborne - Musician, Developer, Speaker | Eugene, Oregon`}
          description={`Peter Riley Osborne is a musician, developer, and speaker from Eugene, Oregon.  This page is going to be the place to find music by Peter, show announcmenets, and for the method to book Peter and one of his many bands for your event. And please do!`} />
      <h1>I do like making music!</h1>
    </Template>
  </ThemeProvider>
)
export default Music
