// function age(constructor: Function) {
//     console.log('in decorator fn ', constructor);
//     constructor.prototype.age = 26;
// }
// @age
// class Greeting {
//     name: string;
//     message: string;
//     constructor(name: string, message: string) {
//         this.name = name;
//         this.message = message;
//     }
//     sayHello() {
//         console.log(`${this.message} ${this.name} ${this.age}`);
//     }
// }

// console.log(new Greeting('john', 'welcome').sayHello());

// function classDecorator<T extends { new (...args:any[]): {} }>(constructor: T) {
//     return class extends constructor {
//         newProperty = 'new property';
//         hello = 'override';
//     }
// }

// @classDecorator
// class Greeting {
//     property: 'property';
//     hello: string;
//     constructor(m: string) {
//         this.hello = m;
//     }
// }

// console.log(new Greeting('world'));

function Student(config:any){
    return function(target:any){
        console.log(config, target);
    };
}
@Student({
    course: 'Angular'
})
class Person{

}

console.log(new Person());