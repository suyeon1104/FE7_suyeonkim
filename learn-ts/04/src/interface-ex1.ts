{
    // 1
    interface Person {
        name: string;
        age: number;
    }

    const person: Person = {
        name: "kim",
        age: 20
    }
}

{
    // 2
    interface Car {
        brand: string;
        model: string;
        start(this: Car, speed: number): void; 
    }
    const car: Car = {
        brand: "Tesla",
        model: "Model S",
        start(this: Car, speed: number) {
            console.log(`${this.brand} Start, speed: ${speed}km`);
        }
    }

    car.start(100);
}

{
    // 3
    interface Employee {
        name: string;
        position: string;
        department?: string;
    }
    const employee1: Employee = {name: "kim", position: "manager"};
    const employee2: Employee = {
        name: "park",
        position: "developer",
        department: "IT",
    }
}

{
    // 4
    interface Team {
        name: string;
        members: string[];
    }
    const team: Team = {
        name: "Development Team",
        members: ["kim", "ann", "park"],
    }
}

{
    // 5
    interface Animal {
        name: string;
        age: number;
    }
    interface Dog extends Animal {
        breed: string;
    }
    const dog: Dog = {
        name: "Puppy",
        age: 3,
        breed: "Golden Retriever",
    }
}

{
    // 6
    interface Person {
        name: string;
        age: number;
        greet(): void;
    }
    const person: Person = {
        name: "kim",
        age: 10,
        greet(this: Person) {
            console.log(`Hello, my name is ${this.name}`);
        }
    }
}

{
    // 7
    interface Shape {
        area(): void;
    }
    interface Circle extends Shape {
        radius: number;
    }
    interface Rectangle extends Shape {
        width: number;
        height: number;
    }

    const circle: Circle = {
        radius: 10,
        area(this: Circle) {
            return Math.PI * this.radius * this.radius;
        }
    }
    const rectangle: Rectangle = {
        width: 5,
        height: 10,
        area(this: Rectangle) {
            return this.width * this.height;
        }
    }
}

{
    // 8
    interface Person {
        name: string;
        age: number;
    }
    interface Address {
        street: string;
        city: string;
        zipcode: string;
    }
    interface Contact extends Person, Address {};

    const contact: Contact = {
        name: "kim",
        age: 30,
        street: "main st",
        city: "NY",
        zipcode: "1111"
    }
}

{
    // 9
    interface Dictionary {
        [key: string] : string;
    }
    const dictionary: Dictionary = {
        hello: "a",
        myname: "kisu",
    }
}

{
    // 10
    interface Operation {
        (a: number, b: number): number;
    }
    const add: Operation = (a, b) => a + b;
    const subtract: Operation = (a, b) => a - b;
}