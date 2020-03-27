import React, { Component } from 'react';
import quote from './images/5th_segment_testimonals/quote.png';
import testimony from './images/5th_segment_testimonals/testimony.png';
import main_copy_3 from './images/5th_segment_testimonals/cube/main_copy_3.png';
import grameen_phone from './images/5th_segment_testimonals/a8c62896114c655d7a116af1d1de9111659e32f1.png';
import main_copy_12 from './images/5th_segment_testimonals/cube/main_copy_12.png';


class Testimony extends Component{
    render() {
        return (
            <section class="testimony">
                <div class="container">
                    <div class="testimonial">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="image-wrapper">
                                    <img src={testimony}/>
                                </div>
                            </div>
                            <div class="col-lg-8 testify">
                                <q>I feel more inclined to believe that a
                                    company values design id they're
                                    coming to Dribble to source
                                    designers instead of relying on more
                                    generic job boards</q>
                                <p><strong>Alyssa Graves, </strong> Visual Designer</p>
                                <img class="quote-company"
                                     src={grameen_phone}/>
                            </div>
                        </div>
                        <div class="quote-image"><img src={quote}/></div>
                        <div class="cube-top-right"><img src={main_copy_12}/>
                        </div>
                        <div class="cube-left-bottom"><img src={main_copy_3}/>
                        </div>
                    </div>
                </div>
            </section>)
    }
}

export default Testimony;