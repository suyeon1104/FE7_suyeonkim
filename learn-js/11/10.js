const obj = Object.create({ inherited: 1});
obj.own = 2;
console.log("own" in obj); // true
console.log(obj.hasOwnProperty("own")); // true
console.log(Object.hasOwn(obj, "own")); // true
console.log(Object.hasOwn(obj, "inherited")); // false
console.log("inherited" in obj); // true

for (const key in obj) {
    console.log(key); // own inherited
}

Object.keys(obj).forEach((v) => console.log(v)); // own

console.log(Object.getOwnPropertyDescriptor(obj, "own")); // { value: 2, writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptors(obj)); // { own: { value: 2, writable: true, enumerable: true, configurable: true }}
console.log(Object.getOwnPropertyDescriptor(obj, "inherited")); // undefined
