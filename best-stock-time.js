arrDays = [1, 2, 3];
//const maxxx = Math.max(arrDays)
//console.log(maxxx)
//console.log(Math.max(arr))

function stock(arr) {
    let maxNum = 0;
    let minNum;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        } else if (arr[i] <= minNum) {
            minNum = arr[i];
        }
    //     // if( Math.max(arr) > Math.min(arr)) {
    //     //     return Math.max(arr[i]) && Math.min(arr[i])
    //     // }
    // }
    // arr.forEach(element, index => {
    //     if (Math.max(arr[index]) > Math.min(arr[index])) {
    //         return Math.max(arr[element]) && Math.min(arr[element]);
    //     }
    // });
}
return maxNum && minNum;
}

console.log(stock(arrDays));
