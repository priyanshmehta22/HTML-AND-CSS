var messages= document.getElementById("messages");
var button =document.getElementById("a");
var textbox= document.getElementById("textbox");

button.addEventListener("click", function(){
    var newMessage= document.createElement("div");
    newMessage.innerHTML= textbox.value;
    messages.appendChild(newMessage);
    localStorage.name= textbox.value;
    textbox.value= "";
    
    
});

document.write(localStorage.name);
