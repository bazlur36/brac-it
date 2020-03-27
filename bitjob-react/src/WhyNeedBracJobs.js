import React, { Component } from 'react';
import ai from './images/3rd_segment/AI.png';
import pipe_line from './images/3rd_segment/Pipeline.png';
import process from './images/3rd_segment/Process.png';
import talent from './images/3rd_segment/Talent.png';
class WhyNeedBracJobs extends Component{
    render() {
        return (
            <section class="why-need-brac-jobs">
                <div class="container">
                    <h2>Why Does your company
                        Need <span>BracJobs</span>
                    </h2>
                    <p>
                        Advanced Recruiting Solution To Accelerate
                        The Hiring Process
                    </p>
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="block ai">
                                <img src={ai}/>
                                <h3>Faster & Better Hiring
                                    Process</h3>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="block pipeline">
                                <img src={pipe_line}/>
                                <h3>Structured Candidate
                                    Pipeline</h3>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class=" block process">
                                <img src={process}/>
                                <h3>Attract and Convert The
                                    Right Talent</h3>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="block talent">
                                <img src={talent}/>
                                <h3>AI Powered Screening
                                    System</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>)
    }
}

export default WhyNeedBracJobs;