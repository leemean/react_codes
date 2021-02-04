const count:number = 123
const myname:string  = "liming"
const flag:boolean = true

interface teacher { 
    name:string,
    age:number
}

 const myteacher:teacher = {
     name: "liming",
     age: 12
 }

 class Person {
    name:string;
    age:number;
 }

 const dell:Person = new Person()


 const getTotal : () => number = () => {
     return 123
 }

 getTotal()
