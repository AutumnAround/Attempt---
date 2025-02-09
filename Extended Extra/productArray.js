/*
Реалізуй функцію getArrayProduct,
 яка отримує масив чисел numbers та повертає масив такого ж розміру, де numbers[i] дорівнює добутку усіх елементів масиву справа і зліва від цього елемента.

Примітки:

Початковий масив містить не менше 2 елементів
Масив містить тільки додатні числа
Числа можуть повторюватися
*/

function getArrayProduct(numbers) {
    const n = numbers.length;
    const result = new Array(n).fill(1);

    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        result[i] = leftProduct;
        leftProduct *= numbers[i];
    }
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= numbers[i];
    }
    return result;
}
