function summArray (array){
    let sum = 0;
    for (let Number of array){
        sum = sum + Number;
    }
    return sum;
}

const array = [2,3,4,5];

const result = summArray(array);

console.log(result)
