{
    // 1
    const printValue = (value: string | number): void => {
        console.log(value);
    }
    
    printValue("Hello"); // "Hello" 출력
    printValue(42);       // 42 출력
}

{
    // 2
    const doubleOrLength = (value: string | number): number => {
        return typeof value === "string" ? value.length : value*2;
    }
    console.log(doubleOrLength("hello")); // 5 (문자열 "hello"의 길이)
    console.log(doubleOrLength(10));      // 20 (숫자 10의 두 배)
}

{
    // 3
    const mergeObjects = (
        obj1 : { name: string, age: number},
        obj2 : { jobTitle: string, salaray: number},
    ) : { name: string; age: number} & {jobTitle: string, salaray: number} => {
        return {...obj1, ...obj2};
    }
}

{
    // 4
    const getFirstElement = (
        arr: number[] | string[]
    ): number | string | undefined => {
        return arr[0];
    }
}
{
    // 5
    const isEqual = (a: string | number, b: string | number): boolean => {
        return a === b;
    }

    console.log(isEqual(10, 10)); // true
    console.log(isEqual("hello", "world")); // false
    console.log(isEqual(5, "5")); // false
}

{
    // 6
    const updateAddress = function(person: {name: string, age: number}, address?: string) : { name: string; age: number; address?: string;} {
        if (address) return {...person, address};
        return person;
    }

    const updatedPerson = updateAddress({ name: "Jane", age: 28 }, "123 Maple St");
    console.log(updatedPerson);
    // 예상 출력: { name: "Jane", age: 28, address: "123 Maple St" }

    const updatedPersonWithoutAddress = updateAddress({ name: "John", age: 22 });
    console.log(updatedPersonWithoutAddress);
    // 예상 출력: { name: "John", age: 22 }
}

{
    // 7
    const maxValue = (a: number | string, b: number | string) : number | string => {
        if (typeof a === "string" && typeof b === "string")
            return a.length > b.length ? a : b;
        return a > b ? a : b;
    }

    console.log(maxValue(10, 20)); // 20
    console.log(maxValue("apple", "banana")); // "banana"
    console.log(maxValue(30, 30)); // 30
    console.log(maxValue("cat", "dog")); // "dog"
}

{
    // 8
    // 함수 선언문으로 풀어주세요 (함수 오버로딩은 함수 선언문만 가능)
    function getValue(value: number): string;
    function getValue(value: string): string;
    function getValue(value: string | number): string {
        return value.toString();
    }

    console.log(getValue(123));   // "123"
    console.log(getValue("abc")); // "abc"
}

{
    const createContact = (
        person: {name: string, age: number},
        contact: {email: string}
    ) : {name: string, age: number} & {email: string} => {
        return {...person, ...contact};
    }

    const person = { name: "Alice", age: 28 };
    const contact = { email: "alice@example.com" };

    const personWithContact = createContact(person, contact);
    console.log(personWithContact);
    // 예상 출력: { name: "Alice", age: 28, email: "alice@example.com" }
}

{
    // 10
    const getAge = (age: string | number) : number => {
        if (typeof age === "string") return parseInt(age);
        return age;
    }

    console.log(getAge("25"));  // 25
    console.log(getAge(30));    // 30
    console.log(getAge("abc")); // NaN
}