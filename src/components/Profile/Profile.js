import React from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = (props) => {

    return (
        <div>
            <ProfileInfo isOwner={props.isOwner} profile={props.profile} status={props.status}
                         updateStatus={props.updateStatus} savePhoto={props.savePhoto}/>
            <MyPostsContainer profile={props.profile}/>
        </div>

    )
}

export default Profile;
