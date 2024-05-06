{
    const obj1 ={
        a:'x',
        b:'y',
        c:'z',
        name:{
            d:'e',
            f:'g'
        }
    }


    const {b,name:{d:h}}=obj1


    const arr1=['12','23','25','23','45634','233']
    const [,,x,...arr2]=arr1
    //x=25
    //arr2 =['23','45634','233']
}