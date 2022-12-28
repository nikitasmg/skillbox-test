import React, {FC, ReactElement, useLayoutEffect, useState} from 'react';
import {createPortal} from "react-dom";

type PortalWrapperProps = {
    children: ReactElement,
    wrapperId: string
}

const createWrapperAndAppendToBody = (wrapperId: string) => {
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute("id", wrapperId);
    document.body.appendChild(wrapperElement);
    return wrapperElement;
}


const ReactPortalWrapper: FC<PortalWrapperProps> = ({ children, wrapperId = "react-portal-wrapper" }) => {
    const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(null);

    useLayoutEffect(() => {
        let element = document.getElementById(wrapperId);
        if (!element) {
            element = createWrapperAndAppendToBody(wrapperId);
        }
        setWrapperElement(element);
    }, [wrapperId]);

    if (wrapperElement === null) return null;

    return createPortal(children, wrapperElement);
};

export default ReactPortalWrapper;
