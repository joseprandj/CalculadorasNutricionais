function calcularH2O() {

  const peso = Number(document.getElementById("peso").value);

  const resultado = document.getElementById("resultado");

  // VALIDAÇÃO
  if (peso <= 0) {

    resultado.innerHTML = `

      <div class="bg-red-100 border border-red-300 text-red-600 rounded-2xl p-6 font-semibold">
        Digite um peso válido.
      </div>

    `;

    return;
  }

  // CÁLCULO
  const litros = (peso * 35) / 1000;

  // RESULTADO
  resultado.innerHTML = `

    <div class="bg-cyan-500 text-white rounded-3xl p-8 shadow-xl">

      <div class="flex items-center justify-between mb-6">

        <h3 class="text-2xl font-bold">
          Consumo Diário
        </h3>

        <span class="bg-white/20 px-4 py-2 rounded-xl text-sm font-semibold">
          H2O
        </span>

      </div>

      <p class="text-5xl font-bold">
        ${litros.toFixed(1)}L
      </p>

      <p class="mt-4 text-cyan-100">
        Quantidade estimada de água por dia.
      </p>

    </div>

  `;
}

// ENTER
document.addEventListener("keydown", function (event) {

  if (event.key === "Enter") {
    calcularH2O();
  }

});

aplicarMascaraDecimal("peso");

autoSalvarInput("peso", "peso");