/* Mini_Training_2_Course_Expectations - English content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='pl';
const CONTENT = {
  flag:'🇵🇱', dir:'ltr',
  ui:{
    pageTitle:"Miniszkolenie · Oczekiwania — szkolenie nauczycieli Kodland",
    logoSub:'Dział Rozwoju Nauczycieli',
    heroEyebrow:"🎯 Miniszkolenie",
    heroTitle:"Jak zniwelować <span class=\"h-pill\">rozbieżność oczekiwań</span>",
    heroIntro:"Otrzymujesz to szkolenie, ponieważ masz uczniów, którzy poprosili o zwrot pieniędzy, bo kurs nie spełnił ich oczekiwań, nie był tym, czego chcieli, albo nie podoba im się jego treść. Pokażemy ci, co możesz zrobić jako nauczyciel i jak radzić sobie w takich sytuacjach.",
    heroWork:"Przejdź przez 4 krótkie moduły. Aby odblokować kolejny, w sprawdzianie każdego modułu potrzebujesz co najmniej 70%. Całość zajmie około 20–25 minut.",
    startBtn:"🚀 Rozpocznij szkolenie",
    pathLabel:'Twoja ścieżka nauki',
    devTitle:'Dev: odblokuj wszystkie moduły do przeglądu',
    backToPath:'Powrót do ścieżki',
    modulesPassed:'Zaliczone moduły: {done} / {total}',
    moduleN:'Moduł {n}',
    of:'z',
    locked:'🔒 Zablokowany',
    passedBadge:'✅ Zaliczony · {pct}%',
    reviewedBadge:'✅ Przejrzany',
    startBadge:'▶ Rozpocznij',
    reviewBadge:'▶ Przejrzyj',
    objective:'Cel',
    startCheck:'▶ Rozpocznij sprawdzian modułu',
    finishBtn:'▶ Ukończ miniszkolenie',
    doneBack:'✓ Gotowe — powrót do ścieżki',
    ixBadge:'📋 Sprawdzian modułu — 70%, aby odblokować kolejny moduł',
    ixItemBadge:'📋 Sprawdzian modułu — pytanie {i} z {n}',
    scoreSoFar:'Dotychczasowy wynik: {c} / {t}',
    continue:'Dalej →',
    sortWrong:'Nie do końca — poprawna odpowiedź to „{label}”.',
    resPassed:'Moduł zaliczony!',
    resFailed:'Jeszcze nie tym razem',
    resUnlocked:"Udało ci się odblokować kolejny moduł.",
    resDone:"Udało ci się ukończyć to miniszkolenie.",
    resNeed:'Aby odblokować kolejny moduł, potrzebujesz 70%. Przejrzyj powyższą część i spróbuj ponownie.',
    resContinue:'Przejdź do ścieżki nauki',
    resFinish:'Dalej',
    resBack:'Powrót do ścieżki',
    resReview:'Przejrzyj ten moduł',
    doneEyebrow:'Miniszkolenie ukończone',
    doneTitle:'🎉 Gratulacje!',
    doneP1:"🎉 <strong>Gratulacje! Udało ci się ukończyć to miniszkolenie.</strong>",
    doneP2:"To już wszystko! Wróć na stronę szkolenia w LMS, z której trafiasz do tego miniszkolenia, aby zamknąć zadanie.",
    doneP3:"👉 <strong>Jeśli bezpośrednio pod szkoleniem w LMS widnieje sprawdzian lub test, rozwiąż go i uzyskaj wynik zaliczający</strong> — w przeciwnym razie zadanie może pozostać nieukończone.",
    doneP4:'Powodzenia! ❤️',
    doneP5:'',
    devUnlockAlert:'Tryb deweloperski: wszystkie moduły zostały odblokowane do przeglądu.',
    devOn:'🔓 Tryb deweloperski WŁ. — wszystkie moduły odblokowane',
    devOff:'🔒 Tryb deweloperski WYŁ. — postęp wyczyszczony',
    devBadge:'🔓 TRYB DEWELOPERSKI',
    doLabel:'✅ Rób tak',
    avoidLabel:'🚫 Unikaj',
    noticeLabel:'Zwróć uwagę:',
    cvSee:'Co widzisz:',
    cvDo:'Co robisz:',
    dtExample:'Przykład z prawdziwych zajęć',
    dtNext:'Następnie:',
    dtDone:"✅ To już wszystkie cztery obszary. Teraz sklasyfikuj to, co widzisz.",
    tlVideoTitle:'{label} — przykład z prawdziwych zajęć',
    tlVideoMeta:'Zobacz, jak ten etap wygląda na prawdziwej lekcji'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Wprowadzenie', emoji:'🧩', color:'var(--coral)',
 title:'Dlaczego tu jesteś',
 desc:'Dlaczego „to nie jest to, czego chcieliśmy” to jeden z niewielu powodów zwrotu, na który wciąż masz wpływ — i jakie zasady obowiązują, gdy wniosek o zwrot już wpłynął.',
 obj:'Zrozum, dlaczego rozbieżność między kursem a oczekiwaniami ucznia lub rodziny często da się naprawić, dlaczego najważniejsze jest zgłoszenie tego samego dnia i co dokładnie robić (a czego nie robić), gdy wniosek o zwrot już istnieje.',
 sections:[
  {t:'🎭 „To nie jest to, czego chcieliśmy” — co naprawdę za tym stoi', html:`
   <div class="card"><p>Nie widzisz rozmowy sprzedażowej, lekcji próbnej ani tego, co rodzina sobie wyobrażała przy zapisie. To, co <em>możesz</em> zobaczyć, to dziecko na twojej lekcji — a rozbieżność niemal zawsze najpierw ujawnia się właśnie tam, na długo zanim rodzic cokolwiek napisze.</p></div>
   ${iconGrid([
     {ic:'🎯', html:`<strong>Temat nie jest taki, jak sobie wyobrażali.</strong> Chcieli tworzyć gry, a kurs zaczyna się od podstaw. Chcieli rysować anime, a kurs uczy światła, proporcji i koloru.`},
     {ic:'🧸', html:`<strong>Wybrał rodzic, nie dziecko.</strong> Dziecko nigdy nie prosiło o ten kurs, więc każda lekcja przypomina pracę domową.`},
     {ic:'⚖️', html:`<strong>Poziom wydaje się nieodpowiedni.</strong> Za łatwo brzmi jak „nudne treści”. Za trudno brzmi jak „to nie dla mnie”. Tak czy inaczej zostaje to zgłoszone jako niechęć.`},
     {ic:'⏳', html:`<strong>Najciekawsza część jeszcze nie nadeszła.</strong> Pierwsze lekcje budują podstawy, a uczeń odchodzi, zanim zobaczy, dokąd to prowadzi.`}
   ])}
   ${co('co-idea','💡',`<p><strong>To jeden z niewielu powodów zwrotu, które wciąż można odwrócić.</strong> Uczniowi, który chce czegoś innego, często można dać coś innego — na twojej lekcji, przez lekcję poziomującą lub konsultację albo w innym kursie Kodland, na którym będzie szczęśliwszy.</p>`)}
  `},
  {t:'⏱️ Kluczowe są szybkość — i twoje zgłoszenie', html:`
   <div class="card"><p>Nie decydujesz o tym, czy uczeń zmieni kurs lub poziom. Ale to twoje zgłoszenie rozpoczyna tę rozmowę i działa tylko wtedy, gdy <strong>wcześnie</strong> trafi do właściwych osób.</p></div>
   ${stepFlow([
     {ic:'👀', label:'Zauważasz rozbieżność na lekcji'},
     {ic:'📝', label:'Tego samego dnia zgłaszasz to w BO'},
     {ic:'👩‍💼', label:'Twój lider zespołu i Dział Obsługi Klienta analizują możliwości'},
     {ic:'🔄', label:'Lekcja motywacyjna, lekcja poziomująca lub konsultacja albo inny kurs Kodland'}
   ])}
   ${co('co-danger','🚨',`<p><strong>Spóźnione zgłoszenie zamyka drogi.</strong> Gdy rodzina już podejmie decyzję, większość tych możliwości znika. To samo zgłoszenie napisane w pierwszych dwóch tygodniach może zatrzymać dziecko w Kodland.</p>`)}
   ${co('co-ok','✅',`<p><strong>A gdy zespół analizuje możliwości, lekcja wciąż należy do ciebie.</strong> Elastyczne nauczanie skoncentrowane na uczniu to część, która zależy wyłącznie od ciebie — moduł 2 pokazuje, jak to robić.</p>`)}
  `},
  {t:'🛟 Jeśli wniosek o zwrot już wpłynął', html:`
   <div class="card"><p>Wszystko powyżej dotyczy wczesnego wychwytywania problemu. Możliwe jednak, że otwierasz to szkolenie, bo rodzina <strong>już</strong> poprosiła o zwrot pieniędzy. Poniższe zasady obowiązują bez względu na powód — przeczytaj je najpierw, a potem wykorzystaj resztę szkolenia, aby zrozumieć, co do tego doprowadziło i co wciąż możesz zrobić na lekcji.</p></div>
   ${co('co-idea','💡',`<p><strong>Sam wniosek tworzy Dział Obsługi Klienta, nie ty</strong> — na tę część nie masz wpływu. Do ciebie wciąż należy wszystko, co od teraz dzieje się na lekcji, a to naprawdę sporo.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Nie mów nic o samym wniosku</strong> — ani dziecku, ani rodzinie — chyba że Dział Obsługi Klienta wyraźnie poprosi cię o przekazanie czegoś konkretnego. Twoim zadaniem jest teraz lekcja, a nie ta rozmowa.</p>`)}
  `},
  {t:'🎯 Następna lekcja to twoja szansa na ratunek', html:`
   <div class="card"><p>Możesz nie mieć okazji, by zmienić cokolwiek innego. Potraktuj najbliższą lekcję z tym dzieckiem jako moment, który o wszystkim zdecyduje.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Daj dziecku prawdziwą okazję do działania.</strong> Nie pytanie dla zasady — tylko autentyczny moment, w którym zostaje zauważone i odnosi sukces.`},
     {ic:'🏆', html:`<strong>Zaplanuj wczesny, widoczny sukces.</strong> Dziecko powinno wyjść z lekcji z poczuciem, że daje radę, a nie że zostaje w tyle.`},
     {ic:'👀', html:`<strong>Konkretna uwaga</strong> — niech dziecko poczuje, że zauważasz coś konkretnego, a nie chwalisz ogólnikowo.`},
     {ic:'🤐', html:`<strong>Ani słowa o wniosku</strong> — nawet jeśli dziecko samo o nim wspomni, ciepło zmień temat i ucz dalej.`}
   ])}
  `},
  {t:'📮 Zgłaszaj szybko i znaj jedno bezpieczne zdanie', html:`
   <div class="card"><p>O tym, że wniosek istnieje, możesz dowiedzieć się z komentarzy Działu Obsługi Klienta w profilu dziecka w BO — nie ma automatycznego systemu, który by cię o tym powiadomił. Gdy już wiesz, to, co widzisz na swoich lekcjach, jest informacją, której Dział Obsługi Klienta nie zdobędzie w żaden inny sposób.</p></div>
   ${numlist([
     'Tego samego dnia zostaw komentarz w BO z dokładnym opisem tego, co widzisz — daty i konkrety, a nie wrażenia',
     'Jeśli je znasz, zacytuj dosłownie słowa rodziny',
     'Tego samego dnia poinformuj swojego lidera zespołu',
     'Nigdy nie potwierdzaj, że zwrot został zatwierdzony, i nie rozmawiaj o żadnych kwotach'
   ])}
   ${co('co-ok','✅',`<p><strong>Zdanie, które zawsze jest bezpieczne:</strong> <em>„Dział Obsługi Klienta pomoże w tej sprawie.”</em> Na tym kończy się twoja część rozmowy — dalej przejmuje ją Dział Obsługi Klienta.</p>`)}
  `},
  {t:'🌱 Nie odpuszczaj później', html:`
   <div class="card"><p>Niezależnie od tego, czy wniosek zostanie wycofany, dziecko zostanie w twojej grupie, czy przejdzie do innego nauczyciela lub formatu — przez kilka kolejnych lekcji poświęcaj mu szczególną uwagę. Ratunek, który trzyma się przez jedną lekcję, a potem wszystko po cichu wraca do normy, często w ogóle się nie udaje.</p></div>
  `}
 ]
},
{id:'spot', numLabel:'Moduł 1', emoji:'🔎', color:'var(--coral)',
 title:'Wychwyć rozbieżność wcześnie — i zgłoś ją tego samego dnia',
 desc:'Trzy postacie niedopasowania, szybka diagnoza na pierwszych lekcjach, sygnalizacja świetlna na każdej lekcji i zgłaszanie sprawy w BO.',
 obj:'Rozpoznaj, z jakim rodzajem niedopasowania masz do czynienia, przeprowadź szybką diagnozę, odczytuj sygnały lekcja po lekcji i zgłaszaj sprawę w BO tego samego dnia.',
 sections:[
  {t:'🧭 Trzy postacie niedopasowania', html:`
   <div class="card"><p>„Nie lubię tego kursu” może oznaczać trzy różne rzeczy — i każda wymaga nieco innego ruchu. Naucz się je rozróżniać.</p></div>
   ${patternCards([
     {ic:'🎯', title:'Nie o to mi chodziło', desc:'„Myślałem, że będziemy robić gry.” „Możemy zrobić coś innego?”', note:'Oczekiwanie różniło się od kursu. <strong>Elastyczność może zniwelować rozbieżność — a inny kurs może pasować lepiej.</strong>'},
     {ic:'😒', title:'Nie lubi treści', desc:'Przychodzi bez entuzjazmu, robi zadania „bo muszę”, mówi, że temat jest nudny', note:'Temat albo sposób przedstawienia zadań do niego nie przemawia. <strong>Daj wybór w ramach celu lekcji i zgłoś to.</strong>'},
     {ic:'⚖️', title:'Poziom nie pasuje', desc:'Kończy w kilka minut: „Ja to już umiem.” Albo: „Nic nie rozumiem.”', note:'Często zgłaszane jako niechęć. <strong>Dostosuj teraz i zgłoś to z myślą o lekcji poziomującej.</strong>'}
   ],3)}
  `},
  {t:'🩺 Szybka diagnoza — twoje dwie pierwsze lekcje (M1L1–M1L2)', html:`
   <div class="card"><p>Najlepszy moment na wychwycenie niedopasowania to <strong>dwie pierwsze lekcje modułu 1</strong>. Jeśli zauważysz rozbieżność dopiero po lekcji 3 i jej nie zgłosisz, zwykle jest już za późno, by zapobiec rezygnacji. Trzy pytania i jedno krótkie ćwiczenie na pierwszej lekcji zajmują niecałe dziesięć minut.</p></div>
   ${stepIconBlock('🗣️','„Czy masz już doświadczenie z [narzędziem lub językiem kursu]?”', `<p>Otwarte i bez presji. Pozwól uczniowi mówić i słuchaj, ile naprawdę wie.</p><p>⚠️ <strong>Zwróć uwagę na:</strong> „Tak, to wszystko już umiem” — albo „Nie mam pojęcia, o czym mówisz”.</p>`)}
   ${stepIconBlock('🌈','„Czego się spodziewasz po tym kursie — czego chcesz się nauczyć?”', `<p>Pokazuje rozbieżność między tym, na co zapisał ucznia rodzic, a tym, co uczeń naprawdę chce robić.</p><p>⚠️ <strong>Zwróć uwagę na:</strong> odpowiedź, która nie ma nic wspólnego z kursem, na który jest zapisany.</p>`)}
   ${stepIconBlock('⚖️','„Co dzisiaj było łatwe, a co trudne?”', `<p>Zadaj to pytanie po pierwszym ćwiczeniu. Pozwala ocenić, jak swobodnie uczeń naprawdę czuje się na tym poziomie.</p><p>✅ <strong>Idealnie:</strong> „pierwsza część była łatwa, druga trudna” — poziom jest odpowiedni.<br>⚠️ <strong>Zwróć uwagę na:</strong> „wszystko było łatwe” albo „nic z tego nie zrozumiałem”.</p>`)}
   ${stepIconBlock('✏️','Krótkie samodzielne ćwiczenie (5–8 minut)', `<p>Poproś ucznia, by samodzielnie, bez pomocy wykonał pierwsze ćwiczenie modułu. Zwróć uwagę, ile czasu mu to zajmuje i czy w ogóle potrafi zacząć.</p><p>✅ <strong>Normalnie:</strong> potrzebuje trochę wskazówek i mieści się w przewidzianym czasie.<br>⚠️ <strong>Zwróć uwagę na:</strong> kończy natychmiast albo nie potrafi zacząć sam.</p>`)}
   ${co('co-idea','💡',`<p><strong>Jesteście już po lekcji 2?</strong> Zadaj te same pytania w tym tygodniu. Diagnoza działa na każdym etapie kursu — im wcześniej zapytasz, tym więcej możliwości pozostaje otwartych.</p>`)}
  `},
  {t:'🚥 Odczytuj sygnały na każdej lekcji', html:`
   <div class="card"><p>Po pierwszych lekcjach prosta sygnalizacja świetlna po każdych zajęciach pomaga zachować obiektywizm. Zajmuje trzydzieści sekund.</p></div>
   ${classifyCard('co-ok','🟢','Przychodzi punktualnie i gotowy do pracy · zadaje pytania o temat · cieszy się, gdy coś działa · chce pokazać swoje postępy · pamięta ostatnią lekcję.','Tak trzymaj. Dbaj o ciepłą relację i dalej obserwuj.')}
   ${classifyCard('co-cute','🟡','Często się rozprasza · odpowiada monosylabami („tak”, „nie”, „nie wiem”) · robi ćwiczenia tylko z obowiązku · nie pamięta ostatniej lekcji · prosi o wcześniejsze zakończenie.','Po lekcji zapisz notatkę i spróbuj elastycznej zmiany (moduł 2). <strong>Dwie żółte lekcje z rzędu → powiedz o tym liderowi zespołu jeszcze w tym samym tygodniu.</strong> Nie czekaj na czerwone.')}
   ${classifyCard('co-danger','🔴','Odmawia udziału · otwarcie mówi, że mu się nie podoba · rodzic pisze, że dziecko nie chce przychodzić · dwie lub więcej żółtych lekcji bez poprawy · płacze, frustruje się lub zaczyna sprawiać trudności.','<strong>Zgłoś to w BO tego samego dnia</strong> i powiedz liderowi zespołu.')}
   <div class="card"><h4>💬 Cztery pytania kontrolne — zadawaj jedno co 2–3 lekcje</h4></div>
   ${iconGrid([
     {ic:'🌟', html:`<strong>„Co było najfajniejsze na dzisiejszych zajęciach?”</strong> Jeśli uczeń nie potrafi niczego wskazać, to sygnał.`},
     {ic:'🔧', html:`<strong>„Czy jest coś, co warto zmienić w naszych lekcjach?”</strong> Otwarte pytanie, które bez presji daje przydatne informacje.`},
     {ic:'🔢', html:`<strong>„W skali od 1 do 5 — jak trudny jest dla ciebie ten kurs?”</strong> 1–2 oznacza, że jest za łatwy, 4–5 — że za trudny. Oba wyniki to oznaki niedopasowania.`},
     {ic:'🚀', html:`<strong>„Co chcesz umieć stworzyć lub zrobić, gdy skończysz ten kurs?”</strong> Jeśli odpowiedź nie ma nic wspólnego z kursem, istnieje rozbieżność oczekiwań.`}
   ])}
  `},
  {t:'📝 Zgłoś to w BO — tego samego dnia', html:`
   <div class="card"><p>Zgłoszenie, które okaże się niepotrzebne, nic nie kosztuje. Brak zgłoszenia może kosztować ucznia. <strong>Jeśli nie masz pewności, czy to prawdziwe niedopasowanie, i tak to zgłoś</strong> — twój lider zespołu zna program i dostępne poziomy; ty nie musisz.</p></div>
   ${timeline([
     {ic:'⏱️', label:'Zaraz po lekcji', items:[
       '<strong>Zapisz 2–3 zdania:</strong> jaki sygnał widzisz, w którym momencie i co powiedział uczeń — jego własnymi słowami. Szczegóły szybko się zacierają.'
     ]},
     {ic:'📝', label:'Tego samego dnia', items:[
       '<strong>Zgłoś to w BO:</strong> profil ucznia → Postępy → Oceny nauczycieli → Oceń ucznia. Wybierz rodzaj problemu (lub <em>Inne</em>), wybierz grupę i wklej swoją notatkę.',
       '<strong>Powiedz liderowi zespołu</strong>, że sprawa jest zgłoszona.'
     ]},
     {ic:'🔁', label:'Na kolejnych lekcjach', items:[
       '<strong>Dalej dostosowuj zajęcia</strong> (moduł 2) i dopisuj do sprawy wszystko, co nowe. Zgłoś raz, potem uzupełniaj.'
     ]}
   ])}
   <div class="card" style="background:var(--surface2)"><h4>📨 Jak wygląda przydatne zgłoszenie — skopiuj i uzupełnij</h4>
   <p style="font-size:13.5px;line-height:1.75"><strong>Uczeń:</strong> [imię] · <strong>Kurs / poziom:</strong> [np. Illustration, poziom 1] · <strong>Lekcja:</strong> [M1L2 — data]<br>
   <strong>Obserwacje:</strong> [2–3 zdania: sygnał, moment, słowa ucznia]<br>
   <strong>Moim zdaniem przyczyna to:</strong> ☐ nie tego się spodziewał &nbsp; ☐ nie lubi treści &nbsp; ☐ poziom nie pasuje<br>
   <strong>Co już zostało wypróbowane na lekcji:</strong> [np. uczennica sama wybrała motyw postaci]<br>
   <strong>Co mogłoby pomóc — moja rekomendacja, wasza decyzja:</strong> ☐ lekcja motywacyjna &nbsp; ☐ lekcja poziomująca lub konsultacja &nbsp; ☐ inny kurs</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Zgłoś sprawę</span><iframe src="Simulacion_BO_Evaluate.html" title="BO — Zgłoś sprawę" loading="lazy"></iframe></div></div>
   ${co('co-star','🌱',`<p><strong>Dlaczego to działa:</strong> twój lider zespołu i Dział Obsługi Klienta mogą działać tylko na podstawie tego, co wiedzą. Zgłoszenie to jedyny krok w całym procesie, który możesz wykonać tylko ty — i to on decyduje o tym, ile możliwości jeszcze zostaje.</p>`)}
  `},
  {t:'💬 Co możesz powiedzieć rodzinie — a co czeka na lidera zespołu', html:`
   <div class="card"><p>O nauce dziecka możesz rozmawiać zawsze. Nigdy natomiast nie przedstawiasz, nie obiecujesz ani nie odrzucasz zmiany kursu, poziomu czy formatu — to należy do lidera zespołu i Działu Obsługi Klienta.</p></div>
   ${doavoid(
     ['Dziel się tym, co zauważasz w nauce: <em>„Ona się rozpromienia, gdy rysuje postacie — wplatam to w nasze lekcje.”</em>','Powiedz, że przekazujesz to swojemu zespołowi i wrócisz z odpowiedzią','Zapytaj, co rodzina chciałaby, aby dziecko wyniosło z kursu','Podziękuj za informację — ciepło i tego samego dnia'],
     ['Samodzielne proponowanie innego kursu, zmiany poziomu lub zwrotu','Bronienie kursu: <em>„później będzie lepiej”</em>','Obiecywanie lekcji lub zmiany','Mówienie <em>„nie spodobał mu się ten kurs”</em> — brzmi to jak porażka']
   )}
   <div class="card" style="background:var(--surface2)"><h4>📨 Gdy lider zespołu potwierdzi rekomendację — przedstaw ją jako szansę</h4>
   <p style="font-size:13.5px;line-height:1.75"><em>„Dzień dobry, [imię rodzica], tu [twoje imię] — uczę [imię ucznia] w Kodland. Widzę, że [imię ucznia] ma duży potencjał, ale już na pierwszych lekcjach wyczuwam, że profil tego kursu nie do końca odpowiada temu, czego [imię ucznia] oczekuje — [np. na zajęciach padło, że największą frajdę sprawiałoby tworzenie gier, a nie samo pisanie kodu]. Zależy mi, żeby nauka w Kodland dawała [imię ucznia] jak najwięcej radości i korzyści, dlatego razem z naszym zespołem chcielibyśmy sprawdzić, czy [inny kurs] nie byłby lepszym wyborem. Czy znajdzie Pan/Pani w tym tygodniu kilka minut na krótką rozmowę?”</em></p></div>
   ${co('co-idea','💡',`<p><strong>Mów</strong> „znaleźliśmy coś, co może spodobać się jeszcze bardziej” — <strong>nigdy</strong> „ten kurs się nie spodobał”.</p>`)}
  `}
 ],
 ix:{
  title:'Wychwyć, nazwij, zgłoś',
  instr:'Przyporządkuj wypowiedzi i wybierz najlepszy ruch. 70%, aby odblokować kolejny moduł.',
  items:[
   {type:'sort', prompt:'Jaka to postać niedopasowania?', card:`„Myślałem, że będziemy robić gry, a nie tylko pisać kod.”`, zones:[{label:'🎯 Nie o to mi chodziło', fb:'Zgadza się — oczekiwanie różniło się od kursu. Elastyczność może zniwelować część rozbieżności, a zgłoszenie pozostawia otwarte inne możliwości.'},{label:'😒 Nie lubi treści', fb:'Nie do końca — ten uczeń miał konkretne wyobrażenie o tym, co będzie robić. To rozbieżność typu „nie o to mi chodziło”.'},{label:'⚖️ Poziom nie pasuje', fb:'Nie do końca — nic tu nie dotyczy trudności. Chodzi o to, co uczeń spodziewał się tworzyć.'}], correctZone:0},
   {type:'sort', prompt:'Jaka to postać niedopasowania?', card:`„Wszystko było naprawdę łatwe — ja to już umiem.”`, zones:[{label:'🎯 Nie o to mi chodziło', fb:'Nie do końca — ten uczeń mówi o trudności, a nie o temacie.'},{label:'😒 Nie lubi treści', fb:'Nie do końca — problemem jest poziom, nawet jeśli brzmi to jak znudzenie treścią.'},{label:'⚖️ Poziom nie pasuje', fb:'Zgadza się — wygląda to na niechęć, ale chodzi o poziom. Dostosuj teraz i zgłoś to z myślą o lekcji poziomującej.'}], correctZone:2},
   {type:'sort', prompt:'Jaka to postać niedopasowania?', card:`Na każdej lekcji robi ćwiczenia tylko dlatego, że musi, odpowiada „nie wiem” i prosi o wcześniejsze zakończenie.`, zones:[{label:'🎯 Nie o to mi chodziło', fb:'Nie do końca — nie powiedziała, czego się spodziewała. Ten wzorzec świadczy o niskim zainteresowaniu samą treścią.'},{label:'😒 Nie lubi treści', fb:'Zgadza się — treść albo sposób jej przedstawienia do niej nie przemawia. Daj wybór w ramach celu lekcji i zgłoś to.'},{label:'⚖️ Poziom nie pasuje', fb:'Nie do końca — nic nie wskazuje na problem z trudnością; sygnałem jest niskie zainteresowanie.'}], correctZone:1},
   {type:'choice', prompt:`Podczas diagnozy pytasz: „Czego chcesz się nauczyć?”, a uczeń odpowiada: „Rysować anime — a nie to”. Jaki jest najlepszy następny krok?`, opts:[`Wyjaśnić, że anime pojawi się później w kursie, i kontynuować dokładnie według planu`,`Tam, gdzie się da, wprowadzić jego zainteresowanie do dzisiejszej lekcji i tego samego dnia zgłosić sprawę w BO`,`Poczekać jeszcze dwie lekcje, czy to minie`], correct:1, fb:`Od razu dostosuj na lekcji, co się da, i zgłoś sprawę tego samego dnia, żeby zespół miał wszystkie możliwości. Czekanie lub bronienie planu marnuje ten czas.`},
   {type:'sort', prompt:'Gdzie na sygnalizacji świetlnej jest ta sytuacja?', card:`Dwie lekcje z rzędu: odpowiedzi jednym słowem i prośby o wcześniejsze zakończenie.`, zones:[{label:'🟢 Zielone', fb:'Nie do końca — dwie lekcje odpowiedzi jednym słowem i chęci wcześniejszego wyjścia to nie jest „wszystko w porządku”.'},{label:'🟡 Żółte', fb:'Zgadza się — zanotuj to, spróbuj elastycznej zmiany i powiedz liderowi zespołu w tym samym tygodniu. Nie czekaj na czerwone.'},{label:'🔴 Czerwone', fb:'Jeszcze nie — czerwone oznacza odmowę, otwartą niechęć lub wiadomość od rodzica. Ale dwa razy żółte z rzędu już oznacza: powiedz liderowi zespołu w tym tygodniu.'}], correctZone:1},
  ]
 }
},
{id:'flex', numLabel:'Moduł 2', emoji:'🎛️', color:'var(--coral)',
 title:'Dopasuj kurs do ucznia — elastyczność, która zachowuje cel',
 desc:'Jak dostosować lekcję do tego, czego uczeń naprawdę chce się nauczyć, nie tracąc celu nauki, jak dawać wybór dopasowany do wieku i kiedy musi wkroczyć lider zespołu.',
 obj:'Dostosuj lekcję do zainteresowań ucznia, zachowując cel nauki, dawaj wybór dopasowany do wieku i wiedz, kiedy elastyczność nie wystarcza i musi wkroczyć lider zespołu.',
 sections:[
  {t:'🎯 Zasada: cel stały, droga elastyczna', html:`
   <div class="card"><p>Nie musisz wybierać między „trzymaj się przewodnika lekcji” a „niech robią, co chcą”. Przewodnik lekcji mówi ci, <strong>po co</strong> jest lekcja. Prawie wszystko inne można nagiąć.</p></div>
   <div class="two-col">
     <div class="card"><h4>🔒 Pozostaje bez zmian</h4><ul><li>Cel nauki i umiejętności z lekcji</li><li>Oczekiwane efekty opisane w przewodniku lekcji</li><li>Struktura lekcji (rozgrzewka, ćwiczenia, podsumowanie)</li></ul></div>
     <div class="card"><h4>🎛️ Może się zmieniać</h4><ul><li>Motyw, postać, historia</li><li>Temat projektu</li><li>Kolejność kroków</li><li>Przykład, którego używasz, i poziom trudności zadania</li></ul></div>
   </div>
   ${co('co-idea','🧠',`<p><strong>Dlaczego to działa.</strong> W znanym modelu ARCS Johna Kellera (1987) zmotywowany uczeń potrzebuje czterech rzeczy: <strong>A</strong>ttention (uwagi), <strong>R</strong>elevance (istotności), <strong>C</strong>onfidence (pewności siebie) i <strong>S</strong>atisfaction (satysfakcji). Uczniowi, który mówi „to nie jest to, czego chciałem”, brakuje poczucia <em>istotności</em> — a połączenie lekcji z tym, na czym mu już zależy, to właśnie sposób, by mu je przywrócić.</p>`)}
  `},
  {t:'🎨 Jak to wygląda — pięć prawdziwych przykładów', html:`
   ${stepIconBlock('🎨','Illustration — „Chcę rysować tylko anime”', `<p><strong>Cel zostaje:</strong> światło, proporcje, kolor, kompozycja.<br><strong>Wersja ucznia:</strong> w każdym ćwiczeniu pojawia się postać z anime — cieniowanie twarzy postaci z anime, porównanie proporcji postaci chibi i bohatera, budowanie palety kolorów dla <em>jego</em> postaci.</p><p><em>„Super — niech dzisiejsza postać będzie twoja. Nauczymy się, jak światło pada na twarz twojej postaci.”</em></p>`)}
   ${stepIconBlock('🐍','Python — „Chcę robić gry, a nie nudny kod”', `<p><strong>Cel zostaje:</strong> zmienne, pętle, warunki.<br><strong>Wersja ucznia:</strong> mini quiz lub gra o ulubionym serialu lub grze, z użyciem dokładnie tych samych pojęć.</p><p><em>„Gra to po prostu pętle i warunki w lepszym przebraniu. Którą zbudujemy?”</em></p>`)}
   ${stepIconBlock('📖','Dowolny kurs — „Nie chcę iść za fabułą”', `<p><strong>Cel zostaje:</strong> umiejętność z lekcji.<br><strong>Wersja ucznia:</strong> pominięcie fabularnej otoczki i ćwiczenie tej samej umiejętności na własnym pomyśle, o ile uczeń nadal opanowuje główny temat lekcji.</p><p><em>„Pomińmy historię — co chcesz zrobić przy użyciu tej umiejętności?”</em></p>`)}
   ${stepIconBlock('🧊','3D / projektowanie — „Chcę modelować własną rzecz”', `<p><strong>Cel zostaje:</strong> narzędzie i technika.<br><strong>Wersja ucznia:</strong> uczeń sam wybiera obiekt, na którym ćwiczy.</p><p><em>„Pokaż mi, co chcesz mieć w swoim pokoju — zbudujemy to dzisiejszą techniką.”</em></p>`)}
   ${stepIconBlock('🌐','Web — „Wolę zrobić stronę na swój temat”', `<p><strong>Cel zostaje:</strong> struktura, układ, linki.<br><strong>Wersja ucznia:</strong> strona o jego klubie piłkarskim, serialu albo hobby.</p><p><em>„Wybierz temat, o którym możesz mówić godzinami — to będzie twoja strona.”</em></p>`)}
  `},
  {t:'🎛️ Daj menu, a nie otwarte drzwi', html:`
   <div class="card"><p>„Co chcesz robić?” to zbyt otwarte pytanie — często kończy się odpowiedzią „nie wiem”. Daj <strong>dwie lub trzy opcje, z których każda realizuje cel</strong>, i pozwól uczniowi wybrać. Mały wybór daje poczucie sprawstwa; ograniczone menu utrzymuje lekcję na właściwym torze. Sposób podania zależy od wieku:</p></div>
   ${dimTabs([
     {ic:'🧒', title:'Wiek 6–8',
      intro:'Małe dzieci wybierają całą swoją wyobraźnią. Dawaj im konkretne, zabawne opcje — i nigdy więcej niż dwie lub trzy.',
      tips:[
       {ic:'🃏', html:`<strong>Wybierz kartę.</strong> <em>„Dziś możemy zrobić smoka, robota albo kota. Co wybierasz?”</em>`},
       {ic:'🏷️', html:`<strong>Niech dziecko nada nazwę i poczuje, że to jego.</strong> <em>„Jak się nazywa twoja postać?”</em> — a potem używaj tego imienia, gdy tłumaczysz.`},
       {ic:'✅', html:`<strong>Tak dla motywu, umiejętność zostaje.</strong> <em>„Tak, smok może mieć cienie — cienie to dzisiejszy sekret.”</em>`},
       {ic:'🎉', html:`<strong>Świętuj wybór dziecka.</strong> Moment, w którym jego pomysł pojawia się na ekranie, to moment, w którym czuje, że lekcja jest jego.`}
      ]},
     {ic:'🧑', title:'Wiek 9–11',
      intro:'Chcą mieć wpływ na to, co budują, i chcą rozpoznawać rzeczy ze swojego świata.',
      tips:[
       {ic:'🧩', html:`<strong>Motyw plus misja.</strong> <em>„Wybierz motyw — kosmos, piłka nożna albo gra, którą kochasz — a misja zostaje ta sama: użyj dzisiejszej techniki.”</em>`},
       {ic:'🔢', html:`<strong>Szybka ocena.</strong> <em>„W skali od 1 do 5 — jak bardzo podoba ci się ten motyw? Co sprawiłoby, że byłoby 5?”</em>`},
       {ic:'🌟', html:`<strong>Poziom bonusowy na własny pomysł.</strong> Najpierw kończą główne zadanie, potem dodają coś od siebie.`},
       {ic:'📺', html:`<strong>Korzystaj z tego, co znają.</strong> Nawiązuj do gier lub seriali, o których wspominają — to pokazuje, że słuchasz.`}
      ]},
     {ic:'🧑‍🎓', title:'Wiek 12+',
      intro:'Starsi uczniowie chcą sensu i szacunku. Traktuj ich jako kompetentnych i negocjuj.',
      tips:[
       {ic:'🤝', html:`<strong>Negocjuj założenia.</strong> <em>„Co sprawiłoby, że ten projekt byłby wart twojego czasu? Znajdźmy wersję, która uczy dzisiejszej umiejętności i jest twoja.”</em>`},
       {ic:'🌍', html:`<strong>Pokaż, gdzie ta umiejętność jest używana</strong> — w grach, aplikacjach lub projektach, które już lubią.`},
       {ic:'⚖️', html:`<strong>Mów szczerze o ograniczeniach.</strong> <em>„To wykracza poza ten kurs — zapytam swój zespół, co możemy zrobić. Na dziś wykorzystajmy to tutaj.”</em>`},
       {ic:'📣', html:`<strong>Pozwól im pokazać swoją pracę</strong> grupie; w tym wieku rówieśnicy są bardzo ważni.`}
      ]}
   ],'✅ To już wszystkie trzy grupy wiekowe. Dalej: kiedy elastyczność nie wystarcza.')}
  `},
  {t:'🧭 Kiedy elastyczność nie wystarcza — lider zespołu i dostępne możliwości', html:`
   <div class="card"><p>Niektórych rozbieżności nie da się zniwelować na samej lekcji. To nie porażka — właśnie dlatego zgłoszenie tego samego dnia jest tak ważne. Oto sytuacje, które trafiają do lidera zespołu:</p></div>
   ${iconGrid([
     {ic:'🔀', html:`<strong>Uczeń chce zupełnie innej umiejętności</strong> — na przykład gier 3D na kursie rysunku.`},
     {ic:'📉', html:`<strong>Twoja elastyczność pomaga na jedną lekcję, ale zainteresowanie nie wraca</strong> przez dwie lub trzy lekcje.`},
     {ic:'📢', html:`<strong>Rodzic mówi, że to nie jest kurs, który kupił.</strong> Potwierdź otrzymanie wiadomości, przed odpowiedzią przekaż sprawę liderowi zespołu i Działowi Obsługi Klienta, a słowa rodziny zapisz dosłownie w BO.`},
     {ic:'⚖️', html:`<strong>Poziom wyraźnie nie pasuje.</strong> Dostosuj teraz i zgłoś to, żeby można było rozważyć lekcję poziomującą.`}
   ])}
   <div class="card"><h4>🎁 Co mogą zorganizować lider zespołu i Dział Obsługi Klienta — ty rekomendujesz, oni decydują</h4></div>
   ${iconGrid([
     {ic:'💬', html:`<strong>Lekcja motywacyjna.</strong> Rozmowa lub lekcja, która ma na nowo połączyć ucznia z powodem, dla którego dołączył.`},
     {ic:'🎚️', html:`<strong>Lekcja poziomująca lub konsultacja.</strong> Sprawdza, czy kurs i poziom naprawdę pasują — i co pasowałoby lepiej.`},
     {ic:'🔄', html:`<strong>Inny kurs Kodland.</strong> Często najlepszy ratunek: uczeń robi coś, co kocha, i zostaje w Kodland.`}
   ])}
   ${co('co-danger','⛔',`<p><strong>Rekomendujesz w BO — nigdy nie obiecujesz.</strong> Ani „przeniosę cię na inny kurs”, ani „to niemożliwe”. Obie te decyzje nie należą do ciebie.</p>`)}
   <div class="card" style="background:var(--surface2)"><h4>🗣️ Co możesz powiedzieć uczniowi</h4>
   <p style="font-size:13.5px;line-height:1.75"><em>„Super, że mówisz mi, co naprawdę chcesz robić. Na dziś wykorzystajmy twój pomysł na lekcji. A ja sprawdzę z moim zespołem, co jeszcze możemy dla ciebie zrobić.”</em></p></div>
   ${doavoid(
     ['Na początku następnej lekcji zapytaj, co uczeń chciałby stworzyć','Pokaż jego pracę grupie','Świętuj moment, w którym jego pomysł pojawia się na lekcji'],
     ['Mówienie <em>„tego nie ma w planie”</em>','Bronienie kursu zamiast słuchania','Pozwalanie, by „jego pomysł” zastąpił cel lekcji']
   )}
  `}
 ],
 ix:{
  title:'Elastycznie — bez utraty celu',
  instr:'Wybierz najlepszy ruch lub przyporządkuj każdą sytuację. 70%, aby odblokować końcową listę kontrolną.',
  items:[
   {type:'choice', prompt:`Uczeń na kursie Illustration mówi: „Chcę rysować tylko anime”. Jaka jest najlepsza odpowiedź?`, opts:[`Powiedzieć mu, że anime nie jest częścią kursu`,`Pozwolić mu rysować w ćwiczeniach postacie z anime, ucząc przy tym światła, proporcji i koloru — i zgłosić to w BO`,`Pozwolić mu rysować, co chce, i pominąć cel lekcji`], correct:1, fb:`Cel (światło, proporcje, kolor) zostaje; postać należy do ucznia. Potem zgłoś to w BO, żeby zespół mógł rozważyć inne możliwości. Odmowa oznacza utratę ucznia; porzucenie celu — utratę nauki.`},
   {type:'sort', prompt:'Kto się tym zajmuje?', card:`Pozwolić uczniowi wybrać motyw projektu.`, zones:[{label:'✅ Mogę to zrobić samodzielnie', fb:'Zgadza się — wybór motywu w ramach celu zależy wyłącznie od ciebie i nie wymaga niczyjej zgody.'},{label:'🧭 To wymaga lidera zespołu', fb:'Nie do końca — wybór motywu, który zachowuje cel, mieści się w twoim własnym sposobie nauczania.'}], correctZone:0},
   {type:'sort', prompt:'Kto się tym zajmuje?', card:`Uczeń prosi o przejście na zupełnie inny kurs.`, zones:[{label:'✅ Mogę to zrobić samodzielnie', fb:'Nie do końca — zmiany kursu nigdy nie możesz ani obiecać, ani odmówić.'},{label:'🧭 To wymaga lidera zespołu', fb:'Zgadza się — zgłoś to w BO tego samego dnia i powiedz liderowi zespołu. Ty rekomendujesz; decyzję podejmują lider zespołu i Dział Obsługi Klienta.'}], correctZone:1},
   {type:'sort', prompt:'Kto się tym zajmuje?', card:`Rodzic pisze: „To nie jest kurs, za który zapłaciliśmy”.`, zones:[{label:'✅ Mogę to zrobić samodzielnie', fb:'Nie do końca — to najbardziej delikatna wiadomość, jaką możesz dostać. Odpowiadając samodzielnie, możesz potwierdzić skargę albo zasugerować coś, czego nie możemy zapewnić.'},{label:'🧭 To wymaga lidera zespołu', fb:'Zgadza się — potwierdź otrzymanie, przed odpowiedzią przekaż sprawę liderowi zespołu i Działowi Obsługi Klienta i zapisz słowa rodziny w BO.'}], correctZone:1},
   {type:'choice', prompt:`Siedmiolatek mówi ci, że lekcje są nudne. Która propozycja pasuje najlepiej?`, opts:[`„Zaprojektujmy razem cały projekt — jakie masz pięć założeń?”`,`„Kim ma być twoja postać — smokiem, robotem czy kotem?” i wykorzystać tę postać w dzisiejszym zadaniu`,`„Tak działa ten kurs — później ci się spodoba.”`], correct:1, fb:`Małe dzieci najlepiej wybierają spośród dwóch lub trzech konkretnych, zabawnych opcji. Otwarte założenia są dla starszych uczniów, a „później ci się spodoba” to bronienie kursu zamiast słuchania.`},
   {type:'choice', prompt:`Co oznacza „cel stały, droga elastyczna”?`, opts:[`Pominąć zadania, których uczeń nie lubi`,`Podążać wyłącznie za zainteresowaniami ucznia`,`Zmienić motyw lub zadanie, ale zachować umiejętność, której dotyczy lekcja`], correct:2, fb:`Cel i efekty z przewodnika lekcji zostają; motyw, postać, temat i kolejność można nagiąć.`},
   {type:'choice', prompt:`Uczeń pyta: „Mogę zamiast tego robić inny kurs?” Co mówisz?`, opts:[`„Tak, załatwię to dla ciebie.”`,`„Nie, już zacząłeś ten.”`,`„Super, że mi o tym mówisz. Sprawdzę z moim zespołem, co możemy zrobić — a tymczasem wykorzystajmy twój pomysł na dzisiejszej lekcji.”`], correct:2, fb:`Ani obiecywanie, ani odmawianie nie należy do ciebie — ale słuchanie, wykorzystanie pomysłu ucznia od razu i rozpoczęcie rozmowy w zespole to dokładnie twoja rola.`},
   {type:'sort', prompt:'Czy to zachowuje cel lekcji?', card:`Celem lekcji jest technika animacji, więc uczeń animuje dowolny wybrany przez siebie obiekt.`, zones:[{label:'✅ Zachowuje cel', fb:'Zgadza się — wybór należy do ucznia, a technika nadal jest ćwiczona.'},{label:'⛔ Traci cel', fb:'Nie do końca — uczeń nadal ćwiczy technikę, której dotyczy lekcja.'}], correctZone:0}
  ]
 }
},
{id:'checklist', numLabel:'Lista kontrolna', emoji:'✅', color:'var(--coral)',
 title:'Końcowa lista kontrolna',
 desc:'Tu nie ma quizu — tylko najważniejsze punkty tego miniszkolenia, zanim je zamkniesz.',
 obj:'Przejrzyj poniższą listę kontrolną. Ten moduł nie jest oceniany — przeczytaj go, a potem ukończ miniszkolenie.',
 sections:[
  {t:'🛟 Jeśli wniosek o zwrot już wpłynął', html:`
   ${numlist([
     'Tego samego dnia, w którym dowiaduję się o wniosku, zostawiam komentarz w BO i informuję lidera zespołu',
     'Moja następna lekcja z tym uczniem to prawdziwa próba ratunku — prawdziwa okazja do działania, widoczny sukces, konkretna uwaga, ani słowa o wniosku',
     'Nigdy nie potwierdzam zatwierdzenia zwrotu i nie rozmawiam o kwotach — używam jednego bezpiecznego zdania, a resztę zostawiam Działowi Obsługi Klienta'
   ])}
  `},
  {t:'🌱 Na każdej lekcji', html:`
   ${numlist([
     'Na dwóch pierwszych lekcjach przeprowadzam szybką diagnozę: co uczeń wie, czego oczekuje, co było łatwe, a co trudne, oraz krótkie samodzielne ćwiczenie',
     'Po każdej lekcji oceniam ją jako zieloną, żółtą lub czerwoną — a po dwóch żółtych lekcjach z rzędu mówię o tym liderowi zespołu w tym samym tygodniu',
     'Co 2–3 lekcje zadaję pytanie kontrolne: co było najfajniejsze, co warto zmienić, jak trudno w skali od 1 do 5, co uczeń chce stworzyć',
     'Zaraz po lekcji zapisuję 2–3 zdania: sygnał, moment i słowa ucznia',
     'Możliwe niedopasowanie zgłaszam w BO tego samego dnia — nawet gdy nie mam pewności; niepotrzebne zgłoszenie nic nie kosztuje',
     'Trzymam się celu nauki, a elastycznie podchodzę do motywu, projektu, postaci lub kolejności kroków',
     'Daję dwie lub trzy opcje, z których każda realizuje cel, w sposób dopasowany do wieku dziecka',
     'Nigdy nie obiecuję zmiany kursu, poziomu ani dodatkowej lekcji — rekomenduję w BO i mówię „sprawdzę z moim zespołem”',
     'Nie bronię kursu i nie mówię, że „później będzie lepiej” — najpierw słucham, potem dostosowuję',
     'Gdy rodzic mówi, że kurs nie spełnia oczekiwań, potwierdzam otrzymanie wiadomości, przed odpowiedzią przekazuję sprawę liderowi zespołu i Działowi Obsługi Klienta i zapisuję słowa rodzica w BO',
     'Świętuję moment, w którym własny pomysł ucznia pojawia się na lekcji, i pokazuję jego pracę grupie'
   ])}
  `},
  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>To już całe miniszkolenie.</strong> Kiedy zechcesz, przejdź dalej — a potem wykonaj DST w LMS, aby zamknąć zadanie.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
