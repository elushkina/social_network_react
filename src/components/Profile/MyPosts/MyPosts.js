import React from 'react';
import Post from "./Post/Post";
import classes from "./MyPosts.module.css"


const MyPosts = (props) => {
    let postElement =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

     return (
        <div className={classes.posts__block}>
            <div>My posts</div>
            <div>
                <div>
                    <textarea className={classes.post__input}
                                onChange={onPostChange}
                              placeholder="What's new?"
                              ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postElement}
            </div>

        </div>
    )
}
export default MyPosts;
