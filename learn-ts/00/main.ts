// 1. 타입스크립트 (확장문법)
// 1.1 자바스크립트에 타입(Type)을 추가한 언어
// 1.2 타입 -> 데이터의 종류
// 1.3 타입스크립트는 자바스크립트의 슈퍼셋(superset)이다
// 1.3.1 슈퍼셋: 어떤 집합이나 시스템이 다른 집합이나 시스템을 모두 포함하면서도 추가적인 요소를 더 가지고 있는 것

// 1.2 마이크로 소프트사가 개발함
// 1.2.1 자바스크립트보다 좀 더 정확하고 안정적인 코드를 작성할 수 있기 때문
// 1.2.2 자바스크립트는 굉장히 유연한 언어
// 1.2.3 타입스크립트는 자바스크립트에 타입을 추가함 -> 정적 타입임

let num: number;
// num = "A";
// num = true;
// num = [];
// num = {};
// number 타입이 아닌 값들은 대입되지 못함.
// TypeScript 코드는 Javascript로 변환되며, Javascript가 실행되는 모든 곳(브라우저, Node.js 등)에서 실행됨.

// slim, pug, SCSS, SASS, Typescript 등의 파일들을 컴파일러가 HTML, CSS, Javascript처럼 웹 브라우저에서 돌아가는 파일들로 만들어주는 것을 컴파일이라 한다.

num = 10;

// 2. 최신 tsconfig.json 설정을 사용할 경우
// 2.1 ts -> js 모듈로 변환됨
// 2.1.1 <script type="module" src="..." />

// 2.2 최신 설정을 바꾸는 방법
// 2.2.1 isolatedModules -> false
// 2.2.2 moduleDetection -> false
// 2.2.3 <script defer src="..." />

// 2.3 5.8 버전의 추천 설정 사용하기 (강의 노트)
// 2.3.1 <script defer src="..." />
