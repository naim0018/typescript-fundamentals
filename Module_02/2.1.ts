{
 
    //Type Assertion
    let anything :any ="level 2";
    console.log((anything as string).length)
    console.log(anything)

    const weight = (value:string|number):string|number|undefined=>{
         if(typeof value ==="number"){
            return value*1000
         }else if (typeof value ==="string"){
            return `Value - ${parseFloat(value)*1000}`
         }else{
            console.log("Invalid Weight")
         }
   }



   console.log(weight("100")as string)


   type CustomError={
    message:string
   }

   try {
    
   } catch (error) {
        console.log((error as CustomError).message)
   }

}