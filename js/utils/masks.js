// MÁSCARA DECIMAL
function aplicarMascaraDecimal(idInput) {

  const input = document.getElementById(idInput);

  if (!input) return;

  input.addEventListener("input", function (e) {

    let valor = e.target.value.replace(/\D/g, "");

    valor = (Number(valor) / 100).toFixed(2);

    e.target.value = valor;

  });

}