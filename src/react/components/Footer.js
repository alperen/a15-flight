import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return <div className="c_footer font-size-14px text-colour-gullGray">
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-md-3 mb-3 md-md-0">
                        <div>
                            <img src="./images/logo_blue.png" alt="Atolye15" width="36" />
                        </div>
                        <div className="copyright-text">
                            <span>Copyright © Atolye15 <br />All rights reserved</span>
                        </div>
                    </div>
                    <div className="col col-12 col-md-3">
                        <span className="text-uppercase heading">Products</span>
                        <ul>
                            <li>
                                <a href="#">Features</a>
                            </li>
                            <li>
                                <a href="#">Personal License</a>
                            </li>
                            <li>
                                <a href="#">Business License</a>
                            </li>
                            <li>
                                <a href="#">Demet Akalın</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col col-12 col-md-3">
                        <span className="text-uppercase heading">About</span>
                        <ul>
                            <li>
                                <a href="#">Features</a>
                            </li>
                            <li>
                                <a href="#">Personal License</a>
                            </li>
                            <li>
                                <a href="#">Business License</a>
                            </li>
                            <li>
                                <a href="#">Demet Akalın</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col col-12 col-md-3">
                        <span className="text-uppercase heading">Support</span>
                        <ul>
                            <li>
                                <a href="#">Buraları</a>
                            </li>
                            <li>
                                <a href="#">Hep</a>
                            </li>
                            <li>
                                <a href="#">Kopyaladım</a>
                            </li>
                            <li>
                                <a href="#">Demet Akalın</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Footer;