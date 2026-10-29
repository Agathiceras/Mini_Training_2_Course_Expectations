/* Mini_Training_2_Course_Expectations - Italian content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='it';
const CONTENT = {
  flag:'🇮🇹', dir:'ltr',
  ui:{
    pageTitle:"Mini-training · Aspettative — Kodland Tutor Training",
    logoSub:'Tutor Development Department',
    heroEyebrow:"🎯 Mini-training",
    heroTitle:"Colmare il divario tra corso e <span class=\"h-pill\">aspettative</span>",
    heroIntro:"Hai ricevuto questo training perché alcuni dei tuoi studenti hanno chiesto un rimborso: il corso non ha soddisfatto le loro aspettative, non era quello che volevano oppure i contenuti non piacciono loro. Qui ti mostriamo cosa puoi fare come tutor e come gestire queste situazioni.",
    heroWork:"Completa 4 brevi moduli. Per sbloccare il modulo successivo devi ottenere almeno il 70% nella verifica di ogni modulo. In tutto ci vogliono circa 20–25 minuti.",
    startBtn:"🚀 Inizia il training",
    pathLabel:'Il tuo percorso di apprendimento',
    devTitle:'Dev: sblocca tutti i moduli per la revisione',
    backToPath:'Torna al percorso',
    modulesPassed:'{done} / {total} moduli superati',
    moduleN:'Modulo {n}',
    of:'di',
    locked:'🔒 Bloccato',
    passedBadge:'✅ Superato · {pct}%',
    reviewedBadge:'✅ Rivisto',
    startBadge:'▶ Inizia',
    reviewBadge:'▶ Rivedi',
    objective:'Obiettivo',
    startCheck:'▶ Inizia la verifica del modulo',
    finishBtn:'▶ Concludi il mini-training',
    doneBack:'✓ Fatto — torna al percorso',
    ixBadge:'📋 Verifica del modulo — 70% per sbloccare il modulo successivo',
    ixItemBadge:'📋 Verifica del modulo — domanda {i} di {n}',
    scoreSoFar:'Punteggio finora: {c} / {t}',
    continue:'Continua →',
    sortWrong:'Non proprio — la risposta giusta è «{label}».',
    resPassed:'Modulo superato!',
    resFailed:'Non ci sei ancora',
    resUnlocked:"Hai sbloccato il modulo successivo.",
    resDone:"Hai completato questo mini-training.",
    resNeed:'Ti serve il 70% per sbloccare il modulo successivo. Rivedi la sezione qui sopra e riprova la verifica.',
    resContinue:'Continua al percorso di apprendimento',
    resFinish:'Continua',
    resBack:'Torna al percorso',
    resReview:'Rivedi questo modulo',
    doneEyebrow:'Mini-training completato',
    doneTitle:'🎉 Congratulazioni!',
    doneP1:"🎉 <strong>Congratulazioni! Hai completato questo mini-training.</strong>",
    doneP2:"Hai finito! Torna alla pagina del training nell’LMS da cui hai aperto questo mini-training per chiudere l’attività.",
    doneP3:"👉 <strong>Se nell’LMS, subito sotto il training, è presente una verifica o una valutazione, assicurati di completarla e di ottenere un punteggio sufficiente</strong> — altrimenti l’attività potrebbe risultare incompleta.",
    doneP4:'Buona fortuna! ❤️',
    doneP5:'',
    devUnlockAlert:'Modalità dev: ora tutti i moduli sono sbloccati per la revisione.',
    devOn:'🔓 Modalità dev ATTIVA — tutti i moduli sbloccati',
    devOff:'🔒 Modalità dev DISATTIVATA — progressi azzerati',
    devBadge:'🔓 MODALITÀ DEV',
    doLabel:'✅ Da fare',
    avoidLabel:'🚫 Da evitare',
    noticeLabel:'Osserva:',
    cvSee:'Cosa vedi:',
    cvDo:'Cosa fai:',
    dtExample:'Esempio da una lezione reale',
    dtNext:'Avanti:',
    dtDone:"✅ Hai visto tutte e quattro le aree. Ora classifica quello che osservi.",
    tlVideoTitle:'{label} — un esempio da una lezione reale',
    tlVideoMeta:'Guarda come si presenta questa fase in una lezione reale'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Introduzione', emoji:'🧩', color:'var(--coral)',
 title:'Perché sei qui',
 desc:'Perché «non è quello che volevamo» è uno dei pochi motivi di rimborso su cui puoi ancora intervenire — e le regole da seguire quando una richiesta di rimborso è già arrivata.',
 obj:'Capire perché uno scarto tra il corso e ciò che lo studente o la famiglia si aspettavano spesso si può colmare, perché una segnalazione fatta il giorno stesso conta più di tutto, e cosa fare (e non fare) esattamente quando una richiesta di rimborso esiste già.',
 sections:[
  {t:'🎭 «Non è quello che volevamo» — cosa c’è davvero dietro', html:`
   <div class="card"><p>Non puoi vedere la conversazione di vendita, la lezione di prova o ciò che la famiglia immaginava al momento dell’iscrizione. Quello che <em>puoi</em> vedere è un bambino nella tua lezione — e lo scarto si manifesta quasi sempre lì per primo, molto prima che un genitore scriva qualcosa.</p></div>
   ${iconGrid([
     {ic:'🎯', html:`<strong>L’argomento non è quello che immaginavano.</strong> Volevano creare videogiochi e il corso parte dalle basi. Volevano disegnare anime e il corso insegna luce, proporzioni e colore.`},
     {ic:'🧸', html:`<strong>Ha scelto il genitore, non il bambino.</strong> Il bambino non ha mai chiesto questo corso, quindi ogni lezione gli sembra un compito per casa.`},
     {ic:'⚖️', html:`<strong>Il livello non sembra quello giusto.</strong> Troppo facile diventa «contenuti noiosi». Troppo difficile diventa «non fa per me». In entrambi i casi viene segnalato come qualcosa che non piace.`},
     {ic:'⏳', html:`<strong>La parte divertente non è ancora arrivata.</strong> Le prime lezioni costruiscono le basi, e lo studente se ne va prima di vedere dove portano.`}
   ])}
   ${co('co-idea','💡',`<p><strong>Questo è uno dei pochi motivi di rimborso che si possono ancora ribaltare.</strong> A uno studente che vuole qualcosa di diverso spesso si può offrire qualcosa di diverso — nella tua lezione, con una lezione di valutazione del livello o una sessione di orientamento, oppure in un altro corso Kodland in cui sarà più contento.</p>`)}
  `},
  {t:'⏱️ La chiave è la rapidità — e la tua segnalazione', html:`
   <div class="card"><p>Non sei tu a decidere se uno studente cambia corso o livello. Ma è la tua segnalazione ad avviare quella conversazione, e funziona solo se arriva <strong>presto</strong> alle persone giuste.</p></div>
   ${stepFlow([
     {ic:'👀', label:'Noti lo scarto durante una lezione'},
     {ic:'📝', label:'Lo segnali in BO il giorno stesso'},
     {ic:'👩‍💼', label:'Il tuo Team Leader e il Client Service valutano le opzioni'},
     {ic:'🔄', label:'Una lezione motivazionale, una lezione di valutazione del livello o una sessione di orientamento, oppure un altro corso Kodland'}
   ])}
   ${co('co-danger','🚨',`<p><strong>Una segnalazione tardiva chiude delle porte.</strong> Quando la famiglia ha già deciso, la maggior parte di queste opzioni non c’è più. La stessa segnalazione, scritta nelle prime due settimane, può far restare un bambino in Kodland.</p>`)}
   ${co('co-ok','✅',`<p><strong>E mentre il team valuta le opzioni, tu hai ancora la lezione.</strong> Un insegnamento flessibile e centrato sullo studente è la parte che dipende interamente da te — il Modulo 2 ti mostra come fare.</p>`)}
  `},
  {t:'🛟 Se esiste già una richiesta di rimborso', html:`
   <div class="card"><p>Tutto quello che hai letto finora serve a intercettare il problema presto. Ma forse stai aprendo questo training perché una famiglia ha <strong>già</strong> chiesto un rimborso. Le regole qui sotto valgono qualunque sia il motivo — leggile per prime, poi usa il resto del training per capire cosa ha portato a questa situazione e cosa puoi ancora fare in lezione.</p></div>
   ${co('co-idea','💡',`<p><strong>La richiesta viene creata dal Client Service, non da te</strong> — quella parte non dipende da te. Quello che resta tuo è tutto ciò che succede in lezione da qui in avanti, e non è poco.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Non dire nulla sulla richiesta</strong> — né al bambino né alla famiglia — a meno che il Client Service non ti chieda esplicitamente di dire qualcosa di specifico. Ora il tuo compito è la lezione, non la conversazione.</p>`)}
  `},
  {t:'🎯 La tua prossima lezione è il tentativo di recupero', html:`
   <div class="card"><p>Potresti non avere altre occasioni per cambiare le cose. Considera la prossima lezione con questo bambino come il momento decisivo.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Dagli un vero spazio da protagonista.</strong> Non una domanda di circostanza — un momento autentico in cui si sente visto e ci riesce.`},
     {ic:'🏆', html:`<strong>Prevedi un successo presto e ben visibile.</strong> Deve uscire dalla lezione sentendosi capace, non indietro.`},
     {ic:'👀', html:`<strong>Attenzione specifica</strong> — fallo sentire notato per qualcosa di concreto, non lodato in modo generico.`},
     {ic:'🤐', html:`<strong>Nessun accenno alla richiesta</strong> — anche se è il bambino a tirarla fuori, sposta il discorso con gentilezza e continua la lezione.`}
   ])}
  `},
  {t:'📮 Avvisa subito, e conosci l’unica frase sicura', html:`
   <div class="card"><p>Puoi scoprire che esiste una richiesta dai commenti del Client Service sul profilo del bambino in BO — non c’è un sistema automatico che ti avvisa. Una volta che lo sai, quello che hai osservato nelle tue lezioni è un’informazione che il Client Service non può avere in nessun altro modo.</p></div>
   ${numlist([
     'Lascia un commento in BO il giorno stesso con esattamente ciò che hai visto — date e dettagli concreti, non impressioni',
     'Riporta le parole testuali della famiglia, se le hai',
     'Coinvolgi il tuo Team Leader il giorno stesso',
     'Non confermare mai che un rimborso è stato approvato e non parlare mai di importi'
   ])}
   ${co('co-ok','✅',`<p><strong>La frase che puoi dire sempre in sicurezza:</strong> <em>«Il Client Service vi aiuterà con questo.»</em> Lì finisce la tua parte della conversazione — da quel momento se ne occupa il Client Service.</p>`)}
  `},
  {t:'🌱 Continua anche dopo', html:`
   <div class="card"><p>Che la richiesta venga ritirata, che il bambino resti nel tuo gruppo o che passi a un altro tutor o formato, continua a dedicargli un’attenzione in più nelle lezioni successive. Un recupero che regge per una lezione e poi torna silenziosamente alla normalità spesso non regge affatto.</p></div>
  `}
 ]
},
{id:'spot', numLabel:'Modulo 1', emoji:'🔎', color:'var(--coral)',
 title:'Individua lo scarto presto — e segnalalo il giorno stesso',
 desc:'Le tre forme che può assumere un disallineamento, una diagnosi rapida per le prime lezioni, un controllo a semaforo per ogni lezione e come segnalarlo in BO.',
 obj:'Riconoscere che tipo di disallineamento hai davanti, fare una diagnosi rapida, leggere i segnali lezione dopo lezione e segnalare il caso in BO il giorno stesso.',
 sections:[
  {t:'🧭 Le tre forme di un disallineamento', html:`
   <div class="card"><p>«Questo corso non mi piace» può voler dire tre cose diverse — e ognuna richiede una mossa leggermente diversa. Impara a distinguerle.</p></div>
   ${patternCards([
     {ic:'🎯', title:'Non è quello per cui sono venuto', desc:'«Pensavo che avremmo creato videogiochi.» «Possiamo fare qualcos’altro?»', note:'L’aspettativa era diversa dal corso. <strong>La flessibilità può colmare lo scarto — e un altro corso potrebbe essere più adatto.</strong>'},
     {ic:'😒', title:'Non gli piacciono i contenuti', desc:'Arriva senza entusiasmo, fa gli esercizi «perché deve», dice che l’argomento è noioso', note:'L’argomento, o il modo in cui sono presentati gli esercizi, non gli parla. <strong>Offri delle scelte all’interno dell’obiettivo, e segnalalo.</strong>'},
     {ic:'⚖️', title:'Il livello non sembra quello giusto', desc:'Finisce in pochi minuti: «Questo lo so già.» Oppure: «Non capisco niente.»', note:'Spesso viene segnalato come qualcosa che non piace. <strong>Adatta subito, e segnalalo per una lezione di valutazione del livello.</strong>'}
   ],3)}
  `},
  {t:'🩺 La diagnosi rapida — le tue prime due lezioni (M1L1–M1L2)', html:`
   <div class="card"><p>Il momento migliore per intercettare un disallineamento sono le <strong>prime due lezioni del Modulo 1</strong>. Uno scarto notato solo dopo la lezione 3, senza segnalazione, di solito arriva troppo tardi per evitare una disdetta. Tre domande e un breve esercizio, già nella prima lezione, richiedono meno di dieci minuti.</p></div>
   ${stepIconBlock('🗣️','«Hai già lavorato con [lo strumento o il linguaggio del corso]?»', `<p>Una domanda aperta e senza pressione. Lascialo parlare e ascolta quanto sa davvero.</p><p>⚠️ <strong>Fai attenzione a:</strong> «Sì, so già tutto» — oppure «Non ho idea di cosa tu stia parlando».</p>`)}
   ${stepIconBlock('🌈','«Cosa ti aspettavi di imparare in questo corso?»', `<p>Fa emergere lo scarto tra il corso a cui il genitore lo ha iscritto e ciò che lo studente vuole davvero fare.</p><p>⚠️ <strong>Fai attenzione a:</strong> una risposta che non ha niente a che vedere con il corso a cui è iscritto.</p>`)}
   ${stepIconBlock('⚖️','«Quale parte di oggi ti è sembrata facile e quale difficile?»', `<p>Chiediglielo dopo il primo esercizio. Ti aiuta a capire quanto si trova davvero a suo agio con il livello.</p><p>✅ <strong>Ideale:</strong> «la prima parte era facile, la seconda difficile» — il livello è giusto.<br>⚠️ <strong>Fai attenzione a:</strong> «era tutto facile» oppure «non ho capito niente».</p>`)}
   ${stepIconBlock('✏️','Un breve esercizio individuale (5–8 minuti)', `<p>Chiedi allo studente di svolgere da solo, senza aiuto, il primo esercizio del modulo. Osserva quanto tempo impiega e se riesce almeno a iniziare.</p><p>✅ <strong>Normale:</strong> ha bisogno di qualche indicazione e impiega il tempo previsto.<br>⚠️ <strong>Fai attenzione a:</strong> finisce subito, oppure non riesce a iniziare da solo.</p>`)}
   ${co('co-idea','💡',`<p><strong>Hai già superato la lezione 2?</strong> Fai le stesse domande questa settimana. La diagnosi funziona in qualsiasi momento del corso — prima chiedi, più opzioni restano aperte.</p>`)}
  `},
  {t:'🚥 Continua a osservare a ogni lezione', html:`
   <div class="card"><p>Dopo le prime lezioni, un semplice semaforo alla fine di ogni lezione ti aiuta a restare obiettivo. Ci vogliono trenta secondi.</p></div>
   ${classifyCard('co-ok','🟢','Arriva puntuale e pronto · fa domande sull’argomento · si entusiasma quando qualcosa funziona · vuole mostrare i suoi progressi · si ricorda la lezione precedente.','Continua così. Mantieni la relazione calorosa e continua a osservare.')}
   ${classifyCard('co-cute','🟡','Si distrae spesso · risponde a monosillabi («sì», «no», «boh») · fa gli esercizi solo per dovere · non si ricorda la lezione precedente · chiede di finire prima.','Scrivi una nota dopo la lezione e prova un cambiamento flessibile (Modulo 2). <strong>Due lezioni gialle di fila → avvisa il tuo Team Leader la settimana stessa.</strong> Non aspettare il rosso.')}
   ${classifyCard('co-danger','🔴','Si rifiuta di partecipare · dice apertamente che non gli piace · il genitore scrive che il bambino non vuole venire · due o più lezioni gialle senza miglioramenti · piange, si frustra o diventa difficile da gestire.','<strong>Segnalalo in BO il giorno stesso</strong> e avvisa il tuo Team Leader.')}
   <div class="card"><h4>💬 Quattro domande per fare il punto — fanne una ogni 2–3 lezioni</h4></div>
   ${iconGrid([
     {ic:'🌟', html:`<strong>«Qual è stata la parte più bella della lezione di oggi?»</strong> Se non riesce a indicare niente, è un segnale.`},
     {ic:'🔧', html:`<strong>«C’è qualcosa che cambieresti delle nostre lezioni?»</strong> Una domanda aperta che dà informazioni utili senza mettere pressione.`},
     {ic:'🔢', html:`<strong>«Da 1 a 5, quanto è stato difficile per te questo corso?»</strong> 1–2 significa troppo facile, 4–5 troppo difficile. In entrambi i casi è un segnale di disallineamento.`},
     {ic:'🚀', html:`<strong>«Cosa ti piacerebbe saper creare o fare quando finirai questo corso?»</strong> Se la risposta non ha niente a che vedere con il corso, c’è uno scarto di aspettative.`}
   ])}
  `},
  {t:'📝 Segnalalo in BO — il giorno stesso', html:`
   <div class="card"><p>Una segnalazione che si rivela inutile non costa nulla. Una che manca può costare uno studente. <strong>Se non sei sicuro che si tratti davvero di un disallineamento, segnalalo comunque</strong> — il tuo Team Leader conosce il programma e i livelli disponibili; tu non devi conoscerli.</p></div>
   ${timeline([
     {ic:'⏱️', label:'Subito dopo la lezione', items:[
       '<strong>Scrivi 2–3 righe:</strong> quale segnale hai notato, in quale momento e cosa ha detto lo studente — con le sue parole. I dettagli svaniscono in fretta.'
     ]},
     {ic:'📝', label:'Il giorno stesso', items:[
       '<strong>Segnalalo in BO:</strong> profilo dello studente → Progress → Tutors\' Evaluations → Evaluate The Student. Scegli il Problem Kind (oppure <em>Other</em>), scegli il gruppo e incolla la tua nota.',
       '<strong>Avvisa il tuo Team Leader</strong> che hai fatto la segnalazione.'
     ]},
     {ic:'🔁', label:'Nelle lezioni successive', items:[
       '<strong>Continua ad adattare</strong> (Modulo 2) e aggiungi al caso ogni novità. Segnala una volta sola, poi aggiorna.'
     ]}
   ])}
   <div class="card" style="background:var(--surface2)"><h4>📨 Com’è fatta una segnalazione utile — copia e completa</h4>
   <p style="font-size:13.5px;line-height:1.75"><strong>Studente:</strong> [nome] · <strong>Corso / livello:</strong> [es. Illustrazione, livello 1] · <strong>Lezione:</strong> [M1L2 — data]<br>
   <strong>Cosa ho osservato:</strong> [2–3 righe: il segnale, il momento, le parole dello studente]<br>
   <strong>Cosa penso ci sia dietro:</strong> ☐ non è quello che si aspettava &nbsp; ☐ non gli piacciono i contenuti &nbsp; ☐ il livello non sembra quello giusto<br>
   <strong>Cosa ho già provato in lezione:</strong> [es. le ho fatto scegliere il tema del personaggio]<br>
   <strong>Cosa potrebbe aiutare — io lo raccomando, voi decidete:</strong> ☐ una lezione motivazionale &nbsp; ☐ una lezione di valutazione del livello o una sessione di orientamento &nbsp; ☐ un altro corso</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Segnala un caso</span><iframe src="Simulacion_BO_Evaluate.html" title="BO — Segnala un caso" loading="lazy"></iframe></div></div>
   ${co('co-star','🌱',`<p><strong>Perché funziona:</strong> il tuo Team Leader e il Client Service possono agire solo su ciò che sanno. La segnalazione è l’unico passaggio di tutto questo processo che solo tu puoi fare — ed è quello che decide quante opzioni restano.</p>`)}
  `},
  {t:'💬 Cosa puoi dire alla famiglia — e cosa spetta al tuo Team Leader', html:`
   <div class="card"><p>Puoi sempre parlare dell’apprendimento del bambino. Non devi mai proporre, promettere o rifiutare un cambio di corso, di livello o di formato — quello spetta al tuo Team Leader e al Client Service.</p></div>
   ${doavoid(
     ['Condividere ciò che noti sul suo apprendimento: <em>«Si illumina quando disegna personaggi — sto inserendo questa cosa nelle nostre lezioni.»</em>','Dire che ne hai parlato con il tuo team e che ti farai risentire','Chiedere cosa vorrebbero che il figlio ottenesse dal corso','Ringraziarli per avertelo detto — con calore, e il giorno stesso'],
     ['Proporre di tua iniziativa un altro corso, un cambio di livello o un rimborso','Difendere il corso: <em>«più avanti migliora»</em>','Promettere una lezione o un cambiamento','Dire <em>«il corso non gli è piaciuto»</em> — suona come un fallimento']
   )}
   <div class="card" style="background:var(--surface2)"><h4>📨 Quando il tuo Team Leader conferma una raccomandazione — presentala come un’opportunità</h4>
   <p style="font-size:13.5px;line-height:1.75"><em>«Buongiorno [nome del genitore], sono [il tuo nome], il tutor di [studente]. Ho notato che [studente] ha molto potenziale, ma nelle prime lezioni ho avuto l’impressione che l’impostazione di questo corso non sia proprio quella che aveva in mente — [es. mi ha detto che gli piacerebbe creare videogiochi, non solo scrivere codice]. Ci tengo che [studente] si diverta e sfrutti al meglio il suo tempo in Kodland, quindi insieme al nostro team vorremmo valutare se [un altro corso] possa essere più adatto. Ha qualche minuto questa settimana per parlarne insieme?»</em></p></div>
   ${co('co-idea','💡',`<p><strong>Di’</strong> «abbiamo trovato qualcosa che potrebbe piacergli ancora di più» — <strong>mai</strong> «il corso non gli è piaciuto».</p>`)}
  `}
 ],
 ix:{
  title:'Individualo, dagli un nome, segnalalo',
  instr:'Classifica le frasi e scegli la mossa migliore. 70% per sbloccare il modulo successivo.',
  items:[
   {type:'sort', prompt:'Che forma di disallineamento è questa?', card:`«Pensavo che avremmo creato videogiochi, non solo scritto codice.»`, zones:[{label:'🎯 Non è quello per cui sono venuto', fb:'Corretto — l’aspettativa era diversa dal corso. La flessibilità può colmare parte dello scarto, e una segnalazione tiene aperte le altre opzioni.'},{label:'😒 Non gli piacciono i contenuti', fb:'Non proprio — questo studente aveva in mente una cosa precisa da fare. È uno scarto del tipo «non è quello per cui sono venuto».'},{label:'⚖️ Il livello non sembra quello giusto', fb:'Non proprio — qui non si parla di difficoltà, ma di ciò che si aspettava di creare.'}], correctZone:0},
   {type:'sort', prompt:'Che forma di disallineamento è questa?', card:`«Era tutto facilissimo — questo lo so già.»`, zones:[{label:'🎯 Non è quello per cui sono venuto', fb:'Non proprio — questo studente parla di difficoltà, non dell’argomento.'},{label:'😒 Non gli piacciono i contenuti', fb:'Non proprio — il problema è il livello, anche se sembra noia per i contenuti.'},{label:'⚖️ Il livello non sembra quello giusto', fb:'Corretto — sembra che non gli piaccia, ma è il livello. Adatta subito, e segnalalo per una lezione di valutazione del livello.'}], correctZone:2},
   {type:'sort', prompt:'Che forma di disallineamento è questa?', card:`A ogni lezione fa gli esercizi solo perché deve, risponde «boh» e chiede di finire prima.`, zones:[{label:'🎯 Non è quello per cui sono venuto', fb:'Non proprio — non ha detto cosa si aspettava. Il quadro indica uno scarso interesse per i contenuti in sé.'},{label:'😒 Non gli piacciono i contenuti', fb:'Corretto — i contenuti, o il modo in cui sono presentati, non le parlano. Offri delle scelte all’interno dell’obiettivo e segnalalo.'},{label:'⚖️ Il livello non sembra quello giusto', fb:'Non proprio — niente indica un problema di difficoltà; il segnale è lo scarso interesse.'}], correctZone:1},
   {type:'choice', prompt:`Durante la diagnosi chiedi «Cosa ti aspettavi di imparare?» e lo studente risponde: «Disegnare anime — non questo.» Qual è il passo migliore?`, opts:[`Spiegare che gli anime arrivano più avanti nel corso e proseguire esattamente come previsto`,`Portare il suo interesse nella lezione di oggi dove possibile, e segnalarlo in BO il giorno stesso`,`Aspettare altre due lezioni per vedere se gli passa`], correct:1, fb:`Adatta subito in lezione ciò che puoi, e segnalalo il giorno stesso così il team ha ancora tutte le opzioni. Aspettare, o difendere il programma, fa sprecare il momento utile.`},
   {type:'sort', prompt:'In quale colore del semaforo rientra questa situazione?', card:`Due lezioni di fila: risposte a monosillabi e richieste di finire prima.`, zones:[{label:'🟢 Verde', fb:'Non proprio — due lezioni di risposte a monosillabi e di voglia di andarsene prima non significano «tutto bene».'},{label:'🟡 Giallo', fb:'Corretto — prendi nota, prova un cambiamento flessibile e avvisa il tuo Team Leader la settimana stessa. Non aspettare il rosso.'},{label:'🔴 Rosso', fb:'Non ancora — il rosso significa rifiuto, un rifiuto dichiarato del corso o un genitore che scrive. Ma due gialli di fila significano già: avvisa il tuo Team Leader questa settimana.'}], correctZone:1},
  ]
 }
},
{id:'flex', numLabel:'Modulo 2', emoji:'🎛️', color:'var(--coral)',
 title:'Adatta il corso allo studente — flessibilità senza perdere l’obiettivo',
 desc:'Come adattare una lezione a ciò che uno studente vuole davvero imparare senza perdere l’obiettivo di apprendimento, come offrire scelte in base all’età e quando deve intervenire il tuo Team Leader.',
 obj:'Adattare una lezione agli interessi dello studente mantenendo l’obiettivo di apprendimento, offrire scelte adatte alla sua età e capire quando la flessibilità non basta e deve intervenire il tuo Team Leader.',
 sections:[
  {t:'🎯 La regola: mantieni l’obiettivo, adatta il percorso', html:`
   <div class="card"><p>Non devi scegliere tra «seguire il manuale» e «lasciargli fare quello che vuole». Il manuale ti dice <strong>a cosa serve</strong> la lezione. Quasi tutto il resto si può adattare.</p></div>
   <div class="two-col">
     <div class="card"><h4>🔒 Resta uguale</h4><ul><li>L’obiettivo di apprendimento e le competenze della lezione</li><li>I risultati attesi indicati nel manuale</li><li>La struttura della lezione (riscaldamento, pratica, chiusura)</li></ul></div>
     <div class="card"><h4>🎛️ Si può adattare</h4><ul><li>Il tema, il personaggio, la storia</li><li>L’argomento del progetto</li><li>L’ordine dei passaggi</li><li>L’esempio che usi e la difficoltà dell’esercizio</li></ul></div>
   </div>
   ${co('co-idea','🧠',`<p><strong>Perché funziona.</strong> Nel noto modello ARCS di John Keller (1987), uno studente motivato ha bisogno di quattro cose: <strong>A</strong>ttention (attenzione), <strong>R</strong>elevance (rilevanza), <strong>C</strong>onfidence (fiducia in sé) e <strong>S</strong>atisfaction (soddisfazione). Uno studente che dice «non è quello che volevo» non trova la <em>rilevanza</em> — e collegare la lezione a ciò che gli sta già a cuore è esattamente il modo per restituirgliela.</p>`)}
  `},
  {t:'🎨 In pratica — cinque esempi reali', html:`
   ${stepIconBlock('🎨','Illustrazione — «Voglio disegnare solo anime»', `<p><strong>L’obiettivo resta:</strong> luce, proporzioni, colore, composizione.<br><strong>La sua variante:</strong> ogni esercizio usa un personaggio anime — ombreggiare un volto anime, confrontare le proporzioni di un chibi e di un eroe, creare una palette di colori per il <em>suo</em> personaggio.</p><p><em>«Mi piace un sacco — facciamo che il personaggio di oggi sia tuo. Impariamo come la luce cade sul volto del tuo personaggio.»</em></p>`)}
   ${stepIconBlock('🐍','Python — «Voglio creare videogiochi, non codice noioso»', `<p><strong>L’obiettivo resta:</strong> variabili, cicli, condizioni.<br><strong>La sua variante:</strong> un mini quiz o un gioco sulla sua serie o sul suo videogioco preferito, usando esattamente gli stessi concetti.</p><p><em>«Un videogioco non è altro che cicli e condizioni con un costume più bello. Quale costruiamo?»</em></p>`)}
   ${stepIconBlock('📖','Qualsiasi corso — «Non voglio seguire la storia»', `<p><strong>L’obiettivo resta:</strong> la competenza della lezione.<br><strong>La sua variante:</strong> togliere la cornice narrativa ed esercitare la stessa competenza su una sua idea, purché impari comunque l’argomento centrale della lezione.</p><p><em>«Lasciamo perdere la storia — cosa ti piacerebbe creare con questa competenza?»</em></p>`)}
   ${stepIconBlock('🧊','3D / design — «Voglio modellare una cosa mia»', `<p><strong>L’obiettivo resta:</strong> lo strumento e la tecnica.<br><strong>La sua variante:</strong> sceglie lui l’oggetto su cui esercitarsi.</p><p><em>«Fammi vedere cosa ti piacerebbe avere nella tua stanza — lo costruiamo con la tecnica di oggi.»</em></p>`)}
   ${stepIconBlock('🌐','Web — «Preferirei fare una pagina su un argomento mio»', `<p><strong>L’obiettivo resta:</strong> struttura, layout, link.<br><strong>La sua variante:</strong> una pagina sulla sua squadra di calcio, sulla sua serie preferita o sul suo hobby.</p><p><em>«Scegli un argomento di cui potresti parlare per un’ora — sarà la tua pagina.»</em></p>`)}
  `},
  {t:'🎛️ Offri un menù, non una porta spalancata', html:`
   <div class="card"><p>«Cosa vuoi fare?» è una domanda troppo aperta — spesso la risposta è «non lo so». Proponi <strong>due o tre opzioni che rispettano tutte l’obiettivo</strong> e lascia scegliere lo studente. Una piccola scelta gli fa sentire suo il lavoro; un menù limitato mantiene la lezione sui binari. Il modo in cui proponi le opzioni dipende dall’età:</p></div>
   ${dimTabs([
     {ic:'🧒', title:'6–8 anni',
      intro:'I bambini piccoli scelgono con tutta la loro immaginazione. Offri opzioni concrete e giocose — e mai più di due o tre.',
      tips:[
       {ic:'🃏', html:`<strong>Scegli una carta.</strong> <em>«Oggi possiamo fare un drago, un robot o un gatto. Quale scegli?»</em>`},
       {ic:'🏷️', html:`<strong>Lascia che gli dia un nome e lo senta suo.</strong> <em>«Come si chiama il tuo personaggio?»</em> — poi usa quel nome mentre spieghi.`},
       {ic:'✅', html:`<strong>Di’ sì al tema, mantieni la competenza.</strong> <em>«Sì, il drago può avere le ombre — le ombre sono il segreto di oggi.»</em>`},
       {ic:'🎉', html:`<strong>Festeggia la sua scelta.</strong> Il momento in cui la sua idea compare sullo schermo è il momento in cui sente che la lezione è sua.`}
      ]},
     {ic:'🧑', title:'9–11 anni',
      intro:'Vogliono dire la loro su cosa costruire, e vogliono riconoscere cose del loro mondo.',
      tips:[
       {ic:'🧩', html:`<strong>Tema più missione.</strong> <em>«Scegli il tema — lo spazio, il calcio o un videogioco che ami — e la missione resta la stessa: usare la tecnica di oggi.»</em>`},
       {ic:'🔢', html:`<strong>Voto veloce.</strong> <em>«Da 1 a 5, quanto ti piace questo tema? Cosa lo farebbe diventare un 5?»</em>`},
       {ic:'🌟', html:`<strong>Un livello bonus per la sua idea.</strong> Finito l’esercizio principale, aggiunge qualcosa di suo.`},
       {ic:'📺', html:`<strong>Usa ciò che conosce.</strong> Fai riferimento ai videogiochi o alle serie che nomina — gli dimostra che l’hai ascoltato.`}
      ]},
     {ic:'🧑‍🎓', title:'12+ anni',
      intro:'Gli studenti più grandi vogliono pertinenza e rispetto. Trattali come persone capaci, e negozia.',
      tips:[
       {ic:'🤝', html:`<strong>Negozia la consegna.</strong> <em>«Cosa renderebbe questo progetto degno del tuo tempo? Troviamo una versione che insegni la competenza di oggi e che sia tua.»</em>`},
       {ic:'🌍', html:`<strong>Mostra dove si usa la competenza</strong> — nei videogiochi, nelle app o nei design che gli piacciono già.`},
       {ic:'⚖️', html:`<strong>Sii onesto sui limiti.</strong> <em>«Questo va oltre il corso — chiederò al mio team cosa possiamo fare. Per oggi, usiamolo su questo.»</em>`},
       {ic:'📣', html:`<strong>Lascia che mostri il suo lavoro</strong> al gruppo; a questa età i coetanei contano molto.`}
      ]}
   ],'✅ Hai visto tutte e tre le fasce d’età. Ora: quando la flessibilità non basta.')}
  `},
  {t:'🧭 Quando la flessibilità non basta — il tuo Team Leader e le opzioni', html:`
   <div class="card"><p>Alcuni scarti sono troppo ampi per essere colmati durante la lezione. Non è un fallimento — è proprio per questo che la tua segnalazione il giorno stesso è importante. Queste sono le situazioni da portare al tuo Team Leader:</p></div>
   ${iconGrid([
     {ic:'🔀', html:`<strong>Lo studente vuole una competenza completamente diversa</strong> — per esempio, videogiochi 3D in un corso di disegno.`},
     {ic:'📉', html:`<strong>La tua flessibilità aiuta per una lezione, ma l’interesse non torna</strong> nell’arco di due o tre lezioni.`},
     {ic:'📢', html:`<strong>Il genitore dice che il corso non è quello che ha acquistato.</strong> Conferma di aver ricevuto il messaggio, portalo al tuo Team Leader e al Client Service prima di rispondere, e riporta in BO le parole testuali della famiglia.`},
     {ic:'⚖️', html:`<strong>Il livello è chiaramente sbagliato.</strong> Adatta subito e segnalalo, così si può prendere in considerazione una lezione di valutazione del livello.`}
   ])}
   <div class="card"><h4>🎁 Cosa possono organizzare il tuo Team Leader e il Client Service — tu raccomandi, loro decidono</h4></div>
   ${iconGrid([
     {ic:'💬', html:`<strong>Una lezione motivazionale.</strong> Una conversazione o una lezione pensata per ricollegare lo studente al motivo per cui si è iscritto.`},
     {ic:'🎚️', html:`<strong>Una lezione di valutazione del livello o una sessione di orientamento.</strong> Verifica se il corso e il livello sono davvero adatti — e cosa lo sarebbe di più.`},
     {ic:'🔄', html:`<strong>Un altro corso Kodland.</strong> Spesso è il recupero migliore: lo studente fa qualcosa che ama e resta in Kodland.`}
   ])}
   ${co('co-danger','⛔',`<p><strong>Tu raccomandi in BO — non prometti mai.</strong> Né «ti sposto in un altro corso», né «non è possibile». Sono entrambe decisioni che non spettano a te.</p>`)}
   <div class="card" style="background:var(--surface2)"><h4>🗣️ Cosa puoi dire allo studente</h4>
   <p style="font-size:13.5px;line-height:1.75"><em>«Mi fa davvero piacere che tu mi abbia detto cosa ti piacerebbe creare. Per oggi usiamo la tua idea nella lezione. E chiederò al mio team cos’altro possiamo fare per te.»</em></p></div>
   ${doavoid(
     ['All’inizio della lezione successiva, chiedere cosa gli piacerebbe creare','Mostrare il suo lavoro al gruppo','Festeggiare il momento in cui la sua idea compare nella lezione'],
     ['Dire <em>«questo non è nel programma»</em>','Difendere il corso invece di ascoltare','Lasciare che «la sua idea» prenda il posto dell’obiettivo della lezione']
   )}
  `}
 ],
 ix:{
  title:'Adatta — senza perdere l’obiettivo',
  instr:'Scegli la mossa migliore o classifica ogni situazione. 70% per sbloccare la checklist finale.',
  items:[
   {type:'choice', prompt:`Uno studente del corso di Illustrazione dice: «Voglio disegnare solo anime.» Qual è la risposta migliore?`, opts:[`Dirgli che gli anime non fanno parte del corso`,`Lasciargli disegnare personaggi anime negli esercizi mentre insegni luce, proporzioni e colore — e segnalarlo in BO`,`Lasciargli disegnare quello che vuole e saltare l’obiettivo della lezione`], correct:1, fb:`L’obiettivo (luce, proporzioni, colore) resta; il personaggio è suo. Poi segnalalo in BO, così il team può valutare altre opzioni. Rifiutare fa perdere lo studente; abbandonare l’obiettivo fa perdere l’apprendimento.`},
   {type:'sort', prompt:'Chi se ne occupa?', card:`Lasciare che lo studente scelga il tema del progetto.`, zones:[{label:'✅ Posso farlo da solo', fb:'Corretto — scegliere un tema all’interno dell’obiettivo dipende interamente da te e non richiede alcun permesso.'},{label:'🧭 Serve il mio Team Leader', fb:'Non proprio — la scelta di un tema che mantiene l’obiettivo rientra nel tuo modo di insegnare.'}], correctZone:0},
   {type:'sort', prompt:'Chi se ne occupa?', card:`Lo studente chiede di passare a un corso completamente diverso.`, zones:[{label:'✅ Posso farlo da solo', fb:'Non proprio — un cambio di corso non spetta mai a te, né per prometterlo né per rifiutarlo.'},{label:'🧭 Serve il mio Team Leader', fb:'Corretto — segnalalo in BO il giorno stesso e avvisa il tuo Team Leader. Tu raccomandi; loro e il Client Service decidono.'}], correctZone:1},
   {type:'sort', prompt:'Chi se ne occupa?', card:`Un genitore scrive: «Questo non è il corso per cui abbiamo pagato.»`, zones:[{label:'✅ Posso farlo da solo', fb:'Non proprio — è il messaggio più delicato che tu possa ricevere. Rispondere da solo potrebbe confermare un reclamo o far intendere qualcosa che non possiamo offrire.'},{label:'🧭 Serve il mio Team Leader', fb:'Corretto — conferma di aver ricevuto il messaggio, portalo al tuo Team Leader e al Client Service prima di rispondere e riporta in BO le parole della famiglia.'}], correctZone:1},
   {type:'choice', prompt:`Un bambino di 7 anni ti dice che le lezioni sono noiose. Quale proposta è la più adatta?`, opts:[`«Progettiamo insieme tutto il progetto — qual è la tua consegna in cinque punti?»`,`«Cosa vuoi che sia il tuo personaggio — un drago, un robot o un gatto?» e usare quel personaggio nell’esercizio di oggi`,`«Il corso funziona così — più avanti ti piacerà.»`], correct:1, fb:`I bambini piccoli scelgono meglio tra due o tre opzioni concrete e giocose. Una consegna aperta va bene per gli studenti più grandi, e «più avanti ti piacerà» difende il corso invece di ascoltare.`},
   {type:'choice', prompt:`Cosa significa «mantieni l’obiettivo, adatta il percorso»?`, opts:[`Saltare gli esercizi che allo studente non piacciono`,`Seguire solo gli interessi dello studente`,`Cambiare il tema o l’esercizio, ma mantenere la competenza a cui serve la lezione`], correct:2, fb:`L’obiettivo e i risultati attesi del manuale restano; tema, personaggio, argomento e ordine si possono adattare.`},
   {type:'choice', prompt:`Uno studente chiede: «Posso fare un altro corso?» Cosa rispondi?`, opts:[`«Sì, me ne occupo io.»`,`«No, hai già iniziato questo.»`,`«Mi fa piacere che tu me lo dica. Chiederò al mio team cosa possiamo fare — e intanto usiamo la tua idea nella lezione di oggi.»`], correct:2, fb:`Promettere o rifiutare non spetta a te — ma ascoltare, usare subito la sua idea e avviare la conversazione interna è esattamente il tuo lavoro.`},
   {type:'sort', prompt:'Mantiene l’obiettivo di apprendimento?', card:`L’obiettivo della lezione è la tecnica di animazione, quindi lo studente anima un oggetto a sua scelta.`, zones:[{label:'✅ Mantiene l’obiettivo', fb:'Corretto — la scelta è sua, ma la tecnica viene comunque esercitata.'},{label:'⛔ Perde l’obiettivo', fb:'Non proprio — continua a esercitare la tecnica a cui serve la lezione.'}], correctZone:0}
  ]
 }
},
{id:'checklist', numLabel:'Checklist finale', emoji:'✅', color:'var(--coral)',
 title:'Checklist finale',
 desc:'Qui non c’è nessun quiz — solo l’essenziale di questo mini-training, prima di chiuderlo.',
 obj:'Rivedi la checklist qui sotto. Questo modulo non ha valutazione — leggilo, poi concludi il mini-training.',
 sections:[
  {t:'🛟 Se esiste già una richiesta di rimborso', html:`
   ${numlist([
     'Ho lasciato un commento in BO il giorno stesso in cui ho saputo della richiesta e ho coinvolto il mio Team Leader',
     'La lezione successiva con questo studente è stata un vero tentativo di recupero — un vero spazio da protagonista, un successo visibile, attenzione specifica, nessun accenno alla richiesta',
     'Non ho mai confermato l’approvazione né parlato di importi — ho usato l’unica frase sicura e ho lasciato il resto al Client Service'
   ])}
  `},
  {t:'🌱 In ogni lezione', html:`
   ${numlist([
     'Nelle prime due lezioni faccio la diagnosi rapida: cosa sa, cosa si aspetta, cosa gli è sembrato facile o difficile, e un breve esercizio individuale',
     'Dopo ogni lezione la classifico come verde, gialla o rossa — e dopo due lezioni gialle di fila avviso il mio Team Leader la settimana stessa',
     'Ogni 2–3 lezioni faccio una domanda per fare il punto: la parte più bella, cosa cambierebbe, quanto è difficile da 1 a 5, cosa vorrebbe creare',
     'Subito dopo la lezione scrivo 2–3 righe: il segnale, il momento e le parole dello studente',
     'Segnalo un possibile disallineamento in BO il giorno stesso — anche quando non sono sicuro; una segnalazione inutile non costa nulla',
     'Tengo fisso l’obiettivo di apprendimento e adatto il tema, il progetto, il personaggio o l’ordine dei passaggi',
     'Offro due o tre scelte che rispettano tutte l’obiettivo, in un modo adatto all’età del bambino',
     'Non prometto mai un cambio di corso o di livello né una lezione extra — raccomando in BO e dico «chiederò al mio team»',
     'Non difendo il corso e non dico che «più avanti migliora» — prima ascolto, poi adatto',
     'Quando un genitore dice che il corso non è quello che si aspettava, prendo atto, porto la questione al mio Team Leader e al Client Service prima di rispondere e riporto le sue parole in BO',
     'Festeggio il momento in cui l’idea dello studente compare nella lezione e mostro il suo lavoro al gruppo'
   ])}
  `},
  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>Hai visto tutto il mini-training.</strong> Quando sei pronto, continua — poi completa il DST nell’LMS per chiudere l’attività.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
