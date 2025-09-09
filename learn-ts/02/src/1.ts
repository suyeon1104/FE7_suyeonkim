// 타입 추론
// 타입을 명시하지 않아도, 컴파일러가 값, 문맥, 흐름을 보고 적절한 타입을 자동으로 결정하는 기능
// 기본자료형 -> 타입 추론
// 참조자료형 -> 타입 명시

// 리터럴 타입 (literal type)
// 값으로 타입을 지정하는 방식
{
    let str:string = "Hello";
    str = "a";

    const str2 = "Hello";

    const num = 10;
    const bool = true;
    const undi = undefined;
    const nul = null;
    const sym = Symbol("a");
    let big = 100n;
    
    let a: any;
    a = "A";
    a = 10;
}

{

    const obj = {
        name: "kim",
        age: 20,
    }
}
