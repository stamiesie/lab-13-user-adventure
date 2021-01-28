export function findById(someArray, id) {
    for (let item of someArray) {
        if (item.id === id) {
            return item;
        }
    }
}

// export function findById(someArray, id) {
//     return someArray.find(item => item.id === id);
// }