
function handleclick(abc){
    
    abc.style="background-color:blue";
}

var image=document.getElementById("image");
image.addEventListener("mouseout", function(){
    this.style="box-shadow: 2px 2px 2px black";
    this.width="300px";
});