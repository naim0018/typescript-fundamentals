{

    type Area={
        width:number,
        height:number
    }
    type height =Area["height"]
    type AreaString ={
        [key in keyof Area] : string 
    }
    type AreaStringM<T>={
        [key in keyof T]:T[key]
    }
    const area:AreaStringM<{height:string,width:number}>={
        height:"20",
        width:10
    }

}