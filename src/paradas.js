import { DefaultIcon, Marker } from "leaflet";
import { map } from "./map.js";
import { buscarParadas } from "./api.js";
import { animar } from "./animar.js";

let paradas = [];

export function limparParadas() {
  paradas.forEach((m) => map.removeLayer(m));
  paradas = [];
}

export async function mostrarParadas(codigoLinha) {
  const pontos = await buscarParadas(codigoLinha);

  pontos.forEach((ponto) => {
    const marker = new Marker([ponto.py, ponto.px], {
      icon: new DefaultIcon({ color: "Crimson", className:"" }),
    })
      .addTo(map)
      .bindTooltip(ponto.np, {
        permanent: true,
        direction: "bottom",
        offset: [0, 10],
      });

    marker.on("click", () => map.flyTo([ponto.py, ponto.px], 17));
    paradas.push(marker);
  });
}
