import React from 'react';
import styles from './Post.module.css';
import default_photo from './../../../../assets/images/default_photo.png'

const Post = (props) => {
    const photo = props.profile.photos?.large || default_photo
    return (
        <div className={styles.item}>
            <img
                src={photo}
                alt=''/>
            <div className={styles.message}>{props.message}</div>
            <div className={styles.likes}><span>Likes </span>{props.likesCount}</div>
        </div>
    )
}
export default Post;