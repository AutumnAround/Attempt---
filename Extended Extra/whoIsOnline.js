/*
У цьому завданні тобі потрібно показати юзерам хто з їх друзів онлайн і готовий чатитись! Створи функцію whoIsOnline, яка приймає масив об'єктів friends і визначає хто з них online, offline чи away. Якщо юзер має статус online, але його не було в мережі більш ніж 10 хвилин (lastActivity > 10), то можна вважати, що фактично його статус вже away.

Приклад вхідних даних:

[{
  username: 'Alice',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy',
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob',
  status: 'online',
  lastActivity: 104
}]

Результат функції whoIsOnline:

{
  online: ['Alice'],
  offline: ['Lucy'],
  away: ['Bob']
}

Якщо в чаті немає активних юзерів, то результат має виглядати ось так:

{
  offline: ['Lucy'],
  away: ['Bob']
}

Якщо ваших друзів зовсім немає в чаті, то до функції прийде порожній масив []. У цьому випадку потрібно повернути порожній об'єкт {}.
*/

function whosOnline(friends) {
    if (friends.length === 0) return {}; 

    let result = { online: [], offline: [], away: [] };

    for (let friend of friends) {
        if (friend.status === "online") {
            if (friend.lastActivity > 10) {
                result.away.push(friend.username);
            } else {
                result.online.push(friend.username);
            }
        } else {
            result.offline.push(friend.username);
        }
    }

    if (result.online.length === 0) delete result.online;
    if (result.offline.length === 0) delete result.offline;
    if (result.away.length === 0) delete result.away;

    return result;
}
