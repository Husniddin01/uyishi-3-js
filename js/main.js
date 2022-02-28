var USD_TO_UZS=10857.86
var RUB_TO_UZS=141.56
var EUR_TO_UZS=12123.78
var elForm=document.querySelector(".convert__form")
var elInput=document.querySelector(".convert__input")
var elSelect=document.querySelector(".convert__select")
var elResult=document.querySelector(".convert__result")
// console.log(elForm);
// console.log(elInput);
// console.log(elSelect);
// console.log(elResult);
var result
elForm.addEventListener( "submit",function(event){
     event.preventDefault()
    var inputValue=elInput.value
    var selectValue=elSelect.value
    if ( selectValue==="USD") {
        result=inputValue * USD_TO_UZS
        
    }else if (selectValue==="RUB") {
        result=inputValue * RUB_TO_UZS
    } else {
        result=inputValue * EUR_TO_UZS
        
    }
 
  elResult.textContent=`${result} so'm`

})

