/* =========================================================
   AVALIAÇÃO DA CENA — App de Informe Operacional
   Lógica principal: dados, estado, navegação, geração de informe
   ========================================================= */

/* ---------- Blocos de perguntas reutilizáveis ---------- */

const MATERIAL_EDIFICACOES = {
  label: "Tipo de Material Queimando",
  classes: [
    { nome: "Sólidos (Classe A)", itens: ["Sofás","Camas","Colchões","Tapetes","Cortinas","Guarda-roupas","Mesas","Cadeiras","Estantes","Livros","Roupas","Papéis","Quadros","Brinquedos","Utensílios"] },
    { nome: "Líquidos Inflamáveis (Classe B)", itens: ["Gasolina","Álcool","Óleo Diesel","Querosene","Óleos lubrificantes","Tintas"] },
    { nome: "Equipamentos Elétricos (Classe C)", itens: ["Televisores","Geladeiras","Fogões","Micro-ondas","Máquinas de lavar","Computadores","Ar-condicionado","Liquidificadores","Batedeiras","Airfryers","Sanduicheiras","Cafeteiras","Ventiladores"] },
    { nome: "Metais Combustíveis (Classe D)", itens: ["Magnésio","Titânio","Lítio","Sódio","Potássio","Alumínio","Zinco"] },
    { nome: "Óleos e Gorduras (Classe K)", itens: ["Óleo de soja","Óleo de canola","Óleo de milho","Óleo de girassol","Óleo de oliva","Azeite"] },
  ]
};

const MATERIAL_VEICULO = {
  label: "Tipo de Material Queimando",
  classes: [
    { nome: "Sólidos (Classe A)", itens: ["Madeira","Papel","Tecido","Plásticos","Borracha","Papelão","Lixo"] },
    { nome: "Líquidos Inflamáveis (Classe B)", itens: ["Gasolina","Álcool","Óleo Diesel","Querosene","Óleos lubrificantes","Tintas"] },
    { nome: "Equipamentos Elétricos (Classe C)", itens: ["Transformadores","Quadros de força","Motores elétricos","Computadores","Cabos e fios","Painéis solares","Telecomunicação","Máquinas industriais","Ar-condicionado","Tomadas"] },
    { nome: "Metais Combustíveis (Classe D)", itens: ["Magnésio","Titânio","Lítio","Sódio","Potássio","Alumínio","Zinco"] },
    { nome: "Óleos e Gorduras (Classe K)", itens: ["Óleo de soja","Óleo de canola","Óleo de milho","Óleo de girassol","Óleo de oliva","Azeite"] },
  ]
};

const SITUACAO_INCENDIO = { key:"situacao", label:"Situação Encontrada", type:"checkbox",
  options:["Pequeno","Médio","Grande","Propagando","Generalizado","Controlado","Extinto","Rescaldo"] };

const DANOS = { key:"danos", label:"Danos", type:"checkbox", options:["Parcial","Total"] };

const VITIMAS = { key:"vitimas", type:"vitimas" };

const SITUACAO_VITIMAS = { key:"situacaoVitimas", label:"Situação das Vítimas", type:"checkbox",
  options:["Em atendimento","Removida para o hospital","Removida por populares","Recusou atendimento"],
  extra:{ label:"Órgão responsável", options:["ASE","ABSR","SAMU","CONCESSIONÁRIA","OUTROS"] } };

const RECURSOS = { key:"recursos", type:"recursos",
  viaturaOptions:["ABSL","ABS","ASE","ABSR","AR"] };

const OBSERVACOES = { key:"observacoes", label:"Observações", type:"texto" };

function perguntasPadrao(materialBlock, extras) {
  const base = [SITUACAO_INCENDIO, DANOS];
  if (materialBlock) base.push({ key:"material", type:"material", ...materialBlock });
  if (extras) base.push(...extras);
  base.push(VITIMAS, SITUACAO_VITIMAS, RECURSOS, OBSERVACOES);
  return base;
}

const BLOQUEIO_VIA = { key:"bloqueio", label:"Existe Bloqueio da Via", type:"checkbox",
  options:["Parcial","Total","Vazamento de carga","Sentido Rio de Janeiro","Sentido Juiz de Fora","Sentido Três Rios","Sentido Paraíba do Sul","Sentido Levi Gasparian","Sentido Volta Redonda","Sentido Sapucaia"] };

const MATERIAL_TRANSPORTADO = { key:"materialTransportado", label:"Tipo de Material Transportado", type:"checkboxComTexto",
  options:["Carga Comum","Inflamável","Química","Explosiva"], textoLabel:"Qual" };

const SITUACAO_ACIDENTE = { key:"situacao", label:"Situação Encontrada", type:"checkbox",
  options:["Vítima já fora do veículo","Vítima presa às ferragens","Vítima ejetada","Múltiplas vítimas","Veículo com GNV","Veículo Híbrido","Veículo 100% Elétrico","Carga Perigosa"] };

function perguntasAcidenteVeicular() {
  return [SITUACAO_ACIDENTE, DANOS, BLOQUEIO_VIA, MATERIAL_TRANSPORTADO, VITIMAS, SITUACAO_VITIMAS, RECURSOS, OBSERVACOES];
}

const SITUACAO_VEGETACAO = SITUACAO_INCENDIO;

const INFO_VEGETACAO = { key:"infoVegetacao", label:"Informações Adicionais", type:"grupos",
  grupos:[
    { nome:"Propriedade", options:["Pública","Privada","Não identificada"] },
    { nome:"Zoneamento", options:["Urbano","Rural","Unidade de Conservação"] },
    { nome:"Tipo de Combustível Predominante", options:["Rasteiro (pasto/gramíneas)","Médio (arbustos/capoeira)","Alto (copas/floresta)"] },
    { nome:"Topografia / Relevo", options:["Plano","Encosta","Aclive","Declive","Montanhoso","Irregular"] },
    { nome:"Vento Predominante", options:["Calmo","Moderado","Forte"] },
    { nome:"Apoio de Órgãos Externos", options:["Guarda Municipal","Defesa Civil Municipal","Brigadistas","Voluntários"] },
  ]};

const FERRAMENTAS_VEGETACAO = { key:"ferramentas", label:"Ferramentas", type:"contadores",
  options:["Abafador","Bomba Costal","Enxada","Pá","McLeod","Facão"] };

/* ---------- Estrutura dos Tipos ---------- */

const TIPOS = [
  {
    id:"incendio_edif", nome:"Incêndio em Edificações",
    quantidadeVeiculos:false,
    subtipos:[
      { id:"deposito", nome:"Depósitos/Galpões" },
      { id:"residencial", nome:"Edificações Residenciais", residencial:true },
      { id:"comercial", nome:"Estabelecimentos Comerciais" },
      { id:"industria", nome:"Indústrias" },
      { id:"restaurante", nome:"Restaurante/Bar" },
      { id:"publico", nome:"Órgãos Públicos" },
    ],
    perguntas: perguntasPadrao(MATERIAL_EDIFICACOES)
  },
  {
    id:"fogo_veiculo", nome:"Fogo em Veículo",
    quantidadeVeiculos:true,
    subtipos:["Automóvel","Caminhão","Moto","Moto elétrica","Trem","Van","Ônibus"].map(n=>({id:n,nome:n})),
    perguntas: perguntasPadrao(MATERIAL_VEICULO)
  },
  {
    id:"colisao", nome:"Colisão de Veículos",
    quantidadeVeiculos:true,
    subtipos:["Automóvel","Bicicleta","Caminhão","Carroça","Moto","Moto elétrica","Muro","Poste","Trem","Van","Ônibus"].map(n=>({id:n,nome:n})),
    perguntas: perguntasAcidenteVeicular()
  },
  {
    id:"capotagem", nome:"Capotagem de Veículo",
    quantidadeVeiculos:true,
    subtipos:["Automóvel","Caminhão","Van","Ônibus"].map(n=>({id:n,nome:n})),
    perguntas: perguntasAcidenteVeicular()
  },
  {
    id:"queda", nome:"Queda de Veículo",
    quantidadeVeiculos:true,
    subtipos:["Automóvel","Caminhão","Van","Ônibus","Moto"].map(n=>({id:n,nome:n})),
    perguntas: perguntasAcidenteVeicular()
  },
  {
    id:"vegetacao", nome:"Fogo em Vegetação",
    quantidadeVeiculos:false,
    subtipos:["Beira de Via/Rodovia","Mata Rural","Mata Urbana","Montanha/Floresta","Morro/Encosta","Terreno Baldio"].map(n=>({id:n,nome:n})),
    perguntas:[SITUACAO_VEGETACAO, DANOS, INFO_VEGETACAO, FERRAMENTAS_VEGETACAO, VITIMAS, SITUACAO_VITIMAS, RECURSOS, OBSERVACOES]
  },
];

/* ---------- Estado ---------- */

const state = {
  screen: 1, // 1 tipo, 2 subtipo, 3 perguntas, 4 informe
  tipoId: null,
  subtipoId: null,
  quantidadeVeiculos: 0,
  residencial: { tipoImovel:null, andar:0, pavimentos:0, pavimentoFogo:0, comodos:[] },
  respostas: {}, // por pergunta.key
};

function tipoAtual(){ return TIPOS.find(t=>t.id===state.tipoId); }
function subtipoAtual(){ const t=tipoAtual(); return t && t.subtipos.find(s=>s.id===state.subtipoId); }

function resetForm(){
  state.screen = 1;
  state.tipoId = null;
  state.subtipoId = null;
  state.quantidadeVeiculos = 0;
  state.residencial = { tipoImovel:null, andar:0, pavimentos:0, pavimentoFogo:0, comodos:[] };
  state.respostas = {};
  render();
  window.scrollTo(0,0);
}

/* ---------- Helpers de resposta ---------- */

function getResp(key){
  if(!state.respostas[key]) state.respostas[key] = {};
  return state.respostas[key];
}

function toggleCheckbox(key, opt){
  const r = getResp(key);
  if(!r.opts) r.opts = [];
  const i = r.opts.indexOf(opt);
  if(i>=0) r.opts.splice(i,1); else r.opts.push(opt);
}

function isChecked(key, opt){
  const r = state.respostas[key];
  return !!(r && r.opts && r.opts.includes(opt));
}

/* ---------- Render raiz ---------- */

const app = document.getElementById("app");

function render(){
  app.innerHTML = "";
  const wrap = el("div","screen-wrap");
  wrap.appendChild(renderStepper());
  if(state.screen===1) wrap.appendChild(renderTipoScreen());
  else if(state.screen===2) wrap.appendChild(renderSubtipoScreen());
  else if(state.screen===3) wrap.appendChild(renderPerguntasScreen());
  else if(state.screen===4) wrap.appendChild(renderInformeScreen());
  app.appendChild(wrap);
}

function el(tag, className, text){
  const e = document.createElement(tag);
  if(className) e.className = className;
  if(text!==undefined) e.textContent = text;
  return e;
}

function renderStepper(){
  const steps = ["Ocorrência","Local","Detalhes","Informe"];
  const bar = el("div","stepper");
  steps.forEach((s,idx)=>{
    const n = idx+1;
    const item = el("div","step"+(state.screen===n?" active":"")+(state.screen>n?" done":""));
    item.appendChild(el("span","step-num", String(n)));
    item.appendChild(el("span","step-label", s));
    bar.appendChild(item);
  });
  return bar;
}

/* ---------- Tela 1: Tipo ---------- */

function renderTipoScreen(){
  const c = el("div","screen");
  c.appendChild(el("h1","screen-title","Tipo de Ocorrência"));
  c.appendChild(el("p","screen-sub","Escolha única — selecione o tipo de ocorrência atendida"));
  const list = el("div","option-grid");
  TIPOS.forEach(t=>{
    const btn = el("button","tile"+(state.tipoId===t.id?" selected":""));
    btn.type="button";
    btn.appendChild(el("span","tile-icon", tipoIcon(t.id)));
    btn.appendChild(el("span","tile-label", t.nome));
    btn.onclick = ()=>{ state.tipoId=t.id; state.subtipoId=null; state.quantidadeVeiculos=0; state.respostas={}; state.screen=2; render(); window.scrollTo(0,0); };
    list.appendChild(btn);
  });
  c.appendChild(list);
  return c;
}

function tipoIcon(id){
  return {incendio_edif:"🏠🔥", fogo_veiculo:"🚗🔥", colisao:"💥", capotagem:"🔄", queda:"⬇️", vegetacao:"🌳🔥"}[id] || "•";
}

/* ---------- Tela 2: Subtipo ---------- */

function renderSubtipoScreen(){
  const t = tipoAtual();
  const c = el("div","screen");
  c.appendChild(navBar(()=>{state.screen=1;render();}));
  c.appendChild(el("h1","screen-title", t.nome));
  c.appendChild(el("p","screen-sub","Escolha única — selecione o subtipo"));

  if(t.quantidadeVeiculos){
    c.appendChild(counterField("Quantidade de veículos", state.quantidadeVeiculos, v=>{state.quantidadeVeiculos=v; render();}));
  }

  const list = el("div","option-list");
  t.subtipos.forEach(s=>{
    const btn = el("button","chip"+(state.subtipoId===s.id?" selected":""));
    btn.type="button";
    btn.textContent = s.nome;
    btn.onclick = ()=>{ state.subtipoId=s.id; render(); window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"}); };
    list.appendChild(btn);
  });
  c.appendChild(list);

  if(state.subtipoId && subtipoAtual() && subtipoAtual().residencial){
    c.appendChild(renderResidencialDetalhes());
  }

  const next = el("button","btn-primary btn-block","Avançar");
  next.disabled = !state.subtipoId;
  next.onclick = ()=>{ state.screen=3; render(); window.scrollTo(0,0); };
  c.appendChild(next);
  return c;
}

function renderResidencialDetalhes(){
  const box = el("div","subpanel");
  box.appendChild(el("h3","subpanel-title","Detalhes da Edificação Residencial"));

  const tipoRow = el("div","chip-row");
  ["Casa","Apartamento"].forEach(op=>{
    const b = el("button","chip small"+(state.residencial.tipoImovel===op?" selected":""),op);
    b.type="button";
    b.onclick=()=>{state.residencial.tipoImovel=op; render();};
    tipoRow.appendChild(b);
  });
  box.appendChild(labeledField("Tipo de Imóvel", tipoRow));

  box.appendChild(counterField("Andar", state.residencial.andar, v=>{state.residencial.andar=v; render();}));
  box.appendChild(counterField("Pavimentos", state.residencial.pavimentos, v=>{state.residencial.pavimentos=v; render();}));
  box.appendChild(counterField("Fogo em qual Pavimento", state.residencial.pavimentoFogo, v=>{state.residencial.pavimentoFogo=v; render();}));

  const comodoRow = el("div","chip-row wrap");
  ["Sala","Cozinha","Quarto","Banheiro","Área externa"].forEach(op=>{
    const active = state.residencial.comodos.includes(op);
    const b = el("button","chip small"+(active?" selected":""),op);
    b.type="button";
    b.onclick=()=>{
      const i = state.residencial.comodos.indexOf(op);
      if(i>=0) state.residencial.comodos.splice(i,1); else state.residencial.comodos.push(op);
      render();
    };
    comodoRow.appendChild(b);
  });
  box.appendChild(labeledField("Fogo em qual Cômodo", comodoRow));

  return box;
}

/* ---------- Campos genéricos ---------- */

function labeledField(label, node){
  const f = el("div","field");
  f.appendChild(el("div","field-label",label));
  f.appendChild(node);
  return f;
}

function counterField(label, value, onChange){
  const row = el("div","counter-row");
  row.appendChild(el("div","field-label",label));
  const ctrl = el("div","counter");
  const minus = el("button","counter-btn","−"); minus.type="button";
  const val = el("span","counter-val", String(value).padStart(2,"0"));
  const plus = el("button","counter-btn","+"); plus.type="button";
  minus.onclick=()=>onChange(Math.max(0,value-1));
  plus.onclick=()=>onChange(value+1);
  ctrl.append(minus,val,plus);
  row.appendChild(ctrl);
  return row;
}

/* ---------- Tela 3: Perguntas ---------- */

function renderPerguntasScreen(){
  const t = tipoAtual();
  const c = el("div","screen");
  c.appendChild(navBar(()=>{state.screen=2;render();}));
  c.appendChild(el("h1","screen-title","Detalhes da Ocorrência"));
  c.appendChild(el("p","screen-sub", t.nome + " — " + (subtipoAtual()?subtipoAtual().nome:"")));

  t.perguntas.forEach(p=>{
    c.appendChild(renderPergunta(p));
  });

  const next = el("button","btn-primary btn-block","Gerar Informe");
  next.onclick = ()=>{ state.screen=4; render(); window.scrollTo(0,0); };
  c.appendChild(next);
  return c;
}

function renderPergunta(p){
  const box = el("div","subpanel");
  if(p.type==="checkbox") return renderCheckboxBlock(p, box);
  if(p.type==="checkboxComTexto") return renderCheckboxComTexto(p, box);
  if(p.type==="material") return renderMaterialBlock(p, box);
  if(p.type==="grupos") return renderGruposBlock(p, box);
  if(p.type==="contadores") return renderContadoresBlock(p, box);
  if(p.type==="vitimas") return renderVitimasBlock(box);
  if(p.type==="recursos") return renderRecursosBlock(p, box);
  if(p.type==="texto") return renderTextoBlock(p, box);
  return box;
}

function renderCheckboxBlock(p, box){
  box.appendChild(el("h3","subpanel-title", p.label));
  const row = el("div","chip-row wrap");
  p.options.forEach(op=>{
    const b = el("button","chip small"+(isChecked(p.key,op)?" selected":""), op);
    b.type="button";
    b.onclick=()=>{toggleCheckbox(p.key,op); render();};
    row.appendChild(b);
  });
  box.appendChild(row);
  if(p.extra){
    box.appendChild(el("div","field-label mt", p.extra.label));
    const row2 = el("div","chip-row wrap");
    p.extra.options.forEach(op=>{
      const key = p.key+"_extra";
      const b = el("button","chip small"+(isChecked(key,op)?" selected":""), op);
      b.type="button";
      b.onclick=()=>{toggleCheckbox(key,op); render();};
      row2.appendChild(b);
    });
    box.appendChild(row2);
  }
  return box;
}

function renderCheckboxComTexto(p, box){
  box.appendChild(el("h3","subpanel-title", p.label));
  const row = el("div","chip-row wrap");
  p.options.forEach(op=>{
    const b = el("button","chip small"+(isChecked(p.key,op)?" selected":""), op);
    b.type="button";
    b.onclick=()=>{toggleCheckbox(p.key,op); render();};
    row.appendChild(b);
  });
  box.appendChild(row);
  const r = getResp(p.key);
  const input = el("input","text-input");
  input.type="text"; input.placeholder = p.textoLabel + "...";
  input.value = r.texto || "";
  input.oninput = (e)=>{ r.texto = e.target.value; };
  box.appendChild(labeledField(p.textoLabel, input));
  return box;
}

function renderMaterialBlock(p, box){
  box.appendChild(el("h3","subpanel-title", p.label));
  const r = getResp(p.key);
  const classRow = el("div","chip-row wrap");
  p.classes.forEach(cl=>{
    const b = el("button","chip small"+(r.classe===cl.nome?" selected":""), cl.nome);
    b.type="button";
    b.onclick=()=>{ r.classe = (r.classe===cl.nome? null : cl.nome); r.itens=[]; render(); };
    classRow.appendChild(b);
  });
  box.appendChild(classRow);
  if(r.classe){
    const cl = p.classes.find(c=>c.nome===r.classe);
    const itemRow = el("div","chip-row wrap mt");
    cl.itens.forEach(it=>{
      const active = (r.itens||[]).includes(it);
      const b = el("button","chip small"+(active?" selected":""), it);
      b.type="button";
      b.onclick=()=>{
        if(!r.itens) r.itens=[];
        const i=r.itens.indexOf(it);
        if(i>=0) r.itens.splice(i,1); else r.itens.push(it);
        render();
      };
      itemRow.appendChild(b);
    });
    box.appendChild(itemRow);
  }
  return box;
}

function renderGruposBlock(p, box){
  box.appendChild(el("h3","subpanel-title", p.label));
  const r = getResp(p.key);
  p.grupos.forEach(g=>{
    box.appendChild(el("div","field-label mt", g.nome));
    const row = el("div","chip-row wrap");
    g.options.forEach(op=>{
      const gkey = p.key+"_"+g.nome;
      const active = r[gkey]===op;
      const b = el("button","chip small"+(active?" selected":""), op);
      b.type="button";
      b.onclick=()=>{ r[gkey] = (r[gkey]===op? null : op); render(); };
      row.appendChild(b);
    });
    box.appendChild(row);
  });
  return box;
}

function renderContadoresBlock(p, box){
  box.appendChild(el("h3","subpanel-title", p.label));
  const r = getResp(p.key);
  if(!r.counts) r.counts = {};
  p.options.forEach(op=>{
    box.appendChild(counterField(op, r.counts[op]||0, v=>{r.counts[op]=v; render();}));
  });
  return box;
}

function renderVitimasBlock(box){
  box.appendChild(el("h3","subpanel-title","Vítimas"));
  const r = getResp("vitimas");
  const semBtn = el("button","chip small"+(r.sem?" selected":""),"Sem vítimas");
  semBtn.type="button";
  semBtn.onclick=()=>{ r.sem=!r.sem; render(); };
  box.appendChild(semBtn);
  if(!r.sem){
    box.appendChild(counterField("Quantidade de Vítimas", r.total||0, v=>{r.total=v; render();}));
    box.appendChild(counterField("Verdes", r.verde||0, v=>{r.verde=v; render();}));
    box.appendChild(counterField("Amarelas", r.amarelo||0, v=>{r.amarelo=v; render();}));
    box.appendChild(counterField("Vermelhas", r.vermelho||0, v=>{r.vermelho=v; render();}));
    box.appendChild(counterField("Cinzas", r.cinza||0, v=>{r.cinza=v; render();}));
  }
  return box;
}

function renderRecursosBlock(p, box){
  box.appendChild(el("h3","subpanel-title","Recursos"));
  const r = getResp("recursos");
  box.appendChild(counterField("Viaturas empregadas", r.viaturas||0, v=>{r.viaturas=v; render();}));
  const row = el("div","chip-row wrap");
  p.viaturaOptions.forEach(op=>{
    const active = (r.tipos||[]).includes(op);
    const b = el("button","chip small"+(active?" selected":""), op);
    b.type="button";
    b.onclick=()=>{
      if(!r.tipos) r.tipos=[];
      const i=r.tipos.indexOf(op);
      if(i>=0) r.tipos.splice(i,1); else r.tipos.push(op);
      render();
    };
    row.appendChild(b);
  });
  box.appendChild(row);
  box.appendChild(counterField("Efetivo empregado", r.efetivo||0, v=>{r.efetivo=v; render();}));
  return box;
}

function renderTextoBlock(p, box){
  box.appendChild(el("h3","subpanel-title", p.label));
  const r = getResp(p.key);
  const ta = el("textarea","text-area");
  ta.rows = 4;
  ta.placeholder = "Digite observações adicionais...";
  ta.value = r.texto || "";
  ta.oninput = (e)=>{ r.texto = e.target.value; };
  box.appendChild(ta);
  return box;
}

/* ---------- Navegação ---------- */

function navBar(onBack){
  const bar = el("div","navbar");
  const back = el("button","btn-back","← Voltar");
  back.type="button";
  back.onclick = onBack;
  bar.appendChild(back);
  return bar;
}

/* ---------- Geração do Informe ---------- */

function gerarTextoInforme(){
  const t = tipoAtual();
  const st = subtipoAtual();
  const linhas = [];
  linhas.push("*INFORME OPERACIONAL — AVALIAÇÃO DA CENA*");
  linhas.push("Data/Hora: " + new Date().toLocaleString("pt-BR"));
  linhas.push("");
  linhas.push("*Tipo:* " + t.nome);
  linhas.push("*Subtipo:* " + (st?st.nome:"—"));

  if(t.quantidadeVeiculos){
    linhas.push("*Quantidade de veículos:* " + state.quantidadeVeiculos);
  }

  if(st && st.residencial){
    const rd = state.residencial;
    linhas.push("");
    linhas.push("*Detalhes da Edificação:*");
    if(rd.tipoImovel) linhas.push("- Tipo de imóvel: " + rd.tipoImovel);
    linhas.push("- Andar: " + rd.andar);
    linhas.push("- Pavimentos: " + rd.pavimentos);
    linhas.push("- Fogo no pavimento: " + rd.pavimentoFogo);
    if(rd.comodos.length) linhas.push("- Cômodo(s): " + rd.comodos.join(", "));
  }

  t.perguntas.forEach(p=>{
    const r = state.respostas[p.key];
    if(p.type==="checkbox"){
      if(r && r.opts && r.opts.length){
        linhas.push("");
        linhas.push("*"+p.label+":* " + r.opts.join(", "));
      }
      if(p.extra){
        const re = state.respostas[p.key+"_extra"];
        if(re && re.opts && re.opts.length) linhas.push("*"+p.extra.label+":* " + re.opts.join(", "));
      }
    } else if(p.type==="checkboxComTexto"){
      if(r && ((r.opts&&r.opts.length)||r.texto)){
        linhas.push("");
        linhas.push("*"+p.label+":* " + (r.opts?r.opts.join(", "):""));
        if(r.texto) linhas.push("- " + p.textoLabel + ": " + r.texto);
      }
    } else if(p.type==="material"){
      if(r && r.classe){
        linhas.push("");
        linhas.push("*"+p.label+":* " + r.classe);
        if(r.itens && r.itens.length) linhas.push("- Itens: " + r.itens.join(", "));
      }
    } else if(p.type==="grupos"){
      const any = p.grupos.some(g=>r && r[p.key+"_"+g.nome]);
      if(any){
        linhas.push("");
        linhas.push("*"+p.label+":*");
        p.grupos.forEach(g=>{
          const v = r && r[p.key+"_"+g.nome];
          if(v) linhas.push("- " + g.nome + ": " + v);
        });
      }
    } else if(p.type==="contadores"){
      if(r && r.counts){
        const entries = Object.entries(r.counts).filter(([k,v])=>v>0);
        if(entries.length){
          linhas.push("");
          linhas.push("*"+p.label+":* " + entries.map(([k,v])=>k+" ("+v+")").join(", "));
        }
      }
    } else if(p.type==="vitimas"){
      linhas.push("");
      if(r && r.sem){
        linhas.push("*Vítimas:* Sem vítimas");
      } else if(r){
        linhas.push("*Vítimas:* " + (r.total||0));
        linhas.push("- Verdes: " + (r.verde||0) + " | Amarelas: " + (r.amarelo||0) + " | Vermelhas: " + (r.vermelho||0) + " | Cinzas: " + (r.cinza||0));
      }
    } else if(p.type==="recursos"){
      linhas.push("");
      linhas.push("*Recursos:*");
      if(r){
        linhas.push("- Viaturas empregadas: " + (r.viaturas||0) + (r.tipos&&r.tipos.length? " ("+r.tipos.join(", ")+")":""));
        linhas.push("- Efetivo empregado: " + (r.efetivo||0));
      }
    } else if(p.type==="texto"){
      if(r && r.texto){
        linhas.push("");
        linhas.push("*"+p.label+":* " + r.texto);
      }
    }
  });

  return linhas.join("\n");
}

/* ---------- Tela 4: Informe ---------- */

function renderInformeScreen(){
  const c = el("div","screen");
  c.appendChild(navBar(()=>{state.screen=3;render();}));
  c.appendChild(el("h1","screen-title","Informe Operacional"));

  const ticket = el("div","ticket");
  const texto = gerarTextoInforme();
  const pre = el("pre","ticket-text");
  pre.textContent = texto.replace(/\*/g,"");
  ticket.appendChild(pre);
  c.appendChild(ticket);

  const actions = el("div","action-grid");

  const btnWpp = el("button","btn-action btn-whatsapp","📲 Enviar pelo WhatsApp");
  btnWpp.type="button";
  btnWpp.onclick = ()=>{
    const url = "https://wa.me/?text=" + encodeURIComponent(texto);
    window.open(url, "_blank");
  };

  const btnCopy = el("button","btn-action btn-copy","📋 Copiar Texto");
  btnCopy.type="button";
  btnCopy.onclick = async ()=>{
    try{
      await navigator.clipboard.writeText(texto.replace(/\*/g,""));
      btnCopy.textContent = "✓ Copiado!";
      setTimeout(()=>{btnCopy.textContent="📋 Copiar Texto";}, 1800);
    }catch(e){
      const ta = document.createElement("textarea");
      ta.value = texto.replace(/\*/g,"");
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      btnCopy.textContent = "✓ Copiado!";
      setTimeout(()=>{btnCopy.textContent="📋 Copiar Texto";}, 1800);
    }
  };

  const btnReset = el("button","btn-action btn-reset","🗑 Zerar Formulário");
  btnReset.type="button";
  btnReset.onclick = ()=>{
    if(confirm("Deseja realmente zerar o formulário? Todos os dados serão perdidos.")) resetForm();
  };

  actions.append(btnWpp, btnCopy, btnReset);
  c.appendChild(actions);
  return c;
}

/* ---------- Inicialização + Service Worker ---------- */

render();

if("serviceWorker" in navigator){
  window.addEventListener("load", ()=>{
    navigator.serviceWorker.register("./service-worker.js").catch(()=>{});
  });
}
