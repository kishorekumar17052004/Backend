// Task 1
const fullName = (firstName , lastName)=>  firstName + lastName

console.log(fullName("kishore","kumar"));

// Task 2
const totalPrice = (price, quantity)=> price*quantity

console.log(totalPrice(100,3));

// Task 3
const validAge = (age)=> age >= 18  ? "eligible for voting" : "eligible for voting";

console.log(validAge(19));

// Task 4 
const largestNumber = (a,b,c)=>{

   if(a>b && a>c){
    return a
   }
   else if(b>a && b>c){

    return b
   }
  else{
    return c
  } 

}
console.log(largestNumber(10,50,20));

// TAsk 5 
const getUserName = (userName="Guest")=>{
 return  userName 

}
console.log(getUserName(),getUserName("kishore"));

// Task 6
const calculateNumber = (a ,b)=>{
 return {
     sum:a+b ,
     difference :a-b,
     multiplication:a*b,
     division:a/b

 }

}
console.log(calculateNumber(10,20));

//Task 7
const studentMark = (math ,science , social , tamil , english)=>{
      const total =   math+science+social+tamil+english ;
      const avg =  total / 5

 return {
    total, avg

 }
}
console.log(studentMark(95,85,80,98,95));

//TAsk 8
const calculateSalary = (salary)=>{
 const hra = salary*0.20;
 const da = salary*0.10;
 const totalSalary = salary+hra+da;
 return {

       HRA:hra,
       Da:da,
       Totalsalary:totalSalary

 }

}
console.log(calculateSalary(50000));

// Task 9 
const celsiustoFaranheit = (celsius)=> celsius*9/5+32;

console.log(celsiustoFaranheit(25));

// Task 10
const oddEven =(num)=>{
   
  if(num % 2 === 0 ){

    return "Even Number"
  }
  else{
    return "Odd Number"
  }

}
console.log(oddEven(8));

// Task 11 
const stringLength = (str)=> str.length;

console.log(stringLength("hello"));

// Task 12
const printName = (name,count)=>{
    
    for(let i = 0 ; i < count ; i++){
     
         console.log( name );

    }
     

}
printName("kishore",5);

// Task 13 
const totalMark = (...mark)=>{

   const total = mark.reduce((total,mark)=>total+mark,0);
   return total


}
console.log(totalMark(50,60,70,80,90));

// Task 14 
const getlargestNumber = (...num)=>{

  const big = num.reduce((largest,current)=>current > largest ? current : largest)

   return big

}
console.log(getlargestNumber(20,50,60,80));

// Task 15
const getsmallestNumber = (...num)=>{

  const big = num.reduce((largest,current)=>current < largest ? current : largest)

   return big

}
console.log(getsmallestNumber(20,50,60,80));

// Task 16 
const calculatePrice =(...price)=>{

  return  price.reduce((total,price)=>total+price,0)
  
}
console.log(calculatePrice(1000,500,800,700));



 
    









