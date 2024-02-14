// YES

//--------------------------

let answerOfUser=prompt("What's the “official” name of JavaScript?");
(answerOfUser=="ECMAScript") ? alert("Right!") : alert("You don't know? “ECMAScript”!");

//----------------------------

let numberOfUser=prompt("Type a number","0")
if (+numberOfUser>0) {
     alert("1");
} else if(+numberOfUser==0){
    alert("0");
}else{
    alert("-1");
}

//----------------------------

let result=(a + b < 4) ? 'Below':  'Over';

//-----------------------------

let message =(login == 'Employee') ?'Hello':
(login == 'Director') ? 'Greetings':
(login == '') ? 'No login':'';
