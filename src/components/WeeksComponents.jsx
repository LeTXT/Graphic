import React, {useRef, useEffect} from "react";

// function
import { weekLocalX, weekLocaltest } from "../util/weekLocal";

// array
import { weekArray } from "../array/array";

export default function WeeksComponents() {
    const weekContainer = useRef()
    
    useEffect(() => {
        weekLocaltest(weekContainer.current)
    })
    
    return (
        <>
        {/* <svg className="weekClass" version="1.1" xmlns="http://www.w3.org/2000/svg" role='img' width='90%'>

            {weekArray[0].week.map((el, id) => {
                return (
                    <>
                    <text x={weekLocalX(id)} y="15" key={Date}>{el}</text>
                    </>
                )
            })}
           
        </svg> */}
        <div ref={weekContainer}>
            {weekArray[0].week.map((el, id) => {
                return (
                    <>
                    <div key={Date}>
                        <p>{el}</p>
                    </div>
                    {/* <text x={weekLocalX(id)} y="15" key={Date}>{el}</text> */}
                    </>
                )
            })}
        </div>
            
        </>
    )
}