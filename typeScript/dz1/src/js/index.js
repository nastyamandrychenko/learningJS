var message = alert("Добро пожаловать в магазин мороженого!");
var iceCream;
(function (iceCream) {
    iceCream[iceCream["Small"] = 10] = "Small";
    iceCream[iceCream["big"] = 25] = "big";
})(iceCream || (iceCream = {}));
var fillings;
(function (fillings) {
    fillings[fillings["chocolate"] = 5] = "chocolate";
    fillings[fillings["caramel"] = 6] = "caramel";
    fillings[fillings["berries"] = 10] = "berries";
})(fillings || (fillings = {}));
var marshmallow;
(function (marshmallow) {
    marshmallow[marshmallow["marshmallows"] = 5] = "marshmallows";
})(marshmallow || (marshmallow = {}));
var price = 0;
console.log(price);
var iCream = prompt("\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u0430\u0437\u043C\u0435\u0440 \u0441\u0442\u0430\u043A\u0430\u043D\u0430:\n 1-\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439 \u0441\u0442\u0430\u043A\u0430\u043D (10\u0433\u0440\u043D);\n2-\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u0441\u0442\u0430\u043A\u0430\u043D (25\u0433\u0440\u043D");
if (iCream === "1" || iCream === "Маленький стакан" || iCream === "Маленький") {
    price += iceCream.Small;
    console.log(price);
}
else if (iCream === "2" || iCream === "Большой стакан" || iCream === "Большой") {
    price += iceCream.big;
}
else {
    price += 0;
}
var filling = prompt("\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043D\u0430\u0447\u0438\u043D\u043A\u0443: \n    1-\u0448\u043E\u043A\u043E\u043B\u0430\u0434 (+5\u0433\u0440\u043D);\n    2-\u043A\u0430\u0440\u0430\u043C\u0435\u043B\u044C (+6\u0433\u0440\u043D);\n    3-\u044F\u0433\u043E\u0434\u044B (+10\u0433\u0440\u043D);\n    4- \u0431\u0435\u0437 \u043D\u0430\u0447\u0438\u043D\u043A\u0438");
switch (filling) {
    case "1":
        price += fillings.chocolate;
        console.log(price);
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
        price += 0;
}
var wantfillings;
if (filling === "1" || filling === "2" || filling === "3") {
    do {
        wantfillings = confirm("Еще начинку?");
        if (wantfillings) {
            filling = prompt("\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043D\u0430\u0447\u0438\u043D\u043A\u0443: \n        1-\u0448\u043E\u043A\u043E\u043B\u0430\u0434 (+5\u0433\u0440\u043D);\n        2-\u043A\u0430\u0440\u0430\u043C\u0435\u043B\u044C (+6\u0433\u0440\u043D);\n        3-\u044F\u0433\u043E\u0434\u044B (+10\u0433\u0440\u043D);\n        4- \u0431\u0435\u0437 \u043D\u0430\u0447\u0438\u043D\u043A\u0438");
            switch (filling) {
                case "1":
                    price += fillings.chocolate;
                    console.log(price);
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
                    price += 0;
            }
        }
    } while (wantfillings === true);
}
var marshm = confirm("Хотите маршмеллоу?(+5 грн)");
if (marshm === true) {
    price += marshmallow.marshmallows;
}
else {
    price += 0;
}
console.log(price);
var finish = alert("\u0421\u0443\u043C\u0430 \u0437\u0430\u043A\u0430\u0437\u0430 " + price);
