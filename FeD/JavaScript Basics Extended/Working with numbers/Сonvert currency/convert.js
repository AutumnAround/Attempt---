/*
Працівникам Mate Exchange набридло конвертувати на калькуляторі валюту з гривні в обрану валюту.

Напиши функцію convertCurrency, яка буде приймати amount в євро, 
exchangeRate курс обміну (вартість 1 євро у вказаній валюті) та currencyName - назву бажаної валюти. 
Якщо amount та exchangeRate додатні функція має повертати рядок Give them {{x}} {{currencyName}}('s). 
Інакше поверни рядок Enter valid data.

Якщо результат не ціле число - округли значення до двох знаків після коми.

Приклади:

convertCurrency(10000, 1.0946, 'dollar'); // 'Give them 10946 dollar('s)'
convertCurrency(250, 4.338, 'zloty'); // 'Give them 1084.50 zloty('s)'
convertCurrency(1, 40.7131, 'hryvnia'); // 'Give them 40.71 hryvnia('s)'
convertCurrency(1, 5.3364, 'Real'); // 'Give them 5.34 Real('s)'

convertCurrency(-100, -0.034, 'bolivar'); // 'Enter valid data'
*/

function convertCurrency(amount, exchangeRate, currencyName) {
    if (amount > 0 && exchangeRate > 0) {
      const result = (amount * exchangeRate).toFixed(2);
      return `Give them ${result} ${currencyName}('s)`;
    } else {
      return 'Enter valid data';
    }
  }