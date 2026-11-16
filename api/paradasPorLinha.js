import { sptrans } from "../lib/olho_vivo.js";

export default async function handler(req, res) {
  try {
    res.status(200).json(await sptrans(`/Parada/BuscarParadasPorLinha?codigoLinha=${req.query.q}`));
  } catch (e) {
    res.status(500).json({ erro: e.message });
  }
}