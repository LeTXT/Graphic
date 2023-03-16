import React, { useRef } from "react";
// array
import { weekArray } from "../array/array";

// function
import { openList, toChooseDate } from "../util/switchDate";

export default function TitleAndList({ setWeekNumber }) {
    const arrowSVG = useRef();

    return (
        <>
            <div className="titleAndListClass">
                <h1>Título</h1>
                <div className="buttonShowList">
                    <ul>
                        {weekArray.map((el, id, array) => {
                            return (
                                <div key={array[id].amount.reduce((acc,c) => acc + c)}>
                                    <li>
                                        <button
                                            onClick={() =>
                                                toChooseDate(
                                                    id,
                                                    el,
                                                    setWeekNumber
                                                )
                                            }
                                            disabled={weekArray.length === 1}
                                        >
                                            {el.name}
                                        </button>
                                    </li>
                                </div>
                            );
                        })}
                    </ul>
                    <button
                        onClick={() =>
                            openList(setWeekNumber, arrowSVG.current)
                        }
                    >
                        <svg width="12" height="8" ref={arrowSVG}>
                            <polyline points="1,1  6,6 11,1" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
}
