-- ============================================================
-- SCHEMA — Quadro de Efetivo
-- Execute isso no SQL Editor do Supabase
-- ============================================================

-- Tabela principal de militares
CREATE TABLE IF NOT EXISTS militares (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  graduacao  TEXT NOT NULL,
  quadro     TEXT NOT NULL DEFAULT '',
  nome       TEXT NOT NULL,
  rg         TEXT NOT NULL UNIQUE,
  nguerra    TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabela de solicitações pendentes
CREATE TABLE IF NOT EXISTS solicitacoes (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  graduacao  TEXT NOT NULL,
  quadro     TEXT NOT NULL DEFAULT '',
  nome       TEXT NOT NULL,
  rg         TEXT NOT NULL,
  obs        TEXT NOT NULL DEFAULT '',
  status     TEXT NOT NULL DEFAULT 'pendente',  -- pendente | aprovado | rejeitado
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ── SEGURANÇA (Row Level Security) ──────────────────────────

-- Habilita RLS nas duas tabelas
ALTER TABLE militares    ENABLE ROW LEVEL SECURITY;
ALTER TABLE solicitacoes ENABLE ROW LEVEL SECURITY;

-- Qualquer pessoa pode LER militares (quadro é público)
CREATE POLICY "leitura_publica_militares"
  ON militares FOR SELECT
  USING (true);

-- Apenas o service_role (admin via chave secreta) pode INSERT/UPDATE/DELETE
CREATE POLICY "admin_escreve_militares"
  ON militares FOR ALL
  USING (auth.role() = 'service_role');

-- Qualquer pessoa pode INSERIR solicitações
CREATE POLICY "usuario_solicita"
  ON solicitacoes FOR INSERT
  WITH CHECK (true);

-- Apenas admin pode LER/ATUALIZAR/DELETAR solicitações
CREATE POLICY "admin_gerencia_solicitacoes"
  ON solicitacoes FOR ALL
  USING (auth.role() = 'service_role');
