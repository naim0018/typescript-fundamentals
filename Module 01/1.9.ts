{
  const search = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("Nothing to Search");
    }
  };

  search(null);

  const speed = (value: unknown) => {
    if (typeof value === "number") {
      return `Speed is ${value*1000}`;
    }else if(typeof value === 'string'){
        return `Speed is ${parseInt(value)*1000}`
    }else{
        return 'invalid speed'
    }
  };
  console.log(speed('1'))

  const throwError=(msg:string):never=>{
    throw new Error(msg)
  }
  throwError("Error")
}
