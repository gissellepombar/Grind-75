// Here is an array:
//const yummies = ["apple", "blueberry", "cantaloupe",  "dates"]

//  Write the code to generate an array that looks like ["dates","apple","blueberry"]

const yummies = ["apple", "blueberry", "cantaloupe",  "dates"]
const copyYummies = [...yummies];

const modifyArr = (arr) => {
    const lastItem = copyYummies.pop()
    copyYummies.unshift(lastItem)
    copyYummies.pop()
};

modifyArr(copyYummies);
console.log(copyYummies);

let vegetableArray = ["zucchini", "carrot", "lettuce", "potato"]

const vegetable = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};
vegetable(vegetableArray);



