//divisible by 3 and 5

let num = 60;
if(num%3==0 && num%5==0){
    console.log("Divisible by 3 and 5");
}
else{
    console.log("Not divisible by 3 and 5");
}

// or function
let maths = 35;
let science = 20;
if(maths>=25 || science>=25){
    console.log("passed in one subject")
}
else{
    console.log("Failed in both subjects.")
}

//login validation
let username = "admin";
let password = "12345";
if(username== 'admin' && password== '12345'){
    console.log("Login successful")
}
else{
    console.log("Invalid credentials")
}

// check or function
let user_name = "manager";
if(user_name =='admin' || user_name == 'manager'){
    console.log('Loged in')

}
else{
    console.log('Invalid username')
}

//if -else
let age =55;
if(age>=60) {
    console.log('Eligible or senior citizen discount')
}   
else{
    console.log('Not Eligible for Senior citizen discount')
}

