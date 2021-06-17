import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from "../actions/loginUser"

class Login extends Component {
    state = { email: "", password: "" };
    handleEmailChange = ({ target }) => {
      this.setState({ email: target.value });
    };
    handlePasswordChange = ({ target }) => {
      this.setState({ password: target.value });
    };
    handleSubmit = () => {
      const { dispatch } = this.props;
      const { email, password } = this.state;
      dispatch(loginUser(email, password));
    };
    render() {
      const { loginError, isAuthenticated } = this.props;
      if (isAuthenticated) {
        return <Redirect to="/aboutus" />;
      } else {
        return (
          <section className="contact-us section-center ">
            <div className="container">
              <div className="contact-head">
                <div className="row justify-content-center">
                  <div className="col-lg-5 ">
                    <div className="form-main">
                      <div > <br></br><br></br>
                        <center><h1 class="text-center title-page">Log In</h1></center>
                        <div className="pl-lg-4">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="form-control-label" htmlFor="input-username">Email</label>
                                <input type="email" id="input-email" className="form-control" placeholder="Email" onChange={this.handleEmailChange} />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="form-control-label"  htmlFor="input-password">Password</label>
                                <input type="password" id="input-password" className="form-control" placeholder="Password" onChange={this.handlePasswordChange}/>
                              </div>
                            </div>
                          </div>
                          {loginError && (
                            <p>
                              Incorrect email or password.
                            </p>
                          )}
                          <div className="row justify-content-center">
                            <button type="submit" class="btn btn-primary" onClick={this.handleSubmit}>Login</button>
                          </div><br></br>
                        </div>
                        <div class="form-group button"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      }
    }
  }
  
  function mapStateToProps(state) {
    return {
      isLoggingIn: state.auth.isLoggingIn,
      loginError: state.auth.loginError,
      isAuthenticated: state.auth.isAuthenticated,
    };
  }
  export default connect(mapStateToProps)(Login);
  