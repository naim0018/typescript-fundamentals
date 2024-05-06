{

    type User={
        name:string,
        gender:'male'| 'female'
    }

const user :User ={
    name:'abc',
    gender:'male'
}
type FrontEnd ={
    skills:string[],
    designation1:'Frontend Developer'
}
type BackEnd={
    skills:string[],
    designation2:'Backend Developer'
}

type FullstackDeveloper= FrontEnd & BackEnd

const developer :FullstackDeveloper ={
    skills:['HTML','CSS'],
    designation1:"Frontend Developer",
    designation2:"Backend Developer"
}
console.log(developer)
}