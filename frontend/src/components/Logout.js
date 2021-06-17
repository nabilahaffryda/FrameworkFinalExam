import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions/loginUser";

class Logout extends Component {
    handleLogout = () => {
        const { dispatch } = this.props;
        dispatch(logoutUser());
    };
    render() {
        const { isLoggingOut, logoutError } = this.props;
        return (
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                <center><h2> Do you want to log out? </h2>
                <button className="btn btn-primary" onClick={this.handleLogout}> Logout </button>
                {isLoggingOut && <p> Logging Out .... </p>}
                {logoutError && <p> Error logging out </p>} </center>
                </div>
              </div>
                
            </div>
        )
    }
} function mapStateToProps(state) {
    return {
        isLoggingOut: state.auth.isLoggingOut,
        logoutError: state.auth.logoutError
    };
} export default connect(mapStateToProps)(Logout);
