 function add (num1:number,num2:number):number{
    return num1+num2
 }
 add(2,1)

const added =(num1:number,num2:string) =>{
    return num1+num2
}

const sum:{
    name:string,
    balance:number,
   newBalance(add:number):number
} ={
    name:'Account 1',
    balance : 0,
    newBalance(add:number):number{
        return this.balance + add;
    }

}

const arr :number[]=[1,2,3,4]
const newArr:number[]=arr.map((num:number):number=>num+num)