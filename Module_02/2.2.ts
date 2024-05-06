{
    type User1 ={
        name:string,
        roll:number
    }

    const user1:User1={
        name:'abc',
        roll:12
    }

    interface User2 {
        name:string,
        roll:number
    }
    const user2 :User2 ={
        name:"cba",
        roll:21
    }


    type User3 = User1 & {year:number,class:number}
    const user3:User3 ={
        name:"ad",
        roll:12,
        year:2121,
        class:10

    }

    interface User4 extends User1{
        year:number
    }
    const user4 :User4 ={
        name:'ad',
        roll:10,
        year:2020
    }
    type roll = number[]
    const roll:roll=[1,2,3]
    interface roll2{
        [index:number] : number
    }
    const roll2:roll2=[1,2,3]

    type Add =(num1:number , num2:number)=>number
    interface Add2{
        (num1:number,num2:number):number
    }
    const add:Add2 =(num1,num2)=>{
        return num1+num2
    }

    console.log(add(20,10))
}