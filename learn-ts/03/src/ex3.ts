// 1
{
    const printValue = function (str: number | string): void {
        console.log(str);
    }

    printValue("Hello"); // "Hello" 출력
    printValue(42);       // 42 출력
}

// 2
{
    const doubleOrLength = function(str: string | number): number {
        if (typeof str === "string") return str.length;
        else return str * 2;
    }
    console.log(doubleOrLength("hello")); // 5 (문자열 "hello"의 길이)
    console.log(doubleOrLength(10));      // 20 (숫자 10의 두 배)
}

// 3
{
    const mergeObjects = function(person: {name: string, age: number}, employee: {jobTitle: string, salary: number}) {
        return {...person, ...employee};
    }

    const person = { name: "Alice", age: 30 };
    const employee = { jobTitle: "Engineer", salary: 5000 };

    const mergedObject = mergeObjects(person, employee);
    console.log(mergedObject);
    // 예상 출력: { name: "Alice", age: 30, jobTitle: "Engineer", salary: 5000 }
}

// 4
{
    const getFirstElement = function(arr: number[] | string[]): number | string | undefined {
        if (!arr[0]) return undefined;
        return arr[0];
    }

    console.log(getFirstElement([1, 2, 3])); // 1
    console.log(getFirstElement(["a", "b", "c"])); // "a"
    console.log(getFirstElement([])); // undefined
}

// 5
{
    const isEqual = function(str1: number | string, str2: number | string): boolean {
        if (str1 === str2) return true;
        return false;
    }

    console.log(isEqual(10, 10)); // true
    console.log(isEqual("hello", "world")); // false
    console.log(isEqual(5, "5")); // false
}

// 6
{

    const updateAddress = function(obj: {name: string, age: number}, address?: string | undefined) {
        if (typeof address === "undefined") return obj;
        return {...obj, address};
    }

    const updatedPerson = updateAddress({ name: "Jane", age: 28 }, "123 Maple St");
    console.log(updatedPerson);
    // 예상 출력: { name: "Jane", age: 28, address: "123 Maple St" }

    const updatedPersonWithoutAddress = updateAddress({ name: "John", age: 22 });
    console.log(updatedPersonWithoutAddress);
    // 예상 출력: { name: "John", age: 22 }

}

// 7
{
    const maxValue = function (str1: string | number, str2: string | number) : string | number {
        if (str1 === str2) return str1;
        if (typeof str1 === "number" && typeof str2 === "number") return Math.max(str1, str2);
        if (typeof str1 === "string" && typeof str2 === "string") {
            return str1.length > str2.length ? str1 : str2;
        }
        return typeof str1 === "string" ? str1 : str2;
    }

    console.log(maxValue(10, 20)); // 20
    console.log(maxValue("apple", "banana")); // "banana"
    console.log(maxValue(30, 30)); // 30
    console.log(maxValue("cat", "dog")); // "dog"
}

// 8
{
    // 함수 선언문으로 풀어주세요 (함수 오버로딩은 함수 선언문만 가능)
    function getValue(str: string | number): string {
        if (typeof str === "number") return String(str);
        return str;
    }

    console.log(getValue(123));   // "123"
    console.log(getValue("abc")); // "abc"
}

// 9
{
    const createContact = function (person: {name: string, age: number}, contact: {email: string}) {
        return {...person, ...contact};
    }

    const person = { name: "Alice", age: 28 };
    const contact = { email: "alice@example.com" };

    const personWithContact = createContact(person, contact);
    console.log(personWithContact);
    // 예상 출력: { name: "Alice", age: 28, email: "alice@example.com" }
}

// 10
{
    const getAge = function(age: string | number) : number | string {
        if (typeof age === "number") return age;
        return Number(age);
    }

    console.log(getAge("25"));  // 25
    console.log(getAge(30));    // 30
    console.log(getAge("abc")); // NaN
}