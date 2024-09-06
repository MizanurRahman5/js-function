/**
 * Take four parameters. Multiply the four numbers and then return the result
 * চারটি প্যারামিটার নিন। চারটি সংখ্যা গুণ করুন এবং তারপর ফলাফল ফেরত দিন
 */

function multiplyNumber (num1, num2, num3, num4){
    const result = num1 * num2* num3* num4;
    return result;
}

const result = multiplyNumber (1, 2, 3, 4);

console.log(result);
