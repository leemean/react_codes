//装饰器
//装饰器本身是一个函数

function testDecorator(constructor: any){
    constructor.prototype.getName = () => {
        console.log('name')
    }
    //console.log('decorator')
}

@testDecorator
class Test {

}

const test = new Test()