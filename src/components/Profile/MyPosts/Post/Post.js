import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img
                src="https://sun9-27.userapi.com/impg/YXHa3_8VKNng5XDcbmTmVXruhiSF_TUVvQmVrA/XnETy1kam0I.jpg?size=1682x1684&quality=96&sign=4dd1c9ba33a690bfc6faf8c4e71aa90c&type=album"
                alt=''/>
            {props.message}
            <div><span>Likes </span>{props.likesCount}</div>
        </div>
    )
}
export default Post;