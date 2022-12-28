import React from 'react';
import s from './userInfo.module.scss'
const UserInfo = () => {
    return (
        <div className={s.wrapper}>
            <h3>User Name</h3>
            <h3>User Lastname</h3>
        </div>
    );
};

export default UserInfo;