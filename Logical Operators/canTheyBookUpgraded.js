/*
Справи готелю пішли на краще. У Mate Grand Hotel більше не повторюються випадки, коли банда з 20 дітей забронювала 8-місний номер.

Власники знову звернулися до нас. У них є нова послуга: Екстра-ліжко для малюка до 2-х років. Тепер номер вміщує до 8 дорослих + 1 малюк.

Потрібно оновити функцію canTheyBook так, щоб вона приймала третій аргумент babiesCount та трохи змінити умови:

номер вміщує не більше 8 персон, але 9-м можна підселити малюка;
має бути мінімум один дорослий;
на одного дорослого може бути не більше 2-ох дітей АБО однієї дитини та одного малюка;
малюків можна розмістити на ліжках для дорослих, тому в номері може бути більше ніж один малюк (якщо виконуються інші умови).
*/

function canTheyBook(adultsCount = 0, childrenCount = 0, babiesCount = 0) {
    const numberCapasity = 8;
    if (adultsCount + childrenCount + babiesCount > numberCapasity + 1) {
        return false;
    }
    if (adultsCount < 1) {
        return false;
    }
    if (childrenCount > adultsCount * 2 || childrenCount + babiesCount > adultsCount * 2) {
        return false;
    }
    return true;
}
