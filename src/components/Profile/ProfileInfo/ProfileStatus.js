import React, {useEffect, useState} from "react";
import styles from "./ProfileInfo.module.css"

const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    const statusChange = !editMode
        ? <div>
            <span onClick={activateEditMode}> {props.status || 'установите статус'}</span>
        </div>
        : <input type='text' autoFocus={true} onChange={onStatusChange}
                 onBlur={deactivateEditMode} value={status}
        />
    return (
        <div className={styles.status}>
            {
                !props.isOwner
                    ? <span> {props.status || ''}</span>
                    : statusChange
            }
        </div>
    )
}

export default ProfileStatus