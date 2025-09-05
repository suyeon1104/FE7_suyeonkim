class Person {
    constructor(lastName, firstName) {
        this.lastName = lastName;
        this.firstName = firstName;
    }
    // 게터 = 함수 (x)
    get fullName() {
        return `${this.lastName} ${this.firstName}`;
    }
    set fullName (value) {
        const [lastName, firstName] = value.split(" ");
        this.lastName = lastName;
        this.firstName = firstName;
        // this.fullName = value;

    }
    get reverseName() {
        return `${this.firstName} ${this.lastName}`;
    }
    set reverseName(value) {
        const [firstName, lastName] = value.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const p1 = new Person("kim", "suyeon");
p1.fullName = "park chulsu"
console.dir(p1); // Person { lastName: 'park', firstName : 'chulsu' }
console.log(p1.fullName); // park chulsu
console.log(p1.reverseName); // chulsu park

p1.reverseName = "deogtae kim";
console.log(p1.fullName);