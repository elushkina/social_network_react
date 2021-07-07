import React from 'react'
import styles from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import default_photo from '../../../assets/images/default_photo.png'


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (<div className={styles.user_info}>
            <div className={styles.avatar}>
                <div>
                    <img className={styles.profile__img}
                        //src='https://sun9-64.userapi.com/impg/47RhNufk0KoDEYNn61hIZbUFp9ABLWFreGr7xw/GTEC0ZfUCpc.jpg?size=750x914&quality=96&sign=62e4ebe08c9f04e7b2415b19acd29ae7&type=album'
                        src={props.profile.photos.large || default_photo}
                         alt=''/>
                </div>
                <button>Редактировать</button>
            </div>
            <div className={styles.user_about}>
                <span>Белочка Басюшковна</span>
                <div className={styles.user_information}>
                    <div>Дата рождения: 29.01.2019</div>
                    <div>Город: Дмитров</div>
                    <div>Мать: Басюша Полюшковна</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;
