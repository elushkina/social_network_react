import React from 'react';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div>My posts</div>
            <div>
                <textarea placeholder="What's new?"></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>

            <Post message='Hi, I am cute dog!' likesCount='12'/>
            <Post message='I аm the happiest doggy in the world!' likesCount='25'/>

        </div>
    )
}
export default MyPosts;