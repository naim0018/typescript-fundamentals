const arr1:string[]=['a','b','c']
const arr2:string[] =['d','e','f']

arr1.push(...arr2)

const obj1:{
    x:string,
    y:string
}={
    x:'a',
    y:'b'

}

const obj2:{
    z:string
}={
    z:'c'
}

const obj3:{
    x:string,
    y:string,
    z:string
} ={
    ...obj1,
    ...obj2
}


const friends =(...friends:string[])=>{   
    friends.forEach(friend=>console.log(friend))
}