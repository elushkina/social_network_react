import React from "react";
import styles from "./ProfileInfo.module.css"

class ProfileStatus extends React.Component {
    state = {
        editMode: false, //edit status
    }

    activateEditMode = () => {
        console.log(this)
        this.setState( {
            editMode: true
        })
    }
    deactivateEditMode() {
        this.setState( {
            editMode: false
        })
    }

    render() {
        return (
            <div className={styles.status}>
                {!this.state.editMode &&
                <div>

                    <span onClick={this.activateEditMode}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/>
                </div>}
            </div>
        )
    }
}

export default ProfileStatus