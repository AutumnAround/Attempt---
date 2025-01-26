/*
У Боба на столі лежать камені розміщені в ряд. Кожен з них може бути червоним, зеленим або синім і представлений символом R, G або B відповідно.

Допоможи Бобу знайти мінімальну кількість каменів, які він повинен прибрати зі столу, щоб камені однакового кольору не стояли поруч.
*/

function stonesCounter(stones) {
    let newStones = '';

    for (let i = 0; i < stones.length; i++) {
        if (i === 0 || stones[i] !== stones[i - 1]) {
            newStones += stones[i];
        }
    }
    const result = stones.length - newStones.length;
    return result;
}
