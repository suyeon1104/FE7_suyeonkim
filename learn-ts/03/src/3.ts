{
    // 인터페이스
    // 객체의 타입을 지정할 때 사용하는 타입 지정 방법
    // interface
    // interface 식별자 { }
    // 국내에서는 대부분 객체는 인터페이스 정의함
    // 그 외에는 타입 별칭

    interface Person {
        name: string;
        age: number;
        gender: "male" | "female" | "natural";
    }

    const person: Person = {
        name: "kim",
        age: 20,
        gender: "male",
    }
}
{
    interface Person {
        name: string;
        age: number;
        greet(message: string): void;
    }
    const person: Person = {
        name: "kim",
        age: 20,
        greet() {
            console.log(`Hello, ${this.name}`);
        }
    }
}

{
    interface Person {
        [key: string]: string | number;
    }
    const person: Person = {
        name: "kim",
        age: 20,
    }
}

{
    // 자동 병합
    // 자동 병합 주의: 여러 파일에서 같은 이름으로 선언된 인터페이스는 자동 병합됨.
    interface Person {
        readonly name: string;
    }
    interface Person {
        readonly age: number;
    }
    const person: Person = {
        name: "kim",
        age: 20,
    }
}

{
    // 상속
    interface Person {
        name: string;
        age: number;
    }

    interface Developer extends Person {
        skill: string;    
    }

    const developer: Developer = {
        name: "kim",
        age: 20,
        skill: "Javascript",
    }
}

{
    // 다중 인터페이스 상속
    interface Flyer {
        fly(): void;
    }
    interface Swimmer {
        swim?(): void;
    }
    interface Bird extends Flyer, Swimmer {
        sound(): void;
    }
    type FlyerAndSwimmer = Flyer & Swimmer;
    const duck: Bird = {
        fly() {},
        swim() {},
        sound() {},
    }
}

{
    interface AddFn {
        (a: number, b: number) : number;
    }
    const add: AddFn = (a, b) => a + b;
}