import React from 'react';
import classes from './UserInfo.module.css'

const UserInfo = () => {
    return (
        <div >
            <img className={classes.profile__img} src='https://i.ytimg.com/vi/KLMJlN72BQs/maxresdefault.jpg'
                 alt=''/>
        </div>
    )
}

export default UserInfo;