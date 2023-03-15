import { array, widthLine, middle, weekArray } from "../array/array"

export const showCard = (e, dataCardRef, svgRef) => {
   
    for(let i in weekArray[0].amount) {
        
        if(e.clientX > svgRef.clientWidth/2) {
            dataCardRef.style.top = `${e.clientY + 10}px`
            dataCardRef.style.left = `${e.clientX - dataCardRef.clientWidth}px`
        }else if(e.clientX < widthLine[i] + middle[0]) {
            dataCardRef.style.top = `${e.clientY + 10}px`
            dataCardRef.style.left = `${e.clientX + 10}px`
            
        } 
    }
    
}