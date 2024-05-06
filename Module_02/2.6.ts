{   
    type std={
        name:string,
        id:number
    }
    const student =<T extends std>(student:T):T=>{
        return{
            ...student
        }
    }

    const student1=student<{name:string,id:number,email:string}>({
        name:'124',
        id:1,
        email:"124@gmail.com"
    })

    const student2=student<{name:string,id:number,email:string}>({
        name:'123',
        id:2,
        email:"123@gmail.com"
    })
    
    console.log(student1,student2)
}