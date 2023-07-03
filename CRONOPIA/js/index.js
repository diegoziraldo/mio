

const button = document.getElementsByClassName('hamburguesa');
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', function() {
    alert('Hola');
  });
}