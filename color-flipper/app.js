//generating some choosed color
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const btn2 = document.getElementById('btn2');
const heading = document.getElementsByClassName('heading');
const fonts = ["Roboto", "Lexend Peta", "Alata", "Open Sans","Oswald"];
btn.addEventListener('click',() => {
  var randomNumber = 2;
  randomNumber = Math.floor(Math.random()*4);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  document.body.style.fontFamily = fonts[randomNumber];
  console.log(randomNumber);
})
//generating hex color
const hex = [0,1,2,3,4,5,6,7,8,"A","B","C","D","E","F"];
btn2.addEventListener('click', () => {
let hexColor = '#';
for(var i=0;i<6;i++){
  var rando = Math.floor(Math.random()*16);
  hexColor+=hex[rando];
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
}
});

