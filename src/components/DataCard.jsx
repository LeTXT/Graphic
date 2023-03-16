import React from "react";

export default function DataCard({ dataCardRef, infoCard }) {
    return (
        <>
            <div className="dataCardClass" ref={dataCardRef}>
                <div className="circle" r={10}></div>
                <h3>{infoCard}</h3>
            </div>
        </>
    );
}
