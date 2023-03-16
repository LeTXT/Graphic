import React, { useRef, useEffect } from "react";

// function
import { weekLocalX } from "../util/weekLocal";

// array
import { weekArray } from "../array/array";

export default function WeeksComponents() {
    const weekContainer = useRef();

    // useEffect(() => {
    //     weekLocaltest(weekContainer.current)
    // })

    // console.log({fuck: weekLocalX(0)});

    return (
        <>
            <svg
                className="weekClass"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                width="90%"
            >
                {weekArray[0].week.map((el, id) => {
                    return (
                        <div key={Math.random() * Date.now() * id}>
                            <text x={`${weekLocalX(id)}`} y="15">
                                {el}
                            </text>
                        </div>
                    );
                })}
            </svg>
        </>
    );
}

{
    /* <div ref={weekContainer}>
            {weekArray[0].week.map((el, id) => {
                return (

                    <div key={Date}>
                        <p>{el}</p>
                    </div>

                )
            })}
        </div> */
}
