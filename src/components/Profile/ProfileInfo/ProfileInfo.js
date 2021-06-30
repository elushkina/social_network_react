import React from 'react'
import classes from './ProfileInfo.module.css'




const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={classes.profile__img} src='https://sun9-64.userapi.com/impg/47RhNufk0KoDEYNn61hIZbUFp9ABLWFreGr7xw/GTEC0ZfUCpc.jpg?size=750x914&quality=96&sign=62e4ebe08c9f04e7b2415b19acd29ae7&type=album'
                     alt=''/>
            </div>
            <div className={classes.description__block}>
                avatar
            </div>
        </div>

    )
}

export default ProfileInfo;
