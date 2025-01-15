/*
Вам потрібно створити функцію findCalculationType, яка отримує 3 аргументи: 2 числа та результат невідомої операції, виконаної над ними (також число).

На основі цих 3 значень потрібно повернути рядок, який описує, яка операція була використана для отримання даного результату.

Приклади результату функції: addition, subtraction, multiplication, division.

Приклад:

findCalculationType(1, 2, 3) === "addition" // 1 + 2 = 3
findCalculationType(3, 5, 15) === "multiplication" // 3 * 5 = 15

Примітки:

У разі ділення слід очікувати, що результат операції буде отриманий за допомогою оператора / на вхідних значеннях - не слід виконувати додаткове перетворення або округлення типів даних.
У функцію будуть передані лише допустимі аргументи.
Значення, які приходять в параметрах, передбачають лише одну можливу операцію для досягнення результату.
*/

function findCalculationType(a, b, result) {
    switch (true) {
        case (result === a + b):
            return 'addition';
        case (result === a - b):
            return 'subtraction';
        case (result === a * b):
            return 'multiplication';
        case (result === a / b):
            return 'division';
        default:
            return 'unknown';
    }
}