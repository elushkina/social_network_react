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
        <div>
            <div className={styles.submit_post}>
                <span>Мои записи</span>

                <div>
                    <textarea className={styles.post__input}
                              onChange={onPostChange}
                              placeholder="Что у Вас нового?"
                              ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div className={styles.btn}>
                    <button onClick={onAddPost}>Опубликовать</button>
                </div>

            </div>
            <div>
                {postElement}
            </div>

        </div>
    )
}
export default MyPosts;
