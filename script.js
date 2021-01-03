var warningElement = document.createElement("p")
warningElement.classList.add("warning")

function validate(event){
   event.preventDefault();
   var pswdField = document.querySelector(".pswd-field")
   var value = pswdField.value

   if(!document.querySelector(".warning") && value!=="" && value.length<8 ){
       
       pswdField.style = "border: 1px solid red;"

       warningElement.innerText = "Password must be at least 8 characters";

       document.querySelector(".exclamation").style = "visibility: visible;"

       document.querySelector(".form-inline").append(warningElement)

       pswdField.addEventListener("input",validateOnInput)

   }
   else if(value.length>=8){
        location.href = "loggedIn.html"
   }
}

function validateOnInput(){

    var pswdField = document.querySelector(".pswd-field")
    var value = pswdField.value

    if(value.length===0){
        warningElement.innerText = "Password is required";
        document.querySelector(".form-inline").append(warningElement)
        document.querySelector(".exclamation").style = "visibility: visible;"
        document.querySelector(".check").style = "visibility: hidden;"
    }
    else if(value.length<8){
        warningElement.innerText = "Password must be at least 8 characters";
        document.querySelector(".form-inline").append(warningElement)
        document.querySelector(".exclamation").style = "visibility: visible;"
        document.querySelector(".check").style = "visibility: hidden;"
    }
    else if(document.querySelector(".warning")){
        document.querySelector(".exclamation").style = "visibility: hidden;"
        document.querySelector(".check").style = "visibility: visible;"
        document.querySelector(".form-inline").removeChild(document.querySelector(".warning"))
        pswdField.style = "border: 0px;"
    }

}