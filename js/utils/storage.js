// SALVAR
function salvarDadosUsuario(chave, valor) {
  localStorage.setItem(chave, valor);
}

// CARREGAR
function carregarDadosUsuario(chave) {
  return localStorage.getItem(chave);
}

// AUTO SALVAR INPUT
function autoSalvarInput(idInput, chave) {

  const input = document.getElementById(idInput);

  if (!input) return;

  // CARREGA CACHE
  const valorSalvo = carregarDadosUsuario(chave);

  if (valorSalvo) {
    input.value = valorSalvo;
  }

  // SALVA AUTOMATICAMENTE
  input.addEventListener("input", () => {
    salvarDadosUsuario(chave, input.value);
  });

}