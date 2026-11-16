import { Marker } from "leaflet";
import { map } from "./map.js";
import { busIcon } from "./icons.js";
import { buscarOnibus } from "./api.js";
import { state } from "./state.js";

const marcadores = new Map(); // prefixo -> Marker

export function limparOnibus() {
  marcadores.forEach((m) => map.removeLayer(m));
  marcadores.clear();
}

export async function atualizarOnibus(linha) {
  if (!state.procurandoLinha || linha === undefined) return;
  console.log("Atualizando onibus")

  const onibus = await buscarOnibus(linha);
  const ativos = new Set();
  console.log(onibus)

  onibus.vs.forEach((ponto) => {
    const id = ponto.p;
    const pos = [ponto.py, ponto.px];
    ativos.add(id);

    const existente = marcadores.get(id);
    if (existente) {
      existente.setLatLng(pos);
      return;
    }

    const marker = new Marker(pos, { icon: busIcon })
      .addTo(map)
      .bindTooltip(String(id), {
        permanent: true,
        direction: "top",
        offset: [0, 10],
      });

    marker.on("click", () => map.flyTo(marker.getLatLng(), 17));
    marcadores.set(id, marker);
  });

  for (const [id, marker] of marcadores) {
    if (!ativos.has(id)) {
      map.removeLayer(marker);
      marcadores.delete(id);
    }
  }
}