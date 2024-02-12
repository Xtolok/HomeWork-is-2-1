console.log("Задание_1")
const mas = [ [1, 2], [3, 4], [5, 6]];
console.log(mas);
for (let item of mas) {
    console.log(`[${item}] количество элементов в массиве = ${item.length}`)
}

let sum = 0;

for (let i in mas) {
    for (let j in mas[i]) {
        sum += mas[i][j];
    }
}
console.log(`Сумма всех элемнтов двумерного массива = ${sum}`)

/////
console.log(" ")
console.log("Задание_2")

const people = [{name:"Миша", color_hair:"Рыжий"}, {name: "Стас", color_hair:"Светлый"}, {name:"Гоша", color_hair:"Темный"}]

for (let item of people) {
    console.log(`его зовут ${item.name}, у него ${item.color_hair} цвет волос`)
    console.log("Перекраска волос")
    item.color_hair = "Белый"
    console.log(`его зовут ${item.name}, у него ${item.color_hair} цвет волос`)
}



/////
console.log(" ")
console.log("Задание_3")
let companys = {
company_1: {
    title: "MAGNIT",
    staff: {
        worker_1: {
            name: "Ton",
        },
        worker_2: {
            name: "Gosha",
        },
        worker_3: {
            name: "Misha",
        }
    }
},
company_2: {
    title: "R&W",
    staff: {
        worker_1: {
            name: "Bob",
        },
        worker_2: {
            name: "Kiril",
        },
        worker_3: {
            name: "Nikita",
        }
    }
}

}

for (let i in companys) {
console.log(`В компания «${companys[i].title}»,работают сотрудники:`);
for (let j in companys[i].staff) {
    console.log(companys[i].staff[j].name)
    }
}