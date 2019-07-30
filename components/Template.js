import { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Template from "./styles/template";

class Layout extends Component {
    render() {
        return (
            <Template>
                <div className="app">
                    <Header />
                    <section>{this.props.children}</section>
                    <Footer />
                </div>
            </Template>
        );
    }
}

export default Layout;
