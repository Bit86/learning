//**** variables & strings ****

//var firstName = "jack";
//var lastName = "jacob";
//var age = 23;
//
//
//var message = " hi, my name is " + firstName + " and I am " + age + " years old ";
//
//console.log(message);


//******** NUMBERS********
    
//var sum = 10 + 15;
//var sub = 15 - 10;
//var mul = 10 * 3;
//var div = 10 / 3;
//var mod = 10 % 3;
//
//var msg="10/3 with a remaider of " + mod;

//console.log(msg);

//var result = 10 * ((5+3)-4);
//
//console.log(result);

//********Comparation operators********

//var myAccountBalance = 300;
//var nikeSBShoes = 799.23;
//var coupon = 500;

//== equal to
// === ??
// <= less than or equal to 
// >= greater than or equal to
// != not equal to

//var val1 = 23;
//var val2 = "23";
//
//if (val1 === val2){
//    console.log("these are the same !");
//    
//}
//else {
//    console.log("are not the same type! ")
//}


//if (nikeSBShoes <= myAccountBalance) {
////    myAccountBalance = myAccountBalance - nikeSBShoes;
//    myAccountBalance -= nikeSBShoes;
//    
//    console.log("we just bought some shoes!")
//    
//    console.log("Account Balance:" + myAccountBalance);
//    
//} else if (nikeSBShoes-coupon<= myAccountBalance){
//    console.log("we just bought some shoes with a coupon!")
//    myAccountBalance-=nikeSBShoes -coupon;
//    console.log("Account Balance:" +myAccountBalance);
//} 
//else
//{ console.log("you too broke fo shoes bra!")
//     
//}
//    
////********Logical Operators********


//var cat1 = 5;
//var cat2 = 10;
//var cat3 = 1;
//var cat3DisabledHandicap =true;
//
//
//if ((cat1 > cat2 && cat1 > cat3) && !cat3DisabledHandicap ){
//    console.log("cat1 is the cutest");
//}else if ((cat2 > cat1 && cat2 > cat3) && !cat3DisabledHandicap ){
//    console.log("cat2 is the cutest");
//}else if ((cat3 > cat1 && cat3 > cat2) || cat3DisabledHandicap ){
//    console.log("cat3 is the cutest");
//}


////******** Arrays ********

//var students = ["Timmy","Janess","Arun"]; //crear el array
//
//var naughtlyList = []; //crear array chicos malos
//
//naughtlyList.push(students[0]);//put student in here 
//
//var index = naughtlyList.indexOf("Timmy");//find index location
//console.log(naughtlyList);
//
//if (index > -1){
//    naughtlyList.splice(index,1);// remove from the array 
//}
//
//console.log(naughtlyList);



////******** Loops ********

//var total = 10;
//for (var x = 0; x <total; x++){
//    console.log(x);
//}

//var students = ["Timmy","Janess","Arun"]; //crear array
//for (var index = 0; index < students.length; index++){ 
//    console.log(students[index]);
//}


////******** funtions ********

//var bankBalance = 500;
//
//function makeTransaction(priceOfSale){
//    //cremos una funcion que llamamos maketranssaction donde metemos los priceOfSale
// if (priceOfSale <= bankBalance){ 
//     //si el priceOfSale es menor o igual al bankBalance rpocedercon lo de abajo 
//        bankBalance -= priceOfSale;
//     //al ser verdadero lo de arriba se resta el priceOfSale al bankbalance lo que es igual a bankBalance = bankbalance - priceOfSale;
//
//        console.log("Purchase Succesful");
// }else {
//        console.log("Insufficent Funds");
//    }    
//}
//
//console.log(bankBalance);//nos da el bankbalance antes de la operacion
//makeTransaction(79.00);
//
//console.log(bankBalance);
//makeTransaction(2.32);
//
//console.log(bankBalance);
//makeTransaction(10.45);
//
//console.log(bankBalance);
//makeTransaction(450.00);
//
//
//var transaction = function(priceOfSale){
//    if (priceOfSale <= bankBalance){
//        bankBalance -= priceOfSale;
//        console.log("Purchase Succesful");
//    } else {
//        console.log("Insufficent Funds");
//    }
//  }
//
//var printCustomerName = function (first,last){
//    console.log("First Name:" + first + "Last Name:" + last );
//}
//var applyForCreditCard = function (creditScore,soul){
//    //call some funtions to process application
//}
//    
//var bankOperations = [];
//bankOperations.push(transaction);
//bankOperations.push(printCustomerName);
//bankOperations.push(applyForCreditCard);
//

///******** objects ********



//var student0 = {
//   firstName: "Jayne",
//   lastName: "Looo",
//   age: 8
//};
//
//console.log(student0.greeting());
//*******


//Creates a new empty object
//var student1 = new Object();
//student1.firstName = "John";
//student1.lastName = "Parker";
//student1.age = 7;
//
//var student2 = {};
//student2.firstName = "Zack";
//student2.lastName = "Bobo";
//student2.age = 5;
//}
//console.log(student.firstName);
//console.log(student.lastName);
//console.log(student["firstName"]);
//console.log(student["lastName"]);
//



//var s1 = new Student("Jenny","Laga",5);
//console.log(s1);
//console.log(s1.greeting());
//
//students.push(student0);
//students.push(student1);
//students.push(student2);
//
//for (var index = 0; index < students.length; index++) {
//   var student = students[index];
//   console.log(student.greeting());
//}





var students = [];

function Student(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.greeting = function() {
        return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old.";
    };
}

students.push(new Student("Jenny","Laga",5));
students.push(new Student("Timmy","Turner",8));
students.push(new Student("Carl","Jr",4));

var student = students[0];

//for in
for (var key in student) {
    console.log(student[key]);
}
