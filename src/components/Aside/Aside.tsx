import React, {FC} from 'react';
import {TItem} from "../../models/indes";
import {Link} from 'react-router-dom'
import s from './aside.module.scss'

type AsideProps = {
    items: TItem[]
}
const Aside:FC<AsideProps> = ({items}) => {
    return (
        <aside className={s.aside}>
            <ul className={s.list}>
                {items ? items.map(el =>
                    <li className={s.item} key={el.id}>
                        <Link className={s.link} to={`/items/${el.id}`}>{el.name} #{el.id}</Link>
                    </li>
                ) : <h4>Пока пусто</h4>}
            </ul>
        </aside>
    );
};

export default Aside;