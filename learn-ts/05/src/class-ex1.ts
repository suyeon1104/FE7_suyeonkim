{
    // 1
    class Person {
        // 암시적 필드 선언 (implicit field declaration)
        constructor(public name: string, public age: number) {}

        greet(): void {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        };
  }
  
  const person = new Person("Alice", 30);
  person.greet();  // "Hello, my name is Alice and I am 30 years old."  
}

{
    // 2
    class Student {
        constructor(public name: string, public grade: number) {}
            displayInfo(): void {
                console.log(`${this.name} is in grade ${this.grade}.`
            );
        };
    }
        const student = new Student("Bob", 10);
        student.displayInfo();  // "Bob is in grade 10."     
}

{
    // 3
    class Car {
        constructor(public brand: string, public model: string) {}
        getCarInfo(): string {
            return `${this.brand} ${this.model}`;
        };
      }  
      const car = new Car("Toyota", "Corolla");
      console.log(car.getCarInfo());  // "Toyota Corolla"
      "Bob is in grade 10."
}

{
    // 4
    class Rectangle {
        constructor(public width: number, public height: number) {}
        getArea(): number {
          return this.width * this.height;
        };
    }
      const rectangle = new Rectangle(5, 10);
      console.log(rectangle.getArea());  // 50
}

{
    // 5
    {
        class Book {
            constructor(public title: string, public author: string) {}
          
            getBookInfo (): string {
              return `"${this.title}" by ${this.author}`;
            };
          }
          
          const book = new Book("1984", "George Orwell");
          console.log(book.getBookInfo());  // "\\"1984\\" by George Orwell"
    }
}

{
    // 6
    class Employee {
        constructor(public name: string, public salary: number) {}
        getSalary(): string {
          return `${this.name} earns $${this.salary}`;
        };
      }
      
      const employee = new Employee("Alice", 50000);
      console.log(employee.getSalary());  // "Alice earns $50000
}

{
    // 7
    class Shape {
        constructor(public name: string) {}
        getShapeName(): string {
          return `This is a ${this.name}`;
        };
      }
      const shape = new Shape("Circle");
      console.log(shape.getShapeName());  // "This is a Circle"     
}

{
    // 8
    class Library {
        constructor(public name: string, public books: string[]) {}
        getBooks() {
          return `${this.name} has the following books: ${this.books.join(", ")}`;
        };
      }
      
      const library = new Library("City Library", ["1984", "Brave New World"]);
      console.log(library.getBooks());  // "City Library has the following books: 1984, Brave New World"
      
}

{
    // 9
    class DateUtil {
        day: number;
        month: number;
        year: number;
        constructor (day: number, month: number, year: number) {
            this.day = day;
            this.month = month;
            this.year = year;
        }
      
        getDate() {
          return `${this.day}/${this.month}/${this.year}`;
        };
      }
      
      const date = new DateUtil(12, 5, 2024);
      console.log(date.getDate());  // "12/5/2024"
}

{
    // 9-1
    // Date 타입
    const date: Date = new Date();
}

{
    // 10
    class Point {
        constructor(public x: number, public y: number) {
        }
      
        getDistance () {
          return Math.sqrt(this.x * this.x + this.y * this.y);
        };
      }
      
      const point = new Point(3, 4);
      console.log(point.getDistance());  // 5
}