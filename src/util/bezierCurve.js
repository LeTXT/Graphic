import { widthLine, middle, weekArray } from "../array/array"

export const findGraphicSize = (svgRef, setWidth, setHeight, setContainer, containerRef) => {
        
    setWidth(svgRef.clientWidth)
    setHeight(svgRef.clientHeight)
    setContainer(containerRef.clientWidth)
}

export const createBezierCurve = (svgWidth, svgHeight) => {
    
        let maximumHeight = svgHeight / Math.max(...weekArray[0].amount)
    
        let string = 'M'
        let oldY
        let oldX
        widthLine.length = 0

        for(let i in weekArray[0].amount) {
            
            // curve height - used to create the line height
            let curve = (svgHeight - maximumHeight * weekArray[0].amount[i]) + 5
            // curve width - used to create the line distance
            let widthCurve = ((svgWidth * (1/(weekArray[0].amount.length-1))) * i)
            widthLine[i] = widthCurve

            // creates an average of the height between the previous and current line
            let lastY = oldY !== undefined ? ((oldY+curve)/2) : ''
            // creates an average of the distance between the previous line and the current one
            let lastX = oldX !== undefined ? ((oldX+widthCurve)/2) : ''
            
            // starts the first part of the graph
            if(parseInt(i) === 0) {

                let curve = svgHeight - maximumHeight * weekArray[0].amount[i]
                let widthCurve = 2
    
                string = string + ' ' + widthCurve + ' ' + curve

            // start the last part of the graph
            } else if(parseInt(i) === weekArray[0].amount.length -1) {

                string =  string + lastX + ' ' + lastY + ' S ' + (widthCurve - 2) +' '+ curve + ' ' + (widthCurve - 2) +' '+ curve

            // start the middle part of the graph
            } else {
    
                string = string + lastX + ' '+ lastY +' C ' + widthCurve +' '+ curve + ' ' + widthCurve +' '+ curve + ' ' 
                
                middle[0] = oldX/2
                oldY = curve
                oldX = widthCurve
            }
        }     
        
    return string
}
