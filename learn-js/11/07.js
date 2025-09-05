const person = {
    name: "kim",
}
// value
// writable -> false 수정 불가능 true 가능
// enumerable -> false 열거 가능 속성에 안 보임, true 보이
// configurable -> 속성의 삭제 불가
Object.defineProperty(person, "age", {
    value: 20,
    enumerable: true,
    writable: true,
    configurable: true,
});

console.log(person); // { name: 'kim', age: 20 }


Object.defineProperties(person, {
    job: {
        value: "developer",
        enumerable: true,
    },
    salary: {
        value: 5000,
        enumerable: true,
    }
});

console.log(person); // { name: 'kim', age: 20, job: 'developer', salary: 5000 }

person.age = 3;
console.log(person);

delete person.age;
console.log(person);

person.job = "cooker"; // writable: true여야 프로퍼티 변경 가능
console.log(person);

delete person.job; // configurable: true여야 프로퍼티 삭제 가능
console.log(person);
