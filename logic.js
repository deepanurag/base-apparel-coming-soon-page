const error = document.querySelector('.error-message');
const butn = document.querySelector('.button');
var input1 = document.querySelector('input');
//console.log(butn);
//console.log(inputValue);
console.log(input1);


butn.addEventListener("click", main);
input1.addEventListener("keyup", apple);




function apple(e){
    // if(document.querySelector('input').value.length < 5){
    // return 0;
    // }
    // else{
    main();
    // }
}
function main(e){
    const inputValue = document.querySelector('input').value;
    // var slicedWord;
    // console.log(inputValue)
    // for(var i = 0; i<inputValue.length; i++){
    //     slicedWord = inputValue.slice(i,i+1);
    //     //if(slicedWord === "@"){
    //     //console.log("very good");
    //     //}
    // }
   // if(inputValue.length === 0){
    // error.style.display = "block";
    //}
   

    // if(!inputValue.includes(".")){
    //     //error.style.display = "block";
    //     error.innerHTML = "Email id must contain dot(.)";
    // }
    // if(!inputValue.includes("@")){
    //     // error.style.display = "block";
    //     error.innerHTML = "<p>Email id must contain @</p>";
    // }
    
    // if(inputValue.includes(".")){
    //    // error.style.display = "none";
    //    error.innerHTML = "";
    // }
    // if(inputValue.includes("@")){
    //     // error.style.display = "none";
    //     error.innerHTML = "";
    // }
    if(!inputValue.includes("@")||!inputValue.includes(".")){
        error.innerHTML = "Please Enter a valid Email-id";
    }
    if(inputValue.includes("@")&&inputValue.includes(".")){
        error.innerHTML = "";
    }
    if(inputValue.length === 0){
        error.innerHTML = "";
    }
    // let value1 = "@";
    //  let value2 = "."
    //  for(var a=1; a<3; a++){
    //      if(!inputValue.includes(value+a))
    //  }
}