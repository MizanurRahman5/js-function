function add(num1 , num2){
    const sum = num1 + num2;
    console.log('sum is ' + sum);
    const diff = num1 - num2;

    console.log('different is ' + diff);
    const maltiply = sum * diff;
    console.log('multiplied is ' + maltiply);
   const result = maltiply / 2;
 console.log('Half of the product is ' + result);
   return result;

}

const result = add(10, 5)

console.log(result)