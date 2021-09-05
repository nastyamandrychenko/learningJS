
let message = alert("Добро пожаловать в магазин мороженого!")
enum iceCream {
    Small = 10,
    big = 25
}
enum fillings {
    chocolate = 5,
    caramel = 6,
    berries = 10
}
enum marshmallow {
    marshmallows = 5
}
let price: number = 0;
console.log(price)

let iCream = prompt(`Выберите размер стакана:
 1-Маленький стакан (10грн);
2-Большой стакан (25грн`);
if (iCream === "1" || iCream === "Маленький стакан" || iCream === "Маленький") {
    price += iceCream.Small
    console.log(price)
} else if (iCream === "2" || iCream === "Большой стакан" || iCream === "Большой") {
    price += iceCream.big
} else {
    price += 0
}


let filling = prompt(`Выберите начинку: 
    1-шоколад (+5грн);
    2-карамель (+6грн);
    3-ягоды (+10грн);
    4- без начинки`);


switch (filling) {
    case "1":
        price += fillings.chocolate;
        console.log(price)
        break;
    case "2":
        price += fillings.caramel;
        break;
    case "3":
        price += fillings.berries;
        break;
    case "4":
        price += 0;
        break;
    default:
        price += 0

}



let wantfillings

if (filling === "1" || filling === "2" || filling === "3") {
    do {
        wantfillings = confirm("Еще начинку?");
        if (wantfillings) {
            filling = prompt(`Выберите начинку: 
        1-шоколад (+5грн);
        2-карамель (+6грн);
        3-ягоды (+10грн);
        4- без начинки`);
            switch (filling) {
                case "1":
                    price += fillings.chocolate;
                    console.log(price)
                    break;
                case "2":
                    price += fillings.caramel;
                    break;
                case "3":
                    price += fillings.berries;
                    break;
                case "4":
                    price += 0;
                    break;
                default:
                    price += 0

            }
        }

    }
    while (wantfillings === true)
}

let marshm = confirm("Хотите маршмеллоу?(+5 грн)");
if(marshm === true){
    price += marshmallow.marshmallows
}else{
    price += 0
}


console.log(price)

let finish = alert(`Сума заказа ${price}`)

