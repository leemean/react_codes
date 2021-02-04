interface Bird {
    fly : boolean;
    sing() : string;
}

interface Dog {
    fly : boolean;
    bark() : string;
}

//类型断言的方式
function trainAnial(animal: Bird | Dog){
    if(animal.fly){
        (animal as Bird).sing()
    }else{
        (animal as Dog).bark()
    }
}

//in语法来做类型保护
function trainAnialSecond(animal: Bird | Dog){
    if('sing' in animal){
        animal.sing()
    }else{
        animal.bark()
    }
}

//typeof语法来做类型保护
function add(first: string | number, second: string | number){
    if(typeof first === 'string' || typeof second === 'number'){
        return `${first}${second}`
    }else{
        return first + second
    }
}

class NumberObj {
    count: number
}
//使用instanceof语法来做类型保护，interface不行，必须class
function addSecond(first:object | NumberObj, second: object | NumberObj){
    if(first instanceof NumberObj && second instanceof NumberObj){
        return first.count + second.count
    }else{
        return 0
    }
}



