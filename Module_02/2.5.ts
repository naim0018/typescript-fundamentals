{
    
    const  arr=<T>(value:T):T => value
    const  obj=<T>(value:T):T => value
    const arr2 = arr<string>('abc')
    const arr3 = arr<number>(23)
    const arr4 = arr<number[]>([1,2,3,4])
    const obj2 = obj<{name:string,age:number}>({name:'abc',age:20}) 
    console.log(obj2)

   const obj3 =obj<[number]>([20])
   console.log(obj3)

   const student = <X, Y>(id:X, name:Y):[ Y,X]=>{
        return[name,id]
   }
   const student1=student<number,string>(10,'abc')
   console.log(student1)
   const student2=student<number,{name:string,roll:number}>(1,{name:'abc',roll:10})
   console.log(student2)


   const addtoCourse =<T>(student:T)=>{
        const course = "Level2"
        return{
            ...student,
            course
        }
   }
   const student3=addtoCourse<{name:string,roll:number}>({name:'xyz',roll:20})
   console.log(student3)
   
}