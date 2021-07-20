import React, {useState} from "react";
import styles from "./Users.module.css";
import default_photo from './../../assets/images/default_photo.png'
import {NavLink} from "react-router-dom";

let Users = ({
                 users, totalUsersCount, pageSize, currentPage,
                 onPageChanged, followingInProgress, unfollow, follow, portionSize = 10
             }) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return <>
        <div className={styles.page_numbers}>
            {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>prev</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <div
                        className={`${styles.number} ${currentPage === p && styles.selectedPage}`}
                        onClick={(e) => {
                            onPageChanged(p)
                        }}>{p}</div>
                })}
            {portionCount > portionNumber &&
            <button onClick={() => setPortionNumber(portionNumber + 1)}>next</button>}
        </div>
        {
            users.map(u => <div className={styles.about} key={u.id}>
                <div>
                    <div>
                        <NavLink to={'profile/' + u.id}>
                            <img className={styles.image}
                                 src={u.photos.small != null ? u.photos.small : default_photo}/>
                        </NavLink>
                    </div>
                    <div className={styles.btn}>
                        {u.followed
                            ? <button disabled={followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          unfollow(u.id)
                                      }}>Unfollow</button>

                            : <button disabled={followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          follow(u.id)
                                      }}>Follow</button>}
                    </div>
                </div>
                <div>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </div>
                </div>
            </div>)
        }
    </>
}

export default Users