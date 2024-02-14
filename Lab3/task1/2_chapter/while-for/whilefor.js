//1
//1-4 and 1-5
//0-4 and 0-4

//----------------------

for(let i=2;i<=10;i+=2) alert(i);

//----------------------

let i = 0
while (i < 3) {
    alert( `number ${i++}!` );
  }

//----------------------

let num=1;
while(num>=100){
    num=prompt("100+ numbers");
    if(num==undefined || num=='') break;
}

//------------------------

let rightBoarder=prompt("what is the right oarder?")

let primes=Array(+rightBoarder+1).fill(0,0);
for(let i=2;i<rightBoarder**(1/2);i++){
    if(primes[i]==0){
        for(let j=i*2;j<rightBoarder;j+=i){
            primes[j]=1;
        }
    }
}
for(let i=2;i<rightBoarder;i++){
    if(primes[i]==0){
        console.log(i);
    }
}

//------------------------------

