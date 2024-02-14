// let a=+prompt("a?");
// let b=+prompt("b?");
// alert(a+b);

//----------------------

//tofixed rounds number till its value by flooring if it is <4 and ceiling if it is >=5
//so 6.35 is in full form is 3.4999999999999999997

// alert( Math.round(6.35 * 10) / 10 );

//-----------------------

// function takeNum(){
//     let b=prompt("number",0);

//     while(!isFinite(b)){
//         b=prompt("number",0);
//         if(b==='' || b===null) break;
//     }
// }
// takeNum();

//------------------------

//because it will not be equal to 10 ,it will be nearly 10.0000000000000000005

//-------------------------

function random(min,max){
    let randNum=Math.random();
    randNum*=(max-min);
    randNum+=min;
    return randNum;
}
alert(random(1,10));

//----------------------------

function random(min,max){
    let randNum=Math.random();
    randNum*=(max+1-min);
    randNum+=min;
    return Math.floor(randNum);
}
alert(random(1,10));
