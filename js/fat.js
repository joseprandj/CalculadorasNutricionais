let atividades = [];

// ADICIONAR
function adicionarAtividade() {

  const atividade =
    document.getElementById("atividade").value;

  const horas = Number(
    document.getElementById("horas").value
  );

  const intensidade = Number(
    document.getElementById("intensidade").value
  );

  // VALIDAÇÃO
  if (!atividade || horas <= 0) {
    return;
  }

  // SOMA HORAS
  const totalHoras = atividades.reduce((total, item) => {

    return total + item.horas;

  }, 0);

  // VALIDA LIMITE
  if ((totalHoras + horas) > 24) {

    alert(
      "O total de atividades não pode ultrapassar 24 horas."
    );

    return;
  }

  // OBJETO
  const novaAtividade = {
    atividade,
    horas,
    intensidade
  };

  // ADICIONA
  atividades.push(novaAtividade);

  // RENDERIZA
  renderizarTabela();

  // LIMPA
  document.getElementById("atividade").value = "";
  document.getElementById("horas").value = "";
}

// REMOVER
function removerAtividade(index) {

  atividades.splice(index, 1);

  renderizarTabela();
}

// RENDERIZA TABELA
function renderizarTabela() {

  const tabela =
    document.getElementById("tabelaAtividades");

  const colunaAcao =
    document.getElementById("colunaAcao");

  // LIMPA
  tabela.innerHTML = "";

  // SEM REGISTROS
  if (atividades.length === 0) {

    colunaAcao.classList.add("hidden");

    tabela.innerHTML = `

      <tr>

        <td
          colspan="4"
          class="p-6 text-center text-slate-400"
        >

          Nenhuma atividade adicionada.

        </td>

      </tr>

    `;

    return;
  }

  // MOSTRA COLUNA
  colunaAcao.classList.remove("hidden");

  // RENDERIZA
  atividades.forEach((item, index) => {

    tabela.innerHTML += `

      <tr class="bg-white">

        <td class="p-3 text-sm md:text-base">
          ${item.atividade}
        </td>

        <td class="p-3 text-sm md:text-base">
          ${item.horas}h
        </td>

        <td class="p-3 text-sm md:text-base">
          ${item.intensidade}
        </td>

        <td class="p-3 text-center">

          <button
            onclick="removerAtividade(${index})"
            class="text-red-500 hover:text-red-600 transition text-xl"
          >
            ❌
          </button>

        </td>

      </tr>

    `;
  });
}

// CALCULAR
function calcularFAT() {

  const resultado =
    document.getElementById("resultado");

  // SEM ATIVIDADES
  if (atividades.length === 0) {

    resultado.innerHTML = `

      <p class="text-red-500 font-semibold">
        Adicione ao menos uma atividade.
      </p>

    `;

    return;
  }

  // TOTAL HORAS
  const totalHoras = atividades.reduce((total, item) => {

    return total + item.horas;

  }, 0);

  // VALIDA 24H
  if (totalHoras < 24) {

    const restante =
      (24 - totalHoras).toFixed(1);

    resultado.innerHTML = `

      <div class="bg-yellow-100 border border-yellow-300 text-yellow-700 rounded-2xl p-6">

        <h3 class="font-bold text-lg mb-2">
          Dia incompleto
        </h3>

        <p>
          Ainda faltam <strong>${restante}h</strong> para completar as 24 horas do dia.
        </p>

      </div>

    `;

    return;
  }

  // CÁLCULO
  let total = 0;

  atividades.forEach(item => {

    total += item.horas * item.intensidade;

  });

  const fat = total / 24;

  // SALVA CACHE
  localStorage.setItem(
    "fat",
    fat.toFixed(2)
  );

  // RESULTADO
  resultado.innerHTML = `

    <div class="w-full">

      <div class="flex items-center justify-between mb-4">

        <h3 class="text-xl font-bold text-slate-800">
          Resultado
        </h3>

        <span class="bg-yellow-500 text-white px-4 py-2 rounded-xl text-sm font-semibold">
          FAT
        </span>

      </div>

      <div class="space-y-3">

        <p class="text-3xl font-bold text-yellow-500">
          ${fat.toFixed(2)}
        </p>

        <p class="text-lg text-slate-700">
          Seu fator atividade diário estimado.
        </p>

      </div>

    </div>

  `;
}