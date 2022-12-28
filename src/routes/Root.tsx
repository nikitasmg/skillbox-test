import React, {useState} from 'react';
import {Outlet, useLoaderData} from "react-router-dom";
import Header from "../components/Header/Header";
import Aside from "../components/Aside/Aside";
import {TItem} from "../models/indes";
import { useItems} from "../api/useItems";
import Modal from "../components/Modal/Modal";
import UserInfo from "../components/UserInfo/UserInfo";

export async function loader() {
    const {getItems} = useItems()
    return  await getItems();
}

const Root = () => {
    const items = useLoaderData() as TItem[]
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div style={{padding: "20px 5px", maxWidth: '80%', margin: 'auto'}}>
           <Header onClick={() => setIsOpen(true)}/>
            <div style={{display: "grid", gridTemplateColumns: "300px 1fr", border: '2px solid green'}}>
                <Aside items={items}/>
                <main>
                    <Outlet />
                </main>
            </div>
            <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
                <UserInfo/>
            </Modal>
        </div>
    );
};

export default Root;