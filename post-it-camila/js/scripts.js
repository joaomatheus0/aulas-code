// class Pessoa {
//   constructor(primeiroNome,segundoNome,peso,altura,idade){
//     this.primeiroNome = primeiroNome;
//     this.segundoNome = segundoNome;
// 	this.peso = peso;
//     this.altura = altura;
//     this.idade = idade;
//   };

//   nomeCompleto(){
//     return `${this.primeiroNome} ${this.segundoNome}`;
//   };

//   anoNascimento(){
//     return 2018-this.idade;
//   };

//   imc(){
//   	return this.peso / (this.altura*this.altura)
//   }
// };

// let joao = new Pessoa("Joao","Matheus",90,1.80,18);

// joao
class Nota {
  constructor(novoTitulo, novoTexto) {
    // modificadores visibilidade: getters/setters
    this._titulo = novoTitulo;
    this._texto = novoTexto;
    this._editando = false;
  }
  get titulo() {
    return this._titulo;
  }
  get texto() {
    return this._texto;
  }
  get editando() {
    return this._editando;
  }
  set titulo(tituloAlterado) {
    if (tituloAlterado !== null && tituloAlterado.length > 5) {
      this._titulo = tituloAlterado;
    } else {
      alert("Preencha o titulo");
    }
  }
  set texto(textoAlterado) {
    if (textoAlterado !== null ) {
      this._texto = textoAlterado;
    } else {
      alert("Preencha o texto");
    }
  }
  set editando(editandoAlterado){
    this._editando= editandoAlterado;
  }

}

class ListaNotas extends Array{
  constructor() {
    super()
    // this._secao = document.getElementsByClassName("notes")[0];
  }

  push(novoTitulo, novoTexto) {
    // let nota = {titulo:novoTitulo , texto:novoTexto};
    let nota = new Nota(novoTitulo, novoTexto);
    super.push(nota)
    atualizarSecao(this._secao);
  }

  splice(posicao,quantidade) {
    super.splice(posicao, quantidade);
    atualizarSecao(this._secao);
  }

  edita(posicao) {
    this[posicao].editando = true;
     atualizarSecao(this._secao);
  }

  salva(posicao, novoTitulo, novoTexto) {
    this[posicao].titulo = novoTitulo;
    this[posicao].texto = novoTexto;
    this[posicao].editando = false;
    atualizarSecao(this._secao);
  }

  pega(posicao) {
    return this[posicao];
  }

  contaTotal() {
    return this.length;
  }
};

const listaNotas = new ListaNotas();

const atualizarSecao = secao => {
  let conteudoSecao = "";

  for (let posicao = 0; posicao < listaNotas.contaTotal(); posicao++) {
    let notaAtual = listaNotas.pega(posicao);
    if (notaAtual.editando) {
      conteudoSecao += `<form class="note">
                              <input class="note__title" type="text" name="titulo" value="${notaAtual.titulo}" placeholder="Título">
                              <textarea class="note__body" name="texto" rows="5" placeholder="Criar uma nota...">${notaAtual.texto}</textarea>
                              <button class="note__control" type="button" onclick="adicionarNota(this.form.titulo, this.form.texto, this.form, ${posicao})">
                                  Concluído
                              </button>
                            </form>`;
    } else {
      conteudoSecao += `<form class="note" onclick="editaFormulario(${posicao})">
                              <button class="note__control" type="button" onclick="removerNota(event, ${posicao})">
                                  <i class="fa fa-times" aria-hidden="true"></i>
                              </button>
                              <h1 class="note__title">${notaAtual.titulo}</h1>
                              <p class="note__body">${notaAtual.texto}</p>
                            </form>`;
    }
  }

  secao.innerHTML = conteudoSecao;
}

const editaFormulario = posicao => listaNotas.edita(posicao);

const adicionarNota = (inputTitulo, textareaTexto, formulario, posicao) => {
  if (listaNotas.pega(posicao)) {
    listaNotas.salva(posicao, inputTitulo.value, textareaTexto.value);
  } else {
    listaNotas.adiciona(inputTitulo.value, textareaTexto.value);
    formulario.reset();
  }
}

const removerNota = (evento, posicao) => {
  evento.stopPropagation();
  listaNotas.remove(posicao);
}