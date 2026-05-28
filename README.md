# Quadro de Efetivo — Sistema de Gestão de Militares

Sistema web para consulta e gestão do quadro de efetivo militar.  
Hospedado no **GitHub Pages** com banco de dados **Supabase**.

---

## 🚀 Como publicar (passo a passo)

### 1. Criar conta no Supabase
1. Acesse **https://supabase.com** e clique em **Start for free**
2. Crie uma conta (pode usar sua conta do GitHub)
3. Clique em **New Project**
4. Preencha:
   - **Name:** `quadro-efetivo`
   - **Database Password:** crie uma senha forte e **anote**
   - **Region:** `South America (São Paulo)`
5. Aguarde ~2 minutos para o projeto ser criado

### 2. Criar as tabelas no Supabase
1. No painel do Supabase, clique em **SQL Editor** (ícone de banco no menu lateral)
2. Clique em **New query**
3. Cole o conteúdo do arquivo `schema.sql`
4. Clique em **Run** (▶)
5. Deve aparecer "Success" para cada comando

### 3. Pegar as chaves do Supabase
1. No painel, clique em **Project Settings** → **API**
2. Copie e **guarde** esses dois valores:
   - **Project URL** → algo como `https://xyzxyz.supabase.co`
   - **anon / public key** → chave longa começando com `eyJ...`
   - **service_role key** → chave secreta (só o admin usa, NUNCA publique)

### 4. Configurar o arquivo `index.html`
Abra o `index.html` e localize as linhas no topo do JavaScript:

```js
const SUPABASE_URL     = 'COLE_SUA_URL_AQUI';
const SUPABASE_ANON    = 'COLE_SUA_ANON_KEY_AQUI';
const SUPABASE_SERVICE = 'COLE_SUA_SERVICE_KEY_AQUI';
```

Substitua pelos valores que você copiou no passo 3.

### 5. Popular o banco com os dados iniciais
1. No Supabase, vá em **SQL Editor** → **New query**
2. Cole e execute o conteúdo do arquivo `seed.sql`
   (isso vai inserir todos os 176 militares)

### 6. Publicar no GitHub Pages
1. Crie uma conta em **https://github.com** (se não tiver)
2. Clique em **New repository** (botão verde)
3. Preencha:
   - **Repository name:** `quadro-efetivo`
   - Marque **Public**
   - Marque **Add a README file**
4. Clique em **Create repository**
5. Na página do repositório, clique em **uploading an existing file**
6. Arraste os arquivos `index.html` e `schema.sql`
7. Clique em **Commit changes**
8. Vá em **Settings** → **Pages** (menu lateral)
9. Em **Source**, selecione `Deploy from a branch`
10. Em **Branch**, selecione `main` e pasta `/ (root)`
11. Clique em **Save**
12. Aguarde ~1 minuto. Seu site estará em:
    **`https://SEU_USUARIO.github.io/quadro-efetivo`**

---

## 🔐 Segurança

| Ação                        | Quem pode |
|-----------------------------|-----------|
| Ver o quadro                | Todos     |
| Enviar solicitação          | Todos     |
| Incluir / Editar / Excluir  | Admin     |
| Ver solicitações pendentes  | Admin     |

A senha do admin fica no próprio `index.html`. Para maior segurança,
altere a constante `ADMIN_PASSWORD` antes de publicar.

---

## 🔄 Como atualizar o sistema depois

1. Edite o `index.html` localmente
2. No GitHub, abra o arquivo → clique no ✏️ (lápis)
3. Cole o novo conteúdo → **Commit changes**
4. O site atualiza automaticamente em ~1 minuto

---

## 📱 Compatibilidade

Funciona em qualquer navegador moderno, desktop e celular.
