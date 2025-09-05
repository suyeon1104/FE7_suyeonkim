const person = {
    firstName: "kisu",
    lastName: "kim",
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
}
person.fullName = "min park";
console.log(person.fullName);
console.log(person.firstName);
console.log(person.lastName);

const Roles = {
    ADMIN: "admin",
    USER: "user",
    GUEST: "guest",
}

// const config = Object.freeze({
//     apiUrl: "http://localhost: 3000",
//     timeout: 3000,
// });

const obj = {
    apiUrl: "http://localhost: 3000",
    timeout: 3000,
};

const config = Object.freeze(obj);

config.timeout = 1500;
console.log(config); // timeout 안 바뀜
obj.timeout = 1500;
console.log(obj); // // timeout 안 바

