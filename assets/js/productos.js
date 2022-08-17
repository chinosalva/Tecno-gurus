const planta1 = document.getElementById('planta1')
const modalPlanta1 = document.querySelector('.modal1')
planta1.addEventListener('click', function(e) {
  e.preventDefault
  modalPlanta1.classList.add('modal1--show')
})