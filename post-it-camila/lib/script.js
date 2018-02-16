'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//array de notas/ variavel que representa a nota
// var notas = [];
// const calcularAreaCirculo = (raio) => {
// 	const PI = 3.14;
// 	return PI * raio * raio;
// };

var Notas = function () {
  function Notas(titulo, texto) {
    _classCallCheck(this, Notas);

    this.titulo = titulo;
    this.texto = texto;
    this.editando = false;
  }

  _createClass(Notas, [{
    key: 'titulo',
    get: function get() {
      return 'O titulo \xE9: ' + this._titulo + ' ';
    },
    set: function set(tituloAlterado) {
      if (tituloAlterado !== null && tituloAlterado.length > 5) {
        this._titulo = tituloAlterado;
      } else {
        alert('Preencha o titulo');
      }
    }
  }, {
    key: 'texto',
    get: function get() {
      return this._texto;
    },
    set: function set(textoAlterado) {
      if (textoAlterado !== null && textoAlterado.length > 5) {
        this._texto = textoAlterado;
      } else {
        alert('Preencha o texto');
      }
    }
  }, {
    key: 'ediando',
    get: function get() {
      return this._editando;
    }
  }, {
    key: 'editando',
    set: function set(editandoAlterado) {
      this._editando = editandoAlterado;
    }
  }]);

  return Notas;
}();

var listaNotas = function () {
  function listaNotas() {
    _classCallCheck(this, listaNotas);

    this._secao = document.getElementsByClassName("notes")[0], this._listaInterna = [];
  }

  _createClass(listaNotas, [{
    key: 'adiciona',
    value: function adiciona(titulo, texto) {
      var nota = new Notas(titulo, texto);

      this._listaInterna.push(nota);
      atualizarSecao(this._secao);
    }
  }, {
    key: 'remove',
    value: function remove(index) {
      this._listaInterna.splice(index, 1);
      atualizarSecao(this._secao);
    }
  }, {
    key: 'edita',
    value: function edita(index) {
      this._listaInterna[index].editando = true;
      atualizarSecao(this._secao);
    }
  }, {
    key: 'salva',
    value: function salva(index, novoTitulo, novoTexto) {
      this._listaInterna[index].titulo = novoTitulo;
      this._listaInterna[index].texto = novoTexto;
      this._listaInterna[index].editando = false;
      atualizarSecao(this._secao);
    }
  }, {
    key: 'pegaNota',
    value: function pegaNota(index) {
      return this._listaInterna[index];
    }
  }, {
    key: 'contaItem',
    value: function contaItem() {
      return this._listaInterna.length;
    }

    // Lista

  }]);

  return listaNotas;
}();

;

var atualizarSecao = function atualizarSecao(secao) {
  //criar uma variavel que guarda o html de todas as notas que deven aparecer na tela
  var innerHTML = "";
  //percorerre a lista de notas e criar o template de cada nota, e colocar na viriavel
  for (var i = 0; i < listaNotas.contaItem(); i++) {
    var notaAtual = listaNotas.pegaNota(i);
    if (notaAtual.editando) {
      innerHTML += '<form class="note">\n        <input class="note__title" type="text" name="title" value="' + notaAtual.titulo + '" placeholder="T\xEDtulo" />\n        <textarea class="note__body" name="texto" rows="5" placeholder="Criar uma nota...">' + notaAtual.texto + '\n        </textarea> \n        <button class="note__control" type="button" onclick="adicionarNota(this.form.title, this.form.texto,this.form,' + i + ')">\n        Conclu\xEDdo \n        </button>\n        </form>';
    } else {
      innerHTML += '<form class="note" onclick="editarFormulario(' + i + ')">\n        <button class="note__control" type="button" onclick="removerNota(' + i + ',event)">\n        <i class="fa fa-times" aria-hidden="true"></i>\n        </button>\n        <h1 class="note__title">\n        ' + notaAtual.titulo + '\n        </h1>\n        <p class="note__body">\n        ' + notaAtual.texto + ' \n        </p>\n        </form>';
    }
  }
  //colocar o html de todo mundo dentro (inner) da secao
  secao.innerHTML = innerHTML;
};

var adicionarNota = function adicionarNota(inputTitle, inputText, formulario, index) {
  if (listaNotas.pegaNota(index)) {
    listaNotas.salva(index, inputTitle.value, inputText.value);
  } else {
    listaNotas.adiciona(inputTitle.value, inputText.value);
    formulario.reset();
  }
};

var removerNota = function removerNota(indice, event) {
  event.stopPropagation();
  listaNotas.remove(indice);
};

var editarFormulario = function editarFormulario(indice) {
  return listaNotas.edita(indice);
};