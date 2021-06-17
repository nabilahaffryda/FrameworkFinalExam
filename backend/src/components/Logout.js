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
            <div className="content">
                <div className="row">
                <div className="col main-blogs"><br></br><br></br>
                    <h2 className="text-center col">Do you want to log out?</h2>
                    <div className="row">
                    <div className="col-md-12 col-xs-12">
                        <div className="hover-after"><br></br><br></br>
                        <center>
                            <button className="btn btn-primary" onClick={this.handleLogout}> Logout </button>
                            {isLoggingOut && <p> Logging Out .... </p>}
                            {logoutError && <p> Error logging out </p>} </center>
                        </div><br></br><br></br>
                    </div>
                    </div>
                </div>
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
