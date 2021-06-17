import React, { Component } from 'react'

export class Checkout extends Component {
    render() {
        return (
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
              <div className="thank text-center">
                <br></br><br></br><br></br>
                <h1 className="display-5">Thank you for your purchase</h1>
                <p className="lead"><strong>Please check your email</strong> for further informations</p>
                <hr />
                <p>
                  Having trouble? <a href>Contact us</a>
                </p>
                <p className="lead">
                  <a className="btn btn-primary " href="/" role="button">Continue to homepage</a>
                </p><br></br><br></br><br></br>
              </div>
              </div></div>
            </div>
        )
    }
}

export default Checkout
