
let count = 1;
let check=true;

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  if(check){
    btn.textContent = `Click me ${count++}`;
    if(count>=10){
      check=false;
    } 
  } 
    else{
      btn.textContent = `Click me ${count--}`;
    if(count<1){
      check=true;
    }
    }
});

