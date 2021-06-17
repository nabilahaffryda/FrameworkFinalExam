import React, {Component} from 'react';

class AboutUs extends Component{
    render(){
        return(
            <div className="page-home">
            <div className="container">
                <div className="about-us-content"><br></br><br></br>
                <h1 className="text-center title-page">About Us</h1>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 right">
                    <a href="#">
                        <img className="img-fluid" src="img/other/1.jpg" alt="#" />
                    </a>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 left">
                    <div className="cms-block f-right"><br></br><br></br>
                        <h3 className="page-subheading">WHO WE ARE</h3>
                        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicudin, lorem quis biben
                        dum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis
                        sed odio sit amet nibh vultate cursus a sit amet mauris. Duis sed odio sit
                        amet nibh vultate cursus a sit amet mauris.</p>
                        <p>Proin gravida nibh vel velit auctor aliquet. nec sagittis sem nibh id elit. Duis
                        sed odio sit amet nibh vultate cursus a sit amet mauris. Duis sed odio sit
                        amet nibh vultate cursus a sit amet mauris.</p>
                        <a>
                        <img className="img-fluid" src="img/other/4.png" alt="#" />
                        <span>Mr. kwang shang - CEO</span>
                        </a>
                    </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 right">
                    <div className="cms-block f-left"><br></br><br></br><br></br>
                        <h3 className="page-subheading">WHAT WE DO</h3>
                        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicudin, lorem quis biben
                        dum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis
                        sed odio sit amet nibh vultate cursus a sit amet mauris. Duis sed odio sit
                        amet nibh vultate cursus a sit amet mauris.</p>
                        <p>Proin gravida nibh vel velit auctor aliquet, nec sagittis sem nibh id elit. Duis
                        sed odio sit amet nibh vultate cursus a sit amet mauris. Duis sed odio sit
                        amet nibh vultate cursus a sit amet mauris.</p>
                    </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 left">
                    <a href="#">
                        <img className="img-fluid" src="img/other/2.jpg" alt="#" />
                    </a>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 right">
                    <a href="#">
                        <img className="img-fluid" src="img/other/3.jpg" alt="#" />
                    </a>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 left">
                    <div className="cms-block f-right"><br></br><br></br>
                        <h3 className="page-subheading no-before">MEET OUR TEAM</h3>
                        <div className="testimonials owl-carousel owl-theme owl-loaded owl-drag">
                        <div className="item">
                            <div className="name">William James</div>
                            <div className="position">Designer - Stylish</div>
                            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicudin, lorem
                            quis biben dum auctor, nisi elit consequat ipsum, nec sagittis sem
                            nibh id elit. Duis sed odio sit amet nibh vultate cursus a sit amet
                            mauris. Proin gravida nibh vel velit auctor aliquet. Aenean sollicudin,
                            lorem quis bibendum auctor, nisi elit conse quat ipsum
                            </p>
                        </div>
                        </div>
                        <div className="social-content">
                        <div className="social">
                            <ul className="list-inline mb-0 justify-content-end">
                            <li className="list-inline-item mb-0">
                                <a href="#" target="_blank">
                                <i className="fa fa-facebook" />
                                </a>
                            </li>
                            <li className="list-inline-item mb-0">
                                <a href="#" target="_blank">
                                <i className="fa fa-twitter" />
                                </a>
                            </li>
                            <li className="list-inline-item mb-0">
                                <a href="#" target="_blank">
                                <i className="fa fa-google" />
                                </a>
                            </li>
                            <li className="list-inline-item mb-0">
                                <a href="#" target="_blank">
                                <i className="fa fa-instagram" />
                                </a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div><br></br><br></br>
            </div>
            </div>

        )
    }
} export default AboutUs