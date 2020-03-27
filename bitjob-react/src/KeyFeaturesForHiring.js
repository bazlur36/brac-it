import React, { Component } from 'react';
import various_jobs from './images/4th_segment/various-jobs-online_1x.png';

class KeyFeaturesForHiring extends Component{
    render() {
        return (
            <section class="key-features-for-hiring">
                <div class="container">
                    <h2>Key Features For Exceptional Hiring</h2>
                    <div class="content">
                        <ul>
                            <li><a href="#" class="active">Team Onboard</a></li>
                            <li><a href="#">Finding Candidate</a></li>
                            <li><a href="#">Establish Brand</a></li>
                        </ul>
                        <div class="row">
                            <div class="col-lg-6 col-sm-12">
                                <ul class="navigation">
                                    <li class="collaborate">
                                        <h4>Collaborate with hiring team</h4>
                                        <p>Provide personalized team access to have full
                                            control over the recruiting team and make
                                            better & faster hiring decisions</p>
                                    </li>
                                    <li class="insightful">
                                        <h4>Insightful Reports from Analytics</h4>
                                        <p>Provide personalized team access to have full
                                            control over the recruiting team and make
                                            better & faster hiring decisions</p>
                                    </li>
                                    <li class="instant-notifications">
                                        <h4>Instant Smart Notifications</h4>
                                        <p>Provide personalized team access to have full
                                            control over the recruiting team and make
                                            better & faster hiring decisions</p>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-6 col-sm-12 various-jobs">
                                <img src={various_jobs} alt="various jobs"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>)
    }
}

export default KeyFeaturesForHiring;