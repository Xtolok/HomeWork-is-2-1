let advertising_company = {
    name: "DailyNews",
    goals: "Рассказ последних новостей",
    budget: 10000000,
    result: "Поставка новостей на телеканалы",
    channels: {
        channel_1: "Новости_24",
        channel_2: "Россия_24",
        channel_3: "ТРК"
    }
};
for (let i in advertising_company) {
    console.log(`Название компании ${advertising_company.name}, \n Цель компании ${advertising_company.goals}, \n Бюджет компании ${advertising_company.budget}, \n Каналы распространения "${advertising_company.channels.channel_1}", "${advertising_company.channels.channel_2}," "${advertising_company.channels.channel_3}"`)
}
if (advertising_company.budget > 1000000) {
    console.log("Крупная компания с большим бюджетом и федеральными каналами")
}
else {
    console.log("небольшая  компания с маленьким бюджетом")
}