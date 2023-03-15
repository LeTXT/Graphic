import { widthLine } from "../array/array"
export const weekLocalX = (n) => {

    if(n === 0) {
        return widthLine[n] 
    } else if (n === widthLine.length-1) {
        return widthLine[n] - 37.67 
    } else {
        return widthLine[n] - (37.6/2) 
    }

}

export const weekLocaltest = (ref) => {
    ref.style.width = '90%'
    ref.style.margin = 'auto'
    ref.style.display = 'flex'
    ref.children[0].style.tranform = `translateX(0)`
    ref.children[1].style.tranform = `translateX(${widthLine[1]})`
    console.log(ref.children[1].clientWidth)
}