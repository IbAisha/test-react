import React from "react";
import { useState, useEffect } from "react";

export function Spinner() {
    const [text, setText] = useState('');
    const [showImg, setShowImage] = useState(true)
;
    useEffect(() => {
        setTimeout(() => {
            setShowImage(false)
            setText(
                'I waited for 3 seconds to be loaded, did you see the spinner?'
            )
        }, 3000)
    }, [])

    return <>
    <div>
        {
            showImg ? (
                <img src="./public/spinner.svg" alt="spinner loading" />
            ) : (
            <h3> {text}

            </h3>
            )
        }
    </div>
    </>
}