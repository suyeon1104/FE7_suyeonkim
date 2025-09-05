// 1
const str: string = "Hello";
console.log(str);

// 2
const num: number = 42;
console.log(num);

// 3
const bool: boolean = true;
console.log(bool);

// 4
const numArr: number[] = [1, 2, 3];
for (const num of numArr) {
    console.log(num);
}

// 5
const strArr: string[] = ["a", "b", "c"];
for (const str of strArr) {
    console.log(str);
}

// 6
const tuple: [number, string] = [1, "a"];
for (const tup of tuple) {
    console.log(tup);
}

// 7
const nul: null = null;
console.log(nul);

// 8
const undi: undefined = undefined;
console.log(undi);

// 9
const obj : {
    name: string;
    age: number;
} = {
    name: "suyeon",
    age: 26,
}

console.log(obj);