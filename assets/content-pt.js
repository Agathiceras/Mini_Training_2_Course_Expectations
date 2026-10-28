/* Mini_Training_2_Course_Expectations - Portuguese content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='pt';
const CONTENT = {
  flag:'🇧🇷', dir:'ltr',
  ui:{
    pageTitle:"Minitreinamento · Expectativas — Treinamento de Tutores Kodland",
    logoSub:'Departamento de Desenvolvimento de Tutores',
    heroEyebrow:"🎯 Minitreinamento",
    heroTitle:"Fechando a Lacuna de <span class=\"h-pill\">Expectativas</span>",
    heroIntro:"Você recebeu este treinamento porque tem alunos que pediram reembolso por o curso não ter atendido às expectativas, não ser o que queriam ou por não gostarem do conteúdo. Aqui, vamos mostrar o que você pode fazer como tutor e como lidar com essas situações.",
    heroWork:"Faça 4 módulos curtos. Cada verificação de módulo exige 70% ou mais para liberar o próximo. Cerca de 20 a 25 minutos no total.",
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
  {t:'⏱️ O segredo é a rapidez — e o seu relato', html:`
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
     {ic:'🙋', html:`<strong>Dê à criança um papel de verdade.</strong> Não uma pergunta sem sentido — um momento genuíno em que ela é vista e tem sucesso.`},
     {ic:'🏆', html:`<strong>Garanta uma conquista visível logo no início.</strong> Ela deve sair da aula se sentindo capaz, não atrasada.`},
     {ic:'👀', html:`<strong>Atenção específica</strong> — faça-a se sentir notada por algo concreto, e não elogiada de forma genérica.`},
     {ic:'🤐', html:`<strong>Nenhuma menção ao pedido</strong> — mesmo que a criança toque no assunto, redirecione com carinho e continue ensinando.`}
   ])}
  `},
  {t:'📮 Avise rápido e conheça a única frase segura', html:`
   <div class="card"><p>Você pode descobrir que existe um pedido pelos comentários do Client Service no perfil da criança no BO — não há nenhum sistema automático que avise você. Depois que você sabe, o que você viu nas suas aulas é uma informação que o Client Service não tem de nenhuma outra forma.</p></div>
   ${numlist([
     'Deixe um comentário no BO no mesmo dia com exatamente o que você viu — datas e detalhes, não impressões',
     'Inclua as palavras da própria família, literalmente, se você as tiver',
     'Avise seu Team Leader no mesmo dia',
     'Nunca confirme que um reembolso foi aprovado nem comente qualquer valor'
   ])}
   ${co('co-ok','✅',`<p><strong>A mensagem que é sempre segura:</strong> <em>“O Client Service vai ajudar vocês com isso.”</em> É aí que termina a sua parte da conversa — a partir dali, o Client Service assume.</p>`)}
  `},
  {t:'🌱 Continue depois', html:`
   <div class="card"><p>Quer o pedido seja retirado, a criança continue no seu grupo ou passe para outro tutor ou formato, continue dando atenção extra nas próximas aulas. Uma recuperação que dura uma aula e depois volta silenciosamente ao normal muitas vezes não se sustenta.</p></div>
  `}
 ]
},
{id:'spot', numLabel:'Módulo 1', emoji:'🔎', color:'var(--coral)',
 title:'Perceba a lacuna cedo — e relate no mesmo dia',
 desc:'As três formas que uma divergência pode tomar, um diagnóstico rápido para as primeiras aulas, uma checagem em semáforo para toda aula e como relatar no BO.',
 obj:'Reconhecer que tipo de divergência você está vendo, fazer um diagnóstico rápido, ler os sinais aula a aula e relatar o caso no BO no mesmo dia.',
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
   ${stepIconBlock('🗣️','“Você já trabalhou com [a ferramenta ou a linguagem do curso] antes?”', `<p>Aberta e sem pressão. Deixe o aluno falar e escute o quanto ele realmente sabe.</p><p>⚠️ <strong>Fique atento a:</strong> “Sim, eu já sei tudo isso” — ou “Não faço ideia do que você está falando.”</p>`)}
   ${stepIconBlock('🌈','“O que você esperava aprender neste curso?”', `<p>Mostra a diferença entre aquilo em que o responsável matriculou a criança e o que o aluno realmente quer fazer.</p><p>⚠️ <strong>Fique atento a:</strong> uma resposta que não tem nada a ver com o curso em que ele está matriculado.</p>`)}
   ${stepIconBlock('⚖️','“Que parte de hoje pareceu fácil e qual pareceu difícil?”', `<p>Pergunte depois do primeiro exercício. Isso mostra o quanto o aluno está realmente confortável com o nível.</p><p>✅ <strong>Ideal:</strong> “a primeira parte foi fácil, a segunda foi difícil” — o nível está certo.<br>⚠️ <strong>Fique atento a:</strong> “tudo foi fácil” ou “eu não entendi nada.”</p>`)}
   ${stepIconBlock('✏️','Um exercício curto, feito sozinho (5 a 8 minutos)', `<p>Peça ao aluno que faça o primeiro exercício do módulo sozinho, sem ajuda. Observe quanto tempo leva e se ele consegue ao menos começar.</p><p>✅ <strong>Normal:</strong> precisa de alguma orientação e leva o tempo esperado.<br>⚠️ <strong>Fique atento a:</strong> termina na hora, ou não consegue começar sozinho.</p>`)}
   ${co('co-idea','💡',`<p><strong>Já passou da aula 2?</strong> Faça as mesmas perguntas esta semana. O diagnóstico funciona em qualquer momento do curso — quanto mais cedo você perguntar, mais opções ainda estarão abertas.</p>`)}
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
   <p style="font-size:13.5px;line-height:1.75"><strong>Aluno:</strong> [nome] · <strong>Curso / nível:</strong> [ex.: Ilustração, nível 1] · <strong>Aula:</strong> [M1L2 — data]<br>
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
     ['Compartilhar o que você percebe sobre a aprendizagem: <em>“Ela se ilumina quando desenha personagens — estou incluindo isso nas nossas aulas.”</em>','Dizer que você compartilhou o assunto com a sua equipe e que vai retornar','Perguntar o que gostariam que o filho aproveitasse do curso','Agradecer por terem contado — com carinho, e no mesmo dia'],
     ['Sugerir por conta própria outro curso, uma mudança de nível ou um reembolso','Defender o curso: <em>“ele melhora mais para a frente”</em>','Prometer uma aula ou uma mudança','Dizer <em>“ele não gostou deste curso”</em> — soa como um fracasso']
   )}
   <div class="card" style="background:var(--surface2)"><h4>📨 Depois que seu Team Leader confirmar uma recomendação — apresente-a como uma oportunidade</h4>
   <p style="font-size:13.5px;line-height:1.75"><em>“Olá, [nome do responsável], sou [seu nome], tutor(a) de [aluno]. Percebi que [aluno] tem muito potencial, mas, nas primeiras aulas, senti que o foco deste curso não é bem o que ele tinha em mente — [ex.: ele comentou que gostaria de criar jogos, e não apenas programar]. Quero que [aluno] aproveite ao máximo o tempo dele na Kodland e goste dele, então, junto com a nossa equipe, gostaríamos de avaliar se [outro curso] pode ser mais adequado. Você teria alguns minutos esta semana para eu contar mais?”</em></p></div>
   ${co('co-idea','💡',`<p><strong>Diga</strong> “encontramos algo de que ele pode gostar ainda mais” — <strong>nunca</strong> “ele não gostou deste curso.”</p>`)}
  `}
 ],
 ix:{
  title:'Perceba, nomeie, relate',
  instr:'Classifique as falas e escolha a melhor atitude. 70% para liberar o próximo módulo.',
  items:[
   {type:'sort', prompt:'Que forma de divergência é esta?', card:`“Eu achei que a gente ia fazer jogos, não só digitar código.”`, zones:[{label:'🎯 Não é o que eu queria', fb:'Correto — a expectativa era diferente do curso. A flexibilidade pode reduzir parte da distância, e um relato mantém outras opções abertas.'},{label:'😒 Não gosta do conteúdo', fb:'Não exatamente — este aluno tem algo específico que esperava fazer. Isso é uma lacuna de “não é o que eu queria”.'},{label:'⚖️ O nível parece errado', fb:'Não exatamente — nada aqui fala de dificuldade. Trata-se do que ele esperava criar.'}], correctZone:0},
   {type:'sort', prompt:'Que forma de divergência é esta?', card:`“Tudo foi muito fácil — eu já sei isso.”`, zones:[{label:'🎯 Não é o que eu queria', fb:'Não exatamente — este aluno está falando de dificuldade, não do tema.'},{label:'😒 Não gosta do conteúdo', fb:'Não exatamente — o problema é o nível, mesmo que pareça tédio com o conteúdo.'},{label:'⚖️ O nível parece errado', fb:'Correto — parece falta de gosto, mas é o nível. Adapte agora e sinalize para uma aula de nivelamento.'}], correctZone:2},
   {type:'sort', prompt:'Que forma de divergência é esta?', card:`Em toda aula ela faz os exercícios só porque tem que fazer, responde “sei lá” e pede para terminar mais cedo.`, zones:[{label:'🎯 Não é o que eu queria', fb:'Não exatamente — ela não disse o que esperava. O padrão é de pouco interesse no próprio conteúdo.'},{label:'😒 Não gosta do conteúdo', fb:'Correto — o conteúdo, ou a forma como é apresentado, não fala com ela. Ofereça escolhas dentro do objetivo e relate.'},{label:'⚖️ O nível parece errado', fb:'Não exatamente — nada indica um problema de dificuldade; o sinal é o pouco interesse.'}], correctZone:1},
   {type:'choice', prompt:`No diagnóstico, você pergunta “O que você esperava aprender?” e o aluno responde: “Desenhar anime — não isso.” Qual é o melhor próximo passo?`, opts:[`Explicar que o anime vem mais para a frente no curso e continuar exatamente como planejado`,`Trazer o interesse dele para a aula de hoje, no que for possível, e relatar no BO no mesmo dia`,`Esperar mais duas aulas para ver se passa`], correct:1, fb:`Flexibilize já na aula o que for possível e relate no mesmo dia, para que a equipe ainda tenha todas as opções. Esperar, ou defender o plano, gasta a janela de tempo.`},
   {type:'sort', prompt:'Onde este quadro se encaixa no semáforo?', card:`Duas aulas seguidas: respostas de uma palavra e pedidos para terminar mais cedo.`, zones:[{label:'🟢 Verde', fb:'Não exatamente — duas aulas de respostas de uma palavra e vontade de sair mais cedo não é “tudo bem”.'},{label:'🟡 Amarelo', fb:'Correto — anote, tente uma mudança flexível e avise seu Team Leader na mesma semana. Não espere chegar ao vermelho.'},{label:'🔴 Vermelho', fb:'Ainda não — vermelho significa recusa, desgosto declarado ou um responsável escrevendo. Mas amarelo duas vezes seguidas já significa: avise seu Team Leader esta semana.'}], correctZone:1},
  ]
 }
},
{id:'flex', numLabel:'Módulo 2', emoji:'🎛️', color:'var(--coral)',
 title:'Faça o curso caber neles — flexibilidade que mantém o objetivo',
 desc:'Como adaptar uma aula ao que o aluno realmente quer aprender sem perder o objetivo de aprendizagem, como oferecer escolhas por idade e quando o seu Team Leader precisa entrar.',
 obj:'Adaptar uma aula aos interesses do aluno mantendo o objetivo de aprendizagem, oferecer escolhas adequadas à idade e saber quando a flexibilidade não basta e o seu Team Leader precisa entrar.',
 sections:[
  {t:'🎯 A regra: mantenha o objetivo, flexibilize o caminho', html:`
   <div class="card"><p>Você não precisa escolher entre “seguir o manual” e “deixar fazer o que quiser”. O manual diz para que <strong>serve</strong> a aula. Quase todo o resto pode se ajustar.</p></div>
   <div class="two-col">
     <div class="card"><h4>🔒 Permanece igual</h4><ul><li>O objetivo de aprendizagem e as habilidades da aula</li><li>Os resultados esperados no manual</li><li>A estrutura da aula (aquecimento, prática, encerramento)</li></ul></div>
     <div class="card"><h4>🎛️ Pode se ajustar</h4><ul><li>O tema, o personagem, a história</li><li>O assunto do projeto</li><li>A ordem dos passos</li><li>O exemplo que você usa e a dificuldade da atividade</li></ul></div>
   </div>
   ${co('co-idea','🧠',`<p><strong>Por que funciona.</strong> No conhecido modelo ARCS de John Keller (1987), um aluno motivado precisa de quatro coisas: <strong>A</strong>tenção, <strong>R</strong>elevância, <strong>C</strong>onfiança e <strong>S</strong>atisfação. Um aluno que diz “isso não é o que eu queria” está sem <em>Relevância</em> — e ligar a aula ao que ele já valoriza é exatamente a forma de devolvê-la.</p>`)}
  `},
  {t:'🎨 É assim que fica — cinco exemplos reais', html:`
   ${stepIconBlock('🎨','Ilustração — “Eu só quero desenhar anime”', `<p><strong>O objetivo permanece:</strong> luz, proporção, cor, composição.<br><strong>O toque dele:</strong> todo exercício usa um personagem de anime — sombrear um rosto de anime, comparar as proporções de um chibi e de um herói, criar uma paleta de cores para o <em>seu</em> personagem.</p><p><em>“Adorei — hoje o personagem vai ser seu. Vamos aprender como a luz funciona no rosto do seu personagem.”</em></p>`)}
   ${stepIconBlock('🐍','Python — “Eu quero fazer jogos, não código chato”', `<p><strong>O objetivo permanece:</strong> variáveis, laços, condições.<br><strong>O toque dele:</strong> um minijogo ou quiz sobre a série ou o jogo favorito, usando exatamente os mesmos conceitos.</p><p><em>“Um jogo é só laço e condição com uma fantasia melhor. Qual vamos construir?”</em></p>`)}
   ${stepIconBlock('📖','Qualquer curso — “Eu não quero seguir a história”', `<p><strong>O objetivo permanece:</strong> a habilidade da aula.<br><strong>O toque dele:</strong> deixar de lado o enredo e praticar a mesma habilidade na ideia dele, desde que ainda aprenda o tema central da aula.</p><p><em>“Vamos pular a história — o que você gostaria de criar com essa habilidade?”</em></p>`)}
   ${stepIconBlock('🧊','3D / design — “Eu quero modelar uma coisa minha”', `<p><strong>O objetivo permanece:</strong> a ferramenta e a técnica.<br><strong>O toque dele:</strong> ele escolhe o objeto em que vai praticar.</p><p><em>“Mostre o que você adoraria ter no seu quarto — vamos construir com a técnica de hoje.”</em></p>`)}
   ${stepIconBlock('🌐','Web — “Eu prefiro fazer uma página sobre um assunto meu”', `<p><strong>O objetivo permanece:</strong> estrutura, layout, links.<br><strong>O toque dele:</strong> uma página sobre o time de futebol, a série ou o hobby dele.</p><p><em>“Escolha um assunto sobre o qual você falaria por uma hora — essa é a sua página.”</em></p>`)}
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
       {ic:'🧩', html:`<strong>Tema mais missão.</strong> <em>“Escolha o tema — espaço, futebol ou um jogo de que você gosta — e a missão continua a mesma: usar a técnica de hoje.”</em>`},
       {ic:'🔢', html:`<strong>Nota rápida.</strong> <em>“De 1 a 5, quanto você gosta deste tema? O que faria ele valer 5?”</em>`},
       {ic:'🌟', html:`<strong>Uma fase bônus para a ideia dele.</strong> Terminada a tarefa principal, ele acrescenta algo seu.`},
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
     {ic:'🔀', html:`<strong>O aluno quer uma habilidade totalmente diferente</strong> — por exemplo, jogos 3D em um curso de desenho.`},
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
  `}
 ],
 ix:{
  title:'Flexibilize — sem perder o objetivo',
  instr:'Escolha a melhor atitude ou classifique cada situação. 70% para liberar a checklist final.',
  items:[
   {type:'choice', prompt:`Um aluno do curso de Ilustração diz: “Eu só quero desenhar anime.” Qual é a melhor resposta?`, opts:[`Dizer que anime não faz parte do curso`,`Deixar que ele desenhe personagens de anime nos exercícios enquanto você ensina luz, proporção e cor — e relatar no BO`,`Deixar que ele desenhe o que quiser e abandonar o objetivo da aula`], correct:1, fb:`O objetivo (luz, proporção, cor) permanece; o personagem é dele. Depois, relate no BO para que a equipe possa avaliar mais opções. Recusar faz perder o aluno; abandonar o objetivo faz perder a aprendizagem.`},
   {type:'sort', prompt:'Quem resolve isto?', card:`Deixar que o aluno escolha o tema do projeto.`, zones:[{label:'✅ Eu mesmo posso resolver', fb:'Correto — escolher um tema dentro do objetivo é totalmente seu e não precisa de permissão.'},{label:'🧭 Precisa do meu Team Leader', fb:'Não exatamente — uma escolha de tema que mantém o objetivo faz parte do seu próprio ensino.'}], correctZone:0},
   {type:'sort', prompt:'Quem resolve isto?', card:`O aluno pede para mudar para um curso totalmente diferente.`, zones:[{label:'✅ Eu mesmo posso resolver', fb:'Não exatamente — uma mudança de curso nunca é algo que você possa prometer ou recusar.'},{label:'🧭 Precisa do meu Team Leader', fb:'Correto — relate no BO no mesmo dia e avise seu Team Leader. Você recomenda; ele e o Client Service decidem.'}], correctZone:1},
   {type:'sort', prompt:'Quem resolve isto?', card:`Um responsável escreve: “Este não é o curso pelo qual pagamos.”`, zones:[{label:'✅ Eu mesmo posso resolver', fb:'Não exatamente — esta é a mensagem mais delicada que você pode receber. Responder sozinho pode confirmar uma reclamação ou sugerir algo que não podemos entregar.'},{label:'🧭 Precisa do meu Team Leader', fb:'Correto — confirme o recebimento, leve ao seu Team Leader e ao Client Service antes de responder e registre as palavras da família no BO.'}], correctZone:1},
   {type:'choice', prompt:`Uma criança de 7 anos diz que as aulas são chatas. Qual oferta funciona melhor?`, opts:[`“Vamos criar o projeto inteiro juntos — qual é o seu briefing de cinco pontos?”`,`“Como você quer que seja o seu personagem — um dragão, um robô ou um gato?” e usar esse personagem na atividade de hoje`,`“É assim que o curso funciona — você vai gostar mais para a frente.”`], correct:1, fb:`Crianças pequenas escolhem melhor entre duas ou três opções concretas e divertidas. Um briefing aberto é para alunos mais velhos, e “você vai gostar mais para a frente” defende o curso em vez de escutar.`},
   {type:'choice', prompt:`O que significa “mantenha o objetivo, flexibilize o caminho”?`, opts:[`Pular as atividades de que o aluno não gosta`,`Seguir apenas os interesses do aluno`,`Mudar o tema ou a atividade, mas manter a habilidade para a qual a aula serve`], correct:2, fb:`O objetivo e os resultados do manual permanecem; tema, personagem, assunto e ordem podem se ajustar.`},
   {type:'choice', prompt:`Um aluno pergunta: “Posso fazer outro curso no lugar deste?” O que você responde?`, opts:[`“Sim, eu providencio isso para você.”`,`“Não, você já começou este.”`,`“Adorei que você me contou. Vou ver com a minha equipe o que podemos fazer — e, enquanto isso, vamos usar a sua ideia na aula de hoje.”`], correct:2, fb:`Nem prometer nem recusar cabe a você — mas escutar, usar a ideia dele agora e iniciar a conversa interna é exatamente o seu trabalho.`},
   {type:'sort', prompt:'Isto mantém o objetivo de aprendizagem?', card:`O objetivo da aula é a técnica de animação, então o aluno anima qualquer objeto que escolher.`, zones:[{label:'✅ Mantém o objetivo', fb:'Correto — a escolha é dele, a técnica continua sendo praticada.'},{label:'⛔ Perde o objetivo', fb:'Não exatamente — ele continua praticando a técnica para a qual a aula serve.'}], correctZone:0}
  ]
 }
},
{id:'checklist', numLabel:'Checklist final', emoji:'✅', color:'var(--coral)',
 title:'Checklist final',
 desc:'Sem quiz aqui — apenas o essencial deste minitreinamento, antes de você encerrá-lo.',
 obj:'Revise a checklist abaixo. Este módulo não tem nota — leia e depois conclua o minitreinamento.',
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
     'Comemoro o momento em que a ideia do próprio aluno aparece na aula e mostro o trabalho dele ao grupo'
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
