const decrease  = document.getElementById('btn1');
const reset = document.getElementById('btn2');
const increase = document.getElementById('btn3');
const heading = document.querySelector('.heading')
let counter = 0;
increase.addEventListener('click', function(){ 
  counter +=1;
  heading.style.color = "green";
  heading.textContent = counter;
})
decrease.addEventListener('click', function(){
  counter -= 1;
  heading.textContent = counter;
  heading.style.color = "red";
})
reset.addEventListener('click', function(){
  counter = 0;
  heading.textContent = counter;
  heading.style.color = "black";
})