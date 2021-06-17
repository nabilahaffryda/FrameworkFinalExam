import React, {Component} from 'react';

class Home extends Component{
    render(){
        return(
            <section className="page-home">
            {/* banner */}
            <div className="spacing-10 group-image-special"><br></br><br></br>
                <div className="row"><br></br><br></br>
                <div className="col-lg-4 col-md-4">
                    <div className="block">
                    <div className="effect">
                        <a href="/Product">
                        <span>Arm chair</span>
                        <img className="img-fluid width-100" src="img/home/effect14.jpg" alt="banner-1" title="banner-1" />
                        </a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="block">
                    <div className="effect">
                        <a href="/Product">
                        <span>Side table</span>
                        <img className="img-fluid width-100" src="img/home/effect15.jpg" alt="banner-2" title="banner-2" />
                        </a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="block">
                    <div className="effect">
                        <a href="/Product">
                        <span>Bookshelves </span>
                        <img className="img-fluid width-100" src="img/home/effect16.jpg" alt="banner-2" title="banner-2" />
                        </a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="block">
                    <div className="effect">
                        <a href="/Product">
                        <span>Desk</span>
                        <img className="img-fluid width-100" src="img/home/effect17.jpg" alt="banner-2" title="banner-2" />
                        </a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="block">
                    <div className="effect">
                        <a href="/Product">
                        <span>Bed</span>
                        <img className="img-fluid width-100" src="img/home/effect18.jpg" alt="banner-2" title="banner-2" />
                        </a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="block">
                    <div className="effect">
                        <a href="/Product">
                        <span>Wall shelves</span>
                        <img className="img-fluid width-100" src="img/home/effect19.jpg" alt="banner-2" title="banner-2" />
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="back-to-top">
                <a href="#">
                    <i className="fa fa-long-arrow-up" />
                </a>
            </div>
            </section>
        )
    }
} export default Home