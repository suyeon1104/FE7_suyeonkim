// 타입추론
// 타입을 명시하지 않아도, 컴파일러가 값, 문맥, 흐름을 보고 적절한 타입을 자동으로 결정하는 기능
// 기본자료형 -> 타입추론
// 참조자료형 -> 타입명시

// 리터럴 타입(literal type)
// 값으로 타입을 지정하는 방식, 정확히 그 값 하나만 가질 수 있는 타입
{
    let str = "Hello";
    const str2 = "Hello";
  
    const num = 10;
    const bool = true;
    const undi = undefined;
    const nul = null;
    const sym = Symbol("a");
    const big = 100n;
  
    // TODO: 나중에 타입 지정하기
    let a: string;
    a = "a";
  }
  {
    let str: "Hello";
    const str2: "Hello" = "Hello";
  
    const num: 10 | 8;
    const bool: true;
    const undi: undefined;
    const nul: null;
    const sym: Symbol("a");
    const big: 100n;
  
    // TODO: 나중에 타입 지정하기
    let a: string;
    a = "a";
  }
  {
    let arr = [1, 2, 3, 4];
    let obj = {
      name: "kim",
      age: 20,
    };
    let func = function () {};
  }
  {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then(
        (
          json: {
            userId: number;
            id: number;
            title: string;
            body: string;
          }[]
        ) => {
          console.log(json[0]);
        }
      );
  }