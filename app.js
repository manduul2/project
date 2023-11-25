// for loop -> davtalt
// ()-> dotor davtah nuhtsul
//for(var i=ehleh_too; i<=tugsgul_too; i++/i--){
// end davtah code
//}
for(var i=1;i<=10;i++){
    console.log(i+".hello")
}
// i=1 -> 1<= -> true -> 1.hello i++ 2
// i=2 -> 1<= -> true -> 1.hello i++ 3
// i=4 -> 1<= -> true -> 1.hello i++ 5
// i=11 -> 11<=10 -> false -> 1.hello i++ 2
for(var r=10;r>=1;r--){
    console.log(r)
}
for(var i=1;i<=20;i++){
    if (i%2==0) {
        console.log(i+":tegsh")
    } else {
        console.log(i+":sondgoi")
    }
}
var niilber=0;
for(var i=1;i<=10;i++){
    niilber = niilber + i;
    console.log(niilber);
}
var urjver=1
for(var i=1;i<=10;i++){
    urjver = urjver * i;
    console.log(urjver)
}
var hurd; 
for(var i=1;i<=10;i++){
    hurd = 10 * i;
    console.log(i +  " X 10 " + "=" + hurd);
}
var input =document.getElementsByTagName('input')[0];
var result = document.querySelector(".result");
var number = input.value
var fact = 1;
// check
console.log(input)
console.log(result)
function clac(){
    var number = input.value
    for(var i=1; i<=number;i++){
        fact=fact*i;
    }
    result.innerText = "result:" + fact
    fact=1;
}