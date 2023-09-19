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

export default function SponsorCard({ name, logo, link }) {
    const [string, setString] = useState(randomString(1500, name));

    const letterRef = useRef(null);
    const cardRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        const letters = letterRef.current;

        const handleOnMove = (e) => {
            const rect = card.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;

            letters.style.setProperty("--x", `${x}px`);
            letters.style.setProperty("--y", `${y}px`);

            setString(randomString(1500, name));
        };

        card.onmousemove = (e) => handleOnMove(e);

        card.ontouchmove = (e) => handleOnMove(e.touches[0]);
    }, [name]);

    return (
        <div className="card-track">
            <div className="card-wrapper">
                <div className="card" ref={cardRef}>
                    <a className="card-image" href={link}>
                        <img src={logo} alt={name} />
                        <div className="text">{name}</div>
                    </a>
                    <div className="card-gradient"></div>
                    <div className="card-letters" ref={letterRef} >{string}</div>
                </div>
            </div>
        </div>
    );
}
