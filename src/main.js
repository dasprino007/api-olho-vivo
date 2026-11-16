import { animar } from "./animar.js";
import { state } from "./state.js";
import { buscarLinhas } from "./api.js";
import { limparParadas, mostrarParadas } from "./paradas.js";
import { limparOnibus, atualizarOnibus } from "./onibus.js";

async function procurarLinha(linha, sentido = 1) {
  state.procurandoLinha = true;
  limparOnibus();
  limparParadas();

  try {
    const linhas = await buscarLinhas(linha, sentido);
    await mostrarParadas(linhas[0].cl);
    state.linhaNum = linhas[0].cl;
  } catch (e) {
    console.error(e);
  }

  atualizarOnibus(state.linhaNum);
}

document.getElementById("enviar_linha").addEventListener("click", (e) => {
  const linha = document.querySelector("#linha_input").value;
  procurarLinha(linha, 1);
  animar(e.target, "pulse");
});

setInterval(() => atualizarOnibus(state.linhaNum), 15000);