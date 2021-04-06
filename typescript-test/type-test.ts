let myVar: any;
let x: string = '';
myVar = "Hello World!";
// (myVar as string).
// (<string> myVar).

// Functions
let getName = function (firstName: any) {
    console.log(firstName);
}

let getFullName = (fullName: string, age: number) => console.log(`${fullName} ${age}`);

interface Person {
    name?: string;
    age?: number;
    eyeColor?: string;
}

let getPersonInfo = (person: Person) => {
    console.log(`${person.name}, ${person.age}, ${person.eyeColor}`);
}

getPersonInfo({
    name: "Darsh",
    age: 26,
    eyeColor: "Black"
});

class Car {
    public model: string;
    private speed: number;
    protected price: number;

    constructor(model: string, speed: number, price: number) {
        this.model = model;
        this.speed = speed;
        this.price = price;
    }

    // constructor(public model: string, private speed: number, protected price: number) { }

    carInfo() {
        console.log(`${this.model}, ${this.speed}, ${this.price}`);
    }

    setCarSound(sound: string) {
        console.log(`${sound}`);
    }
}

let carOne = new Car('lancer 2010', 50, 20000);
carOne.carInfo();
carOne.setCarSound("Toooot");

class ChildCar extends Car {
    test() {
        // this.model;
        console.log("From Child Class");
    }
}

let newCar = new ChildCar('lancer 2012', 50, 900);
newCar.test();