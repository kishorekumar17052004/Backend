const bankAccount = ()=>{

    let balance = 5000;
    return {

          withdraw(amount ){
             if(amount>balance){
                console.log("Insufficient balance");
                
             }  
             balance-=amount;
             console.log(`Withdraw ${amount}`);
             

          },
          deposite (amount){
             
                balance+=amount;
             console.log(`Deposite ${amount}`);
          },
          checkbalance(){
              console.log(`Current Balance: ₹${balance}`);

          }
     



    }
}
const account = bankAccount();
account.checkbalance();
account.withdraw(500);
account.checkbalance();
account.deposite(500);
account.checkbalance();
// call back ()
const account = (blance)=>{

 setTimeout( ()=>{
     console.log("get avilable blance");
     
       setTimeout (()=>{
           blance()
           
       },3000)

 },2000)
}
const savings = ()=>{

    console.log("avilable blanace");

    
}
account(savings)

// line break 
   
function add (){
    isActive = true;
if(isActive === true){

    console.log("yes");
     return;

}
console.log("no")
}
 add()



