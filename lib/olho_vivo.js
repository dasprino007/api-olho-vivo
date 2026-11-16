const BASE = "https://api.olhovivo.sptrans.com.br/v2.1";

async function login() {
  const r = await fetch(
    `${BASE}/Login/Autenticar?token=${process.env.SPTRANS_TOKEN}`,
    { method: "POST", body: "" }
  );
  if (!(await r.json())) throw new Error("Token inválido");
  return r.headers.get("set-cookie").split(";")[0];
}

export async function sptrans(caminho) {
  const cookie = await login();
  const r = await fetch(`${BASE}${caminho}`, { headers: { Cookie: cookie } });
  if (!r.ok) throw new Error(`SPTrans respondeu ${r.status}`);
  return r.json();
}