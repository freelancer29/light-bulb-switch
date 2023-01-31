let lightOff = document.getElementById('off_image');
let onButton = document.getElementById('on');
let offButton = document.getElementById('off');

on.addEventListener("click", ()=>{
    lightOff.src = 'images/lightbulb.jpeg'
});

off.addEventListener("click", ()=>{
  lightOff.src = 'images/offlight.jpeg'
})