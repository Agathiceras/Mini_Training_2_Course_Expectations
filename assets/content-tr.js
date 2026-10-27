/* Mini_Training_2_Course_Expectations - English content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='tr';
const CONTENT = {
  flag:'🇹🇷', dir:'ltr',
  ui:{
    pageTitle:"Mini Eğitim · Beklentiler — Kodland Eğitmen Eğitimi",
    logoSub:'Eğitmen Gelişim Departmanı',
    heroEyebrow:"🎯 Mini Eğitim",
    heroTitle:"<span class=\"h-pill\">Beklenti</span> Farkını Kapatmak",
    heroIntro:"Bu eğitimi, kurs beklentilerini karşılamadığı, istedikleri gibi olmadığı ya da içeriğini sevmedikleri için iade talep eden öğrencileriniz olduğu için alıyorsunuz. Burada, bir eğitmen olarak neler yapabileceğinizi ve bu tür durumları nasıl yöneteceğinizi göstereceğiz.",
    heroWork:"4 kısa modülü tamamlayın. Bir sonraki modülün kilidini açmak için her modül kontrolünde en az %70 almanız gerekir. Toplam süre yaklaşık 20–25 dakikadır.",
    startBtn:"🚀 Eğitimi Başlat",
    pathLabel:'Öğrenme yolunuz',
    devTitle:'Geliştirici: inceleme için tüm modüllerin kilidini aç',
    backToPath:'Öğrenme yoluna dön',
    modulesPassed:'{done} / {total} modül tamamlandı',
    moduleN:'Modül {n}',
    of:'/',
    locked:'🔒 Kilitli',
    passedBadge:'✅ Geçildi · %{pct}',
    reviewedBadge:'✅ İncelendi',
    startBadge:'▶ Başla',
    reviewBadge:'▶ İncele',
    objective:'Hedef',
    startCheck:'▶ Modül kontrolüne başla',
    finishBtn:'▶ Mini eğitimi bitir',
    doneBack:'✓ Tamamlandı — öğrenme yoluna dön',
    ixBadge:'📋 Modül kontrolü — sonraki modülün kilidini açmak için %70',
    ixItemBadge:'📋 Modül kontrolü — soru {i} / {n}',
    scoreSoFar:'Şu ana kadarki puan: {c} / {t}',
    continue:'Devam →',
    sortWrong:'Tam değil — doğru cevap “{label}”.',
    resPassed:'Modülü geçtiniz!',
    resFailed:'Henüz tam olmadı',
    resUnlocked:"Sonraki modülün kilidini açtınız.",
    resDone:"Bu mini eğitimi tamamladınız.",
    resNeed:'Sonraki modülün kilidini açmak için %70 almanız gerekiyor. Yukarıdaki bölümü yeniden gözden geçirin ve kontrolü tekrar deneyin.',
    resContinue:'Öğrenme yoluna devam et',
    resFinish:'Devam et',
    resBack:'Öğrenme yoluna dön',
    resReview:'Bu modülü incele',
    doneEyebrow:'Mini Eğitim Tamamlandı',
    doneTitle:'🎉 Tebrikler!',
    doneP1:"🎉 <strong>Tebrikler! Bu mini eğitimi tamamladınız.</strong>",
    doneP2:"Burada işiniz bitti! Ödevi kapatmak için lütfen bu mini eğitime eriştiğiniz LMS eğitim sayfasına geri dönün.",
    doneP3:"👉 <strong>LMS’de eğitimin hemen altında bir kontrol veya değerlendirme varsa, onu da tamamladığınızdan ve geçer puan aldığınızdan emin olun</strong> — aksi hâlde ödev tamamlanmamış olarak kalabilir.",
    doneP4:'Bol şans! ❤️',
    doneP5:'',
    devUnlockAlert:'Geliştirici modu: tüm modüllerin kilidi inceleme için açıldı.',
    devOn:'🔓 Geliştirici modu AÇIK — tüm modüllerin kilidi açık',
    devOff:'🔒 Geliştirici modu KAPALI — ilerleme sıfırlandı',
    devBadge:'🔓 GELİŞTİRİCİ MODU',
    doLabel:'✅ Yapın',
    avoidLabel:'🚫 Kaçının',
    noticeLabel:'Dikkat:',
    cvSee:'Gördüğünüz:',
    cvDo:'Yapmanız gereken:',
    dtExample:'Gerçek bir dersten örnek',
    dtNext:'Sonraki:',
    dtDone:"✅ Dört alanın hepsini gördünüz. Şimdi gördüklerinizi sınıflandırın.",
    tlVideoTitle:'{label} — gerçek bir ders örneği',
    tlVideoMeta:'Bu aşamanın gerçek bir derste nasıl göründüğünü izleyin'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Giriş', emoji:'🧩', color:'var(--coral)',
 title:'Neden Buradasınız',
 desc:'“İstediğimiz bu değildi” neden hâlâ değiştirebileceğiniz az sayıdaki iade nedeninden biridir — ve bir iade talebi zaten oluşturulduysa hangi kurallar geçerlidir.',
 obj:'Kurs ile öğrencinin veya ailenin beklentisi arasındaki farkın neden çoğu zaman giderilebileceğini, aynı gün yapılan bildirimin neden en önemli adım olduğunu ve bir iade talebi zaten varsa tam olarak ne yapmanız (ve ne yapmamanız) gerektiğini anlamak.',
 sections:[
  {t:'🎭 “İstediğimiz bu değildi” — aslında arkasında ne var', html:`
   <div class="card"><p>Satış görüşmesini, deneme dersini ya da ailenin kayıt olurken neyi hayal ettiğini göremezsiniz. <em>Görebildiğiniz</em> şey, dersinizdeki çocuktur — ve bu fark, bir veli herhangi bir şey yazmadan çok önce, neredeyse her zaman ilk olarak orada ortaya çıkar.</p></div>
   ${iconGrid([
     {ic:'🎯', html:`<strong>Konu hayal ettikleri gibi değil.</strong> Oyun yapmak istiyorlardı ama kurs temel konularla başlıyor. Anime çizmek istiyorlardı ama kurs ışık, oran ve renk öğretiyor.`},
     {ic:'🧸', html:`<strong>Kursu veli seçti, çocuk değil.</strong> Çocuk bu kursu hiç istemedi, bu yüzden her ders ona ev ödevi gibi geliyor.`},
     {ic:'⚖️', html:`<strong>Seviye uygun gelmiyor.</strong> Çok kolaysa “sıkıcı içerik” gibi algılanır. Çok zorsa “bu bana göre değil” gibi. Her iki durumda da sevmeme olarak bildirilir.`},
     {ic:'⏳', html:`<strong>Eğlenceli kısım henüz gelmedi.</strong> İlk dersler temeli oluşturur ve öğrenci, bunun nereye varacağını görmeden ayrılır.`}
   ])}
   ${co('co-idea','💡',`<p><strong>Bu, hâlâ tersine çevrilebilecek az sayıdaki iade nedeninden biridir.</strong> Farklı bir şey isteyen bir öğrenciye çoğu zaman farklı bir şey sunulabilir — sizin dersinizde, bir seviye dersi veya danışmanlık görüşmesiyle ya da daha mutlu olacağı başka bir Kodland kursunda.</p>`)}
  `},
  {t:'⏱️ Anahtar hız — ve sizin bildiriminiz', html:`
   <div class="card"><p>Bir öğrencinin kursunu veya seviyesini değiştirip değiştirmeyeceğine siz karar vermezsiniz. Ancak bu konuşmayı başlatan sizin bildiriminizdir ve yalnızca doğru kişilere <strong>erken</strong> ulaşırsa işe yarar.</p></div>
   ${stepFlow([
     {ic:'👀', label:'Farkı bir derste fark edersiniz'},
     {ic:'📝', label:'Aynı gün BO’da bildirirsiniz'},
     {ic:'👩‍💼', label:'Takım Lideriniz ve Müşteri Hizmetleri seçenekleri değerlendirir'},
     {ic:'🔄', label:'Bir motivasyon dersi, bir seviye dersi veya danışmanlık görüşmesi ya da başka bir Kodland kursu'}
   ])}
   ${co('co-danger','🚨',`<p><strong>Geç yapılan bir bildirim kapıları kapatır.</strong> Aile kararını verdikten sonra bu seçeneklerin çoğu ortadan kalkar. Aynı bildirim ilk iki hafta içinde yapılırsa, bir çocuğun Kodland’de kalmasını sağlayabilir.</p>`)}
   ${co('co-ok','✅',`<p><strong>Ekip seçenekleri değerlendirirken ders hâlâ sizin elinizde.</strong> Esnek, öğrenci odaklı ders anlatımı tamamen size ait olan kısımdır — Modül 2 bunu nasıl yapacağınızı gösteriyor.</p>`)}
  `},
  {t:'🛟 Bir iade talebi zaten varsa', html:`
   <div class="card"><p>Yukarıdakilerin hepsi bu durumu erkenden yakalamakla ilgili. Ancak bu eğitimi, bir aile <strong>zaten</strong> iade talep ettiği için açıyor olabilirsiniz. Aşağıdaki kurallar, sebep ne olursa olsun geçerlidir — önce bunları okuyun, ardından bu noktaya nasıl gelindiğini ve derste hâlâ neler yapabileceğinizi anlamak için eğitimin geri kalanından yararlanın.</p></div>
   ${co('co-idea','💡',`<p><strong>Talebin kendisini siz değil, Müşteri Hizmetleri oluşturur</strong> — o kısım sizin kontrolünüzde değil. Sizin elinizde olan, bundan sonra derste yaşanacak her şeydir ve bu hiç de az değildir.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Talebin kendisi hakkında hiçbir şey söylemeyin</strong> — ne çocuğa ne de aileye — Müşteri Hizmetleri sizden açıkça belirli bir şey söylemenizi istemedikçe. Şu anki göreviniz bu konuşma değil, derstir.</p>`)}
  `},
  {t:'🎯 Bir sonraki dersiniz, öğrenciyi kazanma fırsatınızdır', html:`
   <div class="card"><p>Başka hiçbir şeyi değiştirme şansınız olmayabilir. Bu çocukla yapacağınız bir sonraki dersi, sonucu belirleyecek an olarak görün.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Ona gerçek bir söz hakkı verin.</strong> Anlamsız bir soru değil — görüldüğü ve başardığı gerçek bir an.`},
     {ic:'🏆', html:`<strong>Erken ve görünür bir başarı planlayın.</strong> Dersten geride kalmış hissederek değil, başarabildiğini hissederek ayrılmalı.`},
     {ic:'👀', html:`<strong>Ona özel ilgi gösterin</strong> — genel geçer bir övgü yerine, somut bir şey için fark edildiğini hissettirin.`},
     {ic:'🤐', html:`<strong>Talepten hiç bahsetmeyin</strong> — çocuk konuyu kendisi açsa bile sıcak bir şekilde konuyu değiştirin ve derse devam edin.`}
   ])}
  `},
  {t:'📮 Hızlıca bildirin ve güvenli tek cümleyi bilin', html:`
   <div class="card"><p>Bir talep olduğunu, BO’da çocuğun profilindeki Müşteri Hizmetleri yorumlarından öğrenebilirsiniz — sizi bilgilendiren otomatik bir sistem yoktur. Bunu öğrendiğiniz andan itibaren, derslerinizde gördükleriniz Müşteri Hizmetleri’nin başka hiçbir yoldan edinemeyeceği bilgilerdir.</p></div>
   ${numlist([
     'Aynı gün BO’da tam olarak ne gördüğünüzü anlatan bir yorum bırakın — izlenimler değil, tarihler ve somut ayrıntılar',
     'Varsa, ailenin kendi sözlerini kelimesi kelimesine ekleyin',
     'Aynı gün Takım Liderinizi de bilgilendirin',
     'Bir iadenin onaylandığını asla teyit etmeyin ve herhangi bir tutar konuşmayın'
   ])}
   ${co('co-ok','✅',`<p><strong>Her zaman güvenle söyleyebileceğiniz cümle:</strong> <em>“Müşteri Hizmetleri bu konuda size yardımcı olacak.”</em> Konuşmadaki rolünüz burada biter — gerisini Müşteri Hizmetleri devralır.</p>`)}
  `},
  {t:'🌱 Sonrasında da özen göstermeye devam edin', html:`
   <div class="card"><p>Talep geri çekilse de, çocuk grubunuzda kalsa da ya da başka bir eğitmene veya formata geçse de, sonraki birkaç derste ona ekstra özen göstermeye devam edin. Bir ders boyunca işe yarayıp sonra sessizce eski hâline dönen bir kurtarma girişimi, çoğu zaman hiç işe yaramamış demektir.</p></div>
  `}
 ]
},
{id:'spot', numLabel:'Modül 1', emoji:'🔎', color:'var(--coral)',
 title:'Farkı Erken Fark Edin — ve Aynı Gün Bildirin',
 desc:'Uyumsuzluğun aldığı üç biçim, ilk dersler için hızlı bir tespit yöntemi, her ders için bir trafik ışığı kontrolü ve durumu BO’da nasıl bildireceğiniz.',
 obj:'Ne tür bir uyumsuzlukla karşı karşıya olduğunuzu tanımak, hızlı bir tespit yapmak, işaretleri ders ders okumak ve durumu aynı gün BO’da bildirmek.',
 sections:[
  {t:'🧭 Uyumsuzluğun üç biçimi', html:`
   <div class="card"><p>“Bu kursu sevmiyorum” üç farklı anlama gelebilir — ve her biri biraz farklı bir hamle gerektirir. Bunları birbirinden ayırt etmeyi öğrenin.</p></div>
   ${patternCards([
     {ic:'🎯', title:'Beklediğim bu değildi', desc:'“Oyun yapacağımızı sanıyordum.” “Başka bir şey yapabilir miyiz?”', note:'Beklenti kurstan farklıydı. <strong>Esneklik bu farkı kapatabilir — ve farklı bir kurs daha uygun olabilir.</strong>'},
     {ic:'😒', title:'İçeriği sevmiyor', desc:'Derse hevessiz geliyor, görevleri “mecbur olduğu için” yapıyor, konunun sıkıcı olduğunu söylüyor', note:'Konu ya da görevlerin sunuluş biçimi ona hitap etmiyor. <strong>Hedefin içinde seçenekler sunun ve durumu bildirin.</strong>'},
     {ic:'⚖️', title:'Seviye uygun gelmiyor', desc:'Dakikalar içinde bitiriyor: “Bunu zaten biliyorum.” Ya da: “Hiçbir şey anlamıyorum.”', note:'Çoğu zaman sevmeme olarak bildirilir. <strong>Hemen uyarlayın ve seviye dersi için durumu bildirin.</strong>'}
   ],3)}
  `},
  {t:'🩺 Hızlı tespit — ilk iki dersiniz (M1L1–M1L2)', html:`
   <div class="card"><p>Bir uyumsuzluğu yakalamak için en iyi zaman, <strong>Modül 1’in ilk iki dersidir</strong>. Ancak 3. dersten sonra fark edilen ve bildirilmeyen bir fark, iptali önlemek için genellikle çok geçtir. İlk derste soracağınız üç soru ve kısa bir alıştırma on dakikadan az sürer.</p></div>
   ${stepIconBlock('🗣️','“Daha önce [kursun aracı veya dili] ile çalıştın mı?”', `<p>Açık uçlu ve baskısız bir soru. Konuşmasına izin verin ve gerçekte ne kadar bildiğini dinleyin.</p><p>⚠️ <strong>Dikkat edin:</strong> “Evet, bunların hepsini zaten biliyorum” — ya da “Neden bahsettiğinizi hiç bilmiyorum.”</p>`)}
   ${stepIconBlock('🌈','“Bu kursta ne öğrenmeyi bekliyordun?”', `<p>Velinin onu kaydettiği kurs ile öğrencinin gerçekten yapmak istediği şey arasındaki farkı gösterir.</p><p>⚠️ <strong>Dikkat edin:</strong> kayıtlı olduğu kursla hiçbir ilgisi olmayan bir cevap.</p>`)}
   ${stepIconBlock('⚖️','“Bugün hangi kısım kolay geldi, hangisi zor geldi?”', `<p>Bunu ilk alıştırmadan sonra sorun. Seviyeyle gerçekte ne kadar rahat olduğunu ölçmenize yardımcı olur.</p><p>✅ <strong>İdeal:</strong> “ilk kısım kolaydı, ikincisi zordu” — seviye doğru.<br>⚠️ <strong>Dikkat edin:</strong> “hepsi kolaydı” ya da “hiçbirini anlamadım.”</p>`)}
   ${stepIconBlock('✏️','Kısa, bireysel bir alıştırma (5–8 dakika)', `<p>Öğrenciden modülün ilk alıştırmasını yardım almadan, kendi başına tamamlamasını isteyin. Ne kadar sürdüğüne ve başlayabilip başlayamadığına dikkat edin.</p><p>✅ <strong>Normal:</strong> biraz yönlendirmeye ihtiyaç duyar ve beklenen sürede bitirir.<br>⚠️ <strong>Dikkat edin:</strong> hemen bitiriyor ya da kendi başına başlayamıyor.</p>`)}
   ${co('co-idea','💡',`<p><strong>2. dersi zaten geçtiniz mi?</strong> Aynı soruları bu hafta sorun. Bu tespit kursun herhangi bir noktasında işe yarar — ne kadar erken sorarsanız, o kadar çok seçenek açık kalır.</p>`)}
  `},
  {t:'🚥 Her derste okumaya devam edin', html:`
   <div class="card"><p>İlk derslerden sonra, her dersin ardından yapacağınız basit bir trafik ışığı kontrolü sizi gerçekçi tutar. Otuz saniye sürer.</p></div>
   ${classifyCard('co-ok','🟢','Zamanında ve hazır geliyor · konuyla ilgili sorular soruyor · bir şey çalıştığında heyecanlanıyor · ilerlemesini göstermek istiyor · bir önceki dersi hatırlıyor.','Devam edin. İlişkiyi sıcak tutun ve gözlemlemeyi sürdürün.')}
   ${classifyCard('co-cute','🟡','Dikkati sık sık dağılıyor · tek kelimelik cevaplar veriyor (“evet”, “hayır”, “bilmem”) · alıştırmaları yalnızca mecbur olduğu için yapıyor · bir önceki dersi hatırlamıyor · dersi erken bitirmek istiyor.','Dersten sonra bir not yazın ve esnek bir değişiklik deneyin (Modül 2). <strong>Üst üste iki sarı ders → aynı hafta Takım Liderinize haber verin.</strong> Kırmızıyı beklemeyin.')}
   ${classifyCard('co-danger','🔴','Katılmayı reddediyor · sevmediğini açıkça söylüyor · veli, çocuğun derse gelmek istemediğini yazıyor · hiçbir iyileşme olmadan iki veya daha fazla sarı ders · ağlıyor, hayal kırıklığına uğruyor veya zor davranmaya başlıyor.','<strong>Aynı gün BO’da bildirin</strong> ve Takım Liderinize haber verin.')}
   <div class="card"><h4>💬 Dört kontrol sorusu — her 2–3 derste bir tanesini sorun</h4></div>
   ${iconGrid([
     {ic:'🌟', html:`<strong>“Bugünkü dersin en havalı kısmı neydi?”</strong> Hiçbir şey söyleyemiyorsa, bu bir işarettir.`},
     {ic:'🔧', html:`<strong>“Derslerimizde değiştirmek istediğin bir şey var mı?”</strong> Baskı yaratmadan faydalı bilgi veren açık uçlu bir soru.`},
     {ic:'🔢', html:`<strong>“1’den 5’e kadar, bu kurs senin için ne kadar zor oldu?”</strong> 1–2 çok kolay, 4–5 çok zor demektir. İkisi de bir uyumsuzluk işaretidir.`},
     {ic:'🚀', html:`<strong>“Bu kursu bitirdiğinde neler yapabilmek ya da üretebilmek istersin?”</strong> Cevabın kursla hiçbir ilgisi yoksa, bir beklenti farkı vardır.`}
   ])}
  `},
  {t:'📝 BO’da bildirin — aynı gün', html:`
   <div class="card"><p>Gereksiz çıkan bir bildirimin hiçbir maliyeti yoktur. Yapılmayan bir bildirim ise bir öğrenciye mal olabilir. <strong>Bunun gerçek bir uyumsuzluk olduğundan emin değilseniz bile bildirin</strong> — müfredatı ve mevcut seviyeleri Takım Lideriniz bilir; sizin bilmeniz gerekmez.</p></div>
   ${timeline([
     {ic:'⏱️', label:'Dersten hemen sonra', items:[
       '<strong>2–3 satır yazın:</strong> hangi işareti gördüğünüzü, hangi anda gördüğünüzü ve öğrencinin ne dediğini — kendi sözleriyle. Ayrıntılar çabuk unutulur.'
     ]},
     {ic:'📝', label:'Aynı gün', items:[
       '<strong>BO’da bildirin:</strong> öğrenci profili → İlerleme → Eğitmen Değerlendirmeleri → Öğrenciyi Değerlendir. Sorun Türü’nü (veya <em>Diğer</em> seçeneğini) seçin, grubu seçin ve notunuzu yapıştırın.',
       '<strong>Takım Liderinize</strong> bildirimi yaptığınızı söyleyin.'
     ]},
     {ic:'🔁', label:'Sonraki derslerinizde', items:[
       '<strong>Uyarlamaya devam edin</strong> (Modül 2) ve yeni gelişmeleri duruma ekleyin. Bir kez bildirin, sonra takip edin.'
     ]}
   ])}
   <div class="card" style="background:var(--surface2)"><h4>📨 Faydalı bir bildirim nasıl görünür — kopyalayıp doldurun</h4>
   <p style="font-size:13.5px;line-height:1.75"><strong>Öğrenci:</strong> [ad] · <strong>Kurs / seviye:</strong> [örn. İllüstrasyon, 1. seviye] · <strong>Ders:</strong> [M1L2 — tarih]<br>
   <strong>Gözlemlediğim:</strong> [2–3 satır: işaret, an, öğrencinin kendi sözleri]<br>
   <strong>Bence arkasındaki neden:</strong> ☐ beklediği gibi değil &nbsp; ☐ içeriği sevmiyor &nbsp; ☐ seviye uygun gelmiyor<br>
   <strong>Derste zaten denediklerim:</strong> [örn. karakter temasını kendisinin seçmesine izin verdim]<br>
   <strong>Neler yardımcı olabilir — önerim benden, karar sizden:</strong> ☐ bir motivasyon dersi &nbsp; ☐ bir seviye dersi veya danışmanlık görüşmesi &nbsp; ☐ farklı bir kurs</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Bir durumu bildirin</span><iframe src="Simulacion_BO_Evaluate.html" title="BO — Bir durumu bildirin" loading="lazy"></iframe></div></div>
   ${co('co-star','🌱',`<p><strong>Bu neden işe yarar:</strong> Takım Lideriniz ve Müşteri Hizmetleri yalnızca bildikleri konularda harekete geçebilir. Bildirim, tüm bu süreçte yalnızca sizin atabileceğiniz tek adımdır — ve geriye kaç seçenek kalacağını belirleyen de odur.</p>`)}
  `},
  {t:'💬 Aileye neler söyleyebilirsiniz — ve neler Takım Liderinizi bekler', html:`
   <div class="card"><p>Çocuğun öğrenme süreci hakkında her zaman konuşabilirsiniz. Kurs, seviye veya format değişikliğini ise asla siz sunmaz, vaat etmez ya da reddetmezsiniz — bu, Takım Lideriniz ve Müşteri Hizmetleri’nden gelir.</p></div>
   ${doavoid(
     ['Öğrenmeyle ilgili fark ettiklerinizi paylaşın: <em>“Karakter çizerken gözlerinin içi gülüyor — bunu derslerimize dahil ediyorum.”</em>','Konuyu ekibinizle paylaştığınızı ve onlara geri döneceğinizi söyleyin','Çocuklarının bu kurstan ne kazanmasını istediklerini sorun','Size bunu anlattıkları için teşekkür edin — sıcak bir dille ve aynı gün'],
     ['Başka bir kurs, seviye değişikliği veya iadeyi kendinizin önermesi','Kursu savunmak: <em>“ileride daha güzel olacak”</em>','Bir ders veya değişiklik vaat etmek','<em>“Bu kursu sevmedi”</em> demek — bir başarısızlık gibi duyulur']
   )}
   <div class="card" style="background:var(--surface2)"><h4>📨 Takım Lideriniz bir öneriyi onayladığında — bunu bir fırsat olarak sunun</h4>
   <p style="font-size:13.5px;line-height:1.75"><em>“Merhaba [velinin adı], ben [adınız], [öğrenci]’nin eğitmeniyim. [Öğrenci]’nin çok fazla potansiyeli olduğunu fark ettim, ancak ilk derslerde bu kursun odağının tam olarak hayal ettiği şey olmadığını hissettim — [örn. sadece kod yazmak değil, oyun yapmak istediğinden bahsetti]. [Öğrenci]’nin Kodland’deki zamanından keyif almasını ve en iyi şekilde yararlanmasını istiyorum; bu yüzden ekibimizle birlikte [başka bir kurs]’un ona daha uygun olup olmayacağını değerlendirmek istiyoruz. Size daha fazla bilgi verebilmem için bu hafta birkaç dakikanız olur mu?”</em></p></div>
   ${co('co-idea','💡',`<p><strong>Şunu söyleyin:</strong> “onun daha da çok sevebileceği bir şey bulduk” — <strong>asla</strong> “bu kursu sevmedi” demeyin.</p>`)}
  `}
 ],
 ix:{
  title:'Fark edin, adlandırın, bildirin',
  instr:'Alıntıları sınıflandırın ve en iyi hamleyi seçin. Sonraki modülün kilidini açmak için %70 gerekir.',
  items:[
   {type:'sort', prompt:'Bu, uyumsuzluğun hangi biçimi?', card:`“Sadece kod yazacağımızı değil, oyun yapacağımızı sanıyordum.”`, zones:[{label:'🎯 Beklediğim bu değildi', fb:'Doğru — beklenti kurstan farklıydı. Esneklik bu farkın bir kısmını kapatabilir; bildirim ise diğer seçenekleri açık tutar.'},{label:'😒 İçeriği sevmiyor', fb:'Tam değil — bu öğrencinin yapmayı beklediği belirli bir şey var. Bu, “beklediğim bu değildi” türünde bir farktır.'},{label:'⚖️ Seviye uygun gelmiyor', fb:'Tam değil — burada zorlukla ilgili hiçbir şey yok. Mesele, ne yapmayı beklediğiyle ilgili.'}], correctZone:0},
   {type:'sort', prompt:'Bu, uyumsuzluğun hangi biçimi?', card:`“Hepsi çok kolaydı — bunu zaten biliyorum.”`, zones:[{label:'🎯 Beklediğim bu değildi', fb:'Tam değil — bu öğrenci konudan değil, zorluktan bahsediyor.'},{label:'😒 İçeriği sevmiyor', fb:'Tam değil — içerikten sıkılmış gibi görünse de sorun seviyededir.'},{label:'⚖️ Seviye uygun gelmiyor', fb:'Doğru — sevmeme gibi görünüyor ama sorun seviye. Hemen uyarlayın ve seviye dersi için durumu bildirin.'}], correctZone:2},
   {type:'sort', prompt:'Bu, uyumsuzluğun hangi biçimi?', card:`Her derste alıştırmaları yalnızca mecbur olduğu için yapıyor, “bilmem” diye cevap veriyor ve dersi erken bitirmek istiyor.`, zones:[{label:'🎯 Beklediğim bu değildi', fb:'Tam değil — ne beklediğini söylemedi. Bu tablo, içeriğin kendisine duyulan düşük ilgiyle ilgili.'},{label:'😒 İçeriği sevmiyor', fb:'Doğru — içerik ya da sunuluş biçimi ona hitap etmiyor. Hedefin içinde seçenekler sunun ve durumu bildirin.'},{label:'⚖️ Seviye uygun gelmiyor', fb:'Tam değil — zorlukla ilgili bir sorun görünmüyor; işaret düşük ilgi.'}], correctZone:1},
   {type:'choice', prompt:`Tespit sırasında “Ne öğrenmeyi bekliyordun?” diye soruyorsunuz ve öğrenci şöyle diyor: “Anime çizmeyi — bunu değil.” En iyi sonraki adım nedir?`, opts:[`Animenin kursta daha sonra geleceğini açıklayıp tam planlandığı gibi devam etmek`,`Mümkün olduğunca onun ilgisini bugünkü derse taşımak ve aynı gün BO’da bildirmek`,`Geçip geçmeyeceğini görmek için iki ders daha beklemek`], correct:1, fb:`Derste esnetebileceğiniz şeyleri hemen esnetin ve ekibin tüm seçenekleri hâlâ elindeyken aynı gün bildirin. Beklemek ya da planı savunmak, bu fırsat penceresini harcar.`},
   {type:'sort', prompt:'Bu durum trafik ışığında nereye düşer?', card:`Üst üste iki ders: tek kelimelik cevaplar ve dersi erken bitirme isteği.`, zones:[{label:'🟢 Yeşil', fb:'Tam değil — iki ders boyunca tek kelimelik cevaplar ve erken ayrılma isteği “her şey yolunda” anlamına gelmez.'},{label:'🟡 Sarı', fb:'Doğru — not alın, esnek bir değişiklik deneyin ve aynı hafta Takım Liderinize haber verin. Kırmızıyı beklemeyin.'},{label:'🔴 Kırmızı', fb:'Henüz değil — kırmızı; reddetme, açıkça sevmediğini söyleme ya da velinin yazması demektir. Ancak üst üste iki sarı da zaten şu anlama gelir: bu hafta Takım Liderinize haber verin.'}], correctZone:1},
  ]
 }
},
{id:'flex', numLabel:'Modül 2', emoji:'🎛️', color:'var(--coral)',
 title:'Kursu Öğrenciye Uydurun — Hedefi Koruyan Esneklik',
 desc:'Öğrenme hedefini kaybetmeden bir dersi öğrencinin gerçekten öğrenmek istediği şeye nasıl uyarlayacağınız, yaşa göre nasıl seçenekler sunacağınız ve Takım Liderinizin ne zaman devreye girmesi gerektiği.',
 obj:'Öğrenme hedefini koruyarak bir dersi öğrencinin ilgi alanlarına uyarlamak, yaşına uygun seçenekler sunmak ve esnekliğin ne zaman yetmediğini, Takım Liderinizin ne zaman devreye girmesi gerektiğini bilmek.',
 sections:[
  {t:'🎯 Kural: hedefi koruyun, yolu esnetin', html:`
   <div class="card"><p>“Kılavuzu takip etmek” ile “ne isterlerse yapmalarına izin vermek” arasında seçim yapmak zorunda değilsiniz. Kılavuz, dersin <strong>ne için</strong> olduğunu söyler. Geri kalan neredeyse her şey esnetilebilir.</p></div>
   <div class="two-col">
     <div class="card"><h4>🔒 Aynı kalanlar</h4><ul><li>Dersin öğrenme hedefi ve becerileri</li><li>Kılavuzdaki beklenen kazanımlar</li><li>Dersin yapısı (ısınma, alıştırma, kapanış)</li></ul></div>
     <div class="card"><h4>🎛️ Esnetilebilenler</h4><ul><li>Tema, karakter, hikâye</li><li>Projenin konusu</li><li>Adımların sırası</li><li>Kullandığınız örnek ve görevin zorluğu</li></ul></div>
   </div>
   ${co('co-idea','🧠',`<p><strong>Neden işe yarar?</strong> John Keller’ın bilinen ARCS modeline (1987) göre, motive bir öğrencinin dört şeye ihtiyacı vardır: Dikkat (<strong>A</strong>ttention), Uygunluk (<strong>R</strong>elevance), Güven (<strong>C</strong>onfidence) ve Doyum (<strong>S</strong>atisfaction). “İstediğim bu değildi” diyen bir öğrencide eksik olan <em>Uygunluk</em>tur — dersi onun zaten önem verdiği şeylerle ilişkilendirmek de bunu ona geri kazandırmanın tam yoludur.</p>`)}
  `},
  {t:'🎨 Pratikte şöyle görünür — beş gerçek örnek', html:`
   ${stepIconBlock('🎨','İllüstrasyon — “Sadece anime çizmek istiyorum”', `<p><strong>Hedef aynı kalır:</strong> ışık, oran, renk, kompozisyon.<br><strong>Onun dokunuşu:</strong> her alıştırmada bir anime karakteri kullanılır — bir anime yüzünü gölgelendirmek, bir chibi ile bir kahramanın oranlarını karşılaştırmak, <em>kendi</em> karakteri için bir renk paleti oluşturmak.</p><p><em>“Bayıldım — bugünkü karakter senin olsun. Işığın karakterinin yüzünde nasıl çalıştığını öğreneceğiz.”</em></p>`)}
   ${stepIconBlock('🐍','Python — “Sıkıcı kod değil, oyun yapmak istiyorum”', `<p><strong>Hedef aynı kalır:</strong> değişkenler, döngüler, koşullar.<br><strong>Onun dokunuşu:</strong> tam olarak aynı kavramları kullanarak en sevdiği dizi veya oyun hakkında küçük bir bilgi yarışması ya da oyun.</p><p><em>“Oyun dediğin, daha havalı kostüm giymiş döngüler ve koşullardan ibaret. Hangisini yapalım?”</em></p>`)}
   ${stepIconBlock('📖','Herhangi bir kurs — “Hikâyeyi takip etmek istemiyorum”', `<p><strong>Hedef aynı kalır:</strong> dersin becerisi.<br><strong>Onun dokunuşu:</strong> dersin temel konusunu öğrendiği sürece hikâye kurgusunu bırakıp aynı beceriyi kendi fikri üzerinde uygular.</p><p><em>“Hikâyeyi boş verelim — bu beceriyle ne yapmak isterdin?”</em></p>`)}
   ${stepIconBlock('🧊','3D / tasarım — “Kendi istediğim şeyi modellemek istiyorum”', `<p><strong>Hedef aynı kalır:</strong> araç ve teknik.<br><strong>Onun dokunuşu:</strong> üzerinde çalışacağı nesneyi kendisi seçer.</p><p><em>“Odanda olmasını çok isteyeceğin bir şey göster — onu bugünkü teknikle yapalım.”</em></p>`)}
   ${stepIconBlock('🌐','Web — “Kendi konum hakkında bir sayfa yapmayı tercih ederim”', `<p><strong>Hedef aynı kalır:</strong> yapı, yerleşim, bağlantılar.<br><strong>Onun dokunuşu:</strong> tuttuğu futbol takımı, sevdiği dizi veya hobisi hakkında bir sayfa.</p><p><em>“Bir saat boyunca konuşabileceğin bir konu seç — işte o senin sayfan.”</em></p>`)}
  `},
  {t:'🎛️ Açık bir kapı değil, bir menü sunun', html:`
   <div class="card"><p>“Ne yapmak istersin?” fazla açık bir sorudur — çoğu zaman “bilmiyorum” cevabını alır. <strong>Hepsi hedefi karşılayan iki veya üç seçenek</strong> sunun ve öğrencinin seçmesine izin verin. Küçük bir seçim sahiplenme duygusu verir; sınırlı bir menü ise dersi rayında tutar. Bunu nasıl sunacağınız yaşa bağlıdır:</p></div>
   ${dimTabs([
     {ic:'🧒', title:'6–8 yaş',
      intro:'Küçük çocuklar bütün hayal güçleriyle seçim yapar. Onlara somut, oyun gibi seçenekler sunun — ve asla iki veya üçten fazla değil.',
      tips:[
       {ic:'🃏', html:`<strong>Bir kart seç.</strong> <em>“Bugün bir ejderha, bir robot ya da bir kedi yapabiliriz. Hangisini seçiyorsun?”</em>`},
       {ic:'🏷️', html:`<strong>Adını koymasına ve sahiplenmesine izin verin.</strong> <em>“Karakterinin adı ne?”</em> — sonra anlatırken o adı kullanın.`},
       {ic:'✅', html:`<strong>Temaya evet deyin, beceriyi koruyun.</strong> <em>“Evet, ejderhanın gölgeleri olabilir — bugünün sırrı da gölgeler.”</em>`},
       {ic:'🎉', html:`<strong>Seçimini kutlayın.</strong> Fikrinin ekranda belirdiği an, dersin kendisine ait olduğunu hissettiği andır.`}
      ]},
     {ic:'🧑', title:'9–11 yaş',
      intro:'Ne yapacakları konusunda söz sahibi olmak ve kendi dünyalarından tanıdık şeyler görmek isterler.',
      tips:[
       {ic:'🧩', html:`<strong>Tema artı görev.</strong> <em>“Temayı sen seç — uzay, futbol ya da sevdiğin bir oyun — görev aynı kalıyor: bugünkü tekniği kullanmak.”</em>`},
       {ic:'🔢', html:`<strong>Hızlı puanlama.</strong> <em>“1’den 5’e kadar, bu temayı ne kadar sevdin? 5 olması için ne gerekir?”</em>`},
       {ic:'🌟', html:`<strong>Kendi fikri için bir bonus seviye.</strong> Önce temel görevi bitirir, sonra kendinden bir şey ekler.`},
       {ic:'📺', html:`<strong>Bildikleri şeyleri kullanın.</strong> Bahsettikleri oyunlara veya dizilere atıfta bulunun — bu, onları dinlediğinizi gösterir.`}
      ]},
     {ic:'🧑‍🎓', title:'12 yaş ve üzeri',
      intro:'Daha büyük öğrenciler anlam ve saygı ister. Onlara yetenekli bireyler olarak davranın ve uzlaşın.',
      tips:[
       {ic:'🤝', html:`<strong>Görevin çerçevesini birlikte belirleyin.</strong> <em>“Bu proje senin için neyle zahmetine değer olur? Bugünkü beceriyi öğreten ve sana ait olan bir versiyon bulalım.”</em>`},
       {ic:'🌍', html:`<strong>Becerinin nerede kullanıldığını gösterin</strong> — zaten sevdikleri oyunlarda, uygulamalarda veya tasarımlarda.`},
       {ic:'⚖️', html:`<strong>Sınırlar konusunda dürüst olun.</strong> <em>“Bu, bu kursun kapsamı dışında — ekibime neler yapabileceğimizi soracağım. Bugün için bunu şu konuda kullanalım.”</em>`},
       {ic:'📣', html:`<strong>Çalışmalarını grupla paylaşmalarına izin verin</strong>; bu yaşta akranlar çok önemlidir.`}
      ]}
   ],'✅ Üç yaş grubunun hepsini gördünüz. Sırada: esnekliğin yetmediği durumlar.')}
  `},
  {t:'🧭 Esneklik yetmediğinde — Takım Lideriniz ve seçenekler', html:`
   <div class="card"><p>Bazı farklar, ders içinde kapatılamayacak kadar büyüktür. Bu bir başarısızlık değildir — aynı gün yaptığınız bildirimin önemli olmasının nedeni tam olarak budur. Takım Liderinize iletilmesi gereken durumlar şunlardır:</p></div>
   ${iconGrid([
     {ic:'🔀', html:`<strong>Öğrenci tamamen farklı bir beceri istiyor</strong> — örneğin bir çizim kursunda 3D oyunlar.`},
     {ic:'📉', html:`<strong>Esnekliğiniz bir ders için işe yarıyor, ancak ilgi geri gelmiyor</strong> — iki üç ders boyunca.`},
     {ic:'📢', html:`<strong>Veli, kursun satın aldıkları şey olmadığını söylüyor.</strong> Mesajı aldığınızı belirtin, cevap vermeden önce konuyu Takım Liderinize ve Müşteri Hizmetleri’ne iletin ve ailenin sözlerini kelimesi kelimesine BO’ya yazın.`},
     {ic:'⚖️', html:`<strong>Seviye açıkça yanlış.</strong> Hemen uyarlayın ve bildirin; böylece bir seviye dersi değerlendirilebilir.`}
   ])}
   <div class="card"><h4>🎁 Takım Lideriniz ve Müşteri Hizmetleri’nin ayarlayabilecekleri — siz önerirsiniz, onlar karar verir</h4></div>
   ${iconGrid([
     {ic:'💬', html:`<strong>Bir motivasyon dersi.</strong> Öğrencinin kursa neden katıldığını yeniden hatırlamasını sağlamak için tasarlanmış bir görüşme veya ders.`},
     {ic:'🎚️', html:`<strong>Bir seviye dersi veya danışmanlık görüşmesi.</strong> Kursun ve seviyenin gerçekten uygun olup olmadığını — ve neyin daha uygun olacağını — kontrol eder.`},
     {ic:'🔄', html:`<strong>Başka bir Kodland kursu.</strong> Çoğu zaman en iyi çözümdür: öğrenci sevdiği bir şeyi yapar ve Kodland’de kalır.`}
   ])}
   ${co('co-danger','⛔',`<p><strong>BO’da önerirsiniz — asla vaat etmezsiniz.</strong> Ne “Seni başka bir kursa aktaracağım” ne de “Bu mümkün değil” deyin. İkisi de size ait olmayan kararlardır.</p>`)}
   <div class="card" style="background:var(--surface2)"><h4>🗣️ Öğrenciye neler söyleyebilirsiniz</h4>
   <p style="font-size:13.5px;line-height:1.75"><em>“Gerçekte ne yapmak istediğini bana söylemene çok sevindim. Bugün için senin fikrini derste kullanalım. Ben de senin için başka neler yapabileceğimizi ekibime soracağım.”</em></p></div>
   ${doavoid(
     ['Bir sonraki dersin başında ne yapmak istediğini sorun','Çalışmasını grupla paylaşın','Fikrinin derste yer bulduğu anı kutlayın'],
     ['<em>“Bu planda yok”</em> demek','Dinlemek yerine kursu savunmak','“Onun fikrinin” dersin hedefinin yerini almasına izin vermek']
   )}
  `}
 ],
 ix:{
  title:'Esnetin — hedefi kaybetmeden',
  instr:'En iyi hamleyi seçin veya her durumu sınıflandırın. Son kontrol listesinin kilidini açmak için %70 gerekir.',
  items:[
   {type:'choice', prompt:`İllüstrasyon kursundaki bir öğrenci şöyle diyor: “Sadece anime çizmek istiyorum.” En iyi cevap nedir?`, opts:[`Animenin kursun bir parçası olmadığını söylemek`,`Işık, oran ve rengi öğretirken alıştırmalarda anime karakterleri çizmesine izin vermek — ve durumu BO’da bildirmek`,`İstediği her şeyi çizmesine izin verip dersin hedefini atlamak`], correct:1, fb:`Hedef (ışık, oran, renk) aynı kalır; karakter onundur. Ardından ekibin başka seçenekleri de değerlendirebilmesi için durumu BO’da bildirin. Reddetmek öğrenciyi kaybettirir; hedefi bırakmak ise öğrenmeyi.`},
   {type:'sort', prompt:'Bununla kim ilgilenir?', card:`Proje temasını öğrencinin seçmesine izin vermek.`, zones:[{label:'✅ Bunu kendim yapabilirim', fb:'Doğru — hedefin içinde bir tema seçmek tamamen sizin elinizdedir ve izin gerektirmez.'},{label:'🧭 Takım Liderimin devreye girmesi gerekir', fb:'Tam değil — hedefi koruyan bir tema seçimi sizin ders anlatımınızın kapsamındadır.'}], correctZone:0},
   {type:'sort', prompt:'Bununla kim ilgilenir?', card:`Öğrenci tamamen farklı bir kursa geçmek istiyor.`, zones:[{label:'✅ Bunu kendim yapabilirim', fb:'Tam değil — kurs değişikliğini vaat etmek ya da reddetmek asla size ait değildir.'},{label:'🧭 Takım Liderimin devreye girmesi gerekir', fb:'Doğru — aynı gün BO’da bildirin ve Takım Liderinize haber verin. Siz önerirsiniz; karar onlarındır ve Müşteri Hizmetleri’nindir.'}], correctZone:1},
   {type:'sort', prompt:'Bununla kim ilgilenir?', card:`Bir veli şöyle yazıyor: “Bu, ödemesini yaptığımız kurs değil.”`, zones:[{label:'✅ Bunu kendim yapabilirim', fb:'Tam değil — bu, alabileceğiniz en hassas mesajdır. Tek başınıza cevap vermek bir şikâyeti doğrulayabilir ya da sunamayacağımız bir şeyi ima edebilir.'},{label:'🧭 Takım Liderimin devreye girmesi gerekir', fb:'Doğru — mesajı aldığınızı belirtin, cevap vermeden önce konuyu Takım Liderinize ve Müşteri Hizmetleri’ne iletin ve ailenin sözlerini BO’ya kaydedin.'}], correctZone:1},
   {type:'choice', prompt:`7 yaşında bir çocuk derslerin sıkıcı olduğunu söylüyor. Hangi teklif en uygun?`, opts:[`“Bütün projeyi birlikte tasarlayalım — beş maddelik görev tanımın ne?”`,`“Karakterin ne olsun — ejderha mı, robot mu, kedi mi?” diye sorup o karakteri bugünkü görevde kullanmak`,`“Kurs böyle işliyor — ileride seveceksin.”`], correct:1, fb:`Küçük çocuklar en iyi, iki veya üç somut ve oyun gibi seçenek arasından seçim yapar. Açık bir görev tanımı daha büyük öğrenciler içindir; “ileride seveceksin” demek ise dinlemek yerine kursu savunmaktır.`},
   {type:'choice', prompt:`“Hedefi koruyun, yolu esnetin” ne anlama gelir?`, opts:[`Öğrencinin sevmediği görevleri atlamak`,`Yalnızca öğrencinin ilgi alanlarını takip etmek`,`Temayı veya görevi değiştirmek, ama dersin amacı olan beceriyi korumak`], correct:2, fb:`Kılavuzdaki hedef ve kazanımlar aynı kalır; tema, karakter, konu ve sıra esnetilebilir.`},
   {type:'choice', prompt:`Bir öğrenci soruyor: “Bunun yerine başka bir kursa geçebilir miyim?” Ne söylersiniz?`, opts:[`“Evet, senin için ayarlarım.”`,`“Hayır, bu kursa zaten başladın.”`,`“Bunu bana söylemene çok sevindim. Neler yapabileceğimizi ekibime soracağım — bu arada senin fikrini bugünkü derste kullanalım.”`], correct:2, fb:`Vaat etmek de reddetmek de size ait değildir — ama dinlemek, fikrini hemen kullanmak ve ekip içindeki konuşmayı başlatmak tam olarak sizin işinizdir.`},
   {type:'sort', prompt:'Bu, öğrenme hedefini koruyor mu?', card:`Dersin hedefi animasyon tekniği olduğu için öğrenci kendi seçtiği herhangi bir nesneyi canlandırıyor.`, zones:[{label:'✅ Hedefi koruyor', fb:'Doğru — seçim onun, teknik ise yine uygulanıyor.'},{label:'⛔ Hedefi kaybettiriyor', fb:'Tam değil — dersin amacı olan tekniği hâlâ uyguluyor.'}], correctZone:0}
  ]
 }
},
{id:'checklist', numLabel:'Son Kontrol Listesi', emoji:'✅', color:'var(--coral)',
 title:'Son Kontrol Listesi',
 desc:'Burada test yok — mini eğitimi kapatmadan önce temel noktaların bir özeti.',
 obj:'Aşağıdaki kontrol listesini gözden geçirin. Bu modül notlandırılmaz — okuyun, ardından mini eğitimi bitirin.',
 sections:[
  {t:'🛟 Bir iade talebi zaten varsa', html:`
   ${numlist([
     'Talebi öğrendiğim gün BO’da bir yorum bıraktım ve Takım Liderimi bilgilendirdim',
     'Bu öğrenciyle yaptığım bir sonraki ders gerçek bir kazanma girişimiydi — gerçek bir söz hakkı, görünür bir başarı, özel ilgi ve talepten hiç bahsetmeden',
     'Onayı asla teyit etmedim ve herhangi bir tutar konuşmadım — güvenli tek cümleyi kullandım ve gerisini Müşteri Hizmetleri’ne bıraktım'
   ])}
  `},
  {t:'🌱 Her derste', html:`
   ${numlist([
     'İlk iki derste hızlı tespiti yapıyorum: ne bildiğini, ne beklediğini, neyin kolay veya zor geldiğini soruyor ve kısa, bireysel bir alıştırma veriyorum',
     'Her dersten sonra durumu yeşil, sarı veya kırmızı olarak okuyorum — üst üste iki sarı dersten sonra aynı hafta Takım Liderime haber veriyorum',
     'Her 2–3 derste bir kontrol sorusu soruyorum: en havalı kısım, neyi değiştirmek istediği, 1’den 5’e ne kadar zor olduğu, ne üretmek istediği',
     'Dersten hemen sonra 2–3 satır yazıyorum: işaret, an ve öğrencinin kendi sözleri',
     'Olası bir uyumsuzluğu, emin olmasam bile aynı gün BO’da bildiriyorum; gereksiz bir bildirimin hiçbir maliyeti yoktur',
     'Öğrenme hedefini sabit tutuyor; temayı, projeyi, karakteri veya adımların sırasını esnetiyorum',
     'Hepsi hedefi karşılayan iki veya üç seçeneği, çocuğun yaşına uygun bir şekilde sunuyorum',
     'Kurs veya seviye değişikliği ya da ek ders asla vaat etmiyorum — BO’da öneriyor ve “ekibime soracağım” diyorum',
     'Kursu savunmuyor ya da “ileride daha güzel olacak” demiyorum — önce dinliyor, sonra uyarlıyorum',
     'Bir veli kursun beklediği gibi olmadığını söylediğinde, mesajı aldığımı belirtiyor, cevap vermeden önce konuyu Takım Liderime ve Müşteri Hizmetleri’ne iletiyor ve sözlerini BO’ya kaydediyorum',
     'Öğrencinin kendi fikrinin derste yer bulduğu anı kutluyor ve çalışmasını grupla paylaşıyorum'
   ])}
  `},
  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>Mini eğitimin tamamı bu kadar.</strong> Hazır olduğunuzda devam edin — ardından ödevi kapatmak için LMS’deki DST’yi tamamlayın.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
