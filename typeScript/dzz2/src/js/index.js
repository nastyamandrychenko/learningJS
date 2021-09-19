var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(carsNumbers, brand) {
        this.carsNumbers = carsNumbers;
        this.brand = brand;
    }
    return Car;
}());
var Porsche = /** @class */ (function (_super) {
    __extends(Porsche, _super);
    function Porsche(model) {
        var _this = _super.call(this, "BH8640OT", "Porsche") || this;
        _this.theModel = model;
        return _this;
    }
    Porsche.prototype.engine = function () {
        console.log("Porsche двигатель:B6 twin turbo 24 valve DOHC");
    };
    return Porsche;
}(Car));
var Ferrari = /** @class */ (function (_super) {
    __extends(Ferrari, _super);
    function Ferrari(model) {
        var _this = _super.call(this, "KA9090AX", "Ferrari") || this;
        _this.theModel = model;
        _this.shortDescription = "Серый, Гибридный бензин, 4.0L";
        return _this;
    }
    Ferrari.prototype.engine = function () {
        console.log("Ferrari двигатель:V8 twin turbocharged");
    };
    return Ferrari;
}(Car));
var Lamborghini = /** @class */ (function (_super) {
    __extends(Lamborghini, _super);
    function Lamborghini(model, ModelYear) {
        var _this = _super.call(this, "AA1111XX", "Lamborghini") || this;
        _this.theModel = model;
        _this.shortDescription = "Оранжевый, 6.5L";
        _this.modelYear = ModelYear;
        return _this;
    }
    Lamborghini.prototype.engine = function () {
        console.log("Lamborghini двигатель:V8 twin turbocharged");
    };
    return Lamborghini;
}(Car));
var porsche = new Porsche("2007 Porsche CARRERA");
porsche.engine();
console.log(porsche);
var ferrari = new Ferrari("Ferrari SF90 Stradale");
ferrari.engine();
console.log(ferrari);
var lamborghini = new Lamborghini("Lamborghini Aventador 2011", "2011");
lamborghini.engine();
console.log(lamborghini);
