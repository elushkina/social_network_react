import React, {useState} from 'react'
import styles from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import default_photo from '../../../assets/images/default_photo.png'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = (props) => {
    const [isShowPhotoInput, setIsShowPhotoInput] = useState(false)
    const toggleFieldset = () => setIsShowPhotoInput(!isShowPhotoInput)
    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (<div className={styles.user_info}>
            <div className={styles.avatar}>
                <div>
                    <img className={styles.profile__img}
                         src={props.profile.photos.large || default_photo}
                         alt=''/>
                </div>
                {props.isOwner
                    ? <button onClick={toggleFieldset}>
                        {!isShowPhotoInput ? 'Редактировать' : 'Отменить'}
                    </button>
                    : <button>Написать сообщение</button>}
                {isShowPhotoInput && <input type='file' onChange={onMainPhotoSelected}/>}


            </div>
            <div className={styles.user_about}>
                <div className={styles.page_top}>
                    <span className={styles.fullName}>Белочка Басюшковна</span>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                </div>
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
