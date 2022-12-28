import React from 'react';
import s from './content.module.scss'
import {TItem} from "../../models/indes";
import {useItems} from "../../api/useItems";
import {useLoaderData} from "react-router-dom";
import {Params} from "react-router-dom";


export async function loader({params}: {params: Params}) {
    const {getItem} = useItems()
    return await getItem(params.itemId ?? '');
}

const Content = () => {
    const item = useLoaderData() as TItem
    return (
        <div className={s.content}>
            <h2 className={s.title}>{item.name} номер - {item.id}</h2>
            <p className={s.text}>
                {item.description}
            </p>
        </div>
    );
};

export default Content;