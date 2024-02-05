let product =  {
        name:"Mouse",
        price: 12999,
        inStock: true,
        brand:"Logitech",
    }
let specifications = {
        Model: "Logitech PRO X SUPERLIGHT",
        Color: "Black",
        DPI: 25600,
        Sensor: "HERO 25K",
    }
let sale = {
        discount: "скидка в честь черной пятницы",
        percentage: 30,
        expirationDate: "2024-11-12"
    }
let customer = {
        peoplename: "Tom",
        budget: 15000,
    }

    if ( product.inStock === true ) {
        console.log(`Товар ${product.name} есть на складе.`);
        } else {
            console.log(`Товара ${product.name} нет на складе.`);
        }
        if ( customer.budget >= product.price ) {
            console.log(`У вас хватает на ${product.name}. Его цена ${product.price}. Ваш бюджет = ${customer.budget}.`);
            console.log(`Наименование товара - ${product.name}. Цена - ${product.price} руб. Наличие на складе - ${product.inStock}. Бренд - ${product.brand}.`);
            console.log(`Модель - ${specifications.Model}. Цвет - ${specifications.Color}. DPI - ${specifications.DPI}. Сенсор - ${specifications.Sensor}.`);
        } else {
            console.log(`Ваш бюджет = ${customer.budget}, Вам не хватает на покупку. Цена товара ${product.name} совершает = ${product.price}.`);
        }
        if ( sale.percentage > 0 ) {
            let result = product.price - (product.price / 100 * sale.percentage)
            console.log(`На ${product.name} действует скидка ${sale.discount} ${sale.percentage} %. Цена с учетом скидки = ${result}.`);
        } else {
            console.log(`На ${product.name} не действует скидка.`);
        }