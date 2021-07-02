import React from 'react';
import Post from "./Post/Post";
import styles from "./MyPosts.module.css"


const MyPosts = (props) => {
    let postElement =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef()

    let onAddPost = () => {
        if (!props.newPostText) {
            return
        }
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={styles.posts__block}>
            <div className={styles.submit_post}>
                <span>My posts</span>

                <div>
                    <textarea className={styles.post__input}
                              onChange={onPostChange}
                              placeholder="What's new?"
                              ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div className={styles.btn}>
                    <button onClick={onAddPost}>Add post</button>
                </div>

            </div>
            <div className={styles.posts}>
                {postElement}
            </div>

        </div>
    )
}
export default MyPosts;
