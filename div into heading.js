let div= document.createElement('div');
div.innerHTML = 'Hello World';

let heading = document.querySelector('h3');
heading.appendChild(div);

console.log(heading);

let blur=document.getElementById('h1');
blur.addEventListener('click', function(){
    text= prompt('change  heading to: ');
    div.innerHTML = text;
    localStorage.setItem('heading', text);
});