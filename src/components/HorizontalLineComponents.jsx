import React from "react";

// function
import {createHeightsOfHorintalLines} from '../util/createLines'

// array
import { lineArray } from "../array/array";

export default function LineComponents({svgWidth, svgHeight}) {
    return (
        <>
        {lineArray.map((el) => {
            return (
                <line x1='0' y1={createHeightsOfHorintalLines(el, svgHeight)} x2={svgWidth} y2={createHeightsOfHorintalLines(el, svgHeight)} className='horizontalLineClass' key={el.toString()}/>
            )
        })}

        <line x1='0' y1={svgHeight} x2={svgWidth} y2={svgHeight} className='horizontalLineBottomClass' />

        
        </>
    )
}