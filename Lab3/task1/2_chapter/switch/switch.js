let browser;
if(browser=='Edge'){
    alert( "You've got the Edge!" );
}else if(['Chrome','Firefox','Safari','Opera'].includes(browser)){
    alert( 'Okay we support these browsers too' );
}else{
    alert( 'We hope that this page looks ok!' );

}

//----------------

let a = +prompt('a?', '');

switch(a){
    case 0:
        alert( 0 );
        break;
    case 1:
        alert(2);
        break;
    case 2:
    case 3:
        alert( '2,3' );
        break;
}