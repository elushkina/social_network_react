import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img
                src='https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/ad/addee89db9d70755893e7a919bd627fc26d7a815_full.jpg'
                alt=''/>
            {props.message}
            <div><span>Likes </span>{props.likesCount}</div>
        </div>
    )
}
export default Post;