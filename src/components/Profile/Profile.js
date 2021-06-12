import React from 'react'
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";



const Profile = () => {
    return (
        <div >
            <div >
                <img className={classes.profile__img} src='https://i.ytimg.com/vi/KLMJlN72BQs/maxresdefault.jpg'
                     alt=''/>
            </div>
            <div>
                avatar
            </div>

            <MyPosts/>
        </div>

    )
}

export default Profile;
