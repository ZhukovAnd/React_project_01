import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profileReducer';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


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

let WithUrlDataContainerComponent = withRouter(ProfileContainer)
let ResultContainer = withAuthRedirect(WithUrlDataContainerComponent)
export default connect(mapStateToProps, { getUserProfile })(ResultContainer)