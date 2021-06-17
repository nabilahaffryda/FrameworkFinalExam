import React, {Component} from 'react';

class Header extends Component{
    render(){
        return(
            <header id="header">
                {/* header left mobie */}
                <div className="header-mobile d-md-none">
                    <div className="mobile hidden-md-up text-xs-center d-flex align-items-center justify-content-around">
                    {/* menu left */}
                    <div id="mobile_mainmenu" className="item-mobile-top">
                        <i className="fa fa-bars" aria-hidden="true" />
                    </div>
                    {/* logo */}
                    <div className="mobile-logo">
                        <a href="/">
                        <img className="logo-mobile img-fluid" src="img/home/logo-mobie.png" alt="Prestashop_Furnitica" />
                        </a>
                    </div>
                    {/* menu right */}
                    <div className="mobile-menutop" data-target="#mobile-pagemenu">
                        <i className="zmdi zmdi-more" />
                    </div>
                    </div>
                </div>
                {/* header desktop */}
                <div className="header-top d-xs-none ">
                    <div className="container">
                    <div className="row">
                        {/* logo */}
                        <div className="col-sm-2 col-md-2 d-flex align-items-center">
                        <div id="logo">
                            <a href="/">
                            <img src="img/home/logo.png" alt="logo" className="img-fluid" />
                            </a>
                        </div>
                        </div>
                        {/* menu */}
                        <div className="col-sm-5 col-md-5 align-items-center justify-content-center navbar-expand-md main-menu">
                        <div className="menu navbar collapse navbar-collapse">
                            <ul className="menu-top navbar-nav">
                            <li>
                                <a href="/" className="parent">Home</a>
                            </li>
                            <li>
                                <a href="/product" className="parent">Product</a>
                            </li>
                            <li>
                                <a href="/aboutus" className="parent">About Us</a>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-sm-5 col-md-5 d-flex align-items-center justify-content-end" id="search_widget">
                        
                            <div id="block_myaccount_infos" className="hidden-sm-down dropdown">
                                <div className="myaccount-title ">
                                <a href="/login" data-toggle="collapse" className="acount">
                                    <i className="fa fa-sign-in" aria-hidden="true" />
                                </a> &nbsp;&nbsp;&nbsp;
                                <a href="/logout" data-toggle="collapse" className="acount">
                                    <i className="fa fa-sign-out" aria-hidden="true" />
                                </a>
                                </div>
                            </div>
                            <div className="desktop_cart">
                                <div className="header-cart tiva-toggle-btn">
                                    <a href="/cart" className="parent">
                                    <i className="fa fa-shopping-cart" aria-hidden="true" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* main content */}
                <div className="main-content">
                    <div className="wrap-banner">
                    {/* breadcrumb */}
                    <nav className="breadcrumb-bg">
                        <div className="container no-index">
                        <div className="breadcrumb">
                            <br></br>
                        </div>
                        </div>
                    </nav>
                    </div>
                    <div id="wrapper-site">
                        <div id="content-wrapper" class="full-width">
                            <div id="main">
                                <br></br><br></br>
                            </div>
                        </div>
                    </div>
                </div>
            </header> 
        );
    }
} export default Header