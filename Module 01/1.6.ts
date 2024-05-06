{
    type Student={
        name:string,
        roll:number
    }

    const student1:Student={
        name:"siam",
        roll:2
     }

     type Add = (num1:number,num2:number)=>number

     const add:Add=(num1,num2)=>{
        return num1+num2
     }
}