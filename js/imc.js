function calcIMC() {

  const peso = parseFloat(
    document.getElementById("peso").value
  );

  const altura = parseFloat(
    document.getElementById("altura").value
  );

  const resultado = document.getElementById("resultado");

  // VALIDAÇÃO
  if (!peso || !altura) {

    resultado.innerHTML = `
      <p class="text-red-500 font-semibold">
        Preencha peso e altura corretamente.
      </p>
    `;

    return;
  }

  // CÁLCULO
  const imc = peso / (altura * altura);

  // CLASSIFICAÇÃO
  let classificacao = "";

  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  }

  else if (imc < 24.9) {
    classificacao = "Peso normal";
  }

  else if (imc < 29.9) {
    classificacao = "Sobrepeso";
  }

  else if (imc < 34.9) {
    classificacao = "Obesidade grau I";
  }

  else if (imc < 39.9) {
    classificacao = "Obesidade grau II";
  }

  else {
    classificacao = "Obesidade grau III";
  }

  // RESULTADO
  resultado.innerHTML = `

  <div class="w-full">

    <div class="flex items-center justify-between mb-4">

      <h3 class="text-xl font-bold text-slate-800">
        Resultado
      </h3>

      <span class="bg-orange-500 text-white px-4 py-2 rounded-xl text-sm font-semibold">
        IMC
      </span>

    </div>

    <div class="space-y-3">

      <p class="text-3xl font-bold text-orange-500">
        ${imc.toFixed(2)}
      </p>

      <p class="text-lg text-slate-700">
        Classificação:
        <span class="font-bold">
          ${classificacao}
        </span>
      </p>

    </div>

  </div>

`;
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    calcIMC();
  }
});

aplicarMascaraDecimal("peso");
aplicarMascaraDecimal("altura");

autoSalvarInput("peso", "peso");
autoSalvarInput("altura", "altura");