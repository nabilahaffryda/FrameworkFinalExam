import React, {Component} from 'react';

class ContactUs extends Component{
    render(){
        return(
            <div className="page-home">
            <div className="container"><br></br><br></br>
                <h1 className="text-center title-page">Contact Us</h1>
                <div className="row-inhert">
                <div className="header-contact">
                    <div className="row">
                    <div className="col-xs-12 col-sm-4 col-md-4">
                        <div className="item d-flex">
                        <div className="item-left">
                            <div className="icon">
                            <i className="zmdi zmdi-email" />
                            </div>
                        </div>
                        <div className="item-right d-flex">
                            <div className="title">Email:</div>
                            <div className="contact-content">
                            <a href="mailto:support@domain.com">support@domain.com</a>
                            <br />
                            <a href="mailto:contact@domain.com">contact@domain.com</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4">
                        <div className="item d-flex">
                        <div className="item-left">
                            <div className="icon">
                            <i className="zmdi zmdi-home" />
                            </div>
                        </div>
                        <div className="item-right d-flex">
                            <div className="title">Address:</div>
                            <div className="contact-content">
                            23 Suspendis matti, Visaosang Building
                            <br />District, NY Accums, North American
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4">
                        <div className="item d-flex justify-content-end  last">
                        <div className="item-left">
                            <div className="icon">
                            <i className="zmdi zmdi-phone" />
                            </div>
                        </div>
                        <div className="item-right d-flex">
                            <div className="title">Hotline:</div>
                            <div className="contact-content">
                            0123-456-78910
                            <br />0987-654-32100
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div><br></br><br></br><br></br>
                <div className="contact-map">
                    <div id="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3785754726428!2d105.78134315594316!3d21.01753304734255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454ab43c0c4db%3A0xdb6effebd6991106!2sKeangnam+Hanoi+Landmark+Tower!5e0!3m2!1svi!2s!4v1530175498947" allowFullScreen />
                    </div>
                </div>
                <div className="input-contact">
                    <p className="text-intro text-center">“Proin gravida nibh vel velit auctor aliquet. Aenean sollicudin, lorem quis bibendum
                    auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit
                    amet nibh vultate cursus a sit amet mauris. Proin gravida nibh vel velit auctor aliquet.”
                    </p>
                    <p className="icon text-center">
                    <a href="#">
                        <img src="img/other/contact_mess.png" alt="img" />
                    </a>
                    </p>
                    <div className="d-flex justify-content-center">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="contact-form">
                        <form action="#" method="post" encType="multipart/form-data">
                            <div className="form-fields">
                            <div className="form-group row">
                                <div className="col-md-6">
                                <input className="form-control" name="name" placeholder="Your name" />
                                </div>
                                <div className="col-md-6 margin-bottom-mobie">
                                <input className="form-control" name="from" type="email" placeholder="Your email" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-12 margin-bottom-mobie">
                                <input className="form-control" name="from" type="email"  placeholder="Subject" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-12">
                                <textarea className="form-control" name="message" placeholder="Message" rows={8} defaultValue={""} />
                                </div>
                            </div>
                            </div>
                            <div>
                            <button className="btn" type="submit" name="submitMessage">
                                <img className="img-fl" src="img/other/contact_email.png" alt="img" />Send message
                            </button>
                            </div>
                        </form><br></br><br></br>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

        )
    }
} export default ContactUs