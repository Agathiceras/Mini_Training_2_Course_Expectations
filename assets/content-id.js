/* Mini_Training_2_Course_Expectations - English content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='id';
const CONTENT = {
  flag:'🇮🇩', dir:'ltr',
  ui:{
    pageTitle:"Mini-Training · Harapan — Pelatihan Tutor Kodland",
    logoSub:'Departemen Pengembangan Tutor',
    heroEyebrow:"🎯 Mini-Training",
    heroTitle:"Menutup Kesenjangan <span class=\"h-pill\">Harapan</span>",
    heroIntro:"Kamu menerima pelatihan ini karena ada siswamu yang mengajukan refund karena kursusnya tidak sesuai harapan mereka, bukan yang mereka inginkan, atau mereka tidak menyukai materinya. Di sini kami akan menunjukkan apa yang bisa kamu lakukan sebagai tutor dan cara menangani situasi seperti ini.",
    heroWork:"Selesaikan 4 modul singkat. Setiap cek modul butuh nilai 70%+ untuk membuka modul berikutnya. Total sekitar 20–25 menit.",
    startBtn:"🚀 Mulai Pelatihan",
    pathLabel:'Jalur belajarmu',
    devTitle:'Dev: buka semua modul untuk ditinjau',
    backToPath:'Kembali ke jalur',
    modulesPassed:'{done} / {total} modul lulus',
    moduleN:'Modul {n}',
    of:'dari',
    locked:'🔒 Terkunci',
    passedBadge:'✅ Lulus · {pct}%',
    reviewedBadge:'✅ Sudah ditinjau',
    startBadge:'▶ Mulai',
    reviewBadge:'▶ Tinjau',
    objective:'Tujuan',
    startCheck:'▶ Mulai cek modul',
    finishBtn:'▶ Selesaikan mini-training',
    doneBack:'✓ Selesai — kembali ke jalur',
    ixBadge:'📋 Cek modul — 70% untuk membuka modul berikutnya',
    ixItemBadge:'📋 Cek modul — soal {i} dari {n}',
    scoreSoFar:'Skor sementara: {c} / {t}',
    continue:'Lanjut →',
    sortWrong:'Belum tepat — jawaban yang benar adalah “{label}”.',
    resPassed:'Modul lulus!',
    resFailed:'Belum berhasil',
    resUnlocked:"Kamu sudah membuka modul berikutnya.",
    resDone:"Kamu sudah menyelesaikan mini-training ini.",
    resNeed:'Kamu butuh 70% untuk membuka modul berikutnya. Tinjau lagi bagian di atas, lalu coba cek ini sekali lagi.',
    resContinue:'Lanjut ke jalur belajar',
    resFinish:'Lanjut',
    resBack:'Kembali ke jalur',
    resReview:'Tinjau modul ini',
    doneEyebrow:'Mini-Training Selesai',
    doneTitle:'🎉 Selamat!',
    doneP1:"🎉 <strong>Selamat! Kamu sudah menyelesaikan mini-training ini.</strong>",
    doneP2:"Semuanya sudah selesai di sini! Silakan kembali ke halaman pelatihan di LMS tempat kamu membuka mini-training ini untuk menuntaskan tugasnya.",
    doneP3:"👉 <strong>Jika ada cek atau penilaian yang tercantum tepat di bawah pelatihan ini di LMS, pastikan kamu menyelesaikannya dan mencapai nilai kelulusan</strong> — jika tidak, tugasnya bisa tetap tercatat belum selesai.",
    doneP4:'Semoga sukses! ❤️',
    doneP5:'',
    devUnlockAlert:'Mode dev: semua modul sekarang terbuka untuk ditinjau.',
    devOn:'🔓 Mode dev AKTIF — semua modul terbuka',
    devOff:'🔒 Mode dev NONAKTIF — progres dihapus',
    devBadge:'🔓 MODE DEV',
    doLabel:'✅ Lakukan',
    avoidLabel:'🚫 Hindari',
    noticeLabel:'Perhatikan:',
    cvSee:'Yang kamu lihat:',
    cvDo:'Yang kamu lakukan:',
    dtExample:'Contoh dari kelas sungguhan',
    dtNext:'Berikutnya:',
    dtDone:"✅ Itu dia keempat area. Selanjutnya, klasifikasikan apa yang kamu lihat.",
    tlVideoTitle:'{label} — contoh dari kelas sungguhan',
    tlVideoMeta:'Tonton seperti apa fase ini dalam pelajaran sungguhan'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Pendahuluan', emoji:'🧩', color:'var(--coral)',
 title:'Mengapa Kamu di Sini',
 desc:'Mengapa “ini bukan yang kami inginkan” adalah salah satu dari sedikit alasan refund yang masih bisa kamu ubah — dan aturan yang berlaku jika permintaan refund sudah masuk.',
 obj:'Memahami mengapa kesenjangan antara kursus dan harapan siswa atau keluarga sering kali bisa diperbaiki, mengapa laporan di hari yang sama sangat penting, dan apa persisnya yang harus (dan tidak boleh) dilakukan jika permintaan refund sudah ada.',
 sections:[
  {t:'🎭 “Ini bukan yang kami inginkan” — apa yang sebenarnya ada di baliknya', html:`
   <div class="card"><p>Kamu tidak bisa melihat percakapan penjualan, kelas uji coba, atau apa yang dibayangkan keluarga saat mendaftar. Yang <em>bisa</em> kamu lihat adalah seorang anak di kelasmu — dan kesenjangan itu hampir selalu muncul di sana lebih dulu, jauh sebelum orang tua menulis apa pun.</p></div>
   ${iconGrid([
     {ic:'🎯', html:`<strong>Topiknya tidak seperti yang dia bayangkan.</strong> Dia ingin membuat game, tapi kursusnya dimulai dari dasar-dasar. Dia ingin menggambar anime, tapi kursusnya mengajarkan cahaya, proporsi, dan warna.`},
     {ic:'🧸', html:`<strong>Orang tua yang memilih, bukan anaknya.</strong> Si anak tidak pernah meminta kursus ini, jadi setiap pelajaran terasa seperti PR.`},
     {ic:'⚖️', html:`<strong>Levelnya terasa tidak pas.</strong> Terlalu mudah terdengar seperti “materinya membosankan”. Terlalu sulit terdengar seperti “ini bukan untukku”. Apa pun itu, semuanya dilaporkan sebagai tidak suka.`},
     {ic:'⏳', html:`<strong>Bagian serunya belum datang.</strong> Pelajaran-pelajaran pertama membangun fondasi, dan siswa keburu berhenti sebelum melihat ke mana arahnya.`}
   ])}
   ${co('co-idea','💡',`<p><strong>Ini salah satu dari sedikit alasan refund yang masih bisa dibalikkan.</strong> Siswa yang menginginkan sesuatu yang berbeda sering kali bisa diberi sesuatu yang berbeda — di dalam pelajaranmu, melalui pelajaran penyetaraan atau sesi konsultasi, atau di kursus Kodland lain yang akan membuatnya lebih senang.</p>`)}
  `},
  {t:'⏱️ Kuncinya adalah kecepatan — dan laporanmu', html:`
   <div class="card"><p>Kamu tidak memutuskan apakah siswa pindah kursus atau level. Tapi laporanmulah yang memulai percakapan itu, dan itu hanya berhasil jika sampai ke orang yang tepat <strong>sejak dini</strong>.</p></div>
   ${stepFlow([
     {ic:'👀', label:'Kamu melihat kesenjangannya di kelas'},
     {ic:'📝', label:'Kamu melaporkannya di BO di hari yang sama'},
     {ic:'👩‍💼', label:'Team Leader-mu dan Client Service meninjau pilihannya'},
     {ic:'🔄', label:'Pelajaran motivasi, pelajaran penyetaraan atau sesi konsultasi, atau kursus Kodland lainnya'}
   ])}
   ${co('co-danger','🚨',`<p><strong>Laporan yang terlambat menutup pintu.</strong> Begitu keluarga sudah memutuskan, sebagian besar pilihan ini sudah hilang. Laporan yang sama, jika ditulis dalam dua minggu pertama, bisa membuat seorang anak tetap di Kodland.</p>`)}
   ${co('co-ok','✅',`<p><strong>Dan selagi tim meninjau pilihannya, kamu masih punya pelajarannya.</strong> Mengajar secara fleksibel dan berpusat pada siswa adalah bagian yang sepenuhnya milikmu — Modul 2 menunjukkan caranya.</p>`)}
  `},
  {t:'🛟 Jika permintaan refund sudah ada', html:`
   <div class="card"><p>Semua hal di atas adalah tentang menangkap tanda ini sejak dini. Tapi mungkin kamu membuka pelatihan ini karena sebuah keluarga <strong>sudah</strong> mengajukan refund. Aturan di bawah ini berlaku apa pun alasannya — baca dulu, lalu gunakan sisa pelatihan ini untuk memahami apa yang menyebabkannya dan apa yang masih bisa kamu lakukan di kelas.</p></div>
   ${co('co-idea','💡',`<p><strong>Permintaannya sendiri dibuat oleh Client Service, bukan oleh kamu</strong> — bagian itu bukan wewenangmu. Yang masih menjadi bagianmu adalah semua yang terjadi di kelas mulai sekarang, dan itu bukan hal kecil.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Jangan membicarakan permintaan refund itu sama sekali</strong> — tidak kepada anak, tidak kepada keluarga — kecuali Client Service secara jelas memintamu menyampaikan sesuatu yang spesifik. Tugasmu sekarang adalah pelajarannya, bukan percakapan itu.</p>`)}
  `},
  {t:'🎯 Pelajaran berikutnya adalah kesempatan untuk mempertahankannya', html:`
   <div class="card"><p>Mungkin kamu tidak punya kesempatan untuk mengubah hal lain. Perlakukan pelajaran berikutnya dengan anak ini sebagai momen penentu.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Beri dia giliran yang sungguhan.</strong> Bukan pertanyaan basa-basi — tapi momen nyata saat dia diperhatikan dan berhasil.`},
     {ic:'🏆', html:`<strong>Ciptakan keberhasilan yang cepat dan terlihat.</strong> Dia harus meninggalkan kelas dengan perasaan mampu, bukan tertinggal.`},
     {ic:'👀', html:`<strong>Perhatian yang spesifik</strong> — buat dia merasa diperhatikan karena sesuatu yang konkret, bukan sekadar dipuji secara umum.`},
     {ic:'🤐', html:`<strong>Jangan menyinggung permintaan refund</strong> — bahkan jika anak itu yang membahasnya, alihkan dengan hangat dan lanjutkan mengajar.`}
   ])}
  `},
  {t:'📮 Laporkan dengan cepat, dan ingat satu kalimat yang aman', html:`
   <div class="card"><p>Kamu bisa tahu bahwa ada permintaan refund dari komentar Client Service di profil anak di BO — tidak ada sistem otomatis yang memberitahumu. Begitu kamu tahu, apa yang kamu lihat di pelajaranmu adalah informasi yang tidak bisa didapatkan Client Service dengan cara lain.</p></div>
   ${numlist([
     'Tinggalkan komentar di BO pada hari yang sama berisi persis apa yang kamu lihat — tanggal dan detail, bukan kesan',
     'Sertakan kata-kata keluarga itu sendiri, apa adanya, jika kamu punya',
     'Libatkan Team Leader-mu pada hari yang sama',
     'Jangan pernah mengonfirmasi bahwa refund sudah disetujui, atau membahas nominal apa pun'
   ])}
   ${co('co-ok','✅',`<p><strong>Kalimat yang selalu aman untuk diucapkan:</strong> <em>“Tim Customer Service akan membantu Anda terkait hal ini.”</em> Di situlah bagianmu dalam percakapan berakhir — Client Service yang akan melanjutkannya.</p>`)}
  `},
  {t:'🌱 Pertahankan setelahnya', html:`
   <div class="card"><p>Entah permintaannya dibatalkan, anak itu tetap di grupmu, atau pindah ke tutor atau format lain, tetap berikan perhatian ekstra selama beberapa pelajaran berikutnya. Upaya mempertahankan yang hanya bertahan satu pelajaran lalu diam-diam kembali seperti biasa sering kali tidak berhasil sama sekali.</p></div>
  `}
 ]
},
{id:'spot', numLabel:'Modul 1', emoji:'🔎', color:'var(--coral)',
 title:'Kenali Kesenjangannya Sejak Dini — dan Laporkan di Hari yang Sama',
 desc:'Tiga bentuk ketidakcocokan, diagnostik singkat untuk pelajaran-pelajaran pertama, cek lampu lalu lintas untuk setiap pelajaran, dan cara melaporkannya di BO.',
 obj:'Mengenali jenis ketidakcocokan yang sedang kamu hadapi, menjalankan diagnostik singkat, membaca tanda-tandanya di setiap pelajaran, dan melaporkan kasusnya di BO di hari yang sama.',
 sections:[
  {t:'🧭 Tiga bentuk ketidakcocokan', html:`
   <div class="card"><p>“Aku nggak suka kursus ini” bisa berarti tiga hal yang berbeda — dan masing-masing butuh langkah yang sedikit berbeda. Belajarlah membedakannya.</p></div>
   ${patternCards([
     {ic:'🎯', title:'Bukan yang aku cari', desc:'“Kukira kita bakal bikin game.” “Bisa nggak kita bikin yang lain?”', note:'Harapannya berbeda dari kursusnya. <strong>Fleksibilitas bisa menjembataninya — dan kursus lain mungkin lebih cocok.</strong>'},
     {ic:'😒', title:'Tidak suka materinya', desc:'Datang tanpa semangat, mengerjakan tugas “karena harus”, bilang topiknya membosankan', note:'Topiknya, atau cara tugasnya dikemas, tidak menarik baginya. <strong>Tawarkan pilihan di dalam tujuan pembelajaran, dan laporkan.</strong>'},
     {ic:'⚖️', title:'Levelnya terasa tidak pas', desc:'Selesai dalam hitungan menit: “Aku sudah tahu ini.” Atau: “Aku nggak ngerti apa-apa.”', note:'Sering dilaporkan sebagai tidak suka. <strong>Sesuaikan sekarang, dan tandai untuk pelajaran penyetaraan.</strong>'}
   ],3)}
  `},
  {t:'🩺 Diagnostik singkat — dua pelajaran pertamamu (M1L1–M1L2)', html:`
   <div class="card"><p>Waktu terbaik untuk menangkap ketidakcocokan adalah <strong>dua pelajaran pertama di Modul 1</strong>. Kesenjangan yang baru terlihat setelah pelajaran 3, tanpa laporan, biasanya sudah terlambat untuk mencegah pembatalan. Tiga pertanyaan dan satu latihan singkat, di pelajaran pertama, hanya butuh kurang dari sepuluh menit.</p></div>
   ${stepIconBlock('🗣️','“Kamu pernah pakai [alat atau bahasa di kursus ini] sebelumnya?”', `<p>Terbuka dan tanpa tekanan. Biarkan dia bercerita, dan dengarkan seberapa banyak yang sebenarnya dia tahu.</p><p>⚠️ <strong>Waspadai:</strong> “Iya, aku sudah tahu semuanya” — atau “Aku nggak tahu sama sekali kamu ngomongin apa.”</p>`)}
   ${stepIconBlock('🌈','“Kamu berharap belajar apa di kursus ini?”', `<p>Menunjukkan kesenjangan antara kursus yang dipilihkan orang tua dan apa yang sebenarnya ingin dilakukan siswa.</p><p>⚠️ <strong>Waspadai:</strong> jawaban yang sama sekali tidak berhubungan dengan kursus yang diikuti.</p>`)}
   ${stepIconBlock('⚖️','“Bagian mana hari ini yang terasa mudah, dan mana yang terasa sulit?”', `<p>Tanyakan setelah latihan pertama. Ini mengukur seberapa nyaman dia sebenarnya dengan levelnya.</p><p>✅ <strong>Ideal:</strong> “bagian pertama mudah, yang kedua sulit” — levelnya sudah pas.<br>⚠️ <strong>Waspadai:</strong> “semuanya mudah” atau “aku nggak ngerti sama sekali.”</p>`)}
   ${stepIconBlock('✏️','Latihan mandiri singkat (5–8 menit)', `<p>Minta siswa menyelesaikan latihan pertama di modul ini sendiri, tanpa bantuan. Perhatikan berapa lama waktunya dan apakah dia bisa memulainya sama sekali.</p><p>✅ <strong>Normal:</strong> butuh sedikit arahan dan selesai dalam waktu yang diharapkan.<br>⚠️ <strong>Waspadai:</strong> langsung selesai, atau tidak bisa memulai sendiri.</p>`)}
   ${co('co-idea','💡',`<p><strong>Sudah lewat pelajaran 2?</strong> Ajukan pertanyaan yang sama minggu ini. Diagnostik ini berlaku kapan pun selama kursus — makin cepat kamu bertanya, makin banyak pilihan yang masih terbuka.</p>`)}
  `},
  {t:'🚥 Terus baca tandanya di setiap pelajaran', html:`
   <div class="card"><p>Setelah pelajaran-pelajaran pertama, lampu lalu lintas sederhana setelah setiap kelas membantumu tetap objektif. Hanya butuh tiga puluh detik.</p></div>
   ${classifyCard('co-ok','🟢','Datang tepat waktu dan siap · bertanya tentang topiknya · bersemangat saat sesuatu berhasil · ingin menunjukkan kemajuannya · ingat pelajaran sebelumnya.','Teruskan. Jaga hubungan tetap hangat, dan terus perhatikan.')}
   ${classifyCard('co-cute','🟡','Sering terdistraksi · menjawab dengan satu kata (“iya”, “nggak”, “nggak tahu”) · mengerjakan latihan hanya karena kewajiban · tidak ingat pelajaran sebelumnya · minta selesai lebih awal.','Tulis catatan setelah pelajaran dan coba perubahan yang fleksibel (Modul 2). <strong>Dua pelajaran kuning berturut-turut → beri tahu Team Leader-mu di minggu yang sama.</strong> Jangan menunggu merah.')}
   ${classifyCard('co-danger','🔴','Menolak ikut serta · terang-terangan bilang tidak suka · orang tua menulis bahwa anaknya tidak mau datang · dua pelajaran kuning atau lebih tanpa perbaikan · menangis, frustrasi, atau menjadi sulit diatur.','<strong>Laporkan di BO di hari yang sama</strong> dan beri tahu Team Leader-mu.')}
   <div class="card"><h4>💬 Empat pertanyaan cek — ajukan satu setiap 2–3 pelajaran</h4></div>
   ${iconGrid([
     {ic:'🌟', html:`<strong>“Bagian paling seru dari kelas hari ini apa?”</strong> Jika dia tidak bisa menyebutkan apa pun, itu sebuah tanda.`},
     {ic:'🔧', html:`<strong>“Ada nggak yang ingin kamu ubah dari pelajaran kita?”</strong> Pertanyaan terbuka yang memberikan informasi berguna tanpa tekanan.`},
     {ic:'🔢', html:`<strong>“Dari 1 sampai 5, seberapa sulit kursus ini buatmu?”</strong> 1–2 berarti terlalu mudah, 4–5 terlalu sulit. Keduanya tanda ketidakcocokan.`},
     {ic:'🚀', html:`<strong>“Kamu ingin bisa membuat atau melakukan apa setelah menyelesaikan kursus ini?”</strong> Jika jawabannya tidak berhubungan dengan kursusnya, ada kesenjangan harapan.`}
   ])}
  `},
  {t:'📝 Laporkan di BO — di hari yang sama', html:`
   <div class="card"><p>Laporan yang ternyata tidak diperlukan tidak merugikan apa pun. Laporan yang tidak dibuat bisa membuat kita kehilangan seorang siswa. <strong>Jika kamu tidak yakin apakah ini benar-benar ketidakcocokan, tetap laporkan</strong> — Team Leader-mu memahami kurikulum dan level yang tersedia; kamu tidak perlu memahaminya.</p></div>
   ${timeline([
     {ic:'⏱️', label:'Tepat setelah pelajaran', items:[
       '<strong>Tulis 2–3 baris:</strong> tanda apa yang kamu lihat, di momen apa, dan apa yang dikatakan siswa — dengan kata-katanya sendiri. Detail cepat terlupakan.'
     ]},
     {ic:'📝', label:'Di hari yang sama', items:[
       '<strong>Laporkan di BO:</strong> profil siswa → Progres → Evaluasi Tutor → Evaluasi Siswa. Pilih Jenis Masalah (atau <em>Lainnya</em>), pilih grup, lalu tempelkan catatanmu.',
       '<strong>Beri tahu Team Leader-mu</strong> bahwa kamu sudah melaporkannya.'
     ]},
     {ic:'🔁', label:'Di pelajaran-pelajaran berikutnya', items:[
       '<strong>Terus sesuaikan</strong> (Modul 2) dan tambahkan hal baru ke kasusnya. Laporkan sekali, lalu tindak lanjuti.'
     ]}
   ])}
   <div class="card" style="background:var(--surface2)"><h4>📨 Seperti apa laporan yang berguna — salin dan lengkapi</h4>
   <p style="font-size:13.5px;line-height:1.75"><strong>Siswa:</strong> [nama] · <strong>Kursus / level:</strong> [mis. Ilustrasi, level 1] · <strong>Pelajaran:</strong> [M1L2 — tanggal]<br>
   <strong>Yang saya amati:</strong> [2–3 baris: tandanya, momennya, kata-kata siswa sendiri]<br>
   <strong>Yang menurut saya menjadi penyebabnya:</strong> ☐ tidak sesuai harapan &nbsp; ☐ tidak suka materinya &nbsp; ☐ levelnya terasa tidak pas<br>
   <strong>Yang sudah saya coba di kelas:</strong> [mis. membiarkannya memilih tema karakter]<br>
   <strong>Yang bisa membantu — rekomendasi saya, keputusan Anda:</strong> ☐ pelajaran motivasi &nbsp; ☐ pelajaran penyetaraan atau sesi konsultasi &nbsp; ☐ kursus lain</p></div>
   <div class="sim-embed"><div class="sim-embed-inner"><span class="sim-embed-tag">🖥️ BO — Laporkan kasus</span><iframe src="Simulacion_BO_Evaluate.html" title="BO — Laporkan kasus" loading="lazy"></iframe></div></div>
   ${co('co-star','🌱',`<p><strong>Mengapa ini berhasil:</strong> Team Leader-mu dan Client Service hanya bisa bertindak berdasarkan apa yang mereka ketahui. Laporan adalah satu-satunya langkah dalam seluruh proses ini yang hanya bisa kamu lakukan — dan langkah inilah yang menentukan berapa banyak pilihan yang masih tersisa.</p>`)}
  `},
  {t:'💬 Apa yang bisa kamu sampaikan kepada keluarga — dan apa yang menunggu Team Leader-mu', html:`
   <div class="card"><p>Kamu selalu boleh membicarakan proses belajar anak. Kamu tidak pernah menawarkan, menjanjikan, atau menolak perubahan kursus, level, atau format — itu datang dari Team Leader-mu dan Client Service.</p></div>
   ${doavoid(
     ['Sampaikan apa yang kamu perhatikan tentang proses belajarnya: <em>“Dia sangat antusias saat menggambar karakter — saya memasukkan hal itu ke dalam pelajaran kami.”</em>','Sampaikan bahwa kamu sudah meneruskannya ke tim dan akan menghubungi mereka kembali','Tanyakan apa yang mereka harapkan didapat anaknya dari kursus ini','Ucapkan terima kasih karena sudah memberi tahu — dengan hangat, dan di hari yang sama'],
     ['Menyarankan kursus lain, perubahan level, atau refund sendiri','Membela kursusnya: <em>“nanti makin seru kok”</em>','Menjanjikan pelajaran atau perubahan','Mengatakan <em>“dia tidak suka kursus ini”</em> — terdengar seperti kegagalan']
   )}
   <div class="card" style="background:var(--surface2)"><h4>📨 Setelah Team Leader-mu mengonfirmasi rekomendasinya — sampaikan sebagai sebuah peluang</h4>
   <p style="font-size:13.5px;line-height:1.75"><em>“Halo Bapak/Ibu [nama orang tua], saya [namamu], tutor [siswa]. Saya melihat [siswa] punya potensi yang besar, tetapi di pelajaran-pelajaran pertama saya merasa fokus kursus ini belum sepenuhnya sesuai dengan yang dia bayangkan — [mis. dia menyebutkan ingin membuat game, bukan hanya menulis kode]. Saya ingin [siswa] menikmati dan mendapatkan hasil terbaik dari waktunya di Kodland, jadi bersama tim kami, kami ingin menjajaki apakah [kursus lain] bisa lebih cocok untuknya. Apakah Bapak/Ibu punya waktu beberapa menit minggu ini agar saya bisa menjelaskan lebih lanjut?”</em></p></div>
   ${co('co-idea','💡',`<p><strong>Katakan</strong> “kami menemukan sesuatu yang mungkin akan lebih dia sukai” — <strong>jangan pernah</strong> “dia tidak suka kursus ini.”</p>`)}
  `}
 ],
 ix:{
  title:'Kenali, sebutkan, laporkan',
  instr:'Kelompokkan kutipannya dan pilih langkah terbaik. 70% untuk membuka modul berikutnya.',
  items:[
   {type:'sort', prompt:'Bentuk ketidakcocokan apa ini?', card:`“Kukira kita bakal bikin game, bukan cuma ngetik kode.”`, zones:[{label:'🎯 Bukan yang aku cari', fb:'Benar — harapannya berbeda dari kursusnya. Fleksibilitas bisa menjembatani sebagian kesenjangannya, dan laporan menjaga pilihan lain tetap terbuka.'},{label:'😒 Tidak suka materinya', fb:'Belum tepat — siswa ini punya hal spesifik yang dia harapkan untuk dilakukan. Itu kesenjangan “bukan yang aku cari”.'},{label:'⚖️ Levelnya terasa tidak pas', fb:'Belum tepat — tidak ada yang berkaitan dengan tingkat kesulitan di sini. Ini tentang apa yang dia harapkan untuk dibuat.'}], correctZone:0},
   {type:'sort', prompt:'Bentuk ketidakcocokan apa ini?', card:`“Semuanya gampang banget — aku sudah tahu ini.”`, zones:[{label:'🎯 Bukan yang aku cari', fb:'Belum tepat — siswa ini membicarakan tingkat kesulitan, bukan topiknya.'},{label:'😒 Tidak suka materinya', fb:'Belum tepat — masalahnya adalah level, meskipun terdengar seperti bosan dengan materinya.'},{label:'⚖️ Levelnya terasa tidak pas', fb:'Benar — kelihatannya seperti tidak suka, tapi sebenarnya levelnya. Sesuaikan sekarang, dan tandai untuk pelajaran penyetaraan.'}], correctZone:2},
   {type:'sort', prompt:'Bentuk ketidakcocokan apa ini?', card:`Di setiap pelajaran dia mengerjakan latihan hanya karena harus, menjawab “nggak tahu”, dan minta selesai lebih awal.`, zones:[{label:'🎯 Bukan yang aku cari', fb:'Belum tepat — dia tidak menyebutkan apa yang dia harapkan. Polanya menunjukkan minat yang rendah pada materinya sendiri.'},{label:'😒 Tidak suka materinya', fb:'Benar — materinya, atau cara materinya dikemas, tidak menarik baginya. Tawarkan pilihan di dalam tujuan pembelajaran dan laporkan.'},{label:'⚖️ Levelnya terasa tidak pas', fb:'Belum tepat — tidak ada yang menunjukkan masalah tingkat kesulitan; tandanya adalah minat yang rendah.'}], correctZone:1},
   {type:'choice', prompt:`Saat diagnostik kamu bertanya “Kamu berharap belajar apa?” dan siswa menjawab: “Menggambar anime — bukan ini.” Apa langkah terbaik berikutnya?`, opts:[`Menjelaskan bahwa anime ada di bagian akhir kursus lalu melanjutkan persis sesuai rencana`,`Memasukkan minatnya ke dalam pelajaran hari ini sebisa mungkin, dan melaporkannya di BO di hari yang sama`,`Menunggu dua pelajaran lagi untuk melihat apakah perasaan itu hilang`], correct:1, fb:`Sesuaikan apa yang bisa kamu sesuaikan di kelas saat itu juga, dan laporkan di hari yang sama supaya tim masih punya semua pilihannya. Menunggu, atau membela rencana, hanya menghabiskan waktu yang berharga.`},
   {type:'sort', prompt:'Di warna lampu lalu lintas mana gambaran ini berada?', card:`Dua pelajaran berturut-turut: jawaban satu kata dan minta selesai lebih awal.`, zones:[{label:'🟢 Hijau', fb:'Belum tepat — dua pelajaran dengan jawaban satu kata dan ingin pulang lebih awal bukanlah “semuanya baik-baik saja”.'},{label:'🟡 Kuning', fb:'Benar — catat, coba perubahan yang fleksibel, dan beri tahu Team Leader-mu di minggu yang sama. Jangan menunggu merah.'},{label:'🔴 Merah', fb:'Belum — merah berarti menolak, terang-terangan tidak suka, atau orang tua yang menulis pesan. Tapi kuning dua kali berturut-turut sudah berarti: beri tahu Team Leader-mu minggu ini.'}], correctZone:1},
  ]
 }
},
{id:'flex', numLabel:'Modul 2', emoji:'🎛️', color:'var(--coral)',
 title:'Sesuaikan Kursus dengan Siswa — Fleksibilitas yang Tetap Menjaga Tujuan',
 desc:'Cara menyesuaikan pelajaran dengan apa yang benar-benar ingin dipelajari siswa tanpa kehilangan tujuan pembelajaran, cara menawarkan pilihan sesuai usia, dan kapan Team Leader-mu harus turun tangan.',
 obj:'Menyesuaikan pelajaran dengan minat siswa sambil tetap menjaga tujuan pembelajaran, menawarkan pilihan yang sesuai usianya, dan mengetahui kapan fleksibilitas saja tidak cukup dan Team Leader-mu harus turun tangan.',
 sections:[
  {t:'🎯 Aturannya: jaga tujuannya, sesuaikan jalannya', html:`
   <div class="card"><p>Kamu tidak harus memilih antara “ikuti panduan” dan “biarkan mereka melakukan apa saja”. Panduan memberi tahumu <strong>untuk apa</strong> pelajaran itu. Hampir semua hal lainnya bisa disesuaikan.</p></div>
   <div class="two-col">
     <div class="card"><h4>🔒 Tetap sama</h4><ul><li>Tujuan pembelajaran dan keterampilan di pelajaran itu</li><li>Hasil yang diharapkan di panduan</li><li>Struktur pelajaran (pemanasan, latihan, penutup)</li></ul></div>
     <div class="card"><h4>🎛️ Bisa disesuaikan</h4><ul><li>Tema, karakter, dan ceritanya</li><li>Topik proyeknya</li><li>Urutan langkahnya</li><li>Contoh yang kamu gunakan, dan tingkat kesulitan tugasnya</li></ul></div>
   </div>
   ${co('co-idea','🧠',`<p><strong>Mengapa ini berhasil.</strong> Dalam model ARCS yang terkenal dari John Keller (1987), siswa yang termotivasi membutuhkan empat hal: <strong>A</strong>ttention (perhatian), <strong>R</strong>elevance (relevansi), <strong>C</strong>onfidence (kepercayaan diri), dan <strong>S</strong>atisfaction (kepuasan). Siswa yang bilang “ini bukan yang aku mau” kehilangan <em>Relevansi</em> — dan menghubungkan pelajaran dengan hal yang sudah dia pedulikan adalah cara yang tepat untuk mengembalikannya.</p>`)}
  `},
  {t:'🎨 Seperti ini contohnya — lima contoh nyata', html:`
   ${stepIconBlock('🎨','Ilustrasi — “Aku cuma mau gambar anime”', `<p><strong>Tujuannya tetap:</strong> cahaya, proporsi, warna, komposisi.<br><strong>Sentuhan darinya:</strong> setiap latihan menggunakan karakter anime — memberi bayangan pada wajah anime, membandingkan proporsi karakter chibi dan karakter pahlawan, membuat palet warna untuk karakter <em>miliknya</em>.</p><p><em>“Keren banget — yuk, jadikan karakter hari ini milikmu. Kita akan belajar bagaimana cahaya jatuh di wajah karaktermu.”</em></p>`)}
   ${stepIconBlock('🐍','Python — “Aku mau bikin game, bukan kode yang membosankan”', `<p><strong>Tujuannya tetap:</strong> variabel, perulangan, percabangan.<br><strong>Sentuhan darinya:</strong> kuis mini atau game tentang serial atau game favoritnya, menggunakan konsep yang persis sama.</p><p><em>“Game itu sebenarnya cuma perulangan dan percabangan dengan kostum yang lebih keren. Mau bikin yang mana?”</em></p>`)}
   ${stepIconBlock('📖','Kursus apa pun — “Aku nggak mau ikutin ceritanya”', `<p><strong>Tujuannya tetap:</strong> keterampilan di pelajaran itu.<br><strong>Sentuhan darinya:</strong> lewati alur ceritanya dan latih keterampilan yang sama dengan idenya sendiri, selama dia tetap mempelajari topik inti pelajaran.</p><p><em>“Lewati saja ceritanya — kamu mau bikin apa dengan keterampilan ini?”</em></p>`)}
   ${stepIconBlock('🧊','3D / desain — “Aku mau bikin model benda pilihanku sendiri”', `<p><strong>Tujuannya tetap:</strong> alat dan tekniknya.<br><strong>Sentuhan darinya:</strong> dia memilih sendiri benda yang akan dipakai untuk berlatih.</p><p><em>“Tunjukkan benda yang ingin banget kamu punya di kamarmu — kita buat pakai teknik hari ini.”</em></p>`)}
   ${stepIconBlock('🌐','Web — “Aku lebih suka bikin halaman tentang topik pilihanku”', `<p><strong>Tujuannya tetap:</strong> struktur, tata letak, tautan.<br><strong>Sentuhan darinya:</strong> halaman tentang klub sepak bola, serial, atau hobinya.</p><p><em>“Pilih topik yang bisa kamu bahas selama satu jam — itulah halamanmu.”</em></p>`)}
  `},
  {t:'🎛️ Tawarkan menu, bukan pintu yang terbuka lebar', html:`
   <div class="card"><p>“Kamu mau bikin apa?” terlalu terbuka — sering kali jawabannya “nggak tahu”. Berikan <strong>dua atau tiga pilihan yang semuanya memenuhi tujuan pembelajaran</strong>, dan biarkan siswa memilih. Pilihan kecil memberi rasa memiliki; menu yang terbatas menjaga pelajaran tetap di jalurnya. Cara menawarkannya tergantung usia:</p></div>
   ${dimTabs([
     {ic:'🧒', title:'Usia 6–8',
      intro:'Anak-anak kecil memilih dengan seluruh imajinasinya. Berikan pilihan yang konkret dan menyenangkan — dan jangan pernah lebih dari dua atau tiga.',
      tips:[
       {ic:'🃏', html:`<strong>Pilih kartu.</strong> <em>“Hari ini kita bisa bikin naga, robot, atau kucing. Kamu pilih yang mana?”</em>`},
       {ic:'🏷️', html:`<strong>Biarkan dia memberi nama dan memilikinya.</strong> <em>“Karaktermu namanya siapa?”</em> — lalu gunakan nama itu saat kamu menjelaskan.`},
       {ic:'✅', html:`<strong>Setujui temanya, pertahankan keterampilannya.</strong> <em>“Boleh, naganya bisa punya bayangan — bayangan adalah rahasia hari ini.”</em>`},
       {ic:'🎉', html:`<strong>Rayakan pilihannya.</strong> Saat idenya muncul di layar, saat itulah dia merasa pelajaran ini miliknya.`}
      ]},
     {ic:'🧑', title:'Usia 9–11',
      intro:'Mereka ingin ikut menentukan apa yang mereka buat, dan ingin mengenali hal-hal dari dunia mereka sendiri.',
      tips:[
       {ic:'🧩', html:`<strong>Tema plus misi.</strong> <em>“Pilih temanya — luar angkasa, sepak bola, atau game favoritmu — dan misinya tetap sama: pakai teknik hari ini.”</em>`},
       {ic:'🔢', html:`<strong>Rating cepat.</strong> <em>“Dari 1 sampai 5, seberapa suka kamu dengan tema ini? Apa yang bikin jadi 5?”</em>`},
       {ic:'🌟', html:`<strong>Level bonus untuk idenya sendiri.</strong> Selesaikan tugas inti dulu, lalu dia menambahkan sesuatu dari idenya sendiri.`},
       {ic:'📺', html:`<strong>Gunakan hal yang mereka kenal.</strong> Sebut game atau serial yang mereka ceritakan — ini menunjukkan bahwa kamu mendengarkan.`}
      ]},
     {ic:'🧑‍🎓', title:'Usia 12+',
      intro:'Siswa yang lebih besar menginginkan relevansi dan rasa hormat. Perlakukan mereka sebagai orang yang mampu, dan bernegosiasilah.',
      tips:[
       {ic:'🤝', html:`<strong>Negosiasikan arahannya.</strong> <em>“Proyek seperti apa yang menurutmu layak dikerjakan? Yuk, cari versi yang tetap mengajarkan keterampilan hari ini dan jadi milikmu.”</em>`},
       {ic:'🌍', html:`<strong>Tunjukkan di mana keterampilan itu dipakai</strong> — di game, aplikasi, atau desain yang sudah mereka sukai.`},
       {ic:'⚖️', html:`<strong>Jujur soal batasannya.</strong> <em>“Itu di luar kursus ini — aku akan tanya timku apa yang bisa kita lakukan. Untuk hari ini, yuk kita pakai di sini dulu.”</em>`},
       {ic:'📣', html:`<strong>Biarkan mereka menunjukkan hasil kerjanya</strong> kepada grup; teman sebaya sangat berarti di usia ini.`}
      ]}
   ],'✅ Itu dia ketiga kelompok usia. Berikutnya: saat fleksibilitas saja tidak cukup.')}
  `},
  {t:'🧭 Saat fleksibilitas saja tidak cukup — Team Leader-mu dan pilihan-pilihannya', html:`
   <div class="card"><p>Beberapa kesenjangan terlalu lebar untuk dijembatani di dalam pelajaran. Itu bukan kegagalan — justru itulah alasan laporanmu di hari yang sama sangat penting. Situasi-situasi berikut ini perlu disampaikan ke Team Leader-mu:</p></div>
   ${iconGrid([
     {ic:'🔀', html:`<strong>Siswa menginginkan keterampilan yang sama sekali berbeda</strong> — misalnya, game 3D di kursus menggambar.`},
     {ic:'📉', html:`<strong>Fleksibilitasmu membantu untuk satu pelajaran, tapi minatnya tidak kembali</strong> selama dua atau tiga pelajaran.`},
     {ic:'📢', html:`<strong>Orang tua bilang kursusnya bukan yang mereka beli.</strong> Akui pesannya, sampaikan ke Team Leader-mu dan Client Service sebelum membalas, dan tulis kata-kata keluarga apa adanya di BO.`},
     {ic:'⚖️', html:`<strong>Levelnya jelas tidak pas.</strong> Sesuaikan sekarang dan laporkan, supaya pelajaran penyetaraan bisa dipertimbangkan.`}
   ])}
   <div class="card"><h4>🎁 Apa yang bisa diatur oleh Team Leader-mu dan Client Service — kamu merekomendasikan, mereka memutuskan</h4></div>
   ${iconGrid([
     {ic:'💬', html:`<strong>Pelajaran motivasi.</strong> Percakapan atau pelajaran yang dirancang untuk menghubungkan kembali siswa dengan alasan dia bergabung.`},
     {ic:'🎚️', html:`<strong>Pelajaran penyetaraan atau sesi konsultasi.</strong> Memeriksa apakah kursus dan levelnya benar-benar cocok — dan apa yang akan lebih cocok.`},
     {ic:'🔄', html:`<strong>Kursus Kodland lainnya.</strong> Sering kali menjadi penyelamat terbaik: siswa melakukan hal yang dia sukai, dan tetap di Kodland.`}
   ])}
   ${co('co-danger','⛔',`<p><strong>Kamu merekomendasikan di BO — kamu tidak pernah berjanji.</strong> Bukan “aku akan memindahkanmu ke kursus lain”, dan bukan juga “itu tidak mungkin”. Keduanya adalah keputusan yang bukan wewenangmu.</p>`)}
   <div class="card" style="background:var(--surface2)"><h4>🗣️ Apa yang bisa kamu katakan kepada siswa</h4>
   <p style="font-size:13.5px;line-height:1.75"><em>“Aku senang banget kamu cerita apa yang sebenarnya ingin kamu buat. Untuk hari ini, yuk kita pakai idemu di pelajaran. Dan aku akan cek ke timku apa lagi yang bisa kita lakukan untukmu.”</em></p></div>
   ${doavoid(
     ['Tanyakan apa yang ingin dia buat di awal pelajaran berikutnya','Tunjukkan hasil kerjanya kepada grup','Rayakan saat idenya muncul di pelajaran'],
     ['Mengatakan <em>“itu tidak ada di rencana”</em>','Membela kursusnya alih-alih mendengarkan','Membiarkan “idenya” menggantikan tujuan pelajaran']
   )}
  `}
 ],
 ix:{
  title:'Sesuaikan — tanpa kehilangan tujuannya',
  instr:'Pilih langkah terbaik atau kelompokkan setiap situasi. 70% untuk membuka checklist akhir.',
  items:[
   {type:'choice', prompt:`Seorang siswa di kursus Ilustrasi bilang: “Aku cuma mau gambar anime.” Apa respons terbaik?`, opts:[`Memberi tahu bahwa anime bukan bagian dari kursus`,`Membiarkannya menggambar karakter anime di latihan sambil mengajarkan cahaya, proporsi, dan warna — dan melaporkannya di BO`,`Membiarkannya menggambar apa saja dan melewatkan tujuan pelajaran`], correct:1, fb:`Tujuannya (cahaya, proporsi, warna) tetap; karakternya miliknya. Lalu laporkan di BO supaya tim bisa mempertimbangkan pilihan lain. Menolak membuat kita kehilangan siswa; mengabaikan tujuan membuat kita kehilangan pembelajarannya.`},
   {type:'sort', prompt:'Siapa yang menangani ini?', card:`Membiarkan siswa memilih tema proyeknya.`, zones:[{label:'✅ Aku bisa melakukannya sendiri', fb:'Benar — memilih tema di dalam tujuan pembelajaran sepenuhnya wewenangmu, dan tidak perlu izin.'},{label:'🧭 Perlu Team Leader-ku', fb:'Belum tepat — pilihan tema yang tetap menjaga tujuan pembelajaran adalah bagian dari caramu mengajar.'}], correctZone:0},
   {type:'sort', prompt:'Siapa yang menangani ini?', card:`Siswa minta pindah ke kursus yang sama sekali berbeda.`, zones:[{label:'✅ Aku bisa melakukannya sendiri', fb:'Belum tepat — perpindahan kursus tidak pernah menjadi wewenangmu untuk dijanjikan atau ditolak.'},{label:'🧭 Perlu Team Leader-ku', fb:'Benar — laporkan di BO di hari yang sama dan beri tahu Team Leader-mu. Kamu merekomendasikan; mereka dan Client Service yang memutuskan.'}], correctZone:1},
   {type:'sort', prompt:'Siapa yang menangani ini?', card:`Orang tua menulis: “Ini bukan kursus yang kami bayar.”`, zones:[{label:'✅ Aku bisa melakukannya sendiri', fb:'Belum tepat — ini pesan paling sensitif yang bisa kamu terima. Menjawab sendiri bisa membenarkan keluhan atau mengisyaratkan sesuatu yang tidak bisa kita penuhi.'},{label:'🧭 Perlu Team Leader-ku', fb:'Benar — konfirmasi bahwa pesannya sudah diterima, sampaikan ke Team Leader-mu dan Client Service sebelum membalas, dan catat kata-kata keluarga di BO.'}], correctZone:1},
   {type:'choice', prompt:`Seorang anak berusia 7 tahun bilang pelajarannya membosankan. Tawaran mana yang paling pas?`, opts:[`“Yuk, kita rancang seluruh proyeknya bersama — apa lima poin arahanmu?”`,`“Kamu mau karaktermu jadi apa — naga, robot, atau kucing?” lalu gunakan karakter itu di tugas hari ini`,`“Memang begini cara kursusnya — nanti kamu juga suka.”`], correct:1, fb:`Anak-anak kecil paling bisa memilih di antara dua atau tiga pilihan yang konkret dan menyenangkan. Arahan terbuka cocok untuk siswa yang lebih besar, dan “nanti kamu juga suka” membela kursusnya alih-alih mendengarkan.`},
   {type:'choice', prompt:`Apa arti “jaga tujuannya, sesuaikan jalannya”?`, opts:[`Melewati tugas yang tidak disukai siswa`,`Hanya mengikuti minat siswa`,`Mengubah tema atau tugasnya, tapi tetap menjaga keterampilan yang menjadi tujuan pelajaran`], correct:2, fb:`Tujuan dan hasil di panduan tetap; tema, karakter, topik, dan urutan bisa disesuaikan.`},
   {type:'choice', prompt:`Seorang siswa bertanya: “Boleh nggak aku ikut kursus lain saja?” Apa yang kamu katakan?`, opts:[`“Boleh, nanti aku yang atur.”`,`“Nggak bisa, kamu sudah mulai kursus yang ini.”`,`“Aku senang kamu cerita ke aku. Aku akan cek ke timku apa yang bisa kita lakukan — dan sementara itu, yuk kita pakai idemu di pelajaran hari ini.”`], correct:2, fb:`Menjanjikan maupun menolak bukan wewenangmu — tapi mendengarkan, memakai idenya sekarang, dan memulai pembicaraan internal adalah tugasmu.`},
   {type:'sort', prompt:'Apakah ini tetap menjaga tujuan pembelajaran?', card:`Tujuan pelajarannya adalah teknik animasi, jadi siswa menganimasikan benda apa pun yang dia pilih.`, zones:[{label:'✅ Tetap menjaga tujuan', fb:'Benar — pilihannya miliknya, tekniknya tetap dilatih.'},{label:'⛔ Kehilangan tujuan', fb:'Belum tepat — dia tetap melatih teknik yang menjadi tujuan pelajaran.'}], correctZone:0}
  ]
 }
},
{id:'checklist', numLabel:'Checklist Akhir', emoji:'✅', color:'var(--coral)',
 title:'Checklist Akhir',
 desc:'Tidak ada kuis di sini — hanya hal-hal penting dari mini-training ini, sebelum kamu menutupnya.',
 obj:'Tinjau checklist di bawah ini. Modul ini tidak dinilai — baca, lalu selesaikan mini-training-nya.',
 sections:[
  {t:'🛟 Jika permintaan refund sudah ada', html:`
   ${numlist([
     'Saya meninggalkan komentar di BO di hari yang sama saat saya mengetahui permintaan itu, dan melibatkan Team Leader saya',
     'Pelajaran berikutnya dengan siswa ini adalah upaya nyata untuk mempertahankannya — giliran yang sungguhan, keberhasilan yang terlihat, perhatian yang spesifik, tanpa menyinggung permintaan refund',
     'Saya tidak pernah mengonfirmasi persetujuan atau membahas nominal — saya menggunakan satu kalimat yang aman dan menyerahkan sisanya kepada Client Service'
   ])}
  `},
  {t:'🌱 Di setiap pelajaran', html:`
   ${numlist([
     'Di dua pelajaran pertama saya menjalankan diagnostik singkat: apa yang mereka ketahui, apa yang mereka harapkan, apa yang terasa mudah atau sulit, dan satu latihan mandiri singkat',
     'Setelah setiap pelajaran saya membacanya sebagai hijau, kuning, atau merah — dan setelah dua pelajaran kuning berturut-turut saya memberi tahu Team Leader saya di minggu yang sama',
     'Setiap 2–3 pelajaran saya mengajukan pertanyaan cek: bagian paling seru, apa yang ingin mereka ubah, seberapa sulit dari 1 sampai 5, apa yang ingin mereka buat',
     'Tepat setelah pelajaran saya menulis 2–3 baris: tandanya, momennya, dan kata-kata siswa sendiri',
     'Saya melaporkan kemungkinan ketidakcocokan di BO di hari yang sama — bahkan saat saya tidak yakin; laporan yang tidak diperlukan tidak merugikan apa pun',
     'Saya menjaga tujuan pembelajaran tetap sama dan menyesuaikan tema, proyek, karakter, atau urutan langkahnya',
     'Saya menawarkan dua atau tiga pilihan yang semuanya memenuhi tujuan pembelajaran, dengan cara yang sesuai usia anak',
     'Saya tidak pernah menjanjikan perpindahan kursus, level, atau pelajaran tambahan — saya merekomendasikan di BO dan bilang “aku akan cek ke timku”',
     'Saya tidak membela kursusnya atau bilang “nanti makin seru” — saya mendengarkan dulu, lalu menyesuaikan',
     'Saat orang tua bilang kursusnya tidak sesuai harapan, saya mengakui pesannya, menyampaikannya ke Team Leader saya dan Client Service sebelum membalas, dan mencatat kata-kata mereka di BO',
     'Saya merayakan saat ide siswa sendiri muncul di pelajaran, dan saya menunjukkan hasil kerjanya kepada grup'
   ])}
  `},
  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>Itulah keseluruhan mini-training ini.</strong> Jika sudah siap, lanjutkan — lalu selesaikan DST di LMS untuk menuntaskan tugasnya.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
