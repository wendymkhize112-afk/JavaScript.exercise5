// TODO: Create an array called numbers with values 1 through 5 
let numbers = [2, 4, 6, 8, 10, 12];

// TODO: Write a for loop that prints each number in the array 
for (let number of numbers){
    console.log(numbers)
}
// TODO: Write a while loop that counts down from 5 to 1 
let countdown = 6;
while (countdown >= 1) {
    console.log(countdown);
    countdown--;
}
// TODO: Create a loop that prints only even numbers from the numbers array 
for (let number of numbers) {
    if (number % 2 ===0 ) {
        console.log(numbers);
    }
}
// TODO: Create a loop that calculates the sum of all numbers in the array
let sum = 0
for ( let number of numbers) {
    sum += numbers;
}
console.log(sum);