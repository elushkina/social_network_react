import React from 'react'
import classes from './ProfileInfo.module.css'




const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={classes.profile__img} src='https://i.ytimg.com/vi/KLMJlN72BQs/maxresdefault.jpg'
                     alt=''/>
            </div>
            <div className={classes.description__block}>
                avatar
            </div>
        </div>

    )
}

export default ProfileInfo;
