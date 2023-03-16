import React from "react";

// function
import { createVerticalLine } from "../util/createLines";

export default function VerticalLineComponents({
    svgHeight,
    svgWidth,
    verticalLine,
    containerWidth,
    setInfoCard,
}) {
    return (
        <>
            <line
                x1={createVerticalLine(
                    verticalLine,
                    containerWidth,
                    svgWidth,
                    setInfoCard
                )}
                y1={svgHeight}
                x2={createVerticalLine(
                    verticalLine,
                    containerWidth,
                    svgWidth,
                    setInfoCard
                )}
                y2="0"
                className="verticalLineClass"
            ></line>
        </>
    );
}
