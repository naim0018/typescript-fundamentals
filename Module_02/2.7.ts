{
    const property =<X,Y extends keyof X>(value1:X,value2:Y)=>{
        return value1[value2]
    }

    const user ={
        name:'abc',
        roll:20
    }
    const value = property(user,'name')
}