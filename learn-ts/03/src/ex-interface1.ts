// 1
{
    interface Person {
        name: string;
        age: number;
    }
    const person: Person = {
        name: "kim",
        age: 24,
    }
}

// 2
{
    interface Car {
        brand: string;
        model: string;
        start(): void;
    }

    const myCar: Car = {
        brand: "Hyundai",
        model: "Sonata",
        start() {
            console.log(`${this.brand} ${this.model} 운행 시작`)
        }
    }
}

// 3
{
    interface Employee {
        name: string;
        position: string;
        department?: string;
    }
}

// 4
{
    interface Team {
        name: string;
        members:string[]
    }
}

// 5
{
    interface Animal {
        name: string;
        age: number;
    }
    interface Dog extends Animal {
        breed: string;
    }
}

// 6
{
    interface Person {
        name: string;
        age: number;
        greet(): void;
    }
    const person: Person = {
        name: "kim",
        age: 24,
        greet() {
            return `Hello, my name is {name}`;
        }
    }
}

// 7
{
    interface Shape {
        area(): number;
    }
    interface Circle extends Shape {
        radius: number;
    }
    interface Rectangle extends Shape {
        width: number;
        height: number;
    }
}

// 8
{
    interface Person {
        name: string;
        age: number;
    }
    interface Address {
        street: string;
        city: string;
        zipcode: number;
    }
    type PersonAndAddress = Person & Address;
    const paa: PersonAndAddress = {
        name: "kim",
        age: 24,
        street: "guro",
        city: "seoul",
        zipcode: 3031
    }
}

// 9
{
    interface Dictionary {
        [key: string] : string;
    }
}

// 10
{
    interface Operation {
        (a: number, b: number) : number;
    }

    const add : Operation = (a, b) => {
        return a + b;
    }

    const subtract: Operation = (a, b) => {
        return a - b;
    }
    console.log(add(10, 5));
    console.log(subtract(10, 5));

}