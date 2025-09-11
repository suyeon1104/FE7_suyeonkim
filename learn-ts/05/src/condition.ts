{ 
    // 선언 병합
    interface User {
        name: string;
    }
    interface User {
        age: number;
    }
    enum Direction {
        UP,
        DOWN,
    }
    enum Direction {
        RIGHT = 2,
        LEFT = 3,
    }

}

{
    // 조건부 타입 (삼항 연산자와 비슷함)
    // T extends U ? X: Y

    type IsString<T> = T extends string ? "Yes" : "NO";
    type A = IsString<string>;
    type B = IsString<number>;
}

{
    //
    type MyType = "a" | "b" | "c";
    // 예제1: "b"를 제외한 나머지를 반환
    type Result = Exclude<MyType, "b">;
}
{
    type MyExclude<T, U> = T extends U ? never : T;
    type MyType = "a" | "b" | "c";
    type Result = MyExclude<MyType, "b">; // "a" | "c"
}