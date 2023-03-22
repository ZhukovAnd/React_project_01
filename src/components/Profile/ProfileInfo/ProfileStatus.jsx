import React from "react";
import style from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
statusInputRef = React.createRef()
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        console.log("this:", this)
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
onStatusChange = (e) => {
    this.setState({
        status: e.currentTarget.value
    })
}

componentDidUpdate(prevProps, prevState) {
// при обновлении компененты сравним предыдущие пропсы и состояние
// с новыми пришедшими пропсами и состоянием
    if(prevProps.status !== this.props.status) {
        this.setState({
            status: this.props.status
        })
    }
}

    render() {
        return (<div className={style.profileStatus}>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode} >
                        {this.props.status !== null ? this.props.status: 'Status is missing'}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.state.status} />
                </div>
            }
        </div>
        )
    }
}

export default ProfileStatus;