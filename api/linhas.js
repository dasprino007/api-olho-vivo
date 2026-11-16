import { sptrans } from "../lib/olho_vivo.js";

export default async function handler(req, res) {
  try {
    const linha = encodeURIComponent(req.query.linha || "8000");
    const sentido = encodeURIComponent(req.query.sentido || "1");

    res.status(200).json(await sptrans(`/Linha/BuscarLinhaSentido?termosBusca=${linha}&sentido=${sentido}`));
  } catch (e) {
    res.status(500).json({ erro: e.message });
  }
}