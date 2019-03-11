import { Component } from "react";
import Template from "../components/Template";
import Meta from "../components/Meta";
export default class Index extends Component {
    render() {
        return (
            <Template>
                <Meta
                    title={`Remote Job Lists`}
                    description={`Some sample description`}
                />
                <p>Hello Next.js</p>
            </Template>
        );
    }
}
