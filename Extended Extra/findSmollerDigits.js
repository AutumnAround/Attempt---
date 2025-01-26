/*
Напишіть функцію findSmallerDigits(arr), 
яка приймає масив чисел arr та повертає новий масив чисел resultArr. Кожне число нового масиву resultArr[i] - це кількість чисел праворуч від arr[i], які менші за arr[i].
*/

function findSmallerDigits(arr) {
    const resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        let count = 0;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                count++; 
            }
        }
        resultArr.push(count); 
    }
    return resultArr; 
}
