// Task 1 — Student Registration Form

let studentName = prompt("Enter Your Name")
let studentDepartment = prompt("Enter Your Department")
const studentAge = prompt("Enter Your Age")

// // template String

console.log(`Welcome ${studentName}`);
console.log(`Department ${studentDepartment}`);
console.log(`Age ${studentAge}`);


// Task 2 — ATM Withdrawal System

let userBalance = 10000
let WithdrawalAmount = prompt("Enter Your Withdrawal Amount")


if(userBalance >= WithdrawalAmount){
    console.log("Transaction Succesful");
    
}else{
    console.log("Insufficent Balance");
    
}


// Task 3 — Swiggy Discount Checker


let orderAmount = Number(prompt("Enter Your Order"));


let result = orderAmount>499
? "Free Delivery Available"
: "Delivery charges Applied";



console.log(result);


// Task 4 — Instagram Login System

let userName = prompt("Enter Username");
if(userName === "admin"){

    let password = prompt("Enter Your Password");
    if(password === "1234"){
    console.log("Login Sucessfull");
    
}else{
    console.log("Wrong password");
    
} }
else {
console.log("Invalid Username");

}

// Task 5 — Traffic Signal System

let trafficLight = "green"

switch (trafficLight) {
    case "red": console.log("Stop");
    
        
        break;

case "yellow": console.log("Ready");
    
        
        break;

        case "green": console.log("GO");
    
        
        break;
    default: console.log("Safe Drive and have a nice joruney");
    
        break;
}


// Task 6 — Employee Salary Calculator

function salaryCalculation(basicsalary,bonus){
    return basicsalary + bonus;
}
let totalSalary =  salaryCalculation(25000,5000);

console.log(totalSalary);


// Task 7 — E-Commerce Cart Total

let prices = [100 ,200 ,300 ,400];

let total = 0 ;

for(let i= 0 ; i < prices.length ; i++){
    total = total+prices[i];
}

let average = total / prices.length;

console.log("Total price",total);
console.log("Average Price" , average);


// Task 8 — WhatsApp Contact Book

let customer = {
    name : "Surya",
    phone : "9876543210",
    status : "Active"

}

for(let X in customer){
    console.log(X + ":" + customer[X]);
    
}


// Task 9 — Movie Ticket Booking

function payment(){
    console.log("Payment Successful");
    
}

function bookTicket(callback){
    console.log("Ticket Booked Confirm");

    callback();

    
}

bookTicket(payment)


// Task 10 — Food Delivery Time Tracker

function* orderStage(){
    yield "Order Confirmed"
    yield "Preparing Food"
    yield "Out for Delivery"
    yield "Delivered"
}

let genVal= orderStage()
  
for(let F of genVal){
    console.log(F);
    
}

    
    
    
