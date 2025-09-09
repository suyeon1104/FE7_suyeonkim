// 1
{
    type Person = {
        name: string;
        age: number;
    };
    function getPersonInfo(person: Person): string {
        return `이름: ${person.name}, 나이: ${person.age}`;
    }
    const person : Person = {name: "kim", age: 30};
    console.log(getPersonInfo(person));
}

// 2
{
    type Config = {
        host: string;
        port: number;
        ssl: boolean;
    }
    function createConfig(host: string, port: number, ssl: boolean):Config {
        return {host, port, ssl};
    }

    const config = createConfig('localhost', 8080, true);
    console.log(config); // { host: 'localhost', port: 8080, ssl: true }
}

// 3
{
    type Rectangle = {
        width: number;
        height: number;
    }
    function calculateArea(rect: Rectangle): number {
        return rect.width * rect.height;
    }
    const rect1: Rectangle = {width: 4, height: 3};
    console.log(calculateArea(rect1));
}

// 4
{
    type Student = {
        name: string;
        age: number;
        grades: number[];
    }
    function calculateAverageGrade(student: Student) {
        return student.grades.reduce((acc, cur) => acc+cur, 0) / student.grades.length
    }
    const student:Student = {name: "lisa", age: 20, grades: [20, 47, 53]};
    console.log(calculateAverageGrade(student));
}

// 5
{
    // code
    type Response = {status: string, data: string, message: string};
    function createResponse(status : string, data: string, message: string): Response {
        return {status, data, message};
    }
    console.log(createResponse('success', 'John', 'fetch success')); // { status: 'success', data: 'John', message: 'fetch success'
}

// 6
{
    type Employee = {id: string, name: string, position: string};
    function getEmployeeInfo(employee: Employee) {
        return employee;
    }
    console.log(getEmployeeInfo({id:'1', name:'james', position:'developer'})); // "james works as a developer with ID: 1." 
}

// 7
{
    type Circle = {radius: number};
    function calculateCircumference(circle: Circle): number {
        return 2 * Math.PI * circle.radius; 
    }
    console.log(calculateCircumference({radius:3})); // 18.8495559215387
}

// 8
{
    type Product = {name: string, price: number, inStock: boolean};
    function getDiscountedPrice(product: Product, discount: number): number {
        return product.price * (100 - discount) / 100;
    }
    console.log(getDiscountedPrice({name: 'bag', price: 1000, inStock: true}, 10)); // 900
}

// 9
{
    type Book = {title: string, author: string, publishedYear: number};
    function getBookSummary(book: Book): string {
        return `title: ${book.title}, author: ${book.author}, publishedYear: ${book.publishedYear}`;
    }

    console.log(getBookSummary({title: 'river', author:'james', publishedYear: 2020})); // "river by james, published in 2020." 
}

// 10
{
    type Transaction = {id: string, amount: number, timestamp: string};
    function isValidTransaction(transaction: Transaction) {
        return transaction.amount > 0;
    }
    console.log(isValidTransaction({id: "123", amount: 3, timestamp: "123456"}));
}