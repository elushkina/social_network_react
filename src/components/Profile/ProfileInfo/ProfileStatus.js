import React from "react";
import styles from "./ProfileInfo.module.css"

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
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

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }


    render() {
        return (
            <div className={styles.status}>
                {!this.state.editMode &&
                <div>
                    <span className={!this.props.status ? styles.no_status : ''}
                          onClick={this.activateEditMode}>{this.props.status || 'установите статус'}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onInput={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                           value={this.state.status}/>
                </div>}
            </div>
        )
    }
}

export default ProfileStatus