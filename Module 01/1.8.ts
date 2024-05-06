{
    const isAuthenticating = null;
    const result1 = isAuthenticating ?? "guest"
    const result2=isAuthenticating ? isAuthenticating : "guest"
    console.log(result1,result2)

    type User ={
        name : string,
        age : number,
        job?:boolean
    }

    const user:User={
        name:"Akib",
        age:20,
    }

    const job = user.job ?? "NO Job"
    console.log(job)
}