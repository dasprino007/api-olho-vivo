# API Olho Vivo

Aplicação web que exibe em um mapa interativo os dados de transporte público da cidade de São Paulo, obtidos pela API Olho Vivo da SPTrans.

## O que a aplicação faz
- Exibe um mapa da cidade usando Leaflet e OpenStreetMap.
- Mostra a posição em tempo quase real dos ônibus de uma linha.

# Como executar

## 1. Instalar as dependências
 
Na raiz do projeto:
 
```
npm install
```
 
Instalar a CLI da Vercel:
 
```
npm install -g vercel
```
 
## 2. Entrar na conta da Vercel
 
```
vercel login
```
 
Seguir as instruções exibidas no terminal para autenticar.
 
## 3. Vincular o projeto
 
```
vercel link
```
 
Perguntas exibidas:
 
| Pergunta | Resposta |
|----------|----------|
| Set up and deploy? | `Y` |
| Which scope? | Escolher a conta pessoal ou a equipe |
| Link to existing project? | `N` na primeira vez |
| Project name | Aceitar o nome sugerido ou digitar outro |
| In which directory is your code located? | `./` |
 
## 4. Cadastrar o token
 
```
vercel env add SPTRANS_TOKEN
```
 
Perguntas exibidas:
 
| Pergunta | Resposta |
|----------|----------|
| What's the value of SPTRANS_TOKEN? | Colar o token da SPTrans |
| Add to which Environments? | Marcar Production, Preview e Development (barra de espaço para marcar, Enter para confirmar) |
 
O ambiente Development é obrigatório para executar localmente com `vercel dev`.
 
Confirmar que a variável foi salva:
 
```
vercel env ls
```
 
## 5. Executar localmente
 
```
vercel dev
```
 
A aplicação fica disponível em `http://localhost:3000`.
 
O comando `npm run dev` não executa a pasta `api/`. Para que as rotas funcionem, usar sempre `vercel dev`.
 
## 6. Testar as rotas
 
Em outro terminal:
 
```
curl "http://localhost:3000/api/linhas?q=8000"
curl "http://localhost:3000/api/posicao?linha=33000"
```
 
Resposta esperada: um JSON com os dados. Se aparecer `Token inválido`, o token cadastrado está incorreto ou a conta ainda não foi aprovada.
 
## 7. Publicar
 
```
vercel --prod
```
 
O endereço público é exibido ao final do comando.
 
Após alterar uma variável de ambiente, é necessário publicar novamente para que a mudança tenha efeito.