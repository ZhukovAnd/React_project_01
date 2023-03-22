import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfileStatus, updateProfileStatus , getUserProfile } from '../../redux/profileReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { withRouter } from '../../hoc/withRouter';

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

class ProfileContainer extends React.Component {
    componentDidMount() {
        let profileId = this.props.router.params.profileId
        if (!profileId) {
            profileId = 28343
        }
        this.props.getUserProfile(profileId)
        this.props.getProfileStatus(profileId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}
             status={this.props.status} updateStatus={this.props.updateProfileStatus} />
        )
    }
}

export default compose(
    connect(mapStateToProps, { getUserProfile, getProfileStatus, updateProfileStatus }),
    withAuthRedirect,
    withRouter
)(ProfileContainer)