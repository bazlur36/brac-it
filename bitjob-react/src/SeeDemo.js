import React, { Component } from 'react';
import arrow from './images/1st_Header/arrow.png';
import group_18 from './images/7TH_segment/Group_18.png';
class SeeDemo extends Component{
    render() {
        return (
            <section class="see-demo">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-sm-12 hi-5">
                            <img src={group_18}/>
                        </div>
                        <div class="col-lg-6 col-sm-12">
                            <h2>See The demo for entire<br />
                                <span>BracJobs?</span></h2>
                            <p>Select, Hire and Onboard Great Talent</p>
                            <a class="get-started button gradient" href="#"><label>Get Started Now</label> <img
                                src={arrow}/> </a>
                        </div>
                    </div>
                </div>
            </section>)
    }
}

export default SeeDemo;