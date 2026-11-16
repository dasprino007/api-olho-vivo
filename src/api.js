async function getJson(url) {
  const res = await fetch(url);
  return res.json();
}

export const buscarLinhas = (linha, sentido) =>
  getJson(
    `/api/linhas?linha=${encodeURIComponent(linha || "8000")}&sentido=${encodeURIComponent(sentido || "1")}`,
  );

export const buscarParadas = (codigoLinha) =>
  getJson(`/api/paradasPorLinha?q=${codigoLinha}`);

export const buscarOnibus = (codigoLinha) =>
  getJson(`/api/onibus?linha=${codigoLinha}`);