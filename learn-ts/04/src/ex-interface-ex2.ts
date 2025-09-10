{
    // 1
    interface Animal {
        name: string;
        speak(): void;
    }
    interface Dog extends Animal {
        speak(): void;

    }
    interface Cat extends Animal {
        speak(): void;

    }
    const dog: Dog = {
        name: "Charlie",
        speak(): string {
            return "Woof!";
        }
    }
    const cat: Cat = {
        name: "Cathy",
        speak(): string {
            return "Meow!";
        }
    }
}

{
    // 2
    interface Company {
    }
}