import React, { useEffect, useRef, useState } from "react";

// function
import { findGraphicSize, createBezierCurve } from "../util/bezierCurve";
import { showCard } from "../util/showCard";

// components
import LineComponents from "../components/HorizontalLineComponents";
import VerticalLineComponents from "../components/VerticalLineComponents";
import WeeksComponents from "../components/WeeksComponents";
import DataCard from "../components/DataCard";
import TitleAndList from "../components/TitleAndList";

export default function ContainerGraphic() {
    const [svgWidth, setSvgWidth] = useState();
    const [svgHeight, setSvgHeight] = useState();
    const [verticalLine, setVerticalLine] = useState();
    const [containerWidth, setContainerWidth] = useState();
    const [infoCard, setInfoCard] = useState();
    const [weekNumber, setWeekNumber] = useState();

    // useRef
    const svgRef = useRef();
    const container = useRef();
    const dataCardRef = useRef();

    useEffect(() => {
        findGraphicSize(
            svgRef.current,
            setSvgWidth,
            setSvgHeight,
            setContainerWidth,
            container.current
        );
    }, [weekNumber]);

    return (
        <>
            <div className="containerClass" ref={container}>
                <div
                    className="containerGraphicClass"
                    id="containerGraphicClass"
                >
                    <TitleAndList setWeekNumber={setWeekNumber} />

                    <div
                        className="mapDataCard"
                        onMouseMove={(e) =>
                            showCard(e, dataCardRef.current, container.current)
                        }
                    >
                        <svg
                            ref={svgRef}
                            className="graphiClass"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            onMouseMove={(e) => setVerticalLine(e.clientX)}
                            role="img"
                            width="90%"
                        >
                            <LineComponents
                                svgWidth={svgWidth}
                                svgHeight={svgHeight}
                            />
                            <VerticalLineComponents
                                svgHeight={svgHeight}
                                svgWidth={svgWidth}
                                verticalLine={verticalLine}
                                containerWidth={containerWidth}
                                setInfoCard={setInfoCard}
                            />

                            <path
                                d={createBezierCurve(svgWidth, svgHeight, svgRef.current)}
                                width="100vw"
                            />
                        </svg>

                        <DataCard
                            dataCardRef={dataCardRef}
                            infoCard={infoCard}
                        />
                    </div>

                    <WeeksComponents />
                </div>
            </div>
        </>
    );
}
