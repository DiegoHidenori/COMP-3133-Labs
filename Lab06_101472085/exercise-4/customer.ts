export class Customer {
    private firstName: string;
    private lastName: string;
    private age: number;

    public greeter() {
        console.log(`Hello ${this.firstName} ${this.lastName}, ${this.age} years old`);
    }

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    public GetAge() {
        console.log(`${this.age} years old.`);
    }

}
