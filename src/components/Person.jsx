import { useState } from "react";

export default function Person(props) {
    const [isEndorsed, setIsEndorsed] = useState(false);

    console.log("My data is", props);

    function handleEndorse() {
        setIsEndorsed(true);
    }

    function handleUnendorse() {
        setIsEndorsed(false);
    }

    return <div>
        <img src={props.pic} style={{width: 300, height: 300}}/>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
        {
            isEndorsed ?
                <button onClick={handleUnendorse}>Unendorse</button> :
                <button onClick={handleEndorse}>Endorse</button>
        }
    </div>
}