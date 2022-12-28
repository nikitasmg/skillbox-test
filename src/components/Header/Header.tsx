import React, {FC} from 'react';
import s from './header.module.scss'

type HeaderProps = {
    onClick: () => void
}
const Header:FC<HeaderProps> = ({onClick}) => {
    return (
        <header className={s.header}>
            <div className={s.logo}>logo</div>
            <h2 className={s.title}>Это хедер</h2>
            <button className={s.button} onClick={onClick}> Person </button>
        </header>
    );
};

export default Header;