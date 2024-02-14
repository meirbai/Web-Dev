//yes ,else is not required

//----------------

function checkAge(age) {
    return (age>18) ? true : confirm('Did parents allow you?');
  }

function checkAge(age) {
    return (age>18) || confirm('Did parents allow you?');
  }

//---------------------

function min(a,b){
    return (a>b) ? b : a;
}

//---------------------

function pow(a,b){
    let value=a;
    for(let i=1;i<b;i++){
        value*=a;
    }
    return value;
}

let num=prompt("number"),exp=prompt("exponrnta");
alert(pow(num,exp));

