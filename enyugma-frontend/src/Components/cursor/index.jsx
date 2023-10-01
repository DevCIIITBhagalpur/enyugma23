import "./index.scss";
import { useState, useRef, useEffect } from "react";
export default function GlowBall() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [x2, setX2] = useState(0);
    const [y2, setY2] = useState(0);
    const [cH, setCH] = useState(20);
    const [cW, setCW] = useState(20);
    const [cH2, setCH2] = useState(40);
    const [cW2, setCW2] = useState(40);

    // check if mouse is over a button
    const buttonRef = useRef(null);
    const buttonRef2 = useRef(null);

    const checkIfOverLink = (e) => {
        // console.log(e.target.tagName);
        if (canZoom(e)) {
            buttonRef.current.classList.add("hovered");
            buttonRef2.current.classList.add("hovered2");

            
        } else {
            buttonRef.current.classList.remove("hovered");
            buttonRef2.current.classList.remove("hovered2");
        }
    };

    document.onmousemove = (e) => {
        const c1 = document.getElementById("c1");
        const c2 = document.getElementById("c2");

        const cW = c1.offsetWidth;
        const cH = c1.offsetHeight;

        const cW2 = c2.offsetWidth;
        const cH2 = c2.offsetHeight;
        setTimeout(() => {
            c1.style.transform = `translateX(${e.clientX - cW / 2}px) translateY(${ e.clientY - cH / 2}px)`;
        }, 20);

       
        setTimeout(() => {
            c2.style.transform = `translateX(${
                e.clientX - cW2 / 2
            }px) translateY(${e.clientY - cH2 / 2}px)`;
        }, 100);

        checkIfOverLink(e);
    };

    return (
        <>
            <div
                className="cursor"
                id="c1"
                ref={buttonRef}
            ></div>

            <div
                className="cursor2"
                id="c2"
                ref={buttonRef2}
            ></div>
        </>
    );
}

function canZoom(e) {
    return (
        e.target.tagName === "A" ||
        e.target.parentElement.tagName === "A" ||
        e.target.tagName === "BUTTON" ||
        e.target.parentElement.tagName === "BUTTON" ||
        e.target.tagName === "IMG" ||
        e.target.parentElement.tagName === "IMG" ||
        e.target.tagName === "INPUT" ||
        e.target.parentElement.tagName === "INPUT" ||
        e.target.tagName === "TEXTAREA" ||
        e.target.parentElement.tagName === "TEXTAREA" ||
        e.target.tagName === "SELECT" ||
        e.target.parentElement.tagName === "SELECT" ||
        e.target.tagName === "VIDEO" ||
        e.target.parentElement.tagName === "VIDEO" ||
        e.target.tagName === "AUDIO" ||
        e.target.parentElement.tagName === "AUDIO" ||
        e.target.tagName === "CANVAS" ||
        e.target.parentElement.tagName === "CANVAS" ||
        e.target.tagName === "IFRAME" ||
        e.target.parentElement.tagName === "IFRAME"
    );
}
