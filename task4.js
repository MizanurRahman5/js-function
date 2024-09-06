/**
 * Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
 * কাউন্ট_জিরো() নামে একটি ফাংশন লিখুন যা একটি বাইনারি স্ট্রিং (বাইনারী স্ট্রিং হল একটি স্ট্রিং যা শুধুমাত্র 0 এবং 1 নিয়ে গঠিত) প্যারামিটার হিসাবে গ্রহণ করবে এবং সেই স্ট্রিংটিতে কতগুলি 0 আছে তা গণনা করুন।
 */


function countZero(binaryString) {
    let sum = 0;
   for (let number of binaryString){
    if (number === '0'){
        sum = sum + 1;
    }
   }
   return sum;
}

const binaryString = '011010101100';

const result = countZero(binaryString)
console.log(result);