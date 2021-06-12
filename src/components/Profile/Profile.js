import React from 'react'
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div className={classes.content}>
            <div className={classes.user__profile}>
            <div className={classes.profile__img}>
                <img  src='https://i.ytimg.com/vi/KLMJlN72BQs/maxresdefault.jpg'
                     alt=''/>
            </div>
            <div className={classes.profile__info}>
                about me
            </div>
            </div>
            <MyPosts/>
        </div>

    )
}

export default Profile;
