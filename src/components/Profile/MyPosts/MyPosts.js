import React from 'react';
import Post from "./Post/Post";
import styles from "./MyPosts.module.css"
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {login} from "../../../redux/auth-reducer";
import Preloader from "../../common/Preloader/Preloader";

const maxLength50 =  maxLengthCreator(50)

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field className={styles.post__input}
                       name="newPostText"
                       placeholder="Что у Вас нового?"
                       component={Textarea}
                       validate={[maxLength50]}
                />
            </div>
            <div className={styles.btn}>
                <button>Опубликовать</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

const MyPosts = (props) => {

    let postElement =
        props.posts.map(p => <Post profile={props.profile} message={p.message} likesCount={p.likesCount}/>)

    let onAddPost = (values) => {
        if (values.newPostText.trim() === '') return
        props.addPost(values.newPostText)
        values.newPostText = ''
    }
    if (!props.profile) {
        return <Preloader/>
    }
    return (

        <div>
            <div className={styles.submit_post}>
                <span>Мои записи</span>
                <AddNewPostFormRedux onSubmit={onAddPost}/>
            </div>
            <div>
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts;
