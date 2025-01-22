/*
У нас більше немає потреби зберігати дані про вік наших користувачів, тому ми вирішили видалити вік з бази у два етапи.

Потрібно видалити поле age з бази даних people в усіх, в кого gender дорівнює female. Повертати з функції нічого не потрібно.
*/

const dataBase = [
    { gender: 'female', age: 25 },
    { gender: 'male', age: 30 },
    { gender: 'female', age: 22 },
    { gender: 'dontWantToShare', age: 40 }
];

function removeAgeByGender(dataBase) {
    dataBase.forEach(user => {
        if (user.gender === 'female') {
            delete user.age;
        }
    });
}

removeAgeByGender(dataBase);
console.log(dataBase);
