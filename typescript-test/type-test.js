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
var myVar;
var x = '';
myVar = "Hello World!";
// (myVar as string).
// (<string> myVar).
// Functions
var getName = function (firstName) {
    console.log(firstName);
};
var getFullName = function (fullName, age) { return console.log(fullName + " " + age); };
var getPersonInfo = function (person) {
    console.log(person.name + ", " + person.age + ", " + person.eyeColor);
};
getPersonInfo({
    name: "Darsh",
    age: 26,
    eyeColor: "Black"
});
var Car = /** @class */ (function () {
    function Car(model, speed, price) {
        this.model = model;
        this.speed = speed;
        this.price = price;
    }
    Car.prototype.carInfo = function () {
        console.log(this.model + ", " + this.speed + ", " + this.price);
    };
    Car.prototype.setCarSound = function (sound) {
        console.log("" + sound);
    };
    return Car;
}());
var carOne = new Car('lancer 2010', 50, 20000);
carOne.carInfo();
carOne.setCarSound("Toooot");
var ChildCar = /** @class */ (function (_super) {
    __extends(ChildCar, _super);
    function ChildCar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChildCar.prototype.test = function () {
        // this.model;
        console.log("From Child Class");
    };
    return ChildCar;
}(Car));
var newCar = new ChildCar('lancer 2012', 50, 900);
newCar.test();
