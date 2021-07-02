import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={styles.item}>
            <img
                src="https://sun9-46.userapi.com/impg/yV9lWBKKSID9Wpi92WxNaDn_edOgr9Q__ztjzw/gGFk06Zab7k.jpg?size=1231x1232&quality=96&sign=8bb8b49b577c5fc47b12bf778e42257f&type=album"
                alt=''/>
            <div className={styles.message}>{props.message}</div>
            <div className={styles.likes}><span>Likes </span>{props.likesCount}</div>
        </div>
    )
}
export default Post;