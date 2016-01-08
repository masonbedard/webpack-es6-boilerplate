class Person {
	constructor(name) {
		this.name = name;
	}
	sayName() {
		console.log("My name is " + this.name);
	}
}

class Student extends Person {
	constructor(name, subject) {
		super(name);
		this.subject = subject;
	}
	sayFavoriteSubject() {
		console.log("My favorite subject is " + this.subject);
	}
}

const student = new Student("Mason", "Math");
student.sayName();
student.sayFavoriteSubject();

console.log(student instanceof Student);
console.log(student instanceof Person);
