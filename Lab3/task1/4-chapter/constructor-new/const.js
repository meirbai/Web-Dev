//no 
// function A() {
//     this.name="hhh";
// };
// function B() {
//     this.name="hhh";
// };

// let a = new A();
// let b = new B();

// alert( a == b );

//------------------

// function Calculator(){
//     this.read=function(){
//         this.a=+prompt("a?");
//         this.b=+prompt("b?");
//     };
//     this.sum=function(){
//         return this.a+this.b;
//     };
//     this.mul=function(){
//         return this.a*this.b;
//     };
// }

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

//-------------------

function Accumulator(i){
    this.value = i;
    this.read=function(){
        this.value+=+prompt("value?");
    }


}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); 
