
let titulo = document.querySelector('h1');

titulo.addEventListener('mouseover', colorChange);

function colorChange(event) {
    titulo.style.color = 'blue';
  }
titulo.addEventListener('mouseout', (evento) => {
    titulo.style.color = 'red';
  });
  
let imagem = document.querySelector('#imagem');

let botao = document.querySelector('#botao');

botao.addEventListener('click', inserirLista);

function inserirLista(event) {
  event.preventDefault();

  document.querySelector('p').innerText = `
  Marca: ${document.querySelector('#marca').value}
  Modelo: ${document.querySelector('#modelo').value}
  Ano: ${document.querySelector('#ano').value}`;

  let img = document.createElement('img');
  img.setAttribute('src', imagem.value);
  document.querySelector('div').appendChild(img);

}