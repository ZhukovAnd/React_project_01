import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profileReducer';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { userAPI } from '../../api/api';

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile

})

class ProfileContainer extends React.Component {

    componentDidMount() {
        let profileId = this.props.router.params.profileId
        userAPI.getProfile(profileId)
            .then(data => {
                this.props.setUserProfile(data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}
let withRouter = (Component) => {
    let ComponentWithRouterProp = (props) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component {...props} router={{ location, navigate, params }} />
        );
    }
    return ComponentWithRouterProp;
}
export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer))