
interface Item {
    name:string
}

class DataManager<T extends Item> {
    constructor(private data: T[]){}
    getItem(index:number): string{
        return this.data[index].name
    }
}

const data = new DataManager([{ name:"liming"}])
const result12 = data.getItem(2)
console.log(result12)


function hello12<T>(params:T){
    return params
}


const func12: <T>(params1:T) => T = <T>(params2:T) => {
    return params2
}