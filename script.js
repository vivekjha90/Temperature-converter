let val=document.querySelector("#text");
let ctof=document.querySelector("#cf");
let ftoc=document.querySelector("#fc");
let sub=document.querySelector("#submit");
let reset=document.querySelector("#reset");
let res=document.querySelector("#result");
let temp;

sub.onclick=function(){
    if(ctof.checked){
        temp=Number(text.value);
        let fahrenheit= (temp*9/5)+32;
        res.textContent= "Result :=" +temp+"°C is"+": "+fahrenheit +"°F";
    }
    else if(ftoc.checked){
        temp=Number(text.value);
        let celsius=(temp-32)*5/9;
        res.textContent= "Result :=" +temp +"°F is"+":- "+celsius +"°C";
    }
    else{
        res.textContent="plz choose !";
    }
}
reset.onclick=function(){
    res.textContent="";
}
