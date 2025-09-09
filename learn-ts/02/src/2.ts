// 함수에 타입을 지정하는 방법
// 함수의 매개 변수와 반환 값의 타입을 지정하는 것
// function(n1: 매개변수타입): 반환값의 타입 {}
// void
// never

{
    // 함수 선언문
    function sum(n1: number, n2: number) : number {
        return n1 + n2;
    }

    sum(10, 20);

    function concat(str1: string, str2: string): string {
        return str1+ str2;
    }

    concat("Hello", "Sucoding");

    function printValue(value: string): void {
        console.log(value);
    }

    printValue("Hello");

    function throwError(msg: string): never {
        throw new Error(msg);
    }
}

{
    // 함수 표현식
    // (1) - 함수 표현식의 타입을 지정하는 방법
    const suma = function sum(n1: number, n2: number) : number {
        return n1 + n2;
    }
    // (2) 변수에다가 함수 타입을 지정하는 방법
    const sumb: (n1: number, n2: number) => number = function sum(n1, n2) {
        return n1 + n2;
    }
    // (3) 둘 다 하는 방법
    const sumc: (n1: number, n2: number) => number = function sum(n1: number, n2: number) : number {
        return n1 + n2;
    }
}
{
    // 화살표 함수
    // (1) - 함수 표현식의 타입을 지정하는 방법
    const suma = (n1: number, n2: number): number => {
        return n1 + n2;
    }
    // (2) 변수에다가 함수 타입을 지정하는 방법
    const sumb : (n1: number, n2: number) => number = (n1, n2) => {
        return n1 + n2;
    }
    // (3) 둘 다 하는 방법
    const sumc : (n1: number, n2: number) => number = (n1: number, n2: number): number => n1 + n2;
}

{
    // 옵셔널 파라미터
    // 옵셔널은 첫 번째 매개변수에만 지정 가능
    function sum(n1: number, n2?: number): number {
        return n1 + (n2 || 0);
    }
    sum(10); // 10
    sum(10, 20); // 20
}

{
    // 매개변수가 콜백함수일 때
    // function log(msg: string) {
    //     console.log(msg);
    // }
    function printValue(callback: (msg: string) => void) {
        callback("Hello");
    }

    printValue((msg: string) => {
        console.log(msg);
    });

    function createMultiplier(factor: number): (num:number) => number {
        return (num) => num * factor;
    }

    const multiplyByTwo = createMultiplier(2);
    console.log(multiplyByTwo(5));
}

{
    const createMultiplier: (factor: number) => (num:number) => number
    = (factor) => (num) =>
        num * factor;
}

{
    function sum(...numArr: number[]): number {
        return numArr.reduce((acc, cur) => acc + cur, 0);
    }
    sum(1, 2, 3, 4, 5);
}

{
    // 함수 오버로딩
    // 오버로드 시그니처를 활용해서 매개변수와 반환값의 경우의 수를 좁히는 방법
    // 함수 선언문에서만 지원함
    // 필요한 경우의 수만 작성해도 됨 (전부 작성할 필요 없음)
    function sum(a: string, b: number): string;
    function sum(a: number, b: string): string;
    function sum(a: string, b: string): string;
    function sum(a: number, b: number): number;
    function sum(a: number | string, b: number | string): number | string {
        if (typeof a === 'number' && typeof b === "number") return a + b;
        else return `${a}${b}`;
    }
    const num = sum(10, 20);
    console.log(num);
    console.log(typeof num);
    if (typeof num === "number") console.log(num.toFixed(2));
    // console.log(num.toFixed(2));
    const str = sum("A", "B");

    const str2 = sum("A", 10);

}