let a  = 7, b = 0;

let rsult = document.getElementById('res')
let number_1 = document.getElementById('nbr_1')
let number_2 = document.getElementById('nbr_2')
let res = document.getElementById('res')

console.log(number)
function add(){
    
    res.textContent = number_1 + number_2;
    console.log(res)
}
function sous(){
    if (a>b){
        console.log(a-b)
        return a-b;
    }
    console.log(b-a)
    return b-a;
}
function div(){
    if(b!=0){
        console.log(a/b)
        return a/b;
    }
    return "impossible";
}
function mult(){
    console.log(a*b)
    return a*b;
}
