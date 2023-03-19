import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profileReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { withRouter } from '../../hoc/withRouter';

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

class ProfileContainer extends React.Component {
    componentDidMount() {
        let profileId = this.props.router.params.profileId
        if (!profileId) {
            profileId = 28343
        }
        this.props.getUserProfile(profileId)
    }
    debugger
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

export default compose(
    connect(mapStateToProps, { getUserProfile }),
    withAuthRedirect,
    withRouter
)(ProfileContainer)