{
    // TODO: 나중에 타입 교체
    // 1. any - 아무 값이나 대입, 사용할 수 있어 타입 검사를 우회하는 특수한 타입
    // unknown - 알 수 없는 타입 (안전한 any, 유연한 any)
    let x: unknown;
    x = 10;

    // 타입 좁히기 필요
    if (typeof x === "number") {
        console.log(x.toFixed(2));
    }
}

{
    // 타입 단언
    // as, <
    // 개발자가 타입스크립트 컴파일러보다 타입을 더 잘 알고 있을 때 사용함
    // 타입을 직접 정의하고 보장함
    let x: unknown;
    x = 10.12;

    // 장점 -> 타입을 내가 원하는 대로 지정할 수 있음
    // 단점 -> 개발자가 그 책임을 가져가야 함
    (x as number).toFixed(1);
    (<number>x).toFixed(1); // 리액트에서 사용 안 함. JSX 문법과 충돌함.

    (x as {name: string}).name;
}