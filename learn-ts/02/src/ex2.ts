// 1
{
    const sumAllNumbers = function (...numArr: number[][]) {
        return numArr.map(arr => arr.reduce((sum, num) => sum + num, 0));
    }

    // 함수 호출
    const result = sumAllNumbers([1, 2], [3, 4, 5], [6, 7]);
    console.log(result); // [3, 12, 13]
}

// 2
{
    const doubleValue = function(value: number | string) : number {
        if (typeof value === "number") return 2 * value;
        return 2 * value.length;
    }

    // 함수 호출
    const result1 = doubleValue(5); 
    const result2 = doubleValue("hello"); 
    console.log(result1); // 10
    console.log(result2); // 10
}

// 3
{

    // 함수 정의
    const multiplyArrays = function (numArr1: number[], numArr2: number[]) {
        const minLen = Math.min(numArr1.length, numArr2.length);
        return Array.from({length: minLen}, (_, i) => numArr1[i] * numArr2[i]);
    }

    // 함수 호출
    const result = multiplyArrays([1, 2, 3], [4, 5, 6]);
    console.log(result); // [4, 10, 18]

    const result2 = multiplyArrays([1, 2], [4, 5, 6]);
    console.log(result2); // [4, 10]
}

// 4
{
    const intersection = function(arr1: number[], arr2: number[]) {
        return arr1.filter(item => arr2.includes(item));
    }

    // 함수 호출
    const result = intersection([1, 2, 3], [2, 3, 4]);
    console.log(result); // [2, 3]
}

// 5
{
    const formatInfo = function(obj: {name: string } | { age: string}) {
        if ("name" in obj) {
            return `Name: ${obj.name}`;
        } else if ("age" in obj) {
            return `Age: ${obj.age}`;
        }

        return "";
    }

    // 함수 호출
    const info = formatInfo({ name: "Alice" });
    console.log(info); // "Name: Alice"
}

// 6
{
    const combineStrings = (str1: string, str2: string) => {
        return `${str1}${str2}`;
    }

    // 함수 호출
    const combined = combineStrings("Hello", "World");
    console.log(combined); // "HelloWorld"
}

// 7
{
    const squareArray = (arr: number[]) => {
        return arr.map((item) => Math.pow(item, 2));
    }

    // 함수 호출
    const result = squareArray([1, 2, 3, 4]);
    console.log(result); // [1, 4, 9, 16]
}

// 8
{
    // 함수 정의
    const addStringAndNumber = (str: string, num: number) => {
        return `${str}${num}`;
    }

    // 함수 호출
    const result = addStringAndNumber("The number is ", 10);
    console.log(result); // "The number is 10"
}

// 9
{
    const compareValues = (num: number, str: string) => {
        if (num > str.length) return "Number is larger";
        return "String is larger";
    }

    // 함수 호출
    const result = compareValues(10, "Hello");
    console.log(result); // "Number is larger"
}

// 10
{
    const checkValue = (value: number | string | boolean) => {
        if (typeof value === "number") return "It's a number";
        if (typeof value === "string") return "It's a string";
        if (typeof value === "boolean") return "It's a boolean";
    }

    // 함수 호출
    const result = checkValue(true);
    console.log(result);
}