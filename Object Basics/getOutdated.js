/*
Час оновлювати програмне забезпечення! Інженери випустили оновлення для застарілих версій роботів. Потрібно вишикувати всіх роботів і перевірити у кого з них застаріле ПЗ.

Функція getOutdated приймає масив роботів robots і повертає масив індексів тих роботів, у яких coreVersion менший за newVersion.
*/

const robotsBase = [
    { coreVersion: 'oldVersion' },
    { coreVersion: 'coreVersion' },
    { coreVersion: 'newVersion' },
];

function getOutdated(robots, newVersion) {
    const outdatedIndices = [];
    robots.forEach((robot, index) => {
        if (robot.coreVersion !== newVersion) {
            outdatedIndices.push(index);
        }
    });
    return outdatedIndices;
}