//4

//--------------------

// let styles=["Jazz","Blues"];
// styles.push("Rock-n-Roll");
// styles[Math.floor(styles.length/2)]="Classics";
// alert(styles.shift());
// styles.unshift("Rap","Reggae");
// alert(styles);

//------------------------

// a,b,function(){.....}

//--------------------

// function sumInput(){
//     let num=prompt("number?");
//     let sum=[];
//     while(isFinite(num) && num!=null && num!=''){
//         sum.push(+num);
//         num=prompt("number?");
//     }
//     num=0;
//     for(let value in sum){
//         num+=sum[value];
//     }
//     alert(num);
// }
// sumInput()

//--------------------------------------

function getMaxSubSum(numbers){
    let MAX=0;
    let yied=0;
    for(let i=0;i<numbers.length;i++){
        yied+=numbers[i];
        if(yied>MAX) MAX=yied;
        else if(yied<0) yied=0;
    }
    alert(MAX);
    return MAX;
}

getMaxSubSum([-1, 2, 3, -9]);
getMaxSubSum([2, -1, 2, 3, -9]);
getMaxSubSum([-1, 2, 3, -9, 11]);
getMaxSubSum([-2, -1, 1, 2]);
getMaxSubSum([100, -9, 2, -3, 5]);
getMaxSubSum([1, 2, 3]);