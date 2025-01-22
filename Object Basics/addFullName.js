/*
База даних зберігає користувачів у форматі:

{
  firstName: 'Ivan',
  lastName: 'Vasylchenko',
}

Було б зручно додати поле fullName в кожен об'єкт.

Створи функцію addFullName, яка приймає об'єкт user і додає до нього властивість fullName зі значенням - ім'ям та прізвищем, поєднаними одним пробілом.

Повертати з функції нічого не потрібно!
*/

const dataBase = {
    firstName: '',
    lastName: '',
}

function addFullName(user) {  
    user.fullName = user.firstName + " " + user.lastName;
}