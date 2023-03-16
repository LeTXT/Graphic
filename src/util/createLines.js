import { widthLine, middle, weekArray } from "../array/array";

const castToString = (value) => {
    if (typeof value !== 'number') return '';
    return `${value}`;
}

export const createHeightsOfHorintalLines = (n, svgHeight) =>
castToString(svgHeight * (0.14285714285 * n));

// export const createLineX2 = (svgRef) => svgRef.clientWidth

export const createVerticalLine = (
    verticalLine,
    containerWidth,
    svgWidth,
    setInfoCard
) => {
    const mouseHover = verticalLine - (containerWidth - svgWidth) / 2;

    for (let i in widthLine) {
        if (mouseHover < widthLine[0] + middle[0]) {
            setInfoCard(weekArray[0].amount[i]);
            return castToString(widthLine[i] + 1);
        } else if (
            mouseHover > widthLine[i] - middle[0] &&
            mouseHover < widthLine[i] + middle[0]
        ) {
            if (parseFloat(i) === widthLine.length - 1) {
                setInfoCard(weekArray[0].amount[i]);
                return castToString(widthLine[i] - 1);
            } else {
                setInfoCard(weekArray[0].amount[i]);
                return castToString(widthLine[i]);
            }
        }
    }
};
// sobre o código acima: verticalLine é onde a referência do mouse está sobre o tamanho total da tela, containerWidth é o tamanho total da tela menos svgWidth que é o tamanho total da tag svg, há uma divisão por dois pois a tag svg está no meio, sendo assim, se divide para subtrair metade da 'borda'
// verticalLine-((containerWidth-svgWidth)/2)
