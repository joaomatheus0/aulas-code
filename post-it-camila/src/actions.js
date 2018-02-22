const ADICIONAR_NOTA      = 'ADICIONAR_NOTA'
const REMOVE_NOTA         = 'REMOVE_NOTA'
const HABILITAR_EDICAO    = 'HABILITAR_EDICAO'
const ALTERAR_NOTA        = 'ALTERAR_NOTA'

export function adicionarNota(titulo,texto) {
  return{
    type: ADICIONAR_NOTA,
    titulo,
    texto
  }
}

export function removerNota(posicao) {
  return{
    type: REMOVE_NOTA,
    posicao
  }
}  
  
export function alterarNota(posicao,titulo,texto) {
  return{
    type: ALTERAR_NOTA,
    posicao,
    titulo,
    texto
  }
} 

export function habilitarEdicao(posicao,titulo,texto) {
  return{
    type: HABILITAR_EDICAO,
    posicao
  }
}  