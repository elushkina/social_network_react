import React from 'react';
import Post from "./Post/Post";
import classes from "./MyPosts.module.css"


const MyPosts = () => {
    let posts = [
        {id: 1, message: 'Hi, I am cute kitty!', likesCount: 12},
        {id: 2, message: 'I аm the happiest cat in the world!', likesCount: 22},
        {id: 3, message: 'Bye bye', likesCount: 22},
    ]

    let postElement = posts.map (p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={classes.posts__block}>
            <div>My posts</div>
            <div>
               <div>
                   <textarea placeholder="What's new?"> </textarea>
               </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                { postElement }
            </div>

        </div>
    )
}
export default MyPosts;
