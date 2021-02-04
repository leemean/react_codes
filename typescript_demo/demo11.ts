//泛型 generic 
function join<T1,T2>(first:T1,second:T2){
    return `${first}${second}`
}

function map<T>(params:Array<T>){
    return params
}


join(1,'2')
const result11 = join<number,string>(1,'2')
map<string>(['2','3'])
console.log(result11)