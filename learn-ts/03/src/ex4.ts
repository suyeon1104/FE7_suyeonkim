// 1
{
    const processInput = function(input: string | number | boolean) {
        if (typeof input === "string") return input.toUpperCase();
        if (typeof input === "number") return Math.pow(input, 2);
        if (typeof input === "boolean") return input ? "YES" : "NO";
    }

    // 테스트 케이스
    console.log(processInput("hello"));   // "HELLO"
    console.log(processInput(5));         // 25
    console.log(processInput(true));      // "YES"
}

// 2
{
    const getFirstCharacter = function(str: string | number) {
        if (typeof str === "string") return str[0];
        if (typeof str === "number") return String(str)[0];
    }

    // 테스트 케이스
    console.log(getFirstCharacter("hello")); // "h"
    console.log(getFirstCharacter(12345));   // 1
}

// 3
{
    const combinePersonAndEmployee = function(person: {name: string, age: number}, employee: {jobTitle: string, salary: number}) {
        return {...person, ...employee};
    }

    // 테스트 케이스
    const person = { name: "Alice", age: 30 };
    const employee = { jobTitle: "Engineer", salary: 5000 };
    console.log(combinePersonAndEmployee(person, employee));
}

// 4
{
    const getIdValue = function (id : number | string) {
        if (typeof id === "number") return id;
        if (typeof id === "string") return id.length;
    }
}

// 5
{
    const formatDate = function(date: string | Date) {
        if (typeof date === "string") return date;
        return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
    }

    // 테스트 케이스
    console.log(formatDate("2024-11-19"));  // "2024-11-19"
    console.log(formatDate(new Date(2024, 10, 19)));  // "11/19/2024"
}

// 6
{
    const convert = function (input: number | string) {
        if (typeof input === "number") return String(input);
        if (typeof input === "string") return Number(input);
    }

    // 테스트 케이스
    console.log(convert(123));      // "123"
    console.log(convert("456"));    // 456
    console.log(convert("abc"));    // NaN
}

// 7
{
    const combinePersonAndAddress = function (person: {name: string, age: number}, address: {street: string, city: string, zipcode: string}) {
        return {...person, address};
    }

    // 테스트 케이스
    const person = { name: "John", age: 25 };
    const address = { street: "123 Elm St", city: "Springfield", zipcode: "12345" };
    console.log(combinePersonAndAddress(person, address));
}

// 8
{
    const compareValues = function(value1: string | number, value2: string | number) {
        if (typeof value1 === "string" && typeof value2 === "string") {
            return value1 > value2;
        }
        if (typeof value1 === "number" && typeof value2 === "number") {
            return value1 > value2;
        }
    }
    // 테스트 케이스
    console.log(compareValues(10, 20));      // false
    console.log(compareValues("apple", "banana")); // false
    console.log(compareValues("grape", "apple"));  // true
}

// 9
{
    const checkEvenOdd = function (input: number | string) {
        if (typeof input === "number") {
            return input % 2 === 0 ? "Even" : "Odd";
        }
        if (typeof input === "string") {
            input.length % 2 === 0 ? "Even length" : "Odd Length";
        }
    }

    // 테스트 케이스
    console.log(checkEvenOdd(4));      // "Even"
    console.log(checkEvenOdd(7));      // "Odd"
    console.log(checkEvenOdd("hello")); // "Odd Length"
    console.log(checkEvenOdd("code"));  // "Even Length"
}


// 10
{
    const mergeContactInfo = function(person: {name?: string, age?: number}, contactInfo: {email?: string, phoneNumber?: string}) {
        return {...person, ...contactInfo};
    }

    // 테스트 케이스
    const person = { name: "Alice", age: 30 };
    const contactInfo = { email: "alice@example.com", phoneNumber: "123-456-7890" };
    console.log(mergeContactInfo(person, contactInfo));

    const personWithoutContact = { name: "Bob", age: 25 };
    console.log(mergeContactInfo(personWithoutContact, {}));
}