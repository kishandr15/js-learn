const accound_id = 7766                 //block scope and can't reassign the value
let account_emial = "kishan@gmail.com"  //block scope
var account_password = "123456"         //var is not recommended, because it is global scope.
account_city = "CRP"                    //not recommeded      
let accound_state;                      //undefined


//lets reassign the values-----------------

// accound_id = 5555     // not allowed
console.log(accound_id);

account_emial = "abc@gmail.com";
account_password = "999";
account_city = "Bengaluru";

console.table([accound_id, account_emial, account_password, account_city, accound_state]);