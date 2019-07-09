import React, { Component } from 'react';
import Nav from './Nav';
import Head from "./styles/head";

class Header extends Component {
    render() {
        return (
            <Head>
                <Nav />
            </Head>
        );
    }
}

export default Header;
