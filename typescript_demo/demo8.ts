class Person8 {
    public name:string;
    public getName(){
        return this.name;
    };
    public sayHi(){
        return 'hi';
    }
}

class Teacher8 extends Person8 {
    getTeacherName(){
        return 'teacher-liming';
    }

    getName(){
        return super.getName() + 'lee';
    }
}

const person = new Person8()
person.name = 'ming'
const teacher = new Teacher8()
console.log(person.getName())
console.log(teacher.getName())
console.log(teacher.getTeacherName())