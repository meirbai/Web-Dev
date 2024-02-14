// let user={};
// user.name="John";
// user.surname="Smith";
// user.name="Pete";
// delete user.name;

//----------------------

// function isEmpty(schedule){
//     for(let something in schedule){
//         return true;
//     }
//     return false;
// };

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false

//------------------------

// function sum(salaries){
//     let summarySalary=0;
//     for( let name in salaries){
//         summarySalary+=salaries[name];
//     }
//     return summarySalary;
// }

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }

//---------------------------

function multiplyNumeric(menu){
    for(let attribute in menu){
        if(typeof menu[attribute] == 'number'){
            menu[attribute]*=2;
        }
    }
};

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);

