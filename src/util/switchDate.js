import { weekArray } from "../array/array";

const array = [
    {
        name: "Sem",
        week: ["sem 1", "sem 2", "sem 3", "sem 4"],
        amount: [11, 15, 8, 23],
    },
    {
        name: "Dia",
        week: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
        amount: [5, 1, 3, 4, 1, 2, 3],
    },
];

export const toChooseDate = (id, el, set) => {
    for (let i in array) {
        if (array[i].name === el.name) {
            weekArray[0] = array[i];
            weekArray.pop();
        }
    }
    set(weekArray);
};

export const openList = (set, ref) => {
    if (weekArray.length >= 2) {
        weekArray.pop();
        ref.style.transform = "rotate(0)";
    } else {
        if (weekArray[0].name === array[0].name) {
            ref.style.transform = "rotate(180deg)";
            weekArray[1] = array[1];
        } else {
            ref.style.transform = "rotate(180deg)";
            weekArray[1] = array[0];
        }
    }
    set(weekArray);
};

// export const toChooseDate = (id, state, el, stateList) => {
//     if(stateList === 'title') {
//         if(id === state) {
//             return el
//         }
//     } else {
//         return el
//     }
// }

// export const openList = (set, state) => state === 'title' ? set('list') : set('title')

// toChooseDate(id, weekNumber, el.name, showList)
// setShowList, showList
