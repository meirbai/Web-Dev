// 2
//1 in terminal and 2 
//null
//1 and undefined
//3

//--------------------

let age=22;
if(age>=14 && age<=90){
    alert("yes");
}else{
    alert("no");
}

//---------------------

if(!(age>=14 && age<=90)){
    alert("yes");
}else{
    alert("no");
}

if(age>90 || age<14){
    alert("yes");
}else{
    alert("no");
}

//---------------------

//true
//false
//true

//---------------------

let code=prompt("code?","123");
let password;
if(code=="Admin"){
    password=prompt("password?",'');
    if(password=="TheMaster"){
        alert("wellcome");
    }else if(password==undefined || password==''){
        alert("Canceled");
    }else{
        alert("Wrong password");
    }
}else if(code==undefined || code==''){
    alert("Canceled");
}else{
    alert("I don't know you");
}