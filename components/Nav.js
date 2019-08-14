import React, { Component } from 'react';
import Link from 'next/link';
import Nav from "./styles/nav";

class NavBar extends Component {
    render() {
        return (
            <Nav>
                <figure role='logo image'>
                    <Link href='/'>
                        <a>
                            <i>
                                <img src="../static/pro-logo.svg" />
                            </i>
                        </a>
                    </Link>
                </figure>
                <aside>
                    <Link href='/blog'><a title='Thoughts on all things according to Peter | Blog'>Blog</a></Link>
                    <Link href='/music'><a title='A look into the melodic soul of Peter | Music'>Music</a></Link>
                    <Link href='/development'><a title='All your code are belong to Peter! | Development'>Development</a></Link>
                    <Link href='/contact'><a title='Getting ahold of Peter | Contact'>Contact</a></Link>
                </aside>
            </Nav>
        );
    }
}

export default NavBar;
