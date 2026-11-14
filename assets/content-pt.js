/* Mini_Training_2_Course_Expectations - Portuguese content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='pt';
const CONTENT = {
  flag:'🇧🇷', dir:'ltr',
  ui:{
    heroCard1:"<b>No seu ritmo.</b> Seu progresso fica salvo neste navegador.",
    heroCard2:"<b>Com prática.</b> Cada módulo termina com uma verificação rápida.",
    pbLabel:'módulos concluídos',
    tapOpen:'Toque para abrir',
    tapFlip:'Toque para virar',
    lblSee:'O que você vê',
    lblDo:'O que você faz',
    lblSay:'O que você pode dizer',
    lblReport:'Onde relatar',
    lblAvoid:'Evite',
    lblTip:'Dica',
    stepOf:'Passo {i} de {n}',
    next:'Próximo',
    pageTitle:"Minitreinamento · Expectativas — Treinamento de Tutores Kodland",
    logoSub:'Departamento de Desenvolvimento de Tutores',
    heroEyebrow:"🎯 Minitreinamento",
    heroTitle:"Fechando a Lacuna de <span class=\"h-pill\">Expectativas</span>",
    heroIntro:"Você recebeu este treinamento porque alguns alunos solicitaram reembolso por o curso não ter atendido às suas expectativas, não corresponder ao que procuravam ou por não gostarem do conteúdo. Neste treinamento, vamos mostrar o que você pode fazer como tutor e como lidar com essas situações.",
    heroWork:"Conclua 4 módulos curtos. Cada avaliação de módulo exige pelo menos 70% de acerto para desbloquear o próximo. Duração total aproximada: 30–35 minutos.",
    startBtn:"🚀 Começar o treinamento",
    pathLabel:'Seu caminho de aprendizado',
    devTitle:'Dev: liberar todos os módulos para revisão',
    backToPath:'Voltar ao caminho',
    modulesPassed:'{done} / {total} módulos aprovados',
    moduleN:'Módulo {n}',
    of:'de',
    locked:'🔒 Bloqueado',
    passedBadge:'✅ Aprovado · {pct}%',
    reviewedBadge:'✅ Revisado',
    startBadge:'▶ Iniciar',
    reviewBadge:'▶ Revisar',
    objective:'Objetivo',
    startCheck:'▶ Iniciar a verificação do módulo',
    finishBtn:'▶ Concluir o minitreinamento',
    doneBack:'✓ Pronto — voltar ao caminho',
    ixBadge:'📋 Verificação do módulo — 70% para liberar o próximo módulo',
    ixItemBadge:'📋 Verificação do módulo — item {i} de {n}',
    scoreSoFar:'Pontuação até agora: {c} / {t}',
    continue:'Continuar →',
    sortWrong:'Não foi bem isso — a resposta certa é “{label}”.',
    resPassed:'Módulo aprovado!',
    resFailed:'Ainda não foi dessa vez',
    resUnlocked:"Você liberou o próximo módulo.",
    resDone:"Você concluiu este minitreinamento.",
    resNeed:'Você precisa de 70% para liberar o próximo módulo. Revise a seção acima e faça a verificação novamente.',
    resContinue:'Continuar para o caminho de aprendizado',
    resFinish:'Continuar',
    resBack:'Voltar ao caminho',
    resReview:'Revisar este módulo',
    doneEyebrow:'Minitreinamento concluído',
    doneTitle:'🎉 Parabéns!',
    doneP1:"🎉 <strong>Parabéns! Você concluiu este minitreinamento.</strong>",
    doneP2:"Está tudo pronto por aqui! Volte à página de treinamento do LMS onde você acessou este minitreinamento para encerrar a tarefa.",
    doneP3:"👉 <strong>Se houver uma verificação ou avaliação listada logo abaixo do treinamento no LMS, não deixe de fazê-la e de obter a nota de aprovação</strong> — caso contrário, a tarefa pode ficar incompleta.",
    doneP4:'Boa sorte! ❤️',
    doneP5:'',
    devUnlockAlert:'Modo dev: todos os módulos estão liberados para revisão.',
    devOn:'🔓 Modo dev ATIVADO — todos os módulos liberados',
    devOff:'🔒 Modo dev DESATIVADO — progresso apagado',
    devBadge:'🔓 MODO DEV',
    doLabel:'✅ Faça',
    avoidLabel:'🚫 Evite',
    noticeLabel:'Atenção:',
    cvSee:'O que você vê:',
    cvDo:'O que você faz:',
    dtExample:'Exemplo de uma aula real',
    dtNext:'Próximo:',
    dtDone:"✅ São as quatro áreas. Agora, classifique o que você vê.",
    tlVideoTitle:'{label} — exemplo de uma aula real',
    tlVideoMeta:'Veja como essa fase acontece em uma aula real'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Introdução', emoji:'🧩', color:'var(--coral)',
 title:'Por que você está aqui',
 desc:'Por que “isso não é o que queríamos” é um dos poucos motivos de reembolso que você ainda pode reverter — e as regras que valem quando um pedido de reembolso já chegou.',
 obj:'Entender por que a diferença entre o curso e o que o aluno ou a família esperava muitas vezes pode ser resolvida, por que o relato no mesmo dia é o que mais importa, e exatamente o que fazer (e o que não fazer) quando já existe um pedido de reembolso.',
 sections:[
  {t:'🎭 “Isso não é o que queríamos” — o que realmente está por trás', html:`
   <div class="card"><p>Você não vê a conversa de vendas, a aula experimental nem o que a família imaginava quando fez a matrícula. O que você <em>consegue</em> ver é uma criança na sua aula — e a lacuna quase sempre aparece ali primeiro, muito antes de um responsável escrever qualquer coisa.</p></div>
   ${iconGrid([
     {ic:'🎯', html:`<strong>O tema não é o que imaginavam.</strong> Queriam criar jogos e o curso começa pelo básico. Queriam desenhar anime e o curso ensina luz, proporção e cor.`},
     {ic:'🧸', html:`<strong>Quem escolheu foi o responsável, não a criança.</strong> A criança nunca pediu este curso, então cada aula parece lição de casa.`},
     {ic:'⚖️', html:`<strong>O nível parece errado.</strong> Fácil demais soa como “conteúdo chato”. Difícil demais soa como “isso não é para mim”. De qualquer forma, é relatado como falta de gosto.`},
     {ic:'⏳', html:`<strong>A parte divertida ainda não chegou.</strong> As primeiras aulas constroem a base, e o aluno vai embora antes de ver aonde isso leva.`}
   ])}
   ${co('co-idea','💡',`<p><strong>Este é um dos poucos motivos de reembolso que ainda podem ser revertidos.</strong> Um aluno que quer algo diferente muitas vezes pode receber algo diferente — dentro da sua aula, por meio de uma aula de nivelamento ou de uma sessão de orientação, ou em outro curso da Kodland em que ele ficará mais feliz.</p>`)}
  `},
  {t:'⏱️ O segredo está na rapidez e no seu relato', html:`
   <div class="card"><p>Não é você quem decide se um aluno muda de curso ou de nível. Mas o seu relato é o que dá início a essa conversa, e ele só funciona se chegar às pessoas certas <strong>cedo</strong>.</p></div>
   ${stepFlow([
     {ic:'👀', label:'Você percebe a lacuna em uma aula'},
     {ic:'📝', label:'Você relata no BO no mesmo dia'},
     {ic:'👩‍💼', label:'Seu Team Leader e o Client Service analisam as opções'},
     {ic:'🔄', label:'Uma aula motivacional, uma aula de nivelamento ou sessão de orientação, ou outro curso da Kodland'}
   ])}
   ${co('co-danger','🚨',`<p><strong>Um relato tardio fecha portas.</strong> Depois que a família decide, a maioria dessas opções já não existe. O mesmo relato, escrito nas duas primeiras semanas, pode manter uma criança na Kodland.</p>`)}
   ${co('co-ok','✅',`<p><strong>E enquanto a equipe analisa as opções, você ainda tem a aula.</strong> Um ensino flexível e centrado no aluno é a parte que depende inteiramente de você — o Módulo 2 mostra como.</p>`)}
  `},
  {t:'🛟 Se já existe um pedido de reembolso', html:`
   <div class="card"><p>Tudo o que vimos acima é sobre perceber isso cedo. Mas você pode estar abrindo este treinamento porque uma família <strong>já</strong> pediu reembolso. As regras abaixo valem seja qual for o motivo — leia-as primeiro e depois use o restante do treinamento para entender o que levou a essa situação e o que você ainda pode fazer na aula.</p></div>
   ${co('co-idea','💡',`<p><strong>O pedido em si é criado pelo Client Service, não por você</strong> — essa parte você não controla. O que continua sendo seu é tudo o que acontece na aula a partir de agora, e isso não é pouco.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Não diga nada sobre o pedido em si</strong> — nem à criança, nem à família — a menos que o Client Service peça explicitamente que você diga algo específico. Seu trabalho agora é a aula, não a conversa sobre o pedido.</p>`)}
  `},
  {t:'🎯 Sua próxima aula é a tentativa de reverter', html:`
   <div class="card"><p>Talvez você não tenha chance de mudar mais nada. Trate a próxima aula com essa criança como o momento que decide tudo.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Dê espaço para ela falar de verdade.</strong> Não faça uma pergunta só por fazer. Crie um momento genuíno em que ela se sinta valorizada e tenha a oportunidade de acertar.`},
     {ic:'🏆', html:`<strong>Garanta uma conquista visível logo no início.</strong> Ela deve sair da aula se sentindo capaz, não atrasada.`},
     {ic:'👀', html:`<strong>Atenção específica</strong> — faça-a se sentir notada por algo concreto, e não elogiada de forma genérica.`},
     {ic:'🤐', html:`<strong>Nenhuma menção ao pedido</strong> — mesmo que a criança toque no assunto, redirecione com carinho e continue ensinando.`}
   ])}
  `},
  {t:'📮 Avise rápido e conheça a única frase segura', html:`
   <div class="card"><p>Você pode descobrir se há um pedido de reembolso por meio dos comentários do Client Service no perfil do aluno, no BO. Não há nenhum sistema automático que envie esse aviso. Quando ficar sabendo, lembre-se de que as informações que você obteve durante as aulas são algo que o Client Service não tem como conseguir de outra forma.</p></div>
   ${numlist([
     'Deixe um comentário no BO no mesmo dia com exatamente o que você viu — datas e detalhes, não impressões',
     'Inclua as palavras da própria família, literalmente, se você as tiver',
     'Avise seu Team Leader no mesmo dia',
     'Nunca confirme que um reembolso foi aprovado nem comente qualquer valor'
   ])}
   ${co('co-ok','✅',`<p><strong>A mensagem que você sempre pode usar:</strong> <em>“O departamento de Atendimento ao Cliente vai ajudar você com isso.”</em> É nesse ponto que termina a sua participação na conversa e o Client Service assume o atendimento.</p>`)}
  `},
  {t:'🌱 Continue depois', html:`
   <div class="card"><p>Independentemente de o pedido de reembolso ser retirado, de a criança continuar no seu grupo ou de passar para outro tutor ou formato, mantenha a atenção extra nas aulas seguintes. Uma mudança positiva que dura apenas uma aula, antes de tudo voltar discretamente ao normal, dificilmente será duradoura.</p></div>
  `}
 ]
},
{id:'spot', numLabel:'Módulo 1', emoji:'🔎', color:'var(--coral)',
 title:'Perceba a lacuna cedo e relate no mesmo dia',
 desc:'As três formas que uma divergência pode assumir, um diagnóstico rápido para as primeiras aulas, como apresentar o escopo do curso ao aluno e aos responsáveis, uma verificação em formato de semáforo para cada aula e como registrar o caso no BO.',
 obj:'Reconhecer o tipo de divergência que você está observando, realizar um diagnóstico rápido, explicar o escopo do curso logo no início (o que os alunos vão criar, programação versus design e como as ferramentas de IA são utilizadas), interpretar os sinais aula a aula e registrar o caso no BO no mesmo dia.',
 sections:[
  {t:'🧭 As três formas de uma divergência', html:`
   <div class="card"><p>“Não gosto deste curso” pode significar três coisas diferentes — e cada uma pede uma atitude um pouco diferente. Aprenda a distingui-las.</p></div>
   ${patternCards([
     {ic:'🎯', title:'Não é o que eu queria', desc:'“Eu achei que a gente ia fazer jogos.” “Dá para fazer outra coisa?”', note:'A expectativa era diferente do curso. <strong>A flexibilidade pode reduzir a distância — e outro curso pode combinar melhor.</strong>'},
     {ic:'😒', title:'Não gosta do conteúdo', desc:'Chega sem entusiasmo, faz as atividades “porque tem que fazer”, diz que o tema é chato', note:'O tema, ou a forma como as atividades são apresentadas, não fala com ele. <strong>Ofereça escolhas dentro do objetivo e relate.</strong>'},
     {ic:'⚖️', title:'O nível parece errado', desc:'Termina em minutos: “Eu já sei isso.” Ou: “Eu não entendo nada.”', note:'Muitas vezes é relatado como falta de gosto. <strong>Adapte agora e sinalize para uma aula de nivelamento.</strong>'}
   ],3)}
  `},
  {t:'🩺 O diagnóstico rápido — suas duas primeiras aulas (M1L1–M1L2)', html:`
   <div class="card"><p>A melhor janela para perceber uma divergência são as <strong>duas primeiras aulas do Módulo 1</strong>. Uma lacuna percebida só depois da aula 3, sem relato, costuma ser tarde demais para evitar um cancelamento. Três perguntas e um exercício curto, logo na primeira aula, levam menos de dez minutos.</p></div>
   ${stepIconBlock('🗣️','“Você já trabalhou com [a ferramenta ou a linguagem do curso] antes?”', `<p>Aberta e sem pressão. Deixe o aluno falar e escute o quanto ele realmente sabe.</p><p>⚠️ <strong>Fique atento a:</strong> “Sim, eu já sei tudo isso” ou “Não faço ideia do que você está falando”.</p>`)}
   ${stepIconBlock('🌈','“O que você esperava aprender neste curso?”', `<p>Mostra a diferença entre aquilo em que o responsável matriculou a criança e o que o aluno realmente quer fazer.</p><p>⚠️ <strong>Fique atento a:</strong> uma resposta que não tem nada a ver com o curso em que ele está matriculado.</p>`)}
   ${stepIconBlock('⚖️','“Que parte de hoje pareceu fácil e qual pareceu difícil?”', `<p>Pergunte depois do primeiro exercício. Isso mostra o quanto o aluno está realmente confortável com o nível.</p><p>✅ <strong>Ideal:</strong> “a primeira parte foi fácil, a segunda foi difícil” — o nível está certo.<br>⚠️ <strong>Fique atento a:</strong> “Tudo foi fácil” ou “Eu não entendi nada”.</p>`)}
   ${stepIconBlock('✏️','Um exercício curto, feito sozinho (5 a 8 minutos)', `<p>Peça ao aluno que faça o primeiro exercício do módulo sozinho, sem ajuda. Observe quanto tempo leva e se ele consegue ao menos começar.</p><p>✅ <strong>Normal:</strong> precisa de alguma orientação e leva o tempo esperado.<br>⚠️ <strong>Fique atento a:</strong> termina na hora, ou não consegue começar sozinho.</p>`)}
   ${co('co-idea','💡',`<p><strong>Já passou da aula 2?</strong> Faça as mesmas perguntas esta semana. O diagnóstico funciona em qualquer momento do curso — quanto mais cedo você perguntar, mais opções ainda estarão abertas.</p>`)}
  `},
  {t:'🗺️ Apresente o escopo do curso ao aluno e aos responsáveis', html:`
   <div class="card"><p>Muitos casos de “não era isso que esperávamos” começam com uma expectativa formada muito antes de a família conhecer você: seja na conversa com a equipe comercial, na aula experimental ou em um anúncio. Suas primeiras aulas são a primeira oportunidade de mostrar <strong>o curso real</strong>: aonde ele leva, o que os alunos vão criar e como ele funciona. Uma família que conhece o caminho tem muito menos chances de se frustrar depois.</p></div>
   ${patternCards([
     {ic:'🏗️', title:'O que eles vão criar', desc:'O projeto final e o que eles produzem ao longo do caminho, módulo por módulo.', note:'<em>“Ao final deste módulo, você terá…”</em> dá um motivo para o aluno persistir no aprendizado dos conceitos básicos.'},
     {ic:'⚖️', title:'Programação, design — ou os dois', desc:'Qual é a proporção do curso dedicada a escrever código e qual é focada em desenhar, projetar ou construir visualmente.', note:'Seja transparente quanto a esse equilíbrio. Uma criança que espera desenhar em um curso de programação pura precisa saber disso desde o início.'},
     {ic:'🤖', title:'Como as ferramentas de IA são utilizadas', desc:'Se o curso utiliza ferramentas de IA: explique qual é o papel delas e o que o aluno continuará fazendo por conta própria.', note:'Explique exatamente como descrito na ementa do curso: sem prometer a mais, nem a menos.'}
   ],3)}
   ${co('co-idea','📘',`<p><strong>Onde encontrar:</strong> a ementa do curso e os guias das aulas no BO detalham os módulos, os projetos e as ferramentas. Consulte-os antes da aula 1. Não tem certeza de como o curso usa IA ou qual é a carga de programação? Pergunte no canal do Slack do seu curso ou ao seu Team Leader — nunca baseie suas explicações para a família em suposições.</p>`)}
   ${dimTabs([
     {ic:'🧒', title:'Com o aluno',
      intro:'Mostre, não faça listas. Um exemplo pronto diz mais do que a leitura de uma ementa.',
      tips:[
       {ic:'🎬', html:`<strong>Mostre, logo na primeira aula, um projeto concluído</strong> do que o curso ensina a construir: <em>“Isto é o que você será capaz de criar”.</em>`},
       {ic:'🧭', html:`<strong>Marque o caminho:</strong> no início de cada módulo, explique como aquele novo conteúdo contribui para o projeto final.`},
       {ic:'🔗', html:`<strong>Conecte o básico ao objetivo final:</strong> <em>“O laço (loop) de hoje é o que, mais adiante, fará seu personagem se mover sozinho”.</em>`},
       {ic:'🤖', html:`<strong>Se ferramentas de IA forem usadas,</strong> explique como elas facilitam o processo e o que continuará sendo trabalho e mérito do próprio aluno.`}
      ]},
     {ic:'👪', title:'Com os responsáveis',
      intro:'Uma mensagem curta depois da primeira aula previne a maioria das surpresas.',
      tips:[
       {ic:'📨', html:`<strong>Envie a mensagem depois da aula 1 ou 2:</strong> explique o que será construído no curso, o que os primeiros módulos abordam e o equilíbrio entre programação e design.`},
       {ic:'🗓️', html:`<strong>Explique a dinâmica das primeiras semanas:</strong> primeiro os fundamentos básicos, depois os projetos mais elaborados.`},
       {ic:'🙋', html:`<strong>Convide a família a tirar dúvidas</strong> sobre o conteúdo — e, se demonstrarem que esperavam algo diferente, registre no BO no mesmo dia.`},
       {ic:'🚫', html:`<strong>Não crie falsas expectativas.</strong> Nunca descreva projetos, ferramentas ou resultados que o curso não entrega.`}
      ]}
   ],'✅ Isso é tudo sobre o aluno e os responsáveis.')}
   ${co('co-cute','😟',`<p><strong>Se um responsável estiver insatisfeito porque a atividade de um módulo ou de uma aula não corresponde ao que esperava.</strong> Primeiro, escute. Depois, explique o que será abordado nos próximos módulos (consulte a ementa do curso) e esclareça que a história ou o tema das atividades pode ser adaptado aos interesses da criança, mas as ferramentas e as competências trabalhadas continuam sendo as mesmas. Nos cursos que utilizam múltiplas ferramentas, ofereça a possibilidade de usar outro programa para realizar a mesma tarefa. A wiki e as anotações para tutores apresentam alternativas para várias dessas atividades. Se a família pedir algo que não está incluído no escopo do curso, registre a solicitação no BO e informe seu Team Leader. Nunca prometa mudanças no curso por conta própria.</p>`)}
  `},
  {t:'🚥 Continue observando a cada aula', html:`
   <div class="card"><p>Depois das primeiras aulas, um semáforo simples ao fim de cada aula mantém você atento. Leva trinta segundos.</p></div>
   ${classifyCard('co-ok','🟢','Chega no horário e preparado · faz perguntas sobre o tema · se anima quando algo funciona · quer mostrar o que fez · lembra da aula anterior.','Continue assim. Mantenha o relacionamento caloroso e continue observando.')}
   ${classifyCard('co-cute','🟡','Se distrai com frequência · responde com monossílabos (“sim”, “não”, “sei lá”) · faz os exercícios só por obrigação · não lembra da aula anterior · pede para terminar mais cedo.','Escreva uma anotação depois da aula e tente uma mudança flexível (Módulo 2). <strong>Duas aulas amarelas seguidas → avise seu Team Leader na mesma semana.</strong> Não espere chegar ao vermelho.')}
   ${classifyCard('co-danger','🔴','Se recusa a participar · diz abertamente que não gosta · o responsável escreve que a criança não quer vir · duas ou mais aulas amarelas sem melhora · chora, fica frustrado ou difícil de lidar.','<strong>Relate no BO no mesmo dia</strong> e avise seu Team Leader.')}
   <div class="card"><h4>💬 Quatro perguntas de acompanhamento — faça uma a cada 2 ou 3 aulas</h4></div>
   ${iconGrid([
     {ic:'🌟', html:`<strong>“Qual foi a parte mais legal da aula de hoje?”</strong> Se ele não consegue citar nada, isso é um sinal.`},
     {ic:'🔧', html:`<strong>“Tem alguma coisa que você mudaria nas nossas aulas?”</strong> Uma pergunta aberta que traz informações úteis sem pressão.`},
     {ic:'🔢', html:`<strong>“De 1 a 5, quão difícil este curso tem sido para você?”</strong> 1–2 significa fácil demais, 4–5 difícil demais. Os dois são sinais de divergência.`},
     {ic:'🚀', html:`<strong>“O que você gostaria de saber criar ou fazer quando terminar este curso?”</strong> Se a resposta não tem nada a ver com o curso, existe uma lacuna de expectativas.`}
   ])}
  `},
  {t:'📝 Relate no BO — no mesmo dia', html:`
   <div class="card"><p>Um relato que depois se mostra desnecessário não custa nada. A falta de um relato pode custar um aluno. <strong>Se você não tem certeza de que é uma divergência real, relate mesmo assim</strong> — seu Team Leader conhece o currículo e os níveis disponíveis; você não precisa conhecer.</p></div>
   ${timeline([
     {ic:'⏱️', label:'Logo após a aula', items:[
       '<strong>Escreva 2 ou 3 linhas:</strong> que sinal você viu, em que momento e o que o aluno disse — com as palavras dele. Os detalhes se perdem rápido.'
     ]},
     {ic:'📝', label:'No mesmo dia', items:[
       '<strong>Relate no BO:</strong> perfil do aluno → Progresso → Avaliações dos Tutores → Avaliar o Aluno. Escolha o Tipo de problema (ou <em>Outro</em>), escolha o grupo e cole a sua anotação.',
       '<strong>Avise seu Team Leader</strong> de que você fez o relato.'
     ]},
     {ic:'🔁', label:'Nas próximas aulas', items:[
       '<strong>Continue adaptando</strong> (Módulo 2) e acrescente ao caso qualquer novidade. Relate uma vez e depois acompanhe.'
     ]}
   ])}
   <div class="card" style="background:var(--surface2)"><h4>📨 Como é um relato útil — copie e complete</h4>
   <p style="font-size:13.5px;line-height:1.75"><strong>Aluno:</strong> [nome] · <strong>Curso / nível:</strong> [ex.: Criatividade Digital, nível 1] · <strong>Aula:</strong> [M1L2 — data]<br>
   <strong>O que observei:</strong> [2 ou 3 linhas: o sinal, o momento, as palavras do próprio aluno]<br>
   <strong>O que acho que está por trás:</strong> ☐ não era o que esperava &nbsp; ☐ não gosta do conteúdo &nbsp; ☐ o nível parece errado<br>
   <strong>O que já tentei na aula:</strong> [ex.: deixei que ela escolhesse o tema do personagem]<br>
   <strong>O que poderia ajudar — minha recomendação, a decisão é de vocês:</strong> ☐ uma aula motivacional &nbsp; ☐ uma aula de nivelamento ou sessão de orientação &nbsp; ☐ outro curso</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Relatar um caso</span><iframe src="Simulacion_BO_Evaluate.html" title="BO — Relatar um caso" loading="lazy"></iframe></div></div>
   ${co('co-star','🌱',`<p><strong>Por que isso funciona:</strong> seu Team Leader e o Client Service só podem agir sobre o que sabem. O relato é o único passo de todo este processo que só você pode dar — e é ele que decide quantas opções ainda restam.</p>`)}
  `},
  {t:'💬 O que você pode dizer à família — e o que fica para o seu Team Leader', html:`
   <div class="card"><p>Você sempre pode falar sobre a aprendizagem da criança. Você nunca apresenta, promete ou recusa uma mudança de curso, de nível ou de formato — isso vem do seu Team Leader e do Client Service.</p></div>
   ${doavoid(
     ['Compartilhar o que você percebe sobre a aprendizagem: <em>“Ele se anima quando desenha personagens, estou incluindo isso nas nossas aulas”.</em>','Dizer que você compartilhou o assunto com a sua equipe e que vai retornar','Perguntar o que gostariam que o filho aproveitasse do curso','Agradecer por terem contado — com carinho, e no mesmo dia'],
     ['Sugerir por conta própria outro curso, uma mudança de nível ou um reembolso','Defender o curso: <em>“ele melhora mais para a frente”</em>','Prometer uma aula ou uma mudança','Dizer <em>“ele não gostou deste curso”</em> — soa como um fracasso']
   )}
   ${co('co-idea','💡',`<p><strong>Diga</strong> “encontramos algo de que ele pode gostar ainda mais” — <strong>nunca</strong> “ele não gostou deste curso.”</p>`)}
  `}
 ],
 ix:{
  title:'Perceba, nomeie, relate',
  instr:'Classifique as falas e escolha a melhor atitude. Acerte 70% do quiz para liberar o próximo módulo.',
  items:[
   {type:'sort', prompt:'Que forma de divergência é esta?', card:`“Eu achei que a gente ia fazer jogos, não só digitar código.”`, zones:[{label:'🎯 Não é o que eu queria', fb:'Correto — a expectativa era diferente do curso. A flexibilidade pode reduzir parte da distância, e um relato mantém outras opções abertas.'},{label:'😒 Não gosta do conteúdo', fb:'Não exatamente — este aluno tem algo específico que esperava fazer. Isso é uma lacuna de “não é o que eu queria”.'},{label:'⚖️ O nível parece errado', fb:'Não exatamente — nada aqui fala de dificuldade. Trata-se do que ele esperava criar.'}], correctZone:0},
   {type:'sort', prompt:'Que forma de divergência é esta?', card:`“Tudo foi muito fácil — eu já sei isso.”`, zones:[{label:'🎯 Não é o que eu queria', fb:'Não exatamente — este aluno está falando de dificuldade, não do tema.'},{label:'😒 Não gosta do conteúdo', fb:'Não exatamente — o problema é o nível, mesmo que pareça tédio com o conteúdo.'},{label:'⚖️ O nível parece errado', fb:'Correto — parece falta de gosto, mas é o nível. Adapte agora e sinalize para uma aula de nivelamento.'}], correctZone:2},
   {type:'sort', prompt:'Que forma de divergência é esta?', card:`Em toda aula ela faz os exercícios só porque tem que fazer, responde “sei lá” e pede para terminar mais cedo.`, zones:[{label:'🎯 Não é o que eu queria', fb:'Não exatamente — ela não disse o que esperava. O padrão é de pouco interesse no próprio conteúdo.'},{label:'😒 Não gosta do conteúdo', fb:'Correto — o conteúdo ou a forma como é apresentado não desperta o interesse dela. Ofereça escolhas dentro do objetivo e relate.'},{label:'⚖️ O nível parece errado', fb:'Não exatamente — nada indica um problema de dificuldade; o sinal é o pouco interesse.'}], correctZone:1},
   {type:'choice', prompt:`Depois da aula 1, um responsável pergunta: “Afinal, o que exatamente meu filho vai criar neste curso?” O que você faz?`, opts:[`Dizer que o curso fica mais divertido mais para frente e que ele vai ver na prática`,`Descrever o projeto final e os primeiros módulos com base na ementa do curso, explicar com honestidade qual é a proporção de programação e de design e convidar a família a tirar mais dúvidas`,`Prometer que, no final, ele conseguirá criar qualquer jogo que quiser`], correct:1, fb:`O roteiro sempre vem da ementa do curso: o que os alunos vão criar, o caminho de aprendizado e o verdadeiro equilíbrio entre programação e design. Respostas vagas ou grandes promessas são a raiz do problema “não era isso que esperávamos”.`},
   {type:'choice', prompt:`No diagnóstico, você pergunta “O que você esperava aprender?” e o aluno responde: “Desenhar anime — não isso.” Qual é o melhor próximo passo?`, opts:[`Explicar que o anime vem mais para a frente no curso e continuar exatamente como planejado`,`Trazer o interesse dele para a aula de hoje, no que for possível, e relatar no BO no mesmo dia`,`Esperar mais duas aulas para ver se passa`], correct:1, fb:`Flexibilize já na aula o que for possível e relate no mesmo dia, para que a equipe ainda tenha todas as opções. Esperar, ou defender o plano, gasta a janela de tempo.`},
   {type:'sort', prompt:'Onde este quadro se encaixa no semáforo?', card:`Duas aulas seguidas: respostas de uma palavra e pedidos para terminar mais cedo.`, zones:[{label:'🟢 Verde', fb:'Não exatamente — duas aulas de respostas de uma palavra e vontade de sair mais cedo não é “tudo bem”.'},{label:'🟡 Amarelo', fb:'Correto — anote, tente uma mudança flexível e avise seu Team Leader na mesma semana. Não espere chegar ao vermelho.'},{label:'🔴 Vermelho', fb:'Ainda não — vermelho significa recusa, desgosto declarado ou um responsável escrevendo. Mas amarelo duas vezes seguidas já significa: avise seu Team Leader esta semana.'}], correctZone:1},
  ]
 }
},
{id:'flex', numLabel:'Módulo 2', emoji:'🎛️', color:'var(--coral)',
 title:'Faça o curso caber neles — flexibilidade que mantém o objetivo',
 desc:'Como adaptar uma aula ao que o aluno realmente quer aprender sem perder o objetivo de aprendizagem, como oferecer escolhas de acordo com a idade, quando o seu Team Leader precisa intervir e como apoiar alunos que ainda estão aprendendo a usar o computador.',
 obj:'Adaptar uma aula aos interesses do aluno mantendo o foco no objetivo de aprendizagem, oferecer opções adequadas à idade, reconhecer quando a flexibilidade não é suficiente e exige a intervenção do Team Leader, e apoiar, desde o primeiro módulo, alunos com pouca familiaridade com o computador.',
 sections:[
  {t:'🎯 A regra: mantenha o objetivo, flexibilize o caminho', html:`
   <div class="card"><p>Você não precisa escolher entre “seguir o manual” e “deixar fazer o que quiser”. O manual diz para que <strong>serve</strong> a aula. Quase todo o resto pode se ajustar.</p></div>
   <div class="two-col">
     <div class="card"><h4>🔒 Permanece igual</h4><ul><li>O objetivo de aprendizagem e as habilidades da aula</li><li>Os resultados esperados no manual</li><li>A estrutura da aula (aquecimento, prática, encerramento)</li></ul></div>
     <div class="card"><h4>🎛️ Pode se ajustar</h4><ul><li>O tema, o personagem, a história</li><li>O assunto do projeto</li><li>A ordem dos passos</li><li>O exemplo que você usa e a dificuldade da atividade</li></ul></div>
   </div>
   ${co('co-idea','🧠',`<p><strong>Por que funciona.</strong> No conhecido modelo ARCS de John Keller (1987), um aluno motivado precisa de quatro coisas: <strong>A</strong>tenção, <strong>R</strong>elevância, <strong>C</strong>onfiança e <strong>S</strong>atisfação. Um aluno que diz “isso não é o que eu queria” está sem <em>Relevância</em> — e ligar a aula ao que ele já valoriza é exatamente a forma de devolvê-la.</p>`)}
  `},
  {t:'🎨 É assim que fica — quatro exemplos reais', html:`
   ${stepIconBlock('🎨','Criatividade Digital — “Eu só quero desenhar anime”', `<p><strong>O objetivo permanece:</strong> luz, proporção, cor, composição.<br><strong>O toque dele:</strong> todo exercício usa um personagem de anime — sombrear um rosto de anime, comparar as proporções de um chibi e de um herói, criar uma paleta de cores para o <em>seu</em> personagem.</p><p><em>“Adorei — hoje o personagem vai ser seu. Vamos aprender como a luz funciona no rosto do seu personagem.”</em></p>`)}
   ${stepIconBlock('🐍','Python — “Eu quero fazer jogos, não código chato”', `<p><strong>O objetivo permanece:</strong> variáveis, laços, condições.<br><strong>O toque dele:</strong> um minijogo ou quiz sobre a série ou o jogo favorito, usando exatamente os mesmos conceitos.</p><p><em>“Um jogo é só laço e condição com uma fantasia melhor. Qual vamos construir?”</em></p>`)}
   ${stepIconBlock('📖','Qualquer curso — “Eu não quero seguir a história”', `<p><strong>O objetivo permanece:</strong> a habilidade da aula.<br><strong>O toque dele:</strong> deixar de lado o enredo e praticar a mesma habilidade na ideia dele, desde que ainda aprenda o tema central da aula.</p><p><em>“Vamos pular a história — o que você gostaria de criar com essa habilidade?”</em></p>`)}
   ${stepIconBlock('🧊','Design — “Eu quero criar uma coisa minha”', `<p><strong>O objetivo permanece:</strong> a ferramenta e a técnica.<br><strong>O toque dele:</strong> ele escolhe o objeto em que vai praticar.</p><p><em>“Mostre o que você adoraria ter no seu quarto — vamos criar com a técnica de hoje.”</em></p>`)}
  `},
  {t:'🎛️ Ofereça um cardápio, não uma porta escancarada', html:`
   <div class="card"><p>“O que você quer fazer?” é aberto demais — muitas vezes a resposta é “não sei”. Dê <strong>duas ou três opções que atendam ao objetivo</strong> e deixe o aluno escolher. Uma pequena escolha dá senso de autoria; um cardápio limitado mantém a aula nos trilhos. A forma de oferecer depende da idade:</p></div>
   ${dimTabs([
     {ic:'🧒', title:'De 6 a 8 anos',
      intro:'Crianças pequenas escolhem com toda a imaginação. Dê opções concretas e divertidas — e nunca mais de duas ou três.',
      tips:[
       {ic:'🃏', html:`<strong>Escolha uma carta.</strong> <em>“Hoje podemos fazer um dragão, um robô ou um gato. Qual você escolhe?”</em>`},
       {ic:'🏷️', html:`<strong>Deixe que deem nome e se apropriem.</strong> <em>“Como se chama o seu personagem?”</em> — e use esse nome enquanto explica.`},
       {ic:'✅', html:`<strong>Diga sim ao tema, mantenha a habilidade.</strong> <em>“Sim, o dragão pode ter sombras — as sombras são o segredo de hoje.”</em>`},
       {ic:'🎉', html:`<strong>Comemore a escolha.</strong> O momento em que a ideia dele aparece na tela é o momento em que ele sente que a aula é dele.`}
      ]},
     {ic:'🧑', title:'De 9 a 11 anos',
      intro:'Eles querem opinar sobre o que constroem e reconhecer coisas do próprio mundo.',
      tips:[
       {ic:'🧩', html:`<strong>Tema + missão.</strong> <em>“Escolha o tema — espaço, futebol ou um jogo de que você gosta — e a missão continua a mesma: usar a técnica de hoje.”</em>`},
       {ic:'🔢', html:`<strong>Nota rápida.</strong> <em>“De 1 a 5, quanto você gosta deste tema? O que faria ele valer 5?”</em>`},
       {ic:'🌟', html:`<strong>Uma fase bônus para a ideia dele.</strong> Terminada a tarefa principal, ele acrescenta algo próprio.`},
       {ic:'📺', html:`<strong>Use o que eles conhecem.</strong> Faça referência aos jogos ou séries que mencionam — mostra que você escutou.`}
      ]},
     {ic:'🧑‍🎓', title:'A partir de 12 anos',
      intro:'Os mais velhos querem relevância e respeito. Trate-os como capazes e negocie.',
      tips:[
       {ic:'🤝', html:`<strong>Negocie o briefing.</strong> <em>“O que faria este projeto valer o seu tempo? Vamos achar uma versão que ensine a habilidade de hoje e seja sua.”</em>`},
       {ic:'🌍', html:`<strong>Mostre onde a habilidade é usada</strong> — nos jogos, aplicativos ou designs de que eles já gostam.`},
       {ic:'⚖️', html:`<strong>Seja honesto sobre os limites.</strong> <em>“Isso está fora deste curso — vou perguntar à minha equipe o que dá para fazer. Por hoje, vamos aplicar nisto aqui.”</em>`},
       {ic:'📣', html:`<strong>Deixe que mostrem o que fizeram</strong> ao grupo; os colegas importam muito nessa idade.`}
      ]}
   ],'✅ São as três faixas etárias. Próximo: quando a flexibilidade não basta.')}
  `},
  {t:'🧭 Quando a flexibilidade não basta — seu Team Leader e as opções', html:`
   <div class="card"><p>Algumas lacunas são grandes demais para serem resolvidas dentro da aula. Isso não é um fracasso — é exatamente por isso que o seu relato no mesmo dia importa. Estas são as situações que vão para o seu Team Leader:</p></div>
   ${iconGrid([
     {ic:'🔀', html:`<strong>O aluno quer uma habilidade totalmente diferente</strong> — por exemplo, jogos no Roblox em um curso de Design Gráfico.`},
     {ic:'📉', html:`<strong>Sua flexibilidade ajuda por uma aula, mas o interesse não volta</strong> ao longo de duas ou três aulas.`},
     {ic:'📢', html:`<strong>O responsável diz que o curso não é o que ele comprou.</strong> Reconheça, leve ao seu Team Leader e ao Client Service antes de responder e escreva literalmente as palavras da família no BO.`},
     {ic:'⚖️', html:`<strong>O nível está claramente errado.</strong> Adapte agora e relate, para que uma aula de nivelamento possa ser avaliada.`}
   ])}
   <div class="card"><h4>🎁 O que seu Team Leader e o Client Service podem providenciar — você recomenda, eles decidem</h4></div>
   ${iconGrid([
     {ic:'💬', html:`<strong>Uma aula motivacional.</strong> Uma conversa ou aula pensada para reconectar o aluno ao motivo pelo qual ele entrou.`},
     {ic:'🎚️', html:`<strong>Uma aula de nivelamento ou sessão de orientação.</strong> Verifica se o curso e o nível realmente combinam — e o que combinaria melhor.`},
     {ic:'🔄', html:`<strong>Outro curso da Kodland.</strong> Muitas vezes a melhor solução: o aluno faz algo de que gosta e continua na Kodland.`}
   ])}
   ${co('co-danger','⛔',`<p><strong>Você recomenda no BO — nunca promete.</strong> Nem “vou passar você para outro curso”, nem “isso não é possível”. As duas são decisões que não são suas.</p>`)}
   <div class="card" style="background:var(--surface2)"><h4>🗣️ O que você pode dizer ao aluno</h4>
   <p style="font-size:13.5px;line-height:1.75"><em>“Adorei que você me contou o que realmente gostaria de criar. Por hoje, vamos usar a sua ideia na aula. E eu vou ver com a minha equipe o que mais podemos fazer por você.”</em></p></div>
   ${doavoid(
     ['Perguntar o que ele gostaria de criar no início da próxima aula','Mostrar o trabalho dele ao grupo','Comemorar o momento em que a ideia dele aparece na aula'],
     ['Dizer <em>“isso não está no plano”</em>','Defender o curso em vez de escutar','Deixar que “a ideia dele” substitua o objetivo da aula']
   )}
  `},
  {t:'⌨️ Quando o próprio computador é a parte difícil', html:`
   <div class="card"><p>Às vezes, a reclamação “é difícil demais” não tem nada a ver com o conteúdo do curso. O aluno ainda está aprendendo a usar o computador: localizar as teclas, arrastar, copiar, colar, alternar entre janelas. Cada tarefa técnica se transforma em um duplo desafio — e, logo no primeiro módulo, isso pode levar a criança (ou a família) a concluir precipitadamente que o curso “não é para eles”. Você pode trabalhar essa base tecnológica desde a aula 1.</p></div>
   ${symCards([
     {ic:'🔍', title:'Sinais de alerta (o que observar)', sub:'Nas primeiras aulas',
      see:`Procura demoradamente cada tecla no teclado · tem dificuldade para arrastar, clicar com o botão direito, copiar ou colar · fica confuso ou se perde ao alternar entre janelas ou abas · hesita em compartilhar a tela · entende o conceito da aula, mas não consegue finalizar o projeto porque esbarra no <em>“como fazer”</em> técnico.`,
      tip:`Muitas vezes, essa dificuldade técnica parece lentidão de raciocínio ou falta de interesse. Peça que o aluno compartilhe a tela e observe <em>como</em> ele trabalha, não apenas <em>o que</em> ele produz.`},
     {ic:'🧑‍🏫', title:'O que fazer durante a aula',
      do:`<ul><li><strong>Demonstre devagar, com o cursor do mouse bem visível,</strong> narrando cada clique: <em>“No canto superior esquerdo, clique naquele botão verde”.</em> Use a ferramenta de zoom ao compartilhar a sua tela.</li><li><strong>Avance um passo de cada vez e faça checagens constantes:</strong> <em>“Mostre sua tela: em que etapa você está agora?”.</em></li><li><strong>Reserve dois minutos no primeiro módulo para um “aquecimento de habilidades básicas”:</strong> copiar, colar, arrastar, salvar, alternar entre janelas.</li><li><strong>Deixe uma lista de atalhos visível no chat:</strong> Ctrl+C, Ctrl+V, Ctrl+Z, Ctrl+S, Alt+Tab (ou Cmd no Mac).</li><li><strong>Elogie expressamente as conquistas tecnológicas:</strong> <em>“Você conseguiu salvar o projeto sozinho, muito bom!”.</em></li></ul>`,
      avoid:`Assumir o controle da tela do aluno ou fazer a tarefa por ele. Isso até resolve o problema pontual da aula de hoje, mas reforça na cabeça do aluno a ideia de que “ele não consegue fazer sozinho”.`},
     {ic:'👪', title:'Envolva os responsáveis na configuração básica',
      do:`Antes da aula 1 (ou assim que notar a necessidade), peça à família que verifique se o navegador Google Chrome está atualizado, se os softwares do curso estão instalados e se as senhas de login estão salvas. Com crianças menores, a presença de um responsável nos primeiros minutos da aula ajuda na organização do ambiente virtual — mas ressalte que a execução das tarefas cabe ao aluno.`},
     {ic:'🐢', title:'Quando o computador do aluno está muito lento',
      do:`<ul><li><strong>Peça que fechem outros programas e abas</strong> antes da aula e recomende o uso do Google Chrome.</li><li><strong>O Roblox Studio está travando?</strong> Ajude o aluno a reduzir a qualidade gráfica nas configurações do Roblox Studio e consulte a wiki / as notas do professor do curso para mais dicas de desempenho.</li><li><strong>Se, mesmo com os ajustes, o computador for incompatível com as exigências do curso,</strong> avise seu Team Leader. As equipes de Teaching e Sales é que definirão os próximos passos do aluno.</li></ul>`,
      avoid:`Sugerir à família que compre um computador novo ou prometer, por conta própria, que o aluno poderá mudar de curso.`},
     {ic:'📝', title:'Quando a situação foge do seu controle no grupo',
      do:`Registre um comentário no BO descrevendo o que você observou e quais estratégias tentou aplicar, e comunique seu Team Leader. Você até pode sugerir uma aula extra para focar em fundamentos básicos, mas a decisão de aprovar ou não essa aula é do Team Leader.`,
      avoid:`Oferecer a aula extra para a família antes de ter a validação e aprovação formal do Team Leader.`}
   ])}
  `}
 ],
 ix:{
  title:'Flexibilize — sem perder o objetivo',
  instr:'Escolha a melhor atitude ou classifique cada situação. Acerte 70% do quiz para liberar o checklist final.',
  items:[
   {type:'choice', prompt:`Um aluno do curso de Criatividade Digital diz: “Eu só quero desenhar anime.” Qual é a melhor resposta?`, opts:[`Dizer que anime não faz parte do curso`,`Deixar que ele desenhe personagens de anime nos exercícios enquanto você ensina luz, proporção e cor — e relatar no BO`,`Deixar que ele desenhe o que quiser e abandonar o objetivo da aula`], correct:1, fb:`O objetivo (luz, proporção, cor) permanece; o personagem é dele. Depois, relate no BO para que a equipe possa avaliar mais opções. Recusar faz perder o aluno; abandonar o objetivo faz perder a aprendizagem.`},
   {type:'sort', prompt:'Quem resolve isto?', card:`Deixar que o aluno escolha o tema do projeto.`, zones:[{label:'✅ Eu mesmo posso resolver', fb:'Correto — escolher um tema dentro do objetivo é totalmente seu e não precisa de permissão.'},{label:'🧭 Precisa do meu Team Leader', fb:'Não exatamente — uma escolha de tema que mantém o objetivo faz parte do seu próprio ensino.'}], correctZone:0},
   {type:'sort', prompt:'Quem resolve isto?', card:`O aluno pede para mudar para um curso totalmente diferente.`, zones:[{label:'✅ Eu mesmo posso resolver', fb:'Não exatamente — uma mudança de curso nunca é algo que você possa prometer ou recusar.'},{label:'🧭 Precisa do meu Team Leader', fb:'Correto — relate no BO no mesmo dia e avise seu Team Leader. Você recomenda; ele e o Client Service decidem.'}], correctZone:1},
   {type:'sort', prompt:'Quem resolve isto?', card:`Um responsável escreve: “Este não é o curso pelo qual pagamos.”`, zones:[{label:'✅ Eu mesmo posso resolver', fb:'Não exatamente — esta é a mensagem mais delicada que você pode receber. Responder sozinho pode confirmar uma reclamação ou sugerir algo que não podemos entregar.'},{label:'🧭 Precisa do meu Team Leader', fb:'Correto — confirme o recebimento, leve ao seu Team Leader e ao Client Service antes de responder e registre as palavras da família no BO.'}], correctZone:1},
   {type:'choice', prompt:`Uma criança de 7 anos diz que as aulas são chatas. Qual oferta funciona melhor?`, opts:[`“Vamos criar o projeto inteiro juntos — qual é o seu briefing de cinco pontos?”`,`“Como você quer que seja o seu personagem — um dragão, um robô ou um gato?” e usar esse personagem na atividade de hoje`,`“É assim que o curso funciona — você vai gostar mais para a frente.”`], correct:1, fb:`Crianças pequenas escolhem melhor entre duas ou três opções concretas e divertidas. Um briefing aberto é para alunos mais velhos, e “você vai gostar mais para a frente” defende o curso em vez de escutar.`},
   {type:'choice', prompt:`O que significa “mantenha o objetivo, flexibilize o caminho”?`, opts:[`Pular as atividades de que o aluno não gosta`,`Seguir apenas os interesses do aluno`,`Mudar o tema ou a atividade, mas manter a habilidade para a qual a aula serve`], correct:2, fb:`O objetivo e os resultados do manual permanecem; tema, personagem, assunto e ordem podem se ajustar.`},
   {type:'choice', prompt:`Um aluno pergunta: “Posso fazer outro curso no lugar deste?” O que você responde?`, opts:[`“Sim, eu providencio isso para você.”`,`“Não, você já começou este.”`,`“Adorei que você me contou. Vou ver com a minha equipe o que podemos fazer — e, enquanto isso, vamos usar a sua ideia na aula de hoje.”`], correct:2, fb:`Nem prometer nem recusar cabe a você — mas escutar, usar a ideia dele agora e iniciar a conversa interna é exatamente o seu trabalho.`},
   {type:'sort', prompt:'Isto mantém o objetivo de aprendizagem?', card:`O objetivo da aula é a técnica de animação, então o aluno anima qualquer objeto que escolher.`, zones:[{label:'✅ Mantém o objetivo', fb:'Correto — a escolha é dele, a técnica continua sendo praticada.'},{label:'⛔ Perde o objetivo', fb:'Não exatamente — ele continua praticando a técnica para a qual a aula serve.'}], correctZone:0},
   {type:'choice', prompt:`Na aula 2, um menino de 7 anos entende perfeitamente a tarefa, mas nunca a conclui: ele demora procurando cada tecla e tem muita dificuldade para copiar e colar. O que mais ajuda nesse caso?`, opts:[`Assumir o controle da tela dele e fazer a tarefa por ele, garantindo que acompanhe o ritmo da turma`,`Dizer ao responsável que o curso é avançado demais para a criança`,`Demonstrar devagar com o cursor visível, avançar um passo de cada vez, incluir um breve aquecimento de habilidades básicas e pedir ao responsável que auxilie na configuração inicial`], correct:2, fb:`O domínio básico do computador pode (e deve) ser treinado desde a aula 1. Fazer a tarefa pela criança só confirma a insegurança dela; afirmar que o curso é “avançado demais” não é uma decisão que cabe ao tutor.`},
   {type:'sort', prompt:'Quem resolve esta situação?', card:`O computador de um aluno não consegue rodar o Roblox Studio de jeito nenhum, mesmo depois de fechar os outros programas e reduzir a qualidade gráfica.`, zones:[{label:'✅ Posso resolver sozinho', fb:'Incorreto. Você já esgotou os recursos da sua etapa. Se o computador não atende aos requisitos mínimos, a decisão sobre a continuidade do aluno não cabe a você.'},{label:'🧭 Precisa da atuação do meu Team Leader', fb:'Correto! Avise seu Team Leader. As equipes de Teaching e Sales decidirão em conjunto como o aluno deverá prosseguir. Nunca sugira à família a compra de um equipamento novo nem prometa mudança de curso.'}], correctZone:1}
  ]
 }
},
{id:'checklist', numLabel:'Checklist final', emoji:'✅', color:'var(--coral)',
 title:'Checklist final',
 desc:'Sem quiz aqui — apenas o essencial deste minitreinamento, antes de você encerrá-lo.',
 obj:'Revise o checklist abaixo. Este módulo não tem avaliação. Leia os itens e, em seguida, conclua o minitreinamento.',
 sections:[
  {t:'🛟 Se já existe um pedido de reembolso', html:`
   ${numlist([
     'Deixei um comentário no BO no mesmo dia em que soube do pedido e avisei meu Team Leader',
     'Minha próxima aula com este aluno foi uma tentativa real de reverter — um papel de verdade, uma conquista visível, atenção específica, sem mencionar o pedido',
     'Nunca confirmei aprovação nem comentei valores — usei a única frase segura e deixei o resto para o Client Service'
   ])}
  `},
  {t:'🌱 Em toda aula', html:`
   ${numlist([
     'Nas duas primeiras aulas faço o diagnóstico rápido: o que o aluno sabe, o que espera, o que pareceu fácil ou difícil e um exercício curto feito sozinho',
     'Depois de cada aula, leio como verde, amarelo ou vermelho — e depois de duas aulas amarelas seguidas aviso meu Team Leader na mesma semana',
     'A cada 2 ou 3 aulas faço uma pergunta de acompanhamento: a parte mais legal, o que mudaria, o quanto foi difícil de 1 a 5, o que quer criar',
     'Logo depois da aula escrevo 2 ou 3 linhas: o sinal, o momento e as palavras do próprio aluno',
     'Relato uma possível divergência no BO no mesmo dia — mesmo quando não tenho certeza; um relato desnecessário não custa nada',
     'Mantenho o objetivo de aprendizagem fixo e flexibilizo o tema, o projeto, o personagem ou a ordem dos passos',
     'Ofereço duas ou três escolhas que atendem ao objetivo, de um jeito adequado à idade da criança',
     'Nunca prometo mudança de curso, de nível ou uma aula extra — recomendo no BO e digo “vou ver com a minha equipe”',
     'Não defendo o curso nem digo que “melhora mais para a frente” — primeiro escuto, depois adapto',
     'Quando um responsável diz que o curso não é o que esperava, reconheço, levo ao meu Team Leader e ao Client Service antes de responder e registro as palavras dele no BO',
     'Comemoro o momento em que a ideia do próprio aluno aparece na aula e mostro o trabalho dele ao grupo',
     'Nas primeiras aulas, apresento claramente o escopo do curso: o que os alunos vão criar, qual a carga real de programação versus design, e como as ferramentas de IA são utilizadas (se houver)',
     'Envio aos responsáveis uma mensagem curta de alinhamento após as aulas 1 ou 2, baseada na ementa do curso, sem nunca prometer projetos ou resultados que fujam do currículo oficial',
     'Quando um aluno tem dificuldade com as funções básicas do computador, demonstro a tela devagar (com o cursor visível), oriento passo a passo e dedico alguns minutos para um aquecimento de habilidades digitais',
     'Peço aos responsáveis que auxiliem apenas na configuração inicial (atualização do Chrome, instalação de ferramentas e login), e não na resolução das tarefas',
     'Se o computador apresentar lentidão excessiva, ajudo o aluno a fechar abas desnecessárias e a reduzir a qualidade gráfica do Roblox Studio, com as dicas da wiki; se a máquina for incompatível com o curso, escalo o caso para o meu Team Leader'
   ])}
  `},
  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>É isso, este é todo o minitreinamento.</strong> Quando estiver pronto, continue — depois faça a DST no LMS para encerrar a tarefa.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
