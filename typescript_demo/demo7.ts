//接口 interface
interface Person7 {
    name: string;
    age?: number;
    readonly sex?: boolean;
    [propName:string]: any;
    say():string;
}

interface Teacher7 extends Person {
    teache(): string;
}

interface SayHi {
    (word:string):string
}

type Person1 = {
    name: string
}

const getPersonName = (person:Person7):void => {
    console.log(person.name)
};

const setPersonName = (person:Person7,name:string):void => {
    person.name = name;
};

const person7 = {
    name: 'liming',
    work: 'airport',
    say(){
        return 'say hello'
    }
};

getPersonName(person7);

// getPersonName({
//     name: 'liming',
//     work: 'airport'
// });

class User7 implements Person7 {
    name: string = 'liming';
    say(){
        return 'hello';
    }
}

const say:SayHi = (word) => {
    return word;
}

say('say hi')



