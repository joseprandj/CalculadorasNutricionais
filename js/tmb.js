function calcTMB() {

  const idade = document.getElementById("idade").value;
  const sexo = document.getElementById("sexo").value;
  const peso = parseFloat(
    document.getElementById("peso").value
  );

  const resultado = document.getElementById("resultado");

  // VALIDAÇÃO
  if (peso <= 0) {
    resultado.innerHTML = `
      <p class="text-red-500 font-semibold">
        Digite um peso válido.
      </p>
    `;

    return;
  }

  let tmb = 0;

  // MASCULINO
  if (sexo === "M") {

    if (idade === "crianca1") {
      tmb = (60.9 * peso) - 54;
    }

    else if (idade === "crianca2") {
      tmb = (22.7 * peso) + 495;
    }

    else if (idade === "adolescente") {
      tmb = (17.5 * peso) + 651;
    }

    else if (idade === "adulto1") {
      tmb = (15.3 * peso) + 679;
    }

    else if (idade === "adulto2") {
      tmb = (11.6 * peso) + 879;
    }

    else {
      tmb = (13.5 * peso) + 487;
    }

  }

  // FEMININO
  else {

    if (idade === "crianca1") {
      tmb = (61 * peso) - 51;
    }

    else if (idade === "crianca2") {
      tmb = (22.5 * peso) + 499;
    }

    else if (idade === "adolescente") {
      tmb = (12.2 * peso) + 746;
    }

    else if (idade === "adulto1") {
      tmb = (14.7 * peso) + 496;
    }

    else if (idade === "adulto2") {
      tmb = (8.7 * peso) + 829;
    }

    else {
      tmb = (10.5 * peso) + 596;
    }

  }

  // SALVA NO CACHE
  localStorage.setItem("tmb", tmb.toFixed(2));

  // RESULTADO
  resultado.innerHTML = `

    <div class="w-full">

      <div class="flex items-center justify-between mb-4">

        <h3 class="text-xl font-bold text-slate-800">
          Resultado
        </h3>

        <span class="bg-red-500 text-white px-4 py-2 rounded-xl text-sm font-semibold">
          TMB
        </span>

      </div>

      <div class="space-y-3">

        <p class="text-3xl font-bold text-red-500">
          ${tmb.toFixed(2)} kcal
        </p>

        <p class="text-lg text-slate-700">
          Quantidade estimada de calorias gastas em repouso.
        </p>

      </div>

    </div>

  `;
}

aplicarMascaraDecimal("peso");

autoSalvarInput("peso", "peso");