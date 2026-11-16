import { LeafletMap, TileLayer } from "leaflet";
import "leaflet/styles.css";

export const map = new LeafletMap("map").setView([-23.55, -46.63], 12);

new TileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

map.on("zoomend", () => {
  const perto = map.getZoom() >= 16;
  document.querySelectorAll(".leaflet-tooltip").forEach((t) => {
    t.style.display = perto ? "block" : "none";
  });
});