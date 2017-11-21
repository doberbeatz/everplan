import React from 'react'
import {connect} from "react-redux";
import {Redirect} from "react-router";

const AuthCheck = ({profile, children}) => {
    if (!profile.isLoggedIn) {
        return <Redirect to='/login'/>
    }

    return children
};

export default connect(
    (state) => ({
        profile: state.profile,
    })
)(AuthCheck)