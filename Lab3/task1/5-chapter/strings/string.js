// function ucFirst(str){
//     return (str[0].toUpperCase()+str.slice(1));
// }


// alert(ucFirst("john"));

//------------------------

// function checkSpam(str){
//     return str.toUpperCase().includes("VIAGRA") || str.toUpperCase().includes("XXX");
// }

// alert(checkSpam('buy ViAgRA now'))
// alert(checkSpam('free xxxxx'))
// alert(checkSpam("innocent rabbit"))

//---------------------------

// function truncate(str,max_lenth){
//     if(str.length<=max_lenth) return str;
//     return str.slice(0,max_lenth-1)+"…";
// }


// alert(truncate("What I'd like to tell on this topic is:", 20))
// alert(truncate("Hi everyone!", 20))

//--------------------------------

function extractCurrencyValue(str){
    return +str.slice(1);
}

alert( extractCurrencyValue('$120')===120);