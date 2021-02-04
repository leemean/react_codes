//枚举
// const Status = {
//     OFFLINE:0,
//     ONLINE:1,
//     DELETE:2
// }

enum Status {
    OFFLINE,
    ONLINE,
    DELETE,
}

function getResult(status){
    if(status === Status.OFFLINE){
        return 'offline'
    }else if(status === Status.ONLINE){
        return 'online'
    }else{
        return 'error'
    }
}

const result = getResult(Status.OFFLINE)
console.log(result)