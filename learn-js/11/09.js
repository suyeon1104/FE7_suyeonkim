const frozenObj = Object.freeze({
    name: "kim",
});
frozenObj.name = 10;
delete frozenObj.name;
frozenObj.age = 20;

console.log(Object.isFrozen(frozenObj)) // true
console.log(frozenObj); // { name: 'kim' }

const sealedObj = Object.seal({
    // 프로퍼티 추가와 삭제만 안 됨
    name:"kim",
})

sealedObj.name = "park";
delete sealedObj.name;
sealedObj.age = 20;
console.log(sealedObj); // { name: 'park' }
console.log(Object.isSealed(sealedObj)); // true


// 프로퍼티의 추가만 방지

const preventObj = Object.preventExtensions({
    name: "kim",
})

delete preventObj.name;
console.log(preventObj); // {}
preventObj.age = 20;
console.log(preventObj); // {}
console.log(Object.isExtensible({})); // true
console.log(Object.isExtensible(preventObj)); // false