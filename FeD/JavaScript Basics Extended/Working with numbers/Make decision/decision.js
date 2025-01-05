/* 
Хороший день для пікніка. Друзі вирішили вибратися у ліс та відпочити. Приїхавши вони дізналися, що у них залишилося дуже мало пального. Є два варіанти:
Зателефонувати знайомим і попросити привезти пального.
Дістатися найближчої заправної станції самостійно.
Знаючи кількість пального, яка залишилася fuelRemaining, 
відстань у кілометрах до найближчої заправки distance та розхід пального на 100км fuelConsumption ми можемо допомогти людям прийняти рішення за допомогою функції makeDeсision.
*/

function make_a_decision(fuelRemaining, distance, fuelConsumption) {
    if (fuelRemaining === 2 && distance <= 25) {
        return alert("Ехать самим");
    } else if (fuelRemaining === 4 && distance <= 50) {
        return alert("Ехать самим");
    } else if (fuelRemaining === 6 && distance <= 75) {
        return alert("Ехать самим");
    } else if (fuelRemaining === 8 && distance <= 100) {
        return alert("Ехать самим");
    } else if (fuelRemaining < 2 || distance >= 101) {
        return alert("Позвонить другу");
    }
}