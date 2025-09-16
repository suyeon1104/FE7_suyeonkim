let a: number = 10;
let b: number = 20;
let result: number = a + b;
console.log(result);

// 변수: 타입
// 1. 기본 자료형
// 1.1 문자열 -> string
// 1.2 숫자 -> number
// 1.3 논리 -> boolean
// 1.4 undefined -> undefined
// 1.5 null -> null
// 1.6 symbol -> symbol
// 1.7 Bigint -> bigint
{
    const str: string = "Hello";
    const num: number = 10;
    const bool: boolean = true;
    const undi: undefined = undefined;
    const nul: null = null;
    const sym: symbol = Symbol("a");
    const big: bigint = 100n;

    console.log(typeof str);
    console.log(typeof num);
    console.log(typeof bool);
    console.log(typeof undi);
    console.log(typeof nul);
    console.log(typeof sym);
    console.log(typeof big);

    let num2: number | null = 10;
    num2 = null;
}


{
    let str: string = "hello";
}

// 2. 참조 자료형
// 2.1 배열
// 2.1.1 []
// 2.1.2 Array<> (제네릭)
// 2.2 객체
// 2.3 함수 (o -> 나중에 살펴봄)

{
    const arr: [] = [];
    // arr.push(10); 값이 할당될 수 없음
    
    const arr2: Array<never> = [];
    // arr2.push(10); 값이 할당될 수 없음
}

{
    const arr: number[] = [1, 2, 3];
    arr.push(4);
    
    // 튜플(tuple)
    const arr1_1: [number, string] = [1, "a"];
    const arr2: Array<number> = [1, 2, 3];
    arr2.push(4);

    // const matrix: number[][] = [
    //     [1, 2, 3],
    //     [4, 5, 6],
    // ];

    const matrix: [number[], string[], boolean[]] = [
        [1, 2, 3],
        ["a", "b", "c"],
        [true, false],
    ];

    const matrix2: Array<Array<number>> = [
        [1, 2, 3],
        [4, 5, 6],
    ]

    const blocks: string[][][] = [
        [["a", "b"], ["c"]],
        [["d", "e"], ["f"]],
    ]

    const blocks2: [[string[], number[]], [string[], number[]]] = [
        [["a", "b"], [1]],
        [["d", "e"], [2]],
    ];
    const blocks3: [string[], number[]] [] = [
        [["a", "b"], [1]],
        [["d", "e"], [2]],
    ];
    console.log(blocks2);
    console.log(blocks3);
}

// 객체

{
    const obj: {} = {}; // Record<string, never>
    const obj2: Record<string, never> = {}; 
    const user: {
        name: string;
        age: number;
        gender: string;
        fruits: string[];
        address : {
            zipcode: number;
            details: [string, string, number];
        }
    } = {
        name: "kim",
        age: 20,
        gender: "male",
        fruits: ["apple", "banana"],
        address: {
            zipcode: 111333,
            details: ["서울특별시", "관악구", 11],
        }
    } // 순서가 달라도 정상동작함.
    
    const members: {id: number; name: string}[] = [
        { id: 1, name: "kim" },
        { id: 2, name: "park" },
    ];

    const project: {
        id: string;
        members: { id: number; name: string}[];
    } = {
        id: "p1",
        members,
    };
}