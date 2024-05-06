{
  interface Dev<T,X=null> {
    name: string;
    computer: T;
    smartwatch?: boolean;
    bike?:X
  }
  const dev: Dev<{ brand: string; price: number },boolean> = {
    name: "abc",
    computer: {
      brand: "Asus",
      price: 45000,
    },
    smartwatch: true,
    bike:false
 
  };
  const dev2:Dev<string> = {
    name: "xyz",
    computer: "Dell",
    
  };
}
