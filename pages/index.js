import { Component } from "react";
import { ThemeProvider } from 'styled-components';

import theme from '../components/styles/theme';
import Template from "../components/Template";
import Meta from "../components/Meta";

export default class Index extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Template>
                    <Meta
                        title={`Peter Riley Osborne - Musician, Developer, Speaker | Eugene, Oregon`}
                        description={`Peter Riley Osborne is a musician, developer, and speaker from Eugene, Oregon.  He is curreently employed by CBT Nuggets as a development manager, and is also a member of Peter Riley Osborne and the Truckstop Handshakes, You, Me, & Pete, as well as lead guitarist for Gretchen Owens and the Jake Brakes.  Peter has also spoken at local tech events and informally will tell stories of enhanced mundane life experiences for free.`}
                        />
                    <p>Mey, this is my website.  Right now it is pretty simple, but just watch it grow to extreme proportions over time!</p>
                </Template>
            </ThemeProvider>
        );
    }
}
