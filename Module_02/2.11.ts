{
    type person={
        name:string,
        age:number,
        email:string
        salary?:number
    }
    type student=Pick<person, 'name'|'age'|'email'>
    type employee = Omit<person,'age'>
    type employees=Required<person>   
    type partial =Partial<person> 
    type readOnly=Readonly<person>
    type Myobj=Record<string,string>
    const obj:Myobj={
        a:'a',
        b:"b",
        c:'c'
    }

    const object:Record<string,unknown>={}


}