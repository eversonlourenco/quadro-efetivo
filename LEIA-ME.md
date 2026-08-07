# Avaliação da Cena - CBMERJ (App Instalável / Offline)

Este pacote transforma o formulário HTML em um **PWA (Progressive Web App)**:
um aplicativo que pode ser instalado no celular (ícone na tela inicial, abre
em tela cheia como um app nativo) e que **funciona totalmente sem internet**
depois da primeira vez que é aberto.

## O que foi adicionado ao sistema original
- `manifest.json` — informa nome, ícone e comportamento do app ao celular.
- `service-worker.js` — guarda o app inteiro no aparelho (cache local), para
  que ele abra e funcione normalmente mesmo sem sinal de internet ou dados.
- Ícones (`icons/icon-192.png` e `icons/icon-512.png`).
- Um aviso visual no topo da tela quando o aparelho estiver sem internet.
- O botão de WhatsApp agora avisa o usuário quando não há conexão (esse é o
  único recurso do app que realmente depende de internet, pois abre o
  WhatsApp) e sugere copiar o texto para enviar depois.
- Todo o resto do formulário (módulos de Incêndio e Acidente, contadores,
  botões, geração e cópia do relatório) continua funcionando 100% offline,
  como já funcionava antes — nada foi removido.

## Como colocar o app no celular

Para o recurso offline funcionar de verdade (Service Worker), o navegador
exige que os arquivos sejam abertos por um endereço `https://` ou
`localhost` — não funciona simplesmente abrindo o arquivo `index.html`
direto da pasta de downloads. Escolha uma das opções abaixo:

### Opção 1 — Publicar gratuitamente (recomendado, mais simples)
1. Crie uma conta gratuita em **netlify.com** (ou **vercel.com** / **GitHub
   Pages**).
2. Arraste a pasta inteira (`index.html`, `manifest.json`,
   `service-worker.js`, `icons/`) para o painel de deploy do Netlify
   ("Deploy manually" / arrastar e soltar).
3. Você receberá um link (ex.: `https://seu-app.netlify.app`).
4. Abra esse link no celular pelo Chrome (Android) ou Safari (iPhone).
5. **Android (Chrome):** toque nos 3 pontinhos → "Instalar aplicativo" ou
   "Adicionar à tela inicial".
   **iPhone (Safari):** toque no ícone de compartilhar → "Adicionar à Tela
   de Início".
6. Pronto — o app aparece com ícone próprio, abre em tela cheia e depois da
   primeira abertura funciona mesmo sem internet.

### Opção 2 — Rodar num servidor local (para testar rapidamente)
Se tiver Python instalado no computador:
```
cd caminho/da/pasta/app
python3 -m http.server 8000
```
Depois acesse `http://localhost:8000` no navegador do próprio computador
(ou do celular, se estiver na mesma rede Wi-Fi, usando o IP do computador).

## Observação importante
Sem publicar em um servidor (Opção 1) ou rodar localmente (Opção 2), o
Service Worker não é registrado pelos navegadores por questão de segurança
— e o app não vira "instalável". Abrindo o `index.html` direto por clique
duplo, o formulário funciona normalmente, mas sem o recurso de instalação e
cache automático offline.
