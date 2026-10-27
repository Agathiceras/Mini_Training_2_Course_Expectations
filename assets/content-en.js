/* Mini_Training_2_Course_Expectations - English content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='en';
const CONTENT = {
  flag:'🇬🇧', dir:'ltr',
  ui:{
    pageTitle:"Mini-Training · Expectations — Kodland Tutor Training",
    logoSub:'Tutor Development Department',
    heroEyebrow:"🎯 Mini-Training",
    heroTitle:"Closing the <span class=\"h-pill\">Expectations</span> Gap",
    heroIntro:"You've received this training because you have students who have requested a refund because the course didn't meet their expectations, wasn't what they wanted, or they don't like its content. Here, we'll show you what you can do as a tutor and how to handle these situations.",
    heroWork:"Work through 4 short modules. Each module check needs 70%+ to unlock the next. About 20–25 minutes total.",
    startBtn:"🚀 Start Training",
    pathLabel:'Your learning path',
    devTitle:'Dev: unlock all modules for review',
    backToPath:'Back to path',
    modulesPassed:'{done} / {total} modules passed',
    moduleN:'Module {n}',
    of:'of',
    locked:'🔒 Locked',
    passedBadge:'✅ Passed · {pct}%',
    reviewedBadge:'✅ Reviewed',
    startBadge:'▶ Start',
    reviewBadge:'▶ Review',
    objective:'Objective',
    startCheck:'▶ Start the module check',
    finishBtn:'▶ Finish the mini-training',
    doneBack:'✓ Done — back to path',
    ixBadge:'📋 Module check — 70% to unlock the next module',
    ixItemBadge:'📋 Module check — item {i} of {n}',
    scoreSoFar:'Score so far: {c} / {t}',
    continue:'Continue →',
    sortWrong:'Not quite — the right answer is "{label}".',
    resPassed:'Module passed!',
    resFailed:'Not quite there yet',
    resUnlocked:"You've unlocked the next module.",
    resDone:"You've completed this mini-training.",
    resNeed:'You need 70% to unlock the next module. Review the section above and try the check again.',
    resContinue:'Continue to learning path',
    resFinish:'Continue',
    resBack:'Back to path',
    resReview:'Review this module',
    doneEyebrow:'Mini-Training Complete',
    doneTitle:'🎉 Congratulations!',
    doneP1:"🎉 <strong>Congratulations! You've completed this mini-training.</strong>",
    doneP2:"You're all done here! Please return to the LMS training page where you accessed this mini-training to close out the assignment.",
    doneP3:"👉 <strong>If a check or assessment is listed directly below the training in the LMS, make sure to complete it and achieve a passing score</strong> — otherwise the assignment may remain incomplete.",
    doneP4:'Good luck! ❤️',
    doneP5:'',
    devUnlockAlert:'Dev mode: all modules are now unlocked for review.',
    devOn:'🔓 Dev mode ON — all modules unlocked',
    devOff:'🔒 Dev mode OFF — progress cleared',
    devBadge:'🔓 DEV MODE',
    doLabel:'✅ Do',
    avoidLabel:'🚫 Avoid',
    noticeLabel:'Notice:',
    cvSee:'What you see:',
    cvDo:'What you do:',
    dtExample:'Example from a real class',
    dtNext:'Next:',
    dtDone:"✅ That's all four areas. Next, classify what you see.",
    tlVideoTitle:'{label} — a real class example',
    tlVideoMeta:'Watch how this phase looks in a real lesson'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Introduction', emoji:'🧩', color:'var(--coral)',
 title:'Why You\'re Here',
 desc:'Why "this isn\'t what we wanted" is one of the few refund reasons you can still change — and the rules that apply once a refund request has already come in.',
 obj:'Understand why a gap between the course and what the student or family expected can often be fixed, why a same-day report matters most, and exactly what to do (and not do) once a refund request already exists.',
 sections:[
  {t:'🎭 "This isn\'t what we wanted" — what is really behind it', html:`
   <div class="card"><p>You can't see the sales conversation, the trial class, or what the family imagined when they enrolled. What you <em>can</em> see is a child in your lesson — and the gap almost always shows up there first, long before a parent writes anything.</p></div>
   ${iconGrid([
     {ic:'🎯', html:`<strong>The topic isn't what they pictured.</strong> They wanted to build games and the course starts with the basics. They wanted to draw anime and the course teaches light, proportion and colour.`},
     {ic:'🧸', html:`<strong>The parent chose, the child didn't.</strong> The child never asked for this course, so every lesson feels like homework.`},
     {ic:'⚖️', html:`<strong>The level feels wrong.</strong> Too easy sounds like "boring content". Too hard sounds like "this isn't for me". Either way it gets reported as dislike.`},
     {ic:'⏳', html:`<strong>The fun part hasn't arrived yet.</strong> The first lessons build foundations, and the student leaves before seeing where it leads.`}
   ])}
   ${co('co-idea','💡',`<p><strong>This is one of the few refund reasons that can still be turned around.</strong> A student who wants something different can often be given something different — inside your lesson, through a leveling lesson or advising session, or in another Kodland course where they will be happier.</p>`)}
  `},
  {t:'⏱️ The key is speed — and your report', html:`
   <div class="card"><p>You don't decide whether a student changes course or level. But your report is what starts that conversation, and it only works if it reaches the right people <strong>early</strong>.</p></div>
   ${stepFlow([
     {ic:'👀', label:'You notice the gap in a lesson'},
     {ic:'📝', label:'You report it in BO the same day'},
     {ic:'👩‍💼', label:'Your Team Leader and Client Service look at the options'},
     {ic:'🔄', label:'A motivational lesson, a leveling lesson or advising session, or another Kodland course'}
   ])}
   ${co('co-danger','🚨',`<p><strong>A late report closes doors.</strong> Once the family has decided, most of these options are gone. The same report, written in the first two weeks, can keep a child at Kodland.</p>`)}
   ${co('co-ok','✅',`<p><strong>And while the team looks at the options, you still have the lesson.</strong> Flexible, student-centred teaching is the part that is entirely yours — Module 2 shows you how.</p>`)}
  `},
  {t:'🛟 If a refund request already exists', html:`
   <div class="card"><p>Everything above is about catching this early. But you may be opening this training because a family has <strong>already</strong> asked for a refund. The rules below apply no matter the reason — read them first, then use the rest of this training to understand what led here and what you can still do in the lesson.</p></div>
   ${co('co-idea','💡',`<p><strong>The request itself is created by Client Service, not by you</strong> — that part isn't yours to control. What's still yours is everything that happens in the lesson from here, and that's not nothing.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Say nothing about the request itself</strong> — not to the child, not to the family — unless Client Service explicitly asks you to say something specific. Your job now is the lesson, not the conversation.</p>`)}
  `},
  {t:'🎯 Your next lesson is the save attempt', html:`
   <div class="card"><p>You may not get a chance to change anything else. Treat the very next lesson with this child as the moment that decides it.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Give them a real turn.</strong> Not a meaningless question — a genuine moment where they're seen and they succeed.`},
     {ic:'🏆', html:`<strong>Build in an early, visible win.</strong> They should leave the lesson feeling capable, not behind.`},
     {ic:'👀', html:`<strong>Specific attention</strong> — make them feel noticed for something concrete, not generically praised.`},
     {ic:'🤐', html:`<strong>No mention of the request</strong> — even if the child brings it up, redirect warmly and keep teaching.`}
   ])}
  `},
  {t:'📮 Notify fast, and know the one safe line', html:`
   <div class="card"><p>You can find out a request exists through Client Service's comments on the child's profile in BO — there's no automatic system that notifies you. Once you know, what you've seen in your lessons is information Client Service doesn't have any other way.</p></div>
   ${numlist([
     'Leave a comment in BO the same day with exactly what you\'ve seen — dates and specifics, not impressions',
     'Include the family\'s own words, verbatim, if you have them',
     'Loop in your Team Leader the same day',
     'Never confirm that a refund has been approved, or discuss any amount'
   ])}
   ${co('co-ok','✅',`<p><strong>The message that's always safe to say:</strong> <em>"Customer Service will help you with this."</em> That's where your part of the conversation ends — Client Service takes it from there.</p>`)}
  `},
  {t:'🌱 Keep it up afterward', html:`
   <div class="card"><p>Whether the request is withdrawn, the child stays in your group, or moves to another tutor or format, keep giving extra care for the next few lessons. A save that holds for one lesson and then quietly goes back to normal often doesn't hold at all.</p></div>
  `}
 ]
},
{id:'spot', numLabel:'Module 1', emoji:'🔎', color:'var(--coral)',
 title:'Spot the Gap Early — and Report It the Same Day',
 desc:'The three shapes a mismatch takes, a quick diagnostic for the first lessons, a traffic-light check for every lesson, and how to report it in BO.',
 obj:'Recognise which kind of mismatch you are looking at, run a quick diagnostic, read the signals lesson by lesson, and report the case in BO the same day.',
 sections:[
  {t:'🧭 The three shapes of a mismatch', html:`
   <div class="card"><p>"I don't like this course" can mean three different things — and each one needs a slightly different move. Learn to tell them apart.</p></div>
   ${patternCards([
     {ic:'🎯', title:'Not what I came for', desc:'"I thought we were going to make games." "Can we do something else?"', note:'The expectation was different from the course. <strong>Flexibility can bridge it — and a different course may fit better.</strong>'},
     {ic:'😒', title:'Doesn\'t like the content', desc:'Arrives without enthusiasm, does the tasks "because I have to", says the topic is boring', note:'The topic, or the way the tasks are framed, doesn\'t speak to them. <strong>Offer choices inside the objective, and report it.</strong>'},
     {ic:'⚖️', title:'The level feels wrong', desc:'Finishes in minutes: "I already know this." Or: "I don\'t understand anything."', note:'Often reported as dislike. <strong>Adapt now, and flag it for a leveling lesson.</strong>'}
   ],3)}
  `},
  {t:'🩺 The quick diagnostic — your first two lessons (M1L1–M1L2)', html:`
   <div class="card"><p>The best window to catch a mismatch is the <strong>first two lessons of Module 1</strong>. A gap spotted only after lesson 3, without a report, is usually too late to prevent a cancellation. Three questions and one short exercise, in the very first lesson, take under ten minutes.</p></div>
   ${stepIconBlock('🗣️','"Have you worked with [the course\'s tool or language] before?"', `<p>Open and pressure-free. Let them talk and listen to how much they actually know.</p><p>⚠️ <strong>Watch for:</strong> "Yes, I already know all of this" — or "I have no idea what you're talking about."</p>`)}
   ${stepIconBlock('🌈','"What were you expecting to learn in this course?"', `<p>Shows the gap between what the parent enrolled them in and what the student actually wants to do.</p><p>⚠️ <strong>Watch for:</strong> an answer that has nothing to do with the enrolled course.</p>`)}
   ${stepIconBlock('⚖️','"What part of today felt easy, and what felt hard?"', `<p>Ask it after the first exercise. It calibrates how comfortable they really are with the level.</p><p>✅ <strong>Ideal:</strong> "the first part was easy, the second was hard" — the level is right.<br>⚠️ <strong>Watch for:</strong> "all of it was easy" or "I didn't understand any of it."</p>`)}
   ${stepIconBlock('✏️','A short solo exercise (5–8 minutes)', `<p>Ask the student to complete the module's first exercise on their own, without help. Notice how long it takes and whether they can start at all.</p><p>✅ <strong>Normal:</strong> needs some guidance and takes the expected time.<br>⚠️ <strong>Watch for:</strong> finishes instantly, or can't start alone.</p>`)}
   ${co('co-idea','💡',`<p><strong>Past lesson 2 already?</strong> Run the same questions this week. The diagnostic works at any point in the course — the earlier you ask, the more options are still open.</p>`)}
  `},
  {t:'🚥 Keep reading it every lesson', html:`
   <div class="card"><p>After the first lessons, a simple traffic light after every class keeps you honest. It takes thirty seconds.</p></div>
   ${classifyCard('co-ok','🟢','Arrives on time and ready · asks questions about the topic · gets excited when something works · wants to show their progress · remembers the last lesson.','Keep going. Keep the relationship warm, and keep noticing.')}
   ${classifyCard('co-cute','🟡','Gets distracted often · answers in monosyllables ("yes", "no", "dunno") · does exercises only out of obligation · doesn\'t remember the last lesson · asks to finish early.','Write a note after the lesson and try a flexible change (Module 2). <strong>Two yellow lessons in a row → tell your Team Leader that same week.</strong> Don\'t wait for red.')}
   ${classifyCard('co-danger','🔴','Refuses to take part · openly says they don\'t like it · the parent writes that the child doesn\'t want to come · two or more yellow lessons with no improvement · cries, gets frustrated or becomes difficult.','<strong>Report in BO the same day</strong> and tell your Team Leader.')}
   <div class="card"><h4>💬 Four check-in questions — ask one every 2–3 lessons</h4></div>
   ${iconGrid([
     {ic:'🌟', html:`<strong>"What was the coolest part of today's class?"</strong> If they can't name anything, that is a signal.`},
     {ic:'🔧', html:`<strong>"Is there anything you'd change about our lessons?"</strong> An open question that gives useful information without pressure.`},
     {ic:'🔢', html:`<strong>"From 1 to 5, how hard has this course been for you?"</strong> 1–2 means too easy, 4–5 too hard. Both are signs of a mismatch.`},
     {ic:'🚀', html:`<strong>"What would you like to be able to make or do when you finish this course?"</strong> If the answer has nothing to do with the course, there is an expectations gap.`}
   ])}
  `},
  {t:'📝 Report it in BO — the same day', html:`
   <div class="card"><p>A report that turns out to be unnecessary costs nothing. A missing one can cost a student. <strong>If you are not sure it's a real mismatch, report it anyway</strong> — your Team Leader knows the curriculum and the levels available; you don't need to.</p></div>
   ${timeline([
     {ic:'⏱️', label:'Right after the lesson', items:[
       '<strong>Write 2–3 lines:</strong> what signal you saw, at what moment, and what the student said — in their own words. Details fade fast.'
     ]},
     {ic:'📝', label:'The same day', items:[
       '<strong>Report it in BO:</strong> student profile → Progress → Tutors\' Evaluations → Evaluate The Student. Choose the Problem Kind (or <em>Other</em>), choose the group, and paste your note.',
       '<strong>Tell your Team Leader</strong> you have reported it.'
     ]},
     {ic:'🔁', label:'In your next lessons', items:[
       '<strong>Keep adapting</strong> (Module 2) and add anything new to the case. Report once, then follow up.'
     ]}
   ])}
   <div class="card" style="background:var(--surface2)"><h4>📨 What a useful report looks like — copy and complete</h4>
   <p style="font-size:13.5px;line-height:1.75"><strong>Student:</strong> [name] · <strong>Course / level:</strong> [e.g. Illustration, level 1] · <strong>Lesson:</strong> [M1L2 — date]<br>
   <strong>What I observed:</strong> [2–3 lines: the signal, the moment, the student's own words]<br>
   <strong>What I think is behind it:</strong> ☐ not what they expected &nbsp; ☐ doesn't like the content &nbsp; ☐ the level feels wrong<br>
   <strong>What I have already tried in the lesson:</strong> [e.g. let her choose the character theme]<br>
   <strong>What could help — my recommendation, your decision:</strong> ☐ a motivational lesson &nbsp; ☐ a leveling lesson or advising session &nbsp; ☐ a different course</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Report a case</span><iframe src="Simulacion_BO_Evaluate.html" title="BO — Report a case" loading="lazy"></iframe></div></div>
   ${co('co-star','🌱',`<p><strong>Why this works:</strong> your Team Leader and Client Service can only act on what they know. The report is the one step in this whole process that only you can take — and it is the one that decides how many options are left.</p>`)}
  `},
  {t:'💬 What you can say to the family — and what waits for your Team Leader', html:`
   <div class="card"><p>You can always talk about the child's learning. You never present, promise or refuse a change of course, level or format — that comes from your Team Leader and Client Service.</p></div>
   ${doavoid(
     ['Share what you notice about the learning: <em>"She lights up when she draws characters — I\'m building that into our lessons."</em>','Say you have shared it with your team and will come back to them','Ask what they would like their child to get out of the course','Thank them for telling you — warmly, and the same day'],
     ['Suggesting another course, a level change or a refund yourself','Defending the course: <em>"it gets better later"</em>','Promising a lesson or a change','Saying <em>"he didn\'t like this course"</em> — it sounds like a failure']
   )}
   <div class="card" style="background:var(--surface2)"><h4>📨 Once your Team Leader confirms a recommendation — frame it as an opportunity</h4>
   <p style="font-size:13.5px;line-height:1.75"><em>"Hi [parent's name], I'm [your name], [student]'s tutor. I've noticed [student] has a lot of potential, but in the first lessons I sensed this course's focus isn't quite what they had in mind — [e.g. they mentioned they'd like to build games, not just code]. I want [student] to enjoy and get the most out of their time at Kodland, so together with our team we'd like to explore whether [another course] could be a better fit. Do you have a few minutes this week for me to tell you more?"</em></p></div>
   ${co('co-idea','💡',`<p><strong>Say</strong> "we found something they might like even more" — <strong>never</strong> "they didn't like this course."</p>`)}
  `}
 ],
 ix:{
  title:'Spot it, name it, report it',
  instr:'Sort the quotes and pick the best move. 70% to unlock the next module.',
  items:[
   {type:'sort', prompt:'Which shape of mismatch is this?', card:`"I thought we were going to make games, not just type code."`, zones:[{label:'🎯 Not what I came for', fb:'Correct — the expectation was different from the course. Flexibility can bridge part of the gap, and a report keeps other options open.'},{label:'😒 Doesn\'t like the content', fb:'Not quite — this student has a specific thing they expected to do. That is a "not what I came for" gap.'},{label:'⚖️ The level feels wrong', fb:'Not quite — nothing here is about difficulty. It is about what they expected to build.'}], correctZone:0},
   {type:'sort', prompt:'Which shape of mismatch is this?', card:`"All of it was really easy — I already know this."`, zones:[{label:'🎯 Not what I came for', fb:'Not quite — this student is talking about difficulty, not about the topic.'},{label:'😒 Doesn\'t like the content', fb:'Not quite — the problem is the level, even if it sounds like boredom with the content.'},{label:'⚖️ The level feels wrong', fb:'Correct — it looks like dislike but it is the level. Adapt now, and flag it for a leveling lesson.'}], correctZone:2},
   {type:'sort', prompt:'Which shape of mismatch is this?', card:`Every lesson she does the exercises only because she has to, answers "dunno", and asks to finish early.`, zones:[{label:'🎯 Not what I came for', fb:'Not quite — she hasn\'t said what she expected. The pattern is about low interest in the content itself.'},{label:'😒 Doesn\'t like the content', fb:'Correct — the content, or the way it is framed, doesn\'t speak to her. Offer choices inside the objective and report it.'},{label:'⚖️ The level feels wrong', fb:'Not quite — nothing shows a difficulty problem; the signal is low interest.'}], correctZone:1},
   {type:'choice', prompt:`In the diagnostic you ask "What were you expecting to learn?" and the student says: "To draw anime — not this." What is the best next step?`, opts:[`Explain that anime comes later in the course and continue exactly as planned`,`Bring their interest into today's lesson where you can, and report it in BO the same day`,`Wait two more lessons to see whether it passes`], correct:1, fb:`Flex what you can in the lesson right away, and report it the same day so the team still has all its options. Waiting, or defending the plan, spends the window.`},
   {type:'sort', prompt:'Where does this snapshot sit on the traffic light?', card:`Two lessons in a row: one-word answers and asking to finish early.`, zones:[{label:'🟢 Green', fb:'Not quite — two lessons of one-word answers and wanting to leave early is not "all good".'},{label:'🟡 Yellow', fb:'Correct — note it, try a flexible change, and tell your Team Leader that same week. Don\'t wait for red.'},{label:'🔴 Red', fb:'Not yet — red means refusal, open dislike, or a parent writing in. But yellow twice in a row already means: tell your Team Leader this week.'}], correctZone:1},
  ]
 }
},
{id:'flex', numLabel:'Module 2', emoji:'🎛️', color:'var(--coral)',
 title:'Make the Course Fit Them — Flexibility That Keeps the Objective',
 desc:'How to adapt a lesson to what a student really wants to learn without losing the learning goal, how to offer choices by age, and when your Team Leader must step in.',
 obj:'Adapt a lesson to the student\'s interests while keeping the learning objective, offer choices that suit their age, and know when flexibility is not enough and your Team Leader must step in.',
 sections:[
  {t:'🎯 The rule: keep the objective, flex the path', html:`
   <div class="card"><p>You don't have to choose between "follow the manual" and "let them do whatever they like". The manual tells you what the lesson is <strong>for</strong>. Almost everything else can bend.</p></div>
   <div class="two-col">
     <div class="card"><h4>🔒 Stays the same</h4><ul><li>The learning objective and the skills of the lesson</li><li>The expected outcomes in the manual</li><li>The lesson structure (warm-up, practice, wrap-up)</li></ul></div>
     <div class="card"><h4>🎛️ Can flex</h4><ul><li>The theme, the character, the story</li><li>The topic of the project</li><li>The order of the steps</li><li>The example you use, and the difficulty of the task</li></ul></div>
   </div>
   ${co('co-idea','🧠',`<p><strong>Why it works.</strong> In John Keller's well-known ARCS model (1987), a motivated student needs four things: <strong>A</strong>ttention, <strong>R</strong>elevance, <strong>C</strong>onfidence and <strong>S</strong>atisfaction. A student who says "this isn't what I wanted" is missing <em>Relevance</em> — and connecting the lesson to what they already care about is exactly how you give it back.</p>`)}
  `},
  {t:'🎨 It looks like this — five real examples', html:`
   ${stepIconBlock('🎨','Illustration — "I only want to draw anime"', `<p><strong>The objective stays:</strong> light, proportion, colour, composition.<br><strong>Their twist:</strong> every exercise uses an anime character — shading an anime face, comparing proportions of a chibi and a hero, building a colour palette for <em>their</em> character.</p><p><em>"Love it — let's make today's character yours. We'll learn how light works on your character's face."</em></p>`)}
   ${stepIconBlock('🐍','Python — "I want to make games, not boring code"', `<p><strong>The objective stays:</strong> variables, loops, conditions.<br><strong>Their twist:</strong> a mini quiz or game about their favourite series or game, using exactly the same concepts.</p><p><em>"A game is just loops and conditions with a better costume. Which one shall we build?"</em></p>`)}
   ${stepIconBlock('📖','Any course — "I don\'t want to follow the story"', `<p><strong>The objective stays:</strong> the skill of the lesson.<br><strong>Their twist:</strong> drop the storytelling wrapper and practise the same skill on their own idea, as long as they still learn the lesson's core topic.</p><p><em>"Skip the story — what would you like to make with this skill?"</em></p>`)}
   ${stepIconBlock('🧊','3D / design — "I want to model my own thing"', `<p><strong>The objective stays:</strong> the tool and the technique.<br><strong>Their twist:</strong> they choose the object they practise on.</p><p><em>"Show me what you'd love to have in your room — we'll build it with today's technique."</em></p>`)}
   ${stepIconBlock('🌐','Web — "I\'d rather make a page about my own topic"', `<p><strong>The objective stays:</strong> structure, layout, links.<br><strong>Their twist:</strong> a page about their football club, series or hobby.</p><p><em>"Pick a topic you could talk about for an hour — that's your page."</em></p>`)}
  `},
  {t:'🎛️ Offer a menu, not an open door', html:`
   <div class="card"><p>"What do you want to do?" is too open — it often gets "I don't know". Give <strong>two or three options that all meet the objective</strong>, and let the student pick. A small choice gives a sense of ownership; a limited menu keeps the lesson on track. How you offer it depends on age:</p></div>
   ${dimTabs([
     {ic:'🧒', title:'Ages 6–8',
      intro:'Young children choose with their whole imagination. Give them concrete, playful options — and never more than two or three.',
      tips:[
       {ic:'🃏', html:`<strong>Choose-a-card.</strong> <em>"Today we can make a dragon, a robot or a cat. Which one do you pick?"</em>`},
       {ic:'🏷️', html:`<strong>Let them name and own it.</strong> <em>"What's your character called?"</em> — then use that name while you explain.`},
       {ic:'✅', html:`<strong>Say yes to the theme, keep the skill.</strong> <em>"Yes, the dragon can have shadows — shadows are today's secret."</em>`},
       {ic:'🎉', html:`<strong>Celebrate their pick.</strong> The moment their idea appears on screen is the moment they feel the lesson is theirs.`}
      ]},
     {ic:'🧑', title:'Ages 9–11',
      intro:'They want a say in what they build, and they want to recognise things from their own world.',
      tips:[
       {ic:'🧩', html:`<strong>Theme plus mission.</strong> <em>"Pick the theme — space, football or a game you love — and the mission stays the same: use today's technique."</em>`},
       {ic:'🔢', html:`<strong>Quick rating.</strong> <em>"From 1 to 5, how much do you like this theme? What would make it a 5?"</em>`},
       {ic:'🌟', html:`<strong>A bonus level for their own idea.</strong> Finish the core task, then they add something of their own.`},
       {ic:'📺', html:`<strong>Use what they know.</strong> Refer to the games or series they mention — it shows you listened.`}
      ]},
     {ic:'🧑‍🎓', title:'Ages 12+',
      intro:'Older students want relevance and respect. Treat them as capable, and negotiate.',
      tips:[
       {ic:'🤝', html:`<strong>Negotiate the brief.</strong> <em>"What would make this project worth your time? Let's find a version that teaches today's skill and is yours."</em>`},
       {ic:'🌍', html:`<strong>Show where the skill is used</strong> — in the games, apps or designs they already like.`},
       {ic:'⚖️', html:`<strong>Be honest about limits.</strong> <em>"That's outside this course — I'll ask my team what we can do. For today, let's use it on this."</em>`},
       {ic:'📣', html:`<strong>Let them show their work</strong> to the group; peers matter a lot at this age.`}
      ]}
   ],'✅ That\'s the three age groups. Next: when flexibility is not enough.')}
  `},
  {t:'🧭 When flexibility isn\'t enough — your Team Leader and the options', html:`
   <div class="card"><p>Some gaps are too wide to bridge inside the lesson. That is not a failure — it is exactly why your same-day report matters. These are the situations that go to your Team Leader:</p></div>
   ${iconGrid([
     {ic:'🔀', html:`<strong>The student wants a different skill altogether</strong> — for example, 3D games in a drawing course.`},
     {ic:'📉', html:`<strong>Your flexibility helps for a lesson, but the interest doesn't come back</strong> over two or three lessons.`},
     {ic:'📢', html:`<strong>The parent says the course isn't what they bought.</strong> Acknowledge, take it to your Team Leader and Client Service before replying, and write the family's words verbatim in BO.`},
     {ic:'⚖️', html:`<strong>The level is clearly wrong.</strong> Adapt now and report it, so a leveling lesson can be considered.`}
   ])}
   <div class="card"><h4>🎁 What your Team Leader and Client Service can arrange — you recommend, they decide</h4></div>
   ${iconGrid([
     {ic:'💬', html:`<strong>A motivational lesson.</strong> A conversation or lesson designed to reconnect the student with why they joined.`},
     {ic:'🎚️', html:`<strong>A leveling lesson or advising session.</strong> Checks whether the course and level really fit — and what would fit better.`},
     {ic:'🔄', html:`<strong>Another Kodland course.</strong> Often the best save: the student does something they love, and stays with Kodland.`}
   ])}
   ${co('co-danger','⛔',`<p><strong>You recommend in BO — you never promise.</strong> Not "I'll move you to another course", and not "that's not possible". Both are decisions that aren't yours.</p>`)}
   <div class="card" style="background:var(--surface2)"><h4>🗣️ What you can say to the student</h4>
   <p style="font-size:13.5px;line-height:1.75"><em>"I love that you told me what you'd really like to make. For today, let's use your idea in the lesson. And I'll check with my team what else we can do for you."</em></p></div>
   ${doavoid(
     ['Ask what they would like to create at the start of the next lesson','Show their work to the group','Celebrate the moment their idea appears in the lesson'],
     ['Saying <em>"that\'s not in the plan"</em>','Defending the course instead of listening','Letting "their idea" replace the lesson goal']
   )}
  `}
 ],
 ix:{
  title:'Flex it — without losing the goal',
  instr:'Pick the best move or sort each situation. 70% to unlock the final checklist.',
  items:[
   {type:'choice', prompt:`A student in the Illustration course says: "I only want to draw anime." What is the best response?`, opts:[`Tell them anime isn't part of the course`,`Let them draw anime characters in the exercises while teaching light, proportion and colour — and report it in BO`,`Let them draw anything they want and skip the lesson goal`], correct:1, fb:`The objective (light, proportion, colour) stays; the character is theirs. Then report it in BO so the team can consider more options. Refusing loses the student; dropping the goal loses the learning.`},
   {type:'sort', prompt:'Who handles this?', card:`Let the student choose the theme of the project.`, zones:[{label:'✅ I can do it myself', fb:'Correct — choosing a theme inside the objective is entirely yours, and needs no permission.'},{label:'🧭 It needs my Team Leader', fb:'Not quite — a theme choice that keeps the objective is within your own teaching.'}], correctZone:0},
   {type:'sort', prompt:'Who handles this?', card:`The student asks to switch to a completely different course.`, zones:[{label:'✅ I can do it myself', fb:'Not quite — a change of course is never yours to promise or refuse.'},{label:'🧭 It needs my Team Leader', fb:'Correct — report it in BO the same day and tell your Team Leader. You recommend; they and Client Service decide.'}], correctZone:1},
   {type:'sort', prompt:'Who handles this?', card:`A parent writes: "This isn't the course we paid for."`, zones:[{label:'✅ I can do it myself', fb:'Not quite — this is the most sensitive message you can get. Answering alone can confirm a complaint or hint at something we can\'t deliver.'},{label:'🧭 It needs my Team Leader', fb:'Correct — acknowledge receipt, take it to your Team Leader and Client Service before replying, and record the family\'s words in BO.'}], correctZone:1},
   {type:'choice', prompt:`A 7-year-old tells you the lessons are boring. Which offer fits best?`, opts:[`"Let's design the whole project together — what's your five-point brief?"`,`"What do you want your character to be — a dragon, a robot or a cat?" and use that character in today's task`,`"This is how the course works — you'll like it later."`], correct:1, fb:`Young children choose best between two or three concrete, playful options. An open brief is for older students, and "you'll like it later" defends the course instead of listening.`},
   {type:'choice', prompt:`What does "keep the objective, flex the path" mean?`, opts:[`Skip the tasks the student doesn't like`,`Follow only the student's interests`,`Change the theme or the task, but keep the skill the lesson is for`], correct:2, fb:`The manual's objective and outcomes stay; theme, character, topic and order can bend.`},
   {type:'choice', prompt:`A student asks: "Can I do a different course instead?" What do you say?`, opts:[`"Yes, I'll arrange it for you."`,`"No, you've already started this one."`,`"I love that you're telling me. I'll check with my team what we can do — and meanwhile let's use your idea in today's lesson."`], correct:2, fb:`Neither promising nor refusing is yours to do — but listening, using their idea now, and starting the internal conversation is exactly your job.`},
   {type:'sort', prompt:'Does this keep the learning objective?', card:`The lesson goal is the animation technique, so the student animates any object they choose.`, zones:[{label:'✅ Keeps the objective', fb:'Correct — the choice is theirs, the technique is still practised.'},{label:'⛔ Loses the objective', fb:'Not quite — they still practise the technique the lesson is for.'}], correctZone:0}
  ]
 }
},
{id:'checklist', numLabel:'Final Checklist', emoji:'✅', color:'var(--coral)',
 title:'Final Checklist',
 desc:'No quiz here — just the essentials from this mini-training, before you close it out.',
 obj:'Review the checklist below. This module is ungraded — read it, then finish the mini-training.',
 sections:[
  {t:'🛟 If a refund request already exists', html:`
   ${numlist([
     'I left a comment in BO the same day I learned of the request, and looped in my Team Leader',
     'My next lesson with this student was a real save attempt — a real turn, a visible win, specific attention, no mention of the request',
     'I never confirmed approval or discussed an amount — I used the one safe line and left the rest to Client Service'
   ])}
  `},
  {t:'🌱 In every lesson', html:`
   ${numlist([
     'In the first two lessons I run the quick diagnostic: what they know, what they expect, what felt easy or hard, and a short solo exercise',
     'After every lesson I read it as green, yellow or red — and after two yellow lessons in a row I tell my Team Leader that same week',
     'Every 2–3 lessons I ask a check-in question: the coolest part, what they would change, how hard from 1 to 5, what they want to create',
     'Right after the lesson I write 2–3 lines: the signal, the moment, and the student\'s own words',
     'I report a possible mismatch in BO the same day — even when I am not sure; an unneeded report costs nothing',
     'I keep the learning objective fixed and flex the theme, the project, the character or the order of the steps',
     'I offer two or three choices that all meet the objective, in a way that suits the child\'s age',
     'I never promise a change of course, level or an extra lesson — I recommend in BO and say "I\'ll check with my team"',
     'I don\'t defend the course or say it "gets better later" — I listen first, then adapt',
     'When a parent says the course isn\'t what they expected, I acknowledge, take it to my Team Leader and Client Service before replying, and record their words in BO',
     'I celebrate the moment the student\'s own idea shows up in the lesson, and I show their work to the group'
   ])}
  `},
  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>That's the whole mini-training.</strong> When you're ready, continue — then complete the DST in the LMS to close out the assignment.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
