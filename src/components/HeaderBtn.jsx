import { useState } from "react"

export function HeaderBtn() {
    const [title, setTitle] = useState('my name is Gunjan');

    function titleChange() {
        setTitle("my name is " + Math.random());
    }
    return (
        <>
            <button onClick={titleChange}>Click me to change the title</button>
            <h1>{title}</h1>
        </>
    )
}