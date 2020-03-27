import React, { Component } from 'react';
import main_copy_12 from './images/5th_segment_testimonals/cube/main_copy_12.png';
import arrow from './images/1st_Header/arrow.png';
import logo from './images/1st_Header/logo.png';

import facebook from './images/Footer/Facebook.png';
import twitter from './images/Footer/twitter.png';
import linked_in from './images/Footer/Linkedin.png';
class Pricing extends Component{
    render() {
        return (
            <section class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="menu">
                                <a href="#"><img src={logo}/></a>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Feature</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Account</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="contact">
                                <h4>Contact Us</h4>
                                <a href="#">job@brac.it</a>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="connect-socially">
                                <h4>Connect Socially</h4>
                                <ul>
                                    <li><a href="#"><img src={facebook}/></a></li>
                                    <li><a href="#"><img src={twitter}/></a></li>
                                    <li><a href="#"><img src={linked_in}/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>)
    }
}

export default Pricing;