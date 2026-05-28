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
  status     TEXT NOT NULL DEFAULT 'pendente',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ── SEGURANÇA (Row Level Security) ──────────────────────────
-- Usamos a anon key para todas as operações.
-- A proteção admin é feita pela senha no aplicativo.

ALTER TABLE militares    ENABLE ROW LEVEL SECURITY;
ALTER TABLE solicitacoes ENABLE ROW LEVEL SECURITY;

-- Permite TUDO na tabela militares via anon key
CREATE POLICY "acesso_total_militares"
  ON militares FOR ALL
  TO anon
  USING (true)
  WITH CHECK (true);

-- Permite TUDO na tabela solicitacoes via anon key
CREATE POLICY "acesso_total_solicitacoes"
  ON solicitacoes FOR ALL
  TO anon
  USING (true)
  WITH CHECK (true);
