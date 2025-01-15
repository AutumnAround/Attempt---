/*
В Mate academy ми навчаємо не тільки людей, а й роботів. На жаль, з ними якось складніше, але вже як є.

Наш робот приймає команду у свій термінал у вигляді рядка back, forward, left, right, stop. Далі своїми кібермізками він блискавично конвертує значення в x та y і посилає імпульс з координатами у свої робокінцівки у вигляді рядка hor=x ver=y.

Напиши функцію getDirection, яка приймає рядок direction з напрямком руху і повертає рядок у форматі hor=x ver=y.

Є такі команди:

forward - це сигнал 0 для x та 1 для y
back - це сигнал 0 для x та -1 для y
right - це сигнал 1 для x та 0 для y
left - це сигнал -1 для x та 0 для y
stop - це сигнал 0 для x та 0 для y
Якщо ж команда не знайома роботу, то x і y дорівнюватимуть 0.

А, і ще... Наш робот ще не проходив наші уроки по conditional operators, тому доведеться використовувати switch case.

Наприклад:

Для команди 'forward' роботу необхідні координати у форматі hor=0 ver=1
А команду 'turn around' він не знає, тому координати будуть hor=0 ver=0
*/

function getDirection(direction) {
    switch (direction) {
      case 'forward':
        return 'hor=0 ver=1';
      case 'back':
        return 'hor=0 ver=-1';
      case 'right':
        return 'hor=1 ver=0';
      case 'left':
        return 'hor=-1 ver=0';
      case 'stop':
      default:
        return 'hor=0 ver=0';
    }
  }