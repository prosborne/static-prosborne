import React, { Component } from 'react';
import NavBar from './Nav';
import Head from "./styles/head";

class Header extends Component {
    render() {
        return (
            <Head>
                <NavBar />
            </Head>
        );
    }
}

export default Header;
