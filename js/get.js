function calcularGET() {

  const tmb = Number(document.getElementById("tmb").value);
  const fat = Number(document.getElementById("fat").value);

  const resultado = document.getElementById("resultado");

  // VALIDAÇÃO
  if (tmb <= 0 || fat <= 0) {

    resultado.innerHTML = `

      <div class="bg-red-100 border border-red-300 text-red-600 rounded-2xl p-6 font-semibold">
        Preencha os dados corretamente.
      </div>

    `;

    return;
  }

  // CÁLCULO
  const get = tmb * fat;

  // RESULTADO
  resultado.innerHTML = `

    <!-- GET -->
    <div class="bg-green-500 text-white rounded-3xl p-8 shadow-xl">

      <div class="flex items-center justify-between mb-4">

        <h3 class="text-2xl font-bold">
          Seu GET
        </h3>

        <span class="bg-white/20 px-4 py-2 rounded-xl text-sm font-semibold">
          GET
        </span>

      </div>

      <p class="text-5xl font-bold">
        ${get.toFixed(0)}
      </p>

      <p class="mt-2 text-green-100">
        kcal por dia
      </p>

    </div>

    <!-- OBJETIVOS -->
    <div class="grid md:grid-cols-3 gap-4">

      <!-- MANTER -->
      <div class="bg-white rounded-2xl p-6 shadow-lg">

        <h3 class="font-bold text-slate-800 mb-4">
          Manutenção
        </h3>

        <p class="text-3xl font-bold text-green-500">
          ${get.toFixed(0)}
        </p>

        <p class="text-slate-500 mt-2">
          kcal/dia
        </p>

      </div>

      <!-- PERDER -->
      <div class="bg-white rounded-2xl p-6 shadow-lg">

        <h3 class="font-bold text-slate-800 mb-4">
          Perda de Peso
        </h3>

        <p class="text-3xl font-bold text-red-500">
          ${(get - 500).toFixed(0)}
        </p>

        <p class="text-slate-500 mt-2">
          kcal/dia
        </p>

      </div>

      <!-- GANHAR -->
      <div class="bg-white rounded-2xl p-6 shadow-lg">

        <h3 class="font-bold text-slate-800 mb-4">
          Ganho de Peso
        </h3>

        <p class="text-3xl font-bold text-blue-500">
          ${(get + 500).toFixed(0)}
        </p>

        <p class="text-slate-500 mt-2">
          kcal/dia
        </p>

      </div>

    </div>

  `;
}

// ENTER
document.addEventListener("keydown", function (event) {

  if (event.key === "Enter") {
    calcularGET();
  }

});

// CARREGA CACHE
window.addEventListener("DOMContentLoaded", () => {

  const tmbSalva = localStorage.getItem("tmb");
  const fatSalvo = localStorage.getItem("fat");

  if (tmbSalva) {
    document.getElementById("tmb").value = tmbSalva;
  }

  if (fatSalvo) {
    document.getElementById("fat").value = fatSalvo;
  }

});