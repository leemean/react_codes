function hello(){

}

const hello1 = function(){

}

const hello2 = () => {

}

function add(first:number,second:number): number{
    return first + second
}

const total4:number = add(1,2);

function sayHello(): void{
    console.log("hello")
}

function errorEmmitter():never{
    throw new Error();
    console.log(123)
    //while(true){}
}

function add4({first,second}:{ first:number,second:number }):number{
    return first + second
}

const total44 = add4({ first: 1,second:2 })