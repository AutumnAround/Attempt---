/*
Власникам Grand Mate Hotel подобаються роботи наших студентів. У них є ще кілька замовлень для нас.

Напиши функцію-валідатор бронювань canTheyBook, яка приймає кількість дорослих adultsCount і дітей childrenCount та повертає true, якщо виконуються всі умови:

номер вміщує не більше 8 персон
має бути хоча б один дорослий
на одного дорослого може бути не більше двох дітей
Вважай непередані аргументи рівними 0.
*/

function canTheyBook(adultsCount = 0, childrenCount = 0) {
    const numberCapasity = 8;
    if (adultsCount + childrenCount > numberCapasity) {
        return false;
    }
    if (adultsCount < 1) {
        return false;
    }
    if (childrenCount > adultsCount * 2) {
        return false;
    }
    return true;
}