import React, { Component } from 'react';
import Link from 'next/link';
import Nav from "./styles/nav";

class Header extends Component {
    render() {
        return (
            <Nav>
                <div role='logo image'>
                    <h1>Peter Riley Osborne</h1>
                </div>
                <aside>
                    <Link href='/blog'><a>Blog</a></Link>
                    <Link href='/resume'><a>Resume</a></Link>
                    <Link href='/services'><a>Services</a></Link>
                    <Link href='/contact'><a>Contact</a></Link>
                </aside>
            </Nav>
        );
    }
}

export default Header;
