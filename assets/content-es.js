/* Mini_Training_2_Course_Expectations - Spanish content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='es';
const CONTENT = {
  flag:'🇪🇸', dir:'ltr',
  ui:{
    pageTitle:"Mini-entrenamiento · Expectativas — Capacitación de tutores de Kodland",
    logoSub:'Departamento de Desarrollo de Tutores',
    heroEyebrow:"🎯 Mini-entrenamiento",
    heroTitle:"Cerrar la brecha de <span class=\"h-pill\">expectativas</span>",
    heroIntro:"Has recibido este entrenamiento porque tienes estudiantes que han solicitado un reembolso porque el curso no cumplió sus expectativas, no era lo que querían o no les gusta su contenido. Aquí te mostraremos qué puedes hacer como tutor y cómo manejar estas situaciones.",
    heroWork:"Completa 4 módulos cortos. Cada comprobación de módulo requiere un 70 % o más para desbloquear el siguiente. En total, unos 20–25 minutos.",
    startBtn:"🚀 Comenzar el entrenamiento",
    pathLabel:'Tu ruta de aprendizaje',
    devTitle:'Dev: desbloquear todos los módulos para revisión',
    backToPath:'Volver a la ruta',
    modulesPassed:'{done} / {total} módulos aprobados',
    moduleN:'Módulo {n}',
    of:'de',
    locked:'🔒 Bloqueado',
    passedBadge:'✅ Aprobado · {pct}%',
    reviewedBadge:'✅ Revisado',
    startBadge:'▶ Comenzar',
    reviewBadge:'▶ Repasar',
    objective:'Objetivo',
    startCheck:'▶ Comenzar la comprobación del módulo',
    finishBtn:'▶ Finalizar el mini-entrenamiento',
    doneBack:'✓ Listo — volver a la ruta',
    ixBadge:'📋 Comprobación del módulo — 70 % para desbloquear el siguiente módulo',
    ixItemBadge:'📋 Comprobación del módulo — pregunta {i} de {n}',
    scoreSoFar:'Puntuación hasta ahora: {c} / {t}',
    continue:'Continuar →',
    sortWrong:'No exactamente — la respuesta correcta es «{label}».',
    resPassed:'¡Módulo aprobado!',
    resFailed:'Todavía no lo logras',
    resUnlocked:"Has desbloqueado el siguiente módulo.",
    resDone:"Has completado este mini-entrenamiento.",
    resNeed:'Necesitas un 70 % para desbloquear el siguiente módulo. Repasa la sección anterior y vuelve a intentar la comprobación.',
    resContinue:'Continuar a la ruta de aprendizaje',
    resFinish:'Continuar',
    resBack:'Volver a la ruta',
    resReview:'Repasar este módulo',
    doneEyebrow:'Mini-entrenamiento completado',
    doneTitle:'🎉 ¡Felicidades!',
    doneP1:"🎉 <strong>¡Felicidades! Has completado este mini-entrenamiento.</strong>",
    doneP2:"¡Ya terminaste aquí! Por favor, vuelve a la página de capacitación del LMS desde la que accediste a este mini-entrenamiento para cerrar la tarea.",
    doneP3:"👉 <strong>Si debajo de la capacitación en el LMS aparece una comprobación o evaluación, asegúrate de completarla y obtener una puntuación aprobatoria</strong> — de lo contrario, la tarea podría quedar incompleta.",
    doneP4:'¡Mucho éxito! ❤️',
    doneP5:'',
    devUnlockAlert:'Modo Dev: todos los módulos están ahora desbloqueados para revisión.',
    devOn:'🔓 Modo Dev activado — todos los módulos desbloqueados',
    devOff:'🔒 Modo Dev desactivado — progreso borrado',
    devBadge:'🔓 MODO DEV',
    doLabel:'✅ Haz',
    avoidLabel:'🚫 Evita',
    noticeLabel:'Ten en cuenta:',
    cvSee:'Lo que ves:',
    cvDo:'Lo que haces:',
    dtExample:'Ejemplo de una clase real',
    dtNext:'Siguiente:',
    dtDone:"✅ Eso es todo sobre las cuatro áreas. Ahora, clasifica lo que ves.",
    tlVideoTitle:'{label} — un ejemplo de una clase real',
    tlVideoMeta:'Mira cómo se ve esta fase en una clase real'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Introducción', emoji:'🧩', color:'var(--coral)',
 title:'Por qué estás aquí',
 desc:'Por qué «esto no es lo que queríamos» es uno de los pocos motivos de reembolso que todavía puedes cambiar — y las reglas que se aplican cuando ya ha llegado una solicitud de reembolso.',
 obj:'Entender por qué una brecha entre el curso y lo que esperaban el estudiante o la familia muchas veces tiene arreglo, por qué lo más importante es reportarlo el mismo día y qué hacer (y qué no hacer) exactamente cuando ya existe una solicitud de reembolso.',
 sections:[
  {t:'🎭 «Esto no es lo que queríamos» — qué hay realmente detrás', html:`
   <div class="card"><p>No ves la conversación de venta, ni la clase de prueba, ni lo que la familia imaginó al inscribirse. Lo que <em>sí</em> ves es a un niño en tu clase — y la brecha casi siempre aparece ahí primero, mucho antes de que un padre o una madre escriba algo.</p></div>
   ${iconGrid([
     {ic:'🎯', html:`<strong>El tema no es lo que imaginaba.</strong> Quería crear videojuegos y el curso empieza por lo básico. Quería dibujar anime y el curso enseña luz, proporción y color.`},
     {ic:'🧸', html:`<strong>Eligieron los padres, no el niño.</strong> El niño nunca pidió este curso, así que cada clase se siente como una obligación.`},
     {ic:'⚖️', html:`<strong>El nivel no encaja.</strong> Demasiado fácil suena a «contenido aburrido». Demasiado difícil suena a «esto no es para mí». En ambos casos se reporta como que no le gusta.`},
     {ic:'⏳', html:`<strong>La parte divertida todavía no ha llegado.</strong> Las primeras clases construyen las bases, y el estudiante se va antes de ver adónde llevan.`}
   ])}
   ${co('co-idea','💡',`<p><strong>Este es uno de los pocos motivos de reembolso que todavía se pueden revertir.</strong> A un estudiante que quiere algo distinto muchas veces se le puede dar algo distinto — dentro de tu clase, mediante una clase de nivelación o una sesión de asesoría, o en otro curso de Kodland donde estará más contento.</p>`)}
  `},
  {t:'⏱️ La clave es la rapidez — y tu reporte', html:`
   <div class="card"><p>No decides tú si un estudiante cambia de curso o de nivel. Pero tu reporte es lo que inicia esa conversación, y solo funciona si llega a las personas adecuadas <strong>a tiempo</strong>.</p></div>
   ${stepFlow([
     {ic:'👀', label:'Notas la brecha en una clase'},
     {ic:'📝', label:'Lo reportas en BO ese mismo día'},
     {ic:'👩‍💼', label:'Tu Team Leader y Servicio al Cliente revisan las opciones'},
     {ic:'🔄', label:'Una clase motivacional, una clase de nivelación o sesión de asesoría, u otro curso de Kodland'}
   ])}
   ${co('co-danger','🚨',`<p><strong>Un reporte tardío cierra puertas.</strong> Cuando la familia ya ha decidido, la mayoría de estas opciones desaparecen. El mismo reporte, escrito en las dos primeras semanas, puede mantener a un niño en Kodland.</p>`)}
   ${co('co-ok','✅',`<p><strong>Y mientras el equipo revisa las opciones, tú sigues teniendo la clase.</strong> Una enseñanza flexible y centrada en el estudiante es la parte que es completamente tuya — el Módulo 2 te muestra cómo.</p>`)}
  `},
  {t:'🛟 Si ya existe una solicitud de reembolso', html:`
   <div class="card"><p>Todo lo anterior trata de detectarlo pronto. Pero puede que estés abriendo este entrenamiento porque una familia <strong>ya</strong> ha pedido un reembolso. Las reglas de abajo se aplican sea cual sea el motivo — léelas primero y usa el resto del entrenamiento para entender qué llevó hasta aquí y qué puedes seguir haciendo en la clase.</p></div>
   ${co('co-idea','💡',`<p><strong>La solicitud la crea Servicio al Cliente, no tú</strong> — esa parte no está en tus manos. Lo que sigue siendo tuyo es todo lo que sucede en la clase a partir de ahora, y no es poco.</p>`)}
   ${co('co-danger','🤐',`<p><strong>No digas nada sobre la solicitud en sí</strong> — ni al niño ni a la familia — a menos que Servicio al Cliente te pida expresamente decir algo concreto. Tu trabajo ahora es la clase, no la conversación.</p>`)}
  `},
  {t:'🎯 Tu próxima clase es el intento de recuperación', html:`
   <div class="card"><p>Puede que no tengas la oportunidad de cambiar nada más. Trata la próxima clase con este niño como el momento que lo decide todo.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Dale un turno de verdad.</strong> No una pregunta sin sentido, sino un momento genuino en el que se sienta visto y tenga éxito.`},
     {ic:'🏆', html:`<strong>Prepara un logro temprano y visible.</strong> Debe salir de la clase sintiéndose capaz, no rezagado.`},
     {ic:'👀', html:`<strong>Atención específica</strong> — haz que se sienta notado por algo concreto, no elogiado de forma genérica.`},
     {ic:'🤐', html:`<strong>Ni una palabra sobre la solicitud</strong> — incluso si el niño la menciona, redirige con calidez y sigue enseñando.`}
   ])}
  `},
  {t:'📮 Avisa rápido y conoce la única frase segura', html:`
   <div class="card"><p>Puedes enterarte de que existe una solicitud por los comentarios de Servicio al Cliente en el perfil del niño en BO — no hay ningún sistema automático que te avise. Una vez que lo sepas, lo que has visto en tus clases es información que Servicio al Cliente no tiene de ninguna otra forma.</p></div>
   ${numlist([
     'Deja un comentario en BO ese mismo día con exactamente lo que has visto — fechas y datos concretos, no impresiones',
     'Incluye las palabras exactas de la familia, textualmente, si las tienes',
     'Avisa a tu Team Leader ese mismo día',
     'Nunca confirmes que un reembolso ha sido aprobado ni hables de ninguna cantidad'
   ])}
   ${co('co-ok','✅',`<p><strong>El mensaje que siempre es seguro decir:</strong> <em>«Servicio al Cliente le ayudará con esto.»</em> Ahí termina tu parte de la conversación — Servicio al Cliente se encarga a partir de ese punto.</p>`)}
  `},
  {t:'🌱 Mantén el esfuerzo después', html:`
   <div class="card"><p>Tanto si la solicitud se retira, como si el niño sigue en tu grupo o pasa a otro tutor o a otro formato, sigue dándole un cuidado extra durante las siguientes clases. Una recuperación que se sostiene una clase y luego vuelve en silencio a la normalidad, muchas veces no se sostiene en absoluto.</p></div>
  `}
 ]
},
{id:'spot', numLabel:'Módulo 1', emoji:'🔎', color:'var(--coral)',
 title:'Detecta la brecha a tiempo — y repórtala el mismo día',
 desc:'Las tres formas que toma un desajuste, un diagnóstico rápido para las primeras clases, un semáforo para cada clase y cómo reportarlo en BO.',
 obj:'Reconocer qué tipo de desajuste tienes delante, hacer un diagnóstico rápido, leer las señales clase a clase y reportar el caso en BO el mismo día.',
 sections:[
  {t:'🧭 Las tres formas de un desajuste', html:`
   <div class="card"><p>«No me gusta este curso» puede significar tres cosas distintas — y cada una necesita una acción un poco diferente. Aprende a distinguirlas.</p></div>
   ${patternCards([
     {ic:'🎯', title:'No es a lo que vine', desc:'«Pensé que íbamos a hacer videojuegos.» «¿Podemos hacer otra cosa?»', note:'La expectativa era distinta al curso. <strong>La flexibilidad puede acortar la distancia — y otro curso podría encajar mejor.</strong>'},
     {ic:'😒', title:'No le gusta el contenido', desc:'Llega sin entusiasmo, hace las tareas «porque toca», dice que el tema es aburrido', note:'El tema, o la forma en que se plantean las tareas, no le dice nada. <strong>Ofrécele opciones dentro del objetivo, y repórtalo.</strong>'},
     {ic:'⚖️', title:'El nivel no encaja', desc:'Termina en minutos: «Esto ya lo sé.» O bien: «No entiendo nada.»', note:'A menudo se reporta como que no le gusta. <strong>Adapta ahora, y señálalo para una clase de nivelación.</strong>'}
   ],3)}
  `},
  {t:'🩺 El diagnóstico rápido — tus dos primeras clases (M1L1–M1L2)', html:`
   <div class="card"><p>El mejor momento para detectar un desajuste son <strong>las dos primeras clases del Módulo 1</strong>. Una brecha que se detecta solo después de la clase 3, sin reporte, suele llegar demasiado tarde para evitar una cancelación. Tres preguntas y un ejercicio corto, en la primera clase, llevan menos de diez minutos.</p></div>
   ${stepIconBlock('🗣️','«¿Has trabajado antes con [la herramienta o el lenguaje del curso]?»', `<p>Abierta y sin presión. Déjale hablar y escucha cuánto sabe realmente.</p><p>⚠️ <strong>Presta atención a:</strong> «Sí, ya sé todo esto» — o «No tengo ni idea de lo que dices».</p>`)}
   ${stepIconBlock('🌈','«¿Qué esperabas aprender en este curso?»', `<p>Muestra la distancia entre aquello en lo que lo inscribieron sus padres y lo que el estudiante quiere hacer de verdad.</p><p>⚠️ <strong>Presta atención a:</strong> una respuesta que no tiene nada que ver con el curso en el que está inscrito.</p>`)}
   ${stepIconBlock('⚖️','«¿Qué parte de hoy te resultó fácil y cuál difícil?»', `<p>Pregúntalo después del primer ejercicio. Te permite calibrar lo cómodo que se siente realmente con el nivel.</p><p>✅ <strong>Lo ideal:</strong> «la primera parte fue fácil, la segunda difícil» — el nivel es el adecuado.<br>⚠️ <strong>Presta atención a:</strong> «todo fue fácil» o «no entendí nada».</p>`)}
   ${stepIconBlock('✏️','Un ejercicio corto individual (5–8 minutos)', `<p>Pide al estudiante que haga el primer ejercicio del módulo por su cuenta, sin ayuda. Fíjate en cuánto tarda y en si es capaz de empezar.</p><p>✅ <strong>Normal:</strong> necesita algo de orientación y tarda el tiempo esperado.<br>⚠️ <strong>Presta atención a:</strong> termina al instante, o no puede empezar solo.</p>`)}
   ${co('co-idea','💡',`<p><strong>¿Ya pasaste la clase 2?</strong> Haz las mismas preguntas esta semana. El diagnóstico funciona en cualquier momento del curso — cuanto antes preguntes, más opciones siguen abiertas.</p>`)}
  `},
  {t:'🚥 Sigue leyéndolo en cada clase', html:`
   <div class="card"><p>Después de las primeras clases, un semáforo sencillo al terminar cada clase te mantiene atento. Lleva treinta segundos.</p></div>
   ${classifyCard('co-ok','🟢','Llega puntual y con ganas · hace preguntas sobre el tema · se emociona cuando algo funciona · quiere mostrar su progreso · recuerda la clase anterior.','Sigue así. Mantén una relación cercana y sigue observando.')}
   ${classifyCard('co-cute','🟡','Se distrae a menudo · responde con monosílabos («sí», «no», «no sé») · hace los ejercicios solo por obligación · no recuerda la clase anterior · pide terminar antes.','Escribe una nota después de la clase y prueba un cambio flexible (Módulo 2). <strong>Dos clases amarillas seguidas → avisa a tu Team Leader esa misma semana.</strong> No esperes al rojo.')}
   ${classifyCard('co-danger','🔴','Se niega a participar · dice abiertamente que no le gusta · los padres escriben que el niño no quiere venir · dos o más clases amarillas sin mejora · llora, se frustra o se vuelve difícil.','<strong>Repórtalo en BO el mismo día</strong> y avisa a tu Team Leader.')}
   <div class="card"><h4>💬 Cuatro preguntas de seguimiento — haz una cada 2–3 clases</h4></div>
   ${iconGrid([
     {ic:'🌟', html:`<strong>«¿Qué fue lo más genial de la clase de hoy?»</strong> Si no sabe nombrar nada, eso es una señal.`},
     {ic:'🔧', html:`<strong>«¿Hay algo que cambiarías de nuestras clases?»</strong> Una pregunta abierta que da información útil sin presionar.`},
     {ic:'🔢', html:`<strong>«Del 1 al 5, ¿qué tan difícil te está resultando este curso?»</strong> 1–2 significa demasiado fácil, 4–5 demasiado difícil. Ambos son señales de desajuste.`},
     {ic:'🚀', html:`<strong>«¿Qué te gustaría saber crear o hacer cuando termines este curso?»</strong> Si la respuesta no tiene nada que ver con el curso, hay una brecha de expectativas.`}
   ])}
  `},
  {t:'📝 Repórtalo en BO — el mismo día', html:`
   <div class="card"><p>Un reporte que resulta innecesario no cuesta nada. Uno que falta puede costar un estudiante. <strong>Si no estás seguro de que sea un desajuste real, repórtalo igualmente</strong> — tu Team Leader conoce el currículo y los niveles disponibles; tú no necesitas conocerlos.</p></div>
   ${timeline([
     {ic:'⏱️', label:'Justo después de la clase', items:[
       '<strong>Escribe 2–3 líneas:</strong> qué señal viste, en qué momento y qué dijo el estudiante — con sus propias palabras. Los detalles se olvidan rápido.'
     ]},
     {ic:'📝', label:'Ese mismo día', items:[
       '<strong>Repórtalo en BO:</strong> perfil del estudiante → Progreso → Evaluaciones de tutores → Evaluar al estudiante. Elige el Tipo de problema (u <em>Otro</em>), elige el grupo y pega tu nota.',
       '<strong>Avisa a tu Team Leader</strong> de que lo has reportado.'
     ]},
     {ic:'🔁', label:'En tus próximas clases', items:[
       '<strong>Sigue adaptando</strong> (Módulo 2) y añade al caso cualquier novedad. Reporta una vez y después haz seguimiento.'
     ]}
   ])}
   <div class="card" style="background:var(--surface2)"><h4>📨 Cómo es un reporte útil — copia y completa</h4>
   <p style="font-size:13.5px;line-height:1.75"><strong>Estudiante:</strong> [nombre] · <strong>Curso / nivel:</strong> [p. ej. Ilustración, nivel 1] · <strong>Clase:</strong> [M1L2 — fecha]<br>
   <strong>Lo que observé:</strong> [2–3 líneas: la señal, el momento, las propias palabras del estudiante]<br>
   <strong>Lo que creo que hay detrás:</strong> ☐ no es lo que esperaba &nbsp; ☐ no le gusta el contenido &nbsp; ☐ el nivel no encaja<br>
   <strong>Lo que ya probé en la clase:</strong> [p. ej. la dejé elegir el tema del personaje]<br>
   <strong>Lo que podría ayudar — mi recomendación, su decisión:</strong> ☐ una clase motivacional &nbsp; ☐ una clase de nivelación o sesión de asesoría &nbsp; ☐ otro curso</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Reportar un caso</span><iframe src="Simulacion_BO_Evaluate.html" title="BO — Reportar un caso" loading="lazy"></iframe></div></div>
   ${co('co-star','🌱',`<p><strong>Por qué funciona:</strong> tu Team Leader y Servicio al Cliente solo pueden actuar sobre lo que saben. El reporte es el único paso de todo este proceso que solo tú puedes dar — y es el que decide cuántas opciones quedan.</p>`)}
  `},
  {t:'💬 Lo que puedes decir a la familia — y lo que espera a tu Team Leader', html:`
   <div class="card"><p>Siempre puedes hablar del aprendizaje del niño. Nunca presentas, prometes ni rechazas un cambio de curso, de nivel o de formato — eso viene de tu Team Leader y de Servicio al Cliente.</p></div>
   ${doavoid(
     ['Comparte lo que notas sobre su aprendizaje: <em>«Se le ilumina la cara cuando dibuja personajes — lo estoy incorporando a nuestras clases.»</em>','Di que lo has compartido con tu equipo y que les darás respuesta','Pregunta qué les gustaría que su hijo sacara del curso','Agradéceles que te lo hayan contado — con calidez, y el mismo día'],
     ['Sugerir tú mismo otro curso, un cambio de nivel o un reembolso','Defender el curso: <em>«más adelante mejora»</em>','Prometer una clase o un cambio','Decir <em>«no le gustó este curso»</em> — suena a fracaso']
   )}
   <div class="card" style="background:var(--surface2)"><h4>📨 Cuando tu Team Leader confirme una recomendación — preséntala como una oportunidad</h4>
   <p style="font-size:13.5px;line-height:1.75"><em>«Hola, [nombre del padre o la madre], soy [tu nombre], tutor de [estudiante]. He notado que [estudiante] tiene mucho potencial, pero en las primeras clases sentí que el enfoque de este curso no es exactamente lo que tenía en mente — [p. ej. comentó que le gustaría crear videojuegos, no solo programar]. Quiero que [estudiante] disfrute y aproveche al máximo su tiempo en Kodland, así que, junto con nuestro equipo, nos gustaría ver si [otro curso] podría encajarle mejor. ¿Tendría unos minutos esta semana para contarle más?»</em></p></div>
   ${co('co-idea','💡',`<p><strong>Di</strong> «encontramos algo que podría gustarle todavía más» — <strong>nunca</strong> «no le gustó este curso».</p>`)}
  `}
 ],
 ix:{
  title:'Detéctalo, nómbralo, repórtalo',
  instr:'Clasifica las frases y elige la mejor acción. 70 % para desbloquear el siguiente módulo.',
  items:[
   {type:'sort', prompt:'¿Qué forma de desajuste es esta?', card:`«Pensé que íbamos a hacer videojuegos, no solo escribir código.»`, zones:[{label:'🎯 No es a lo que vine', fb:'Correcto — la expectativa era distinta al curso. La flexibilidad puede acortar parte de la distancia, y un reporte mantiene abiertas otras opciones.'},{label:'😒 No le gusta el contenido', fb:'No exactamente — este estudiante esperaba hacer algo concreto. Eso es una brecha de «no es a lo que vine».'},{label:'⚖️ El nivel no encaja', fb:'No exactamente — aquí nada tiene que ver con la dificultad. Se trata de lo que esperaba crear.'}], correctZone:0},
   {type:'sort', prompt:'¿Qué forma de desajuste es esta?', card:`«Todo fue facilísimo — esto ya lo sé.»`, zones:[{label:'🎯 No es a lo que vine', fb:'No exactamente — este estudiante habla de la dificultad, no del tema.'},{label:'😒 No le gusta el contenido', fb:'No exactamente — el problema es el nivel, aunque suene a aburrimiento con el contenido.'},{label:'⚖️ El nivel no encaja', fb:'Correcto — parece que no le gusta, pero es el nivel. Adapta ahora y señálalo para una clase de nivelación.'}], correctZone:2},
   {type:'sort', prompt:'¿Qué forma de desajuste es esta?', card:`En cada clase hace los ejercicios solo porque toca, responde «no sé» y pide terminar antes.`, zones:[{label:'🎯 No es a lo que vine', fb:'No exactamente — no ha dicho qué esperaba. El patrón habla de poco interés por el propio contenido.'},{label:'😒 No le gusta el contenido', fb:'Correcto — el contenido, o la forma de plantearlo, no le dice nada. Ofrécele opciones dentro del objetivo y repórtalo.'},{label:'⚖️ El nivel no encaja', fb:'No exactamente — nada indica un problema de dificultad; la señal es el poco interés.'}], correctZone:1},
   {type:'choice', prompt:`En el diagnóstico preguntas «¿Qué esperabas aprender?» y el estudiante responde: «A dibujar anime — no esto.» ¿Cuál es el mejor siguiente paso?`, opts:[`Explicarle que el anime llega más adelante en el curso y seguir exactamente como estaba previsto`,`Llevar su interés a la clase de hoy donde puedas, y reportarlo en BO el mismo día`,`Esperar dos clases más a ver si se le pasa`], correct:1, fb:`Adapta enseguida lo que puedas en la clase, y repórtalo el mismo día para que el equipo conserve todas sus opciones. Esperar, o defender el plan, gasta el margen que tienes.`},
   {type:'sort', prompt:'¿En qué color del semáforo está esta situación?', card:`Dos clases seguidas: respuestas de una sola palabra y pide terminar antes.`, zones:[{label:'🟢 Verde', fb:'No exactamente — dos clases con respuestas de una palabra y ganas de irse antes no es «todo bien».'},{label:'🟡 Amarillo', fb:'Correcto — anótalo, prueba un cambio flexible y avisa a tu Team Leader esa misma semana. No esperes al rojo.'},{label:'🔴 Rojo', fb:'Todavía no — rojo significa negarse, decir abiertamente que no le gusta o que los padres escriban. Pero amarillo dos veces seguidas ya significa: avisa a tu Team Leader esta semana.'}], correctZone:1},
  ]
 }
},
{id:'flex', numLabel:'Módulo 2', emoji:'🎛️', color:'var(--coral)',
 title:'Haz que el curso encaje con el estudiante — flexibilidad sin perder el objetivo',
 desc:'Cómo adaptar una clase a lo que el estudiante realmente quiere aprender sin perder el objetivo de aprendizaje, cómo ofrecer opciones según la edad y cuándo debe intervenir tu Team Leader.',
 obj:'Adaptar una clase a los intereses del estudiante manteniendo el objetivo de aprendizaje, ofrecer opciones adecuadas a su edad y saber cuándo la flexibilidad no basta y debe intervenir tu Team Leader.',
 sections:[
  {t:'🎯 La regla: mantén el objetivo, flexibiliza el camino', html:`
   <div class="card"><p>No tienes que elegir entre «seguir el manual» y «dejar que hagan lo que quieran». El manual te dice <strong>para qué</strong> sirve la clase. Casi todo lo demás se puede adaptar.</p></div>
   <div class="two-col">
    <div class="card"><h4>🔒 No cambia</h4><ul><li>El objetivo de aprendizaje y las habilidades de la clase</li><li>Los resultados esperados del manual</li><li>La estructura de la clase (calentamiento, práctica, cierre)</li></ul></div>
    <div class="card"><h4>🎛️ Puede cambiar</h4><ul><li>La temática, el personaje, la historia</li><li>El tema del proyecto</li><li>El orden de los pasos</li><li>El ejemplo que usas y la dificultad de la tarea</li></ul></div>
   </div>
   ${co('co-idea','🧠',`<p><strong>Por qué funciona.</strong> En el conocido modelo ARCS de John Keller (1987), un estudiante motivado necesita cuatro cosas: <strong>A</strong>tención, <strong>R</strong>elevancia, <strong>C</strong>onfianza y <strong>S</strong>atisfacción. A un estudiante que dice «esto no es lo que quería» le falta <em>Relevancia</em> — y conectar la clase con lo que ya le importa es justo la forma de devolvérsela.</p>`)}
  `},
  {t:'🎨 Así se ve — cinco ejemplos reales', html:`
   ${stepIconBlock('🎨','Ilustración — «Solo quiero dibujar anime»', `<p><strong>El objetivo no cambia:</strong> luz, proporción, color, composición.<br><strong>Su toque personal:</strong> cada ejercicio usa un personaje de anime — sombrear una cara de anime, comparar las proporciones de un chibi y de un héroe, crear una paleta de colores para <em>su</em> personaje.</p><p><em>«¡Me encanta! Hagamos que el personaje de hoy sea tuyo. Vamos a aprender cómo funciona la luz en la cara de tu personaje.»</em></p>`)}
   ${stepIconBlock('🐍','Python — «Quiero hacer videojuegos, no código aburrido»', `<p><strong>El objetivo no cambia:</strong> variables, bucles, condiciones.<br><strong>Su toque personal:</strong> un minijuego o un quiz sobre su serie o videojuego favorito, usando exactamente los mismos conceptos.</p><p><em>«Un videojuego no es más que bucles y condiciones con un disfraz más bonito. ¿Cuál construimos?»</em></p>`)}
   ${stepIconBlock('📖','Cualquier curso — «No quiero seguir la historia»', `<p><strong>El objetivo no cambia:</strong> la habilidad de la clase.<br><strong>Su toque personal:</strong> deja de lado la parte narrativa y practica la misma habilidad con su propia idea, siempre que siga aprendiendo el tema central de la clase.</p><p><em>«Olvidemos la historia — ¿qué te gustaría crear con esta habilidad?»</em></p>`)}
   ${stepIconBlock('🧊','3D / diseño — «Quiero modelar mi propia cosa»', `<p><strong>El objetivo no cambia:</strong> la herramienta y la técnica.<br><strong>Su toque personal:</strong> elige el objeto con el que practica.</p><p><em>«Enséñame algo que te encantaría tener en tu cuarto — lo construiremos con la técnica de hoy.»</em></p>`)}
   ${stepIconBlock('🌐','Web — «Prefiero hacer una página sobre mi propio tema»', `<p><strong>El objetivo no cambia:</strong> estructura, maquetación, enlaces.<br><strong>Su toque personal:</strong> una página sobre su club de fútbol, su serie o su pasatiempo.</p><p><em>«Elige un tema del que podrías hablar durante una hora — esa es tu página.»</em></p>`)}
  `},
  {t:'🎛️ Ofrece un menú, no una puerta abierta', html:`
   <div class="card"><p>«¿Qué quieres hacer?» es demasiado abierto — muchas veces la respuesta es «no sé». Da <strong>dos o tres opciones que cumplan todas el objetivo</strong>, y deja que el estudiante elija. Una pequeña elección da sensación de que es suyo; un menú limitado mantiene la clase encaminada. Cómo lo ofreces depende de la edad:</p></div>
   ${dimTabs([
     {ic:'🧒', title:'6–8 años',
      intro:'Los más pequeños eligen con toda su imaginación. Dales opciones concretas y divertidas — y nunca más de dos o tres.',
      tips:[
       {ic:'🃏', html:`<strong>Elige una carta.</strong> <em>«Hoy podemos hacer un dragón, un robot o un gato. ¿Cuál eliges?»</em>`},
       {ic:'🏷️', html:`<strong>Deja que le ponga nombre y lo haga suyo.</strong> <em>«¿Cómo se llama tu personaje?»</em> — y luego usa ese nombre mientras explicas.`},
       {ic:'✅', html:`<strong>Di que sí a la temática, mantén la habilidad.</strong> <em>«Sí, el dragón puede tener sombras — las sombras son el secreto de hoy.»</em>`},
       {ic:'🎉', html:`<strong>Celebra su elección.</strong> El momento en que su idea aparece en pantalla es el momento en que siente que la clase es suya.`}
      ]},
     {ic:'🧑', title:'9–11 años',
      intro:'Quieren opinar sobre lo que construyen, y quieren reconocer cosas de su propio mundo.',
      tips:[
       {ic:'🧩', html:`<strong>Temática más misión.</strong> <em>«Elige la temática — el espacio, el fútbol o un videojuego que te encante — y la misión es la misma: usar la técnica de hoy.»</em>`},
       {ic:'🔢', html:`<strong>Valoración rápida.</strong> <em>«Del 1 al 5, ¿cuánto te gusta esta temática? ¿Qué haría falta para que fuera un 5?»</em>`},
       {ic:'🌟', html:`<strong>Un nivel extra para su propia idea.</strong> Termina la tarea principal y luego añade algo suyo.`},
       {ic:'📺', html:`<strong>Usa lo que conocen.</strong> Menciona los videojuegos o las series de los que hablan — demuestra que escuchaste.`}
      ]},
     {ic:'🧑‍🎓', title:'12 años o más',
      intro:'Los mayores quieren relevancia y respeto. Trátalos como capaces, y negocia.',
      tips:[
       {ic:'🤝', html:`<strong>Negocia el encargo.</strong> <em>«¿Qué haría que este proyecto valiera la pena para ti? Busquemos una versión que enseñe la habilidad de hoy y que sea tuya.»</em>`},
       {ic:'🌍', html:`<strong>Muéstrales dónde se usa la habilidad</strong> — en los videojuegos, las apps o los diseños que ya les gustan.`},
       {ic:'⚖️', html:`<strong>Sé honesto con los límites.</strong> <em>«Eso está fuera de este curso — le preguntaré a mi equipo qué podemos hacer. Por hoy, usémoslo en esto.»</em>`},
       {ic:'📣', html:`<strong>Deja que muestren su trabajo</strong> al grupo; a esta edad, los compañeros importan mucho.`}
      ]}
   ],'✅ Esos son los tres grupos de edad. Siguiente: cuándo la flexibilidad no basta.')}
  `},
  {t:'🧭 Cuando la flexibilidad no basta — tu Team Leader y las opciones', html:`
   <div class="card"><p>Algunas brechas son demasiado grandes para cerrarlas dentro de la clase. Eso no es un fracaso — es justamente por lo que tu reporte del mismo día importa. Estas son las situaciones que van a tu Team Leader:</p></div>
   ${iconGrid([
     {ic:'🔀', html:`<strong>El estudiante quiere una habilidad totalmente distinta</strong> — por ejemplo, videojuegos en 3D en un curso de dibujo.`},
     {ic:'📉', html:`<strong>Tu flexibilidad ayuda durante una clase, pero el interés no vuelve</strong> a lo largo de dos o tres clases.`},
     {ic:'📢', html:`<strong>Los padres dicen que el curso no es lo que compraron.</strong> Acusa recibo, llévalo a tu Team Leader y a Servicio al Cliente antes de responder, y escribe en BO las palabras de la familia textualmente.`},
     {ic:'⚖️', html:`<strong>El nivel claramente no es el adecuado.</strong> Adapta ahora y repórtalo, para que se pueda considerar una clase de nivelación.`}
   ])}
   <div class="card"><h4>🎁 Lo que tu Team Leader y Servicio al Cliente pueden organizar — tú recomiendas, ellos deciden</h4></div>
   ${iconGrid([
     {ic:'💬', html:`<strong>Una clase motivacional.</strong> Una conversación o clase pensada para volver a conectar al estudiante con el motivo por el que se unió.`},
     {ic:'🎚️', html:`<strong>Una clase de nivelación o sesión de asesoría.</strong> Comprueba si el curso y el nivel encajan de verdad — y qué encajaría mejor.`},
     {ic:'🔄', html:`<strong>Otro curso de Kodland.</strong> Muchas veces es la mejor recuperación: el estudiante hace algo que le encanta, y se queda en Kodland.`}
   ])}
   ${co('co-danger','⛔',`<p><strong>Tú recomiendas en BO — nunca prometes.</strong> Ni «te voy a cambiar a otro curso», ni «eso no es posible». Ambas son decisiones que no te corresponden.</p>`)}
   <div class="card" style="background:var(--surface2)"><h4>🗣️ Lo que puedes decirle al estudiante</h4>
   <p style="font-size:13.5px;line-height:1.75"><em>«Me encanta que me hayas contado lo que de verdad te gustaría crear. Por hoy, usemos tu idea en la clase. Y voy a consultar con mi equipo qué más podemos hacer por ti.»</em></p></div>
   ${doavoid(
     ['Pregúntale qué le gustaría crear al inicio de la próxima clase','Muestra su trabajo al grupo','Celebra el momento en que su idea aparece en la clase'],
     ['Decir <em>«eso no está en el plan»</em>','Defender el curso en lugar de escuchar','Dejar que «su idea» sustituya el objetivo de la clase']
   )}
  `}
 ],
 ix:{
  title:'Adáptalo — sin perder el objetivo',
  instr:'Elige la mejor acción o clasifica cada situación. 70 % para desbloquear la lista de verificación final.',
  items:[
   {type:'choice', prompt:`Un estudiante del curso de Ilustración dice: «Solo quiero dibujar anime.» ¿Cuál es la mejor respuesta?`, opts:[`Decirle que el anime no forma parte del curso`,`Dejar que dibuje personajes de anime en los ejercicios mientras le enseñas luz, proporción y color — y reportarlo en BO`,`Dejar que dibuje lo que quiera y saltarse el objetivo de la clase`], correct:1, fb:`El objetivo (luz, proporción, color) se mantiene; el personaje es suyo. Después repórtalo en BO para que el equipo pueda considerar más opciones. Negarte hace perder al estudiante; abandonar el objetivo hace perder el aprendizaje.`},
   {type:'sort', prompt:'¿Quién se encarga de esto?', card:`Dejar que el estudiante elija la temática del proyecto.`, zones:[{label:'✅ Puedo hacerlo yo', fb:'Correcto — elegir una temática dentro del objetivo es completamente tuyo, y no necesita permiso.'},{label:'🧭 Necesita a mi Team Leader', fb:'No exactamente — elegir una temática que mantiene el objetivo forma parte de tu propia enseñanza.'}], correctZone:0},
   {type:'sort', prompt:'¿Quién se encarga de esto?', card:`El estudiante pide cambiarse a un curso completamente distinto.`, zones:[{label:'✅ Puedo hacerlo yo', fb:'No exactamente — un cambio de curso nunca te corresponde a ti prometerlo ni rechazarlo.'},{label:'🧭 Necesita a mi Team Leader', fb:'Correcto — repórtalo en BO el mismo día y avisa a tu Team Leader. Tú recomiendas; ellos y Servicio al Cliente deciden.'}], correctZone:1},
   {type:'sort', prompt:'¿Quién se encarga de esto?', card:`Un padre escribe: «Este no es el curso que pagamos.»`, zones:[{label:'✅ Puedo hacerlo yo', fb:'No exactamente — es el mensaje más delicado que puedes recibir. Responder solo puede confirmar una queja o insinuar algo que no podemos cumplir.'},{label:'🧭 Necesita a mi Team Leader', fb:'Correcto — acusa recibo, llévalo a tu Team Leader y a Servicio al Cliente antes de responder, y registra en BO las palabras de la familia.'}], correctZone:1},
   {type:'choice', prompt:`Un niño de 7 años te dice que las clases son aburridas. ¿Qué propuesta encaja mejor?`, opts:[`«Diseñemos juntos todo el proyecto — ¿cuál es tu encargo en cinco puntos?»`,`«¿Qué quieres que sea tu personaje — un dragón, un robot o un gato?» y usar ese personaje en la tarea de hoy`,`«Así funciona el curso — más adelante te gustará.»`], correct:1, fb:`Los más pequeños eligen mejor entre dos o tres opciones concretas y divertidas. Un encargo abierto es para estudiantes mayores, y «más adelante te gustará» defiende el curso en lugar de escuchar.`},
   {type:'choice', prompt:`¿Qué significa «mantén el objetivo, flexibiliza el camino»?`, opts:[`Saltarse las tareas que no le gustan al estudiante`,`Seguir solo los intereses del estudiante`,`Cambiar la temática o la tarea, pero mantener la habilidad para la que es la clase`], correct:2, fb:`El objetivo y los resultados del manual se mantienen; la temática, el personaje, el tema y el orden se pueden adaptar.`},
   {type:'choice', prompt:`Un estudiante pregunta: «¿Puedo hacer otro curso en lugar de este?» ¿Qué le dices?`, opts:[`«Sí, yo me encargo de organizarlo.»`,`«No, ya empezaste este.»`,`«Me encanta que me lo digas. Voy a consultar con mi equipo qué podemos hacer — y mientras tanto, usemos tu idea en la clase de hoy.»`], correct:2, fb:`Ni prometer ni rechazar te corresponde — pero escuchar, usar su idea ahora e iniciar la conversación interna es exactamente tu trabajo.`},
   {type:'sort', prompt:'¿Esto mantiene el objetivo de aprendizaje?', card:`El objetivo de la clase es la técnica de animación, así que el estudiante anima el objeto que elija.`, zones:[{label:'✅ Mantiene el objetivo', fb:'Correcto — la elección es suya y la técnica se sigue practicando.'},{label:'⛔ Pierde el objetivo', fb:'No exactamente — sigue practicando la técnica para la que es la clase.'}], correctZone:0}
  ]
 }
},
{id:'checklist', numLabel:'Lista de verificación final', emoji:'✅', color:'var(--coral)',
 title:'Lista de verificación final',
 desc:'Aquí no hay examen — solo lo esencial de este mini-entrenamiento, antes de cerrarlo.',
 obj:'Repasa la lista de verificación de abajo. Este módulo no se califica — léela y luego finaliza el mini-entrenamiento.',
 sections:[
  {t:'🛟 Si ya existe una solicitud de reembolso', html:`
   ${numlist([
     'Dejé un comentario en BO el mismo día en que supe de la solicitud y avisé a mi Team Leader',
     'Mi siguiente clase con este estudiante fue un intento real de recuperación — un turno de verdad, un logro visible, atención específica, ni una palabra sobre la solicitud',
     'Nunca confirmé una aprobación ni hablé de ninguna cantidad — usé la única frase segura y dejé el resto a Servicio al Cliente'
   ])}
  `},
  {t:'🌱 En cada clase', html:`
   ${numlist([
     'En las dos primeras clases hago el diagnóstico rápido: qué sabe, qué espera, qué le resultó fácil o difícil, y un ejercicio corto individual',
     'Después de cada clase la leo en verde, amarillo o rojo — y tras dos clases amarillas seguidas aviso a mi Team Leader esa misma semana',
     'Cada 2–3 clases hago una pregunta de seguimiento: lo más genial, qué cambiaría, qué tan difícil del 1 al 5, qué quiere crear',
     'Justo después de la clase escribo 2–3 líneas: la señal, el momento y las propias palabras del estudiante',
     'Reporto un posible desajuste en BO el mismo día — aunque no esté seguro; un reporte innecesario no cuesta nada',
     'Mantengo fijo el objetivo de aprendizaje y adapto la temática, el proyecto, el personaje o el orden de los pasos',
     'Ofrezco dos o tres opciones que cumplen el objetivo, de una forma adecuada a la edad del niño',
     'Nunca prometo un cambio de curso, de nivel ni una clase extra — lo recomiendo en BO y digo «voy a consultarlo con mi equipo»',
     'No defiendo el curso ni digo que «más adelante mejora» — primero escucho, después adapto',
     'Cuando unos padres dicen que el curso no es lo que esperaban, acuso recibo, lo llevo a mi Team Leader y a Servicio al Cliente antes de responder, y registro sus palabras en BO',
     'Celebro el momento en que la propia idea del estudiante aparece en la clase, y muestro su trabajo al grupo'
   ])}
  `},
  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>Eso es todo el mini-entrenamiento.</strong> Cuando estés listo, continúa — y luego completa el DST en el LMS para cerrar la tarea.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
