//Task 1

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

//Task 2
const attendanceTracker = ()=>{
 let attendancecount = 0;

 return fn = ()=>{
       attendancecount++
       console.log(`Current Attendance Count: ${attendancecount}`);

 }


}
const markAttendance = attendanceTracker();
markAttendance();
markAttendance();
markAttendance();

// Task 3 
const visitorCounter = ()=>{
 let visitorcount = 0;

 return fn = ()=>{
       visitorcount++
       console.log(`Total Visitors: ${visitorcount}`);

 }


}
const Visitors = visitorCounter();
Visitors();
Visitors();
Visitors();

//Task 4
const cart = ()=> {
    let count = 0;

    return {
        addProduct() {
            count++;
            console.log("Product Added");
        },

        removeProduct() {
            if (count > 0) {
                count--;
                console.log("Product Removed");
            }
        },

        totalItems() {
            console.log("Total Items:", count);
        }
    };
}

const myCart = cart();

myCart.addProduct();
myCart.addProduct();
myCart.totalItems(); 

myCart.removeProduct();
myCart.totalItems();

// Task 5
const atm = ()=> {
    let balance = 5000; 

    return {
        withdraw(amount) {
            if (amount <= balance) {
                balance -= amount;
                console.log(`Withdrawn: ₹${amount}`);
            } else {
                console.log("Insufficient Balance");
            }
        },

        checkBalance() {
            console.log(`Balance: ₹${balance}`);
        }
    };
}

const myATM = atm();

myATM.checkBalance();     
myATM.withdraw(1000);     
myATM.checkBalance();      
myATM.withdraw(5000);      

//Task 6 
const  loginCounter = ()=> {
    let count = 0;

    return fn = ()=> {
        count++;
        console.log(`Login Attempt: ${count}`);
    };
}

const login = loginCounter();

login(); 
login(); 
login(); 

// Task 7
const processPayment = (callback)=> {
    callback();
}

const gpay = ()=> {
    console.log("Payment done using GPay");
}


const phonepe = ()=> {
    console.log("Payment done using PhonePe");
}


const paytm = ()=> {
    console.log("Payment done using Paytm");
}

processPayment(gpay);
processPayment(phonepe);
processPayment(paytm);

// Task 8 
const executeAction = (cb)=> {
    cb();
}

const islogin = ()=> {
    console.log("Login User");
}


const logout = ()=> {
    console.log("Logout User");
}


const register = ()=> {
    console.log("Registre by New User");
}

processPayment(islogin);
processPayment(logout);
processPayment(register);

// Task 9 
const notificationSystem = (alert)=> {
    console.log("Notification sending.....");
  setTimeout(alert(),3000);
}

const notification = ()=>{
    console.log("Notification Send.");
    
}
notificationSystem(notification)

//  Task 10 
const createOrderSystem = ()=> {
    let orderCount = 0; // Closure

    return processOrder = (callback)=> {
        orderCount++;

        console.log("Order Number:", orderCount);
        console.log("Processing...");

        setTimeout(() => {
            callback();
            console.log("Order Completed");
        }, 2000);
    };
}
const order = createOrderSystem();

const mobileOrder = ()=> {
    console.log("Mobile Order Processed");
}

const laptopOrder = ()=> {
    console.log("Laptop Order Processed");
}

const tvOrder = ()=> {
    console.log("TV Order Processed");
}

order(mobileOrder);

order(laptopOrder);

order(tvOrder);

