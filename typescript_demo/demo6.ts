//数组
const numberArr:number[] = [1,2,3]

const arr:(number|string)[] = [1,'2',3,'4']
const stringArr:string[] = ['a','b','c']

type User = {name:string,age:number}

class Teacher6 {
    name: string;
    age: number;
}

const objectArr : Teacher6[] = [{name:'bbb',age:25},{name:'aaa',age:24},new Teacher6()]



//元组 tuple
const teacherInfo:[string,string,number] = ['liming','male',20];
console.log(teacherInfo[0])

const teacherList : [string,string,number][] = [
    ['liming','male',20],
    ['aaaaa','male',12],
    ['bbbbbb','male',34]
]

