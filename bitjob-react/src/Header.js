import React, { Component } from 'react';
import logo from './images/1st_Header/logo.png';
import header_image from './images/1st_Header/header_image.png';
import arrow from './images/1st_Header/arrow.png';
class WeAreLive extends Component{
    render() {
        return (<section class="header">
            <div class="container">
                <nav class="navbar navbar-expand-md">
                    <a class="navbar-brand" href="#"><img src={logo} /></a>
                    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse"
                            data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="navbar-collapse collapse" id="navbarsExample04">
                        <ul class="navbar-nav ml-auto flex-nowrap">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Feature</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Account</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link try-free" href="#">Try Free</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="banner">
                    <div class="row">
                        <div class="col-lg-4 col-sm-12 banner-description">
                            <h1>Easy Solution for
                                The <span class="highlighted">Job Recruitment</span></h1>
                            <p>
                                To Attract, Manage & Hire Right Talent Faster
                            </p>
                            <a class="get-started button gradient" href="#"><label>Get Started</label> <img
                                src={arrow}/> </a>
                        </div>
                        <div class="col-lg-8 col-sm-12">
                            <img class="features" src={header_image}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
    }
}

export default WeAreLive;