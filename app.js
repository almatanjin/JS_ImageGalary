const panels = document.querySelectorAll('.panel');
console.log(panels)

function toggleopen(){
  this.classList.toggle('open');
  this.classList.toggle('open-active');
}

panels.forEach(panel=>panel.addEventListener('click',toggleopen))
