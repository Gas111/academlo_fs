const elementCardNumber=document.querySelector(".cardnumber")
const elementCardName=document.querySelector(".card-data-name")

const elementCardDate=document.querySelector(".card-data-date")
const elementInputNumber=document.querySelector(".input-card-number")
const elementInputName=document.querySelector(".input-card-holder")


elementInputNumber.addEventListener("change",(e)=>{
 elementCardNumber.innerHTML=elementInputNumber.value
console.log(typeof(elementInputNumber.value))

detectType(elementInputNumber,"number")


}


)

elementInputName.addEventListener("change",(e)=>{
    elementCardName.innerHTML=elementInputName.value


   
   })



   function detectType(element,type)
   {
    if(typeof(element.value)===type)
    {
        type==="string" ? element.nextElementSibling.textContent="Warning, put a number":type==="number" ? element.nextElementSibling.textContent="Warning, put a text":element.nextElementSibling.textContent=""
        
    }else{
        element.nextElementSibling.textContent=""
    }
    


   }