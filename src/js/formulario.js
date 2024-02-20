const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('.input');
const alerta = document.querySelectorAll('.mensagem');

formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  validarInput();
  mensagem();
});

function validarInput() {
  inputs.forEach(function (item, indice, array) {
    if (inputs[indice].value === '') {
      inputs[indice].classList.add('input-incorreto');
      inputs[indice].classList.remove('input-correto');
    } else if (inputs[indice].value !== '') {
      inputs[indice].classList.remove('input-incorreto');
      inputs[indice].classList.add('input-correto');
    }
    console.log(inputs);
  });
}

function mensagem() {
  alerta.forEach(function (item, indice, array) {
    if (inputs[indice].value === '') {
      alerta[indice].classList.add('mensagem-erro', 'alerta');
    } else if (inputs[indice].value !== '') {
      alerta[indice].classList.remove('mensagem-erro', 'alerta');
    }
  });
}
