import "./index.scss";
import { useState,useRef, useEffect } from "react";
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
        console.log(e.target.tagName)
        if(e.target.tagName === "A" || e.target.parentElement.tagName === "A"){
            buttonRef.current.classList.add("hovered");
            buttonRef2.current.classList.add("hovered2");

            setCH(40);
            setCW(40);
            setCH2(60);
            setCW2(60);
        } else {
            buttonRef.current.classList.remove("hovered");
            buttonRef2.current.classList.remove("hovered2");

            setCH(20);
            setCW(20);
            setCH2(40);
            setCW2(40);
        }

    };

    document.onmousemove = (e) => {
        setTimeout(() => {
            setX(e.clientX - cW / 2);
            setY(e.clientY - cH / 2);
        }, 20);

        setTimeout(() => {
            setX2(e.clientX - cW2 / 2);
            setY2(e.clientY - cH2 / 2);
        }, 100);

        checkIfOverLink(e);
    };

    return (
        <>
            <div
                className="cursor"
                style={{
                    "--x": `${x}px`,
                    "--y": `${y}px`,
                    transform: "translateX(var(--x)) translateY(var(--y))",
                }}
                ref={buttonRef}
            ></div>

            <div
                className="cursor2"
                style={{
                    "--x": `${x2}px`,
                    "--y": `${y2}px`,
                    transform: "translateX(var(--x)) translateY(var(--y))",
                }}
                ref={buttonRef2}
            ></div>
        </>
    );
}