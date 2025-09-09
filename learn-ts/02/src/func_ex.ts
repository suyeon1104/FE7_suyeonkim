{
    // 1
    const add: (n1: number, n2: number) => number = (n1, n2) => n1 + n2;
    const result = add(10, 5);
    console.log(result); // 15
}

{
    // 2
    const greet = (name: string) : void => {
        console.log(`Hello, ${name}`);
    }
    const greeting = greet("Alice");
    console.log(greeting); // "Hello, Alice!"
}

{
    // 3
    const sumAll = (...numArr: number[]) : number => numArr.reduce((acc, cur) => acc + cur, 0);
    // function sumAll = (...numArr: number[]) : number => numArr.reduce((acc, cur) => acc + cur, 0);
    const total = sumAll(1, 2, 3, 4);
    console.log(total);
}

{
    // 4
    // 함수 매개변수에 기본값을 넣으면 타입이 자동으로 설정됨
    const sum = (a: number, b = 0) : number => a + b;
    const result = sum(5);
    console.log(result); // 5
};

{
    // 5
    function multiply(a: number, b: number) : number {
        return a * b;
    }
    const product = multiply(4, 5);
    console.log(product); // 20
}

{
    // 6
    const concatStringAndNumber = function(str: string, num: number) {
        return `${str}${num}`;
    }
    const result = concatStringAndNumber("Hello", 10);
    console.log(result); // "Hello10"
}

{
    // 7
    // 옵셔널과 기본값은 동시에 사용 불가능함
    const greet = (name: string, message = "Welcome") : string =>
        `${message}, ${name}`;

    const greeting1 = greet("Alice", "Hello");
    const greeting2 = greet("Bob");
    console.log(greeting1); // "Hello, Alice!"
    console.log(greeting2); // "Welcome, Bob!
}

{
    // 8
    function findMax(numArr: number[]): number {
        return Math.max(...numArr);
    }
    const max = findMax([10, 20, 30, 40]);
    console.log(max); // 40
}

{
    // 9
    const double = function (x: number) {
        return x * 2;
    };

    const doubled = double(10);
    console.log(doubled); // 20
}