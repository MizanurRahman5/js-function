/**
 * Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
 * একটি সংখ্যা নিন যদি সংখ্যাটি বিজোড় হয় তবে এটিকে 2 দ্বারা গুণ করুন এবং ফলাফলটি ফেরত দিন। সংখ্যাটি এমনকি যদি হয় তবে এটিকে দুই দ্বারা ভাগ করুন এবং ফলাফলটি ফেরত দিন।
 */


function Number (num){
    if (num % 2 !== 0){
        const result = num *2;
        return result;
    }else{
        const result = num / 2;
        return result;
    }
}

const number = 5;

const result = Number(number);
console.log(result);