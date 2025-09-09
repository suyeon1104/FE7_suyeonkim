// 1
{
    const add = function (a: number, b: number) {
        return a+b;
    } 
    // 함수 호출
    const result = add(10, 5);
    console.log(result); // 15
}

// 2
{
    const greet = function(name: string) {
        return `Hello, ${name}!`;
    }
    // 함수 호출
    const greeting = greet('Alice');
    console.log(greeting);  // "Hello, Alice!"
}

// 3
{
    const sumAll = function(...numArr: number[]) {
        return numArr.reduce((acc, cur) => acc+cur, 0);
    }

    // 함수 호출
    const total = sumAll(1, 2, 3, 4);
    console.log(total); // 10
}

// 4
{
    const sum = function(a: number, b = 0) {
        return a + b;
    }

    // 함수 호출
    const result = sum(5);
    console.log(result); // 5
}

// 5
{
    // 함수 정의
    const multiply = function(a: number, b: number) {
        return a * b;
    }

    // 함수 호출
    const product = multiply(4, 5);
    console.log(product); // 20
}

// 6
{
    const concatStringAndNumber = function(str: string, num: number) {
        return `${str}${num}`;
    }

    // 함수 호출
    const result = concatStringAndNumber("Hello", 10);
    console.log(result); // "Hello10" 
}

// 7
{
    const greet = function(name: string, message = "Welcome") {
        return `${message}, ${name}!`;
    }

    // 함수 호출
    const greeting1 = greet("Alice", "Hello");
    const greeting2 = greet("Bob");
    console.log(greeting1); // "Hello, Alice!"
    console.log(greeting2); // "Welcome, Bob!"
}
{
    // 8
    const findMax = function (numArr: number[]) : number {
        return Math.max(...numArr);
    }

    // 함수 호출
    const max = findMax([10, 20, 30, 40]);
    console.log(max); // 40
}

{
    // 9
    const double = function(num: number) {
        return 2 * num;
    }

    // 함수 호출
    const doubled = double(10);
    console.log(doubled); // 20
}

{
    // 10
    function getInfo(param: string): string;
    function getInfo(param: number): string;
    function getInfo(param: string | number) {
        if (typeof param === "string") {
            return `Name: {${param}}`;
        }
        if (typeof param === "number") {
            return `Age: {${param}}`;
        }
      }
      
    // 함수 호출
    const info1 = getInfo("Alice");
    const info2 = getInfo(30);
    console.log(info1);
    console.log(info2);
}