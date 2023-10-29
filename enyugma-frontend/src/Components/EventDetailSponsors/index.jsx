import { useState, useLayoutEffect, useRef, useEffect } from "react";
import "./index.scss";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const randomChar = () => {
    return chars[Math.floor(Math.random() * chars.length)];
};

const randomString = (length) =>
    Array.from(Array(length)).map(randomChar).join("");

// const randomString = (length,word) => {
//     let str = "";
//     let wordLength = word.length;
//     for(let i=0;i<length;i++){
//         str+=word[Math.floor(Math.random() * wordLength)];
//     }
//     return str;
// }

export default function EventDetailSponsorCard({ name, logo, link,alt }) {
    const [string, setString] = useState(randomString(1500, name));

    const letterRef = useRef(null);
    const edcardRef = useRef(null);

    useEffect(() => {
        const edcard = edcardRef.current;
        const letters = letterRef.current;

        const handleOnMove = (e) => {
            const rect = edcard.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;

            letters.style.setProperty("--x", `${x}px`);
            letters.style.setProperty("--y", `${y}px`);

            setString(randomString(1500, name));
        };

        edcard.onmousemove = (e) => handleOnMove(e);

        edcard.ontouchmove = (e) => handleOnMove(e.touches[0]);
    }, [name]);

    return (
        <div className="edcard-track">
            <div className="edcard-wrapper">
                <div className="edcard" ref={edcardRef}>
                    <a className="edcard-image" href={link}>
                        <img src={logo} alt={alt} />
                        <div className="text">{name}</div>
                    </a>
                    <div className="edcard-gradient"></div>
                    <div className="edcard-letters" ref={letterRef}>
                        {string}
                    </div>
                </div>
                <div className="edcard-corners">
                    <span className="edcard-corner"></span>
                    <span className="edcard-corner"></span>
                    <span className="edcard-corner"></span>
                    <span className="edcard-corner"></span>
                </div>
            </div>
        </div>
    );
}
