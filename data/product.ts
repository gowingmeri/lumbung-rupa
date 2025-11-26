export interface Product {
  id: string;
  title: string;
  kategori: 
    | "Batik" 
    | "Relief" 
    | "Aksara" 
    | "Ornamen" 
    | "Wayang"
    | "Texture"
    | "Generatif";

  imageUrl: string[];
  thumbnail: string;
  description: string;
  asalDaerah: string;
  sejarahRingkas: string;
  maknaFilosofis: string;
  jenisLisensi: "personal" | "commercial" | "enterprise";
  price: number;

  creator: string;     
  mitraId: string;          
  tags: string[];

  resolution?: string;
  isGenerative?: boolean;
  metadata?: Record<string, any>;
  golongan?: string;
}

export const products: Product[] = [
  {
    id: "ASSET-001",
    title: "Batik Bali",
    kategori: "Batik",
    thumbnail: "/assets/batik/batik-bali/2.jpg",
    imageUrl: [
      "/assets/batik/batik-bali/2.jpg",
      "/assets/batik/batik-bali/41.jpg",
      "/assets/batik/batik-bali/44.jpg",
      "/assets/batik/batik-bali/5.jpg"
    ],
    description: "Koleksi Batik Bali autentik dari LumbungRupa.",
    asalDaerah: "Buleleng dan Gianyar, Pulau Bali",
    sejarahRingkas: "Batik Bali berkembang pada abad ke-19 ketika seniman lokal memadukan ikonografi Hindu-Buddha dengan warna pesisir untuk memenuhi kebutuhan upacara dan wisata.",
    maknaFilosofis: "Ragam flora-fauna Bali mengingatkan hubungan manusia dengan alam sakral dan harmoni sekala-niskala.",
    jenisLisensi: "commercial",
    price: 200000,
    creator: "Batik Bali Studio",
    mitraId: "MITRA-001",
    tags: ["batik", "bali"],
    resolution: "4096x4096px"
  },
  {
    id: "ASSET-002",
    title: "Batik Betawi",
    kategori: "Batik",
    thumbnail: "/assets/batik/batik-betawi/12.jpg",
    imageUrl: [
      "/assets/batik/batik-betawi/12.jpg",
      "/assets/batik/batik-betawi/33.jpg",
      "/assets/batik/batik-betawi/45.jpg",
      "/assets/batik/batik-betawi/46.jpg"
    ],
    description: "Motif Batik Betawi dengan warna pesisir yang cerah.",
    asalDaerah: "Jakarta (Batavia), pesisir utara Jawa",
    sejarahRingkas: "Berkembang di pesisir Batavia pada abad ke-19. Batik ini sangat dipengaruhi oleh multikulturalisme Jakarta sebagai pelabuhan dagang: pengaruh Tiongkok (warna merah/kuning), Arab (geometris), dan Belanda (motif buketan). Sempat meredup, namun bangkit kembali dengan motif ikonik seperti Ondel-ondel dan Pucuk Rebung.",
    maknaFilosofis: "Warna-warna cerah dan kontras (merah, hijau, kuning) melambangkan karakter masyarakat Betawi yang blakasuta (terbuka, jujur, dan spontan). Motif Pucuk Rebung di bagian tumpal melambangkan hubungan manusia dengan Tuhan dan keseimbangan alam.",
    jenisLisensi: "commercial",
    price: 210000,
    creator: "Batik Betawi Studio",
    mitraId: "MITRA-002",
    tags: ["batik", "betawi"],
    resolution: "4096x4096px"
  },
  {
    id: "ASSET-003",
    title: "Batik Celup",
    kategori: "Batik",
    thumbnail: "/assets/batik/batik-celup/10.jpg",
    imageUrl: [
      "/assets/batik/batik-celup/10.jpg",
      "/assets/batik/batik-celup/15.jpg",
      "/assets/batik/batik-celup/45.jpg",
      "/assets/batik/batik-celup/5.jpg"
    ],
    description: "Teknik batik ikat-celup dengan pola spontan khas Nusantara.",
    asalDaerah: "Palembang, Kalimantan Selatan, dan Jawa Tengah",
    sejarahRingkas: "Teknik ini dikenal secara global sebagai Tie-Dye atau Shibori, namun di Indonesia memiliki akar sejarah tua. Tidak menggunakan canting (lilin tulis), melainkan teknik ikat dan celup. Di Kalimantan, teknik ini berkembang menjadi kain Sasirangan yang konon digunakan sebagai media penyembuhan pada masa lampau.",
    maknaFilosofis: "Ketidakterdugaan dan fluiditas kehidupan. Karena proses pengikatan menghasilkan pola yang tidak pernah 100% sama, motif ini mengajarkan bahwa keindahan muncul dari proses yang alami dan organik, serta pentingnya ikatan persaudaraan (simbol ikatan benang).",
    jenisLisensi: "commercial",
    price: 220000,
    creator: "Batik Celup Studio",
    mitraId: "MITRA-003",
    tags: ["batik", "celup"],
    resolution: "4096x4096px"
  },
  {
    id: "ASSET-004",
    title: "Batik Cendrawasih",
    kategori: "Batik",
    thumbnail: "/assets/batik/batik-cendrawasih/1.jpg",
    imageUrl: [
      "/assets/batik/batik-cendrawasih/1.jpg",
      "/assets/batik/batik-cendrawasih/17.jpg",
      "/assets/batik/batik-cendrawasih/24.jpg",
      "/assets/batik/batik-cendrawasih/5.jpg"
    ],
    description: "Koleksi Batik Cendrawasih autentik dari LumbungRupa.",
    asalDaerah: "Papua ",
    sejarahRingkas: 
    'Merupakan pengembangan batik kontemporer yang bertujuan mengangkat identitas budaya Papua. Meskipun teknik membatik berasal dari Jawa, motif ini murni representasi kekayaan alam Papua. Burung Cendrawasih ("Bird of Paradise") dipilih karena statusnya sebagai ikon fauna kebanggaan.',
    maknaFilosofis: "Keindahan, keanggunan, dan kebebasan. Burung Cendrawasih dipercaya sebagai burung surga yang menghubungkan bumi dan langit. Mengenakan motif ini melambangkan penghormatan terhadap alam Papua yang lestari dan semangat kebebasan yang tinggi.",
    jenisLisensi: "commercial",
    price: 230000,
    creator: "Batik Cendrawasih Studio",
    mitraId: "MITRA-004",
    tags: ["batik", "cendrawasih"],
    resolution: "4096x4096px"
  },
  {
    id: "ASSET-005",
    title: "Batik Ceplok",
    kategori: "Batik",
    thumbnail: "/assets/batik/batik-ceplok/10.jpg",
    imageUrl: [
      "/assets/batik/batik-ceplok/10.jpg",
      "/assets/batik/batik-ceplok/20.jpg",
      "/assets/batik/batik-ceplok/3.jpg",
      "/assets/batik/batik-ceplok/35.jpg"
    ],
    description: "Koleksi Batik Ceplok autentik dari LumbungRupa.",
    asalDaerah: "Yogyakarta & Surakarta.",
    sejarahRingkas: "Salah satu motif tertua yang sudah ada sejak era Kerajaan Mataram Kuno. Motif ini berbasis pada pola geometris dasar (lingkaran, kotak, mawar) yang diulang secara simetris. Sering ditemukan pada ornamen candi Hindu-Buddha.",
    maknaFilosofis: "Keteraturan dan keseimbangan. Pola simetris empat arah melambangkan keseimbangan hidup manusia (hubungan dengan Tuhan, alam, sesama, dan diri sendiri). Mengajarkan pemakainya untuk hidup tertib, jujur, dan presisi.",
    jenisLisensi: "commercial",
    price: 240000,
    creator: "Batik Ceplok Studio",
    mitraId: "MITRA-005",
    tags: ["batik", "ceplok"],
    resolution: "4096x4096px"
  },
  {
    id: "ASSET-006",
    title: "Batik Ciamis",
    kategori: "Batik",
    thumbnail: "/assets/batik/batik-ciamis/2.jpg",
    imageUrl: [
      "/assets/batik/batik-ciamis/2.jpg",
      "/assets/batik/batik-ciamis/3.jpg",
      "/assets/batik/batik-ciamis/6.jpg",
      "/assets/batik/batik-ciamis/7.jpg"
    ],
    description: "Koleksi Batik Ciamis autentik dari LumbungRupa.",
    asalDaerah: "Ciamis, Jawa Barat.",
    sejarahRingkas: 'Muncul sebagai dampak Perang Diponegoro, di mana para pengikut Pangeran Diponegoro mengungsi ke selatan (Ciamis) dan membawa tradisi membatik. Namun, karena jauh dari keraton, motifnya menjadi lebih sederhana (tanpa simbol feodal) dan naturalis, dikenal sebagai "Batik Rengreng".',
    maknaFilosofis: "Kesederhanaan (Modesty). Motif Ciamis yang tidak rumit dan berwarna membumi mencerminkan sifat masyarakat Sunda yang someah (ramah), sederhana, dan tidak berlebihan dalam menjalani kehidupan duniawi.",
    jenisLisensi: "commercial",
    price: 250000,
    creator: "Batik Ciamis Studio",
    mitraId: "MITRA-006",
    tags: ["batik", "ciamis"],
    resolution: "4096x4096px"
  },
  {
    id: "ASSET-007",
    title: "Batik Garutan",
    kategori: "Batik",
    thumbnail: "/assets/batik/batik-garutan/1.jpg",
    imageUrl: [
      "/assets/batik/batik-garutan/1.jpg",
      "/assets/batik/batik-garutan/17.jpg",
      "/assets/batik/batik-garutan/20.jpg",
      "/assets/batik/batik-garutan/31.jpg"
    ],
    description: "Koleksi Batik Garutan autentik dari LumbungRupa.",
    asalDaerah: "Garut, Jawa Barat",
    sejarahRingkas: "Mengalami masa keemasan antara tahun 1945-1960. Ciri khasnya adalah warna dasar gumading (krem kekuningan) dan motif geometris diagonal (\"Lereng\") yang lebih kaku namun tegas dibandingkan motif Jawa Tengah.",
    maknaFilosofis: "Kebahagiaan dan kepraktisan. Warna-warna cerah pada Batik Garutan (seperti ungu, merah bata) melambangkan semangat hidup yang dinamis. Motif Lereng Garutan melambangkan jalan hidup yang terus mendaki menuju perbaikan.",
    jenisLisensi: "commercial",
    price: 260000,
    creator: "Batik Garutan Studio",
    mitraId: "MITRA-007",
    tags: ["batik", "garutan"],
    resolution: "4096x4096px"
  },
  {
    id: "ASSET-008",
    title: "Batik Gentongan",
    kategori: "Batik",
    thumbnail: "/assets/batik/batik-gentongan/10.jpg",
    imageUrl: [
      "/assets/batik/batik-gentongan/10.jpg",
      "/assets/batik/batik-gentongan/39.jpg",
      "/assets/batik/batik-gentongan/43.jpg",
      "/assets/batik/batik-gentongan/45.jpg"
    ],
    description: "Koleksi Batik Gentongan autentik dari LumbungRupa.",
    asalDaerah: "Madura (Tanjung Bumi)",
    sejarahRingkas: " Nama \"Gentongan\" berasal dari proses pewarnaannya yang unik: kain direndam di dalam gentong tanah liat selama berbulan-bulan (bahkan hingga setahun). Ini adalah salah satu teknik pewarnaan paling purba dan rumit untuk menghasilkan warna yang sangat tajam dan awet.",
    maknaFilosofis: "Ketangguhan dan kesabaran. Proses perendaman yang sangat lama melambangkan bahwa karakter yang kuat dan indah hanya bisa dibentuk melalui ujian waktu dan kesabaran yang panjang. Warna berani (merah, hijau tua) mencerminkan karakter orang Madura yang tegas dan pemberani.",
    jenisLisensi: "commercial",
    price: 270000,
    creator: "Batik Gentongan Studio",
    mitraId: "MITRA-008",
    tags: ["batik", "gentongan"],
    resolution: "4096x4096px"
  },
  {
    id: "ASSET-009",
    title: "Batik Kawung",
    kategori: "Batik",
    thumbnail: "/assets/batik/batik-kawung/10.jpg",
    imageUrl: [
      "/assets/batik/batik-kawung/10.jpg",
      "/assets/batik/batik-kawung/14.jpg",
      "/assets/batik/batik-kawung/30.jpg",
      "/assets/batik/batik-kawung/41.jpg"
    ],
    description: "Koleksi Batik Kawung autentik dari LumbungRupa.",
    asalDaerah: "Kesultanan Mataram, Yogyakarta",
    sejarahRingkas: "Salah satu motif Larangan (terlarang bagi rakyat jelata pada masa lalu), hanya boleh dipakai oleh kalangan keraton. Bentuknya terinspirasi dari irisan buah kolang-kaling (buah aren) atau bunga teratai yang sedang mekar.",
    maknaFilosofis: "Kesucian dan pengendalian diri. Bunga teratai melambangkan umur panjang dan kesucian. Motif ini juga melambangkan \"sedulur papat limo pancer\" (empat saudara, satu pusat), yang berarti manusia harus ingat asal-usulnya dan mampu mengendalikan hawa nafsu untuk mencapai kebijaksanaan.",
    jenisLisensi: "commercial",
    price: 280000,
    creator: "Batik Kawung Studio",
    mitraId: "MITRA-009",
    tags: ["batik", "kawung"],
    resolution: "4096x4096px"
  },
  {
    id: "ASSET-010",
    title: "Batik Keraton",
    kategori: "Batik",
    thumbnail: "/assets/batik/batik-keraton/1.jpg",
    imageUrl: [
      "/assets/batik/batik-keraton/1.jpg",
      "/assets/batik/batik-keraton/11.jpg",
      "/assets/batik/batik-keraton/30.jpg",
      "/assets/batik/batik-keraton/6.jpg"
    ],
    description: "Koleksi Batik Keraton autentik dari LumbungRupa.",
    asalDaerah: "Surakarta (Solo) dan Yogyakarta.",
    sejarahRingkas: "Merupakan induk dari segala batik di Jawa. Motif-motif ini dikembangkan oleh para putri keraton dan abdi dalem dengan aturan pakem yang sangat ketat. Warnanya didominasi warna tanah (sogan), biru tua (wedel), dan putih/krem.",
    maknaFilosofis: "Spiritualitas dan keheningan. Batik Keraton bukan sekadar hiasan, melainkan doa visual. Setiap goresan mengandung harapan akan ketentraman, kebijaksanaan, dan kedekatan manusia dengan Sang Pencipta.",
    jenisLisensi: "commercial",
    price: 290000,
    creator: "Batik Keraton Studio",
    mitraId: "MITRA-010",
    tags: ["batik", "keraton"],
    resolution: "4096x4096px"
  },
  {
    id: "ASSET-011",
    title: "Batik Lasem",
    kategori: "Batik",
    thumbnail: "/assets/batik/batik-lasem/15.jpg",
    imageUrl: [
      "/assets/batik/batik-lasem/15.jpg",
      "/assets/batik/batik-lasem/16.jpg",
      "/assets/batik/batik-lasem/20.jpg",
      "/assets/batik/batik-lasem/35.jpg"
    ],
    description: "Koleksi Batik Lasem autentik dari LumbungRupa.",
    asalDaerah: "Lasem, Rembang (Pesisir Utara Jawa).",
    sejarahRingkas: "Dikenal sebagai \"Tiongkok Kecil\". Batik Lasem adalah puncak akulturasi budaya Jawa dan Tionghoa. Terkenal dengan warna \"Merah Darah Ayam\" (Abang Getih) yang tidak bisa ditiru daerah lain karena kandungan mineral air tanah Lasem yang unik.",
    maknaFilosofis: "Toleransi dan penyatuan. Motif naga atau burung hong (Tionghoa) bersanding dengan motif sekar jagad (Jawa) melambangkan harmoni antar-etnis. Warna merah melambangkan keberuntungan, kebahagiaan, dan keberanian.",
    jenisLisensi: "commercial",
    price: 300000,
    creator: "Batik Lasem Studio",
    mitraId: "MITRA-011",
    tags: ["batik", "lasem"],
    resolution: "4096x4096px"
  },
  {
    id: "ASSET-012",
    title: "Batik Megamendung",
    kategori: "Batik",
    thumbnail: "/assets/batik/batik-megamendung/10.jpg",
    imageUrl: [
      "/assets/batik/batik-megamendung/10.jpg",
      "/assets/batik/batik-megamendung/2.jpg",
      "/assets/batik/batik-megamendung/20.jpg",
      "/assets/batik/batik-megamendung/27.jpg"
    ],
    description: "Koleksi Batik Megamendung autentik dari LumbungRupa.",
    asalDaerah: "Cirebon, Jawa Barat",
    sejarahRingkas: "Diciptakan oleh Pangeran Cakrabuana (pendiri Cirebon) dan disempurnakan oleh Sunan Gunung Jati. Mengadopsi bentuk awan dari seni rupa Tiongkok, namun dimodifikasi menjadi bentuk lonjong lancip (khas Cirebon) dengan gradasi warna 7 lapis (biasanya biru atau merah).",
    maknaFilosofis: "Kepemimpinan dan kesabaran. \"Mega\" berarti awan, \"Mendung\" berarti sejuk/menahan hujan. Filosofinya: seorang pemimpin harus bisa menahan amarah (tetap sejuk) seperti awan mendung, dan mengayomi rakyatnya. 7 gradasi warna melambangkan 7 lapisan langit atau tahapan spiritual.",
    jenisLisensi: "commercial",
    price: 310000,
    creator: "Batik Megamendung Studio",
    mitraId: "MITRA-012",
    tags: ["batik", "megamendung"],
    resolution: "4096x4096px"
  },
  {
    id: "ASSET-013",
    title: "Batik Parang",
    kategori: "Batik",
    thumbnail: "/assets/batik/batik-parang/1.jpg",
    imageUrl: [
      "/assets/batik/batik-parang/1.jpg",
      "/assets/batik/batik-parang/2.jpg",
      "/assets/batik/batik-parang/3.jpg",
      "/assets/batik/batik-parang/7.jpg"
    ],
    description: "Koleksi Batik Parang autentik dari LumbungRupa.",
    asalDaerah: "Mataram (Yogyakarta & Solo)",
    sejarahRingkas: "Diciptakan oleh Panembahan Senopati (Raja Mataram Islam pertama) saat bertapa di pantai selatan. Ia terinspirasi oleh ombak yang terus-menerus menghantam karang hingga karang tersebut terkikis. Motif \"Parang Rusak\" dulunya hanya boleh dipakai oleh Raja.",
    maknaFilosofis: "Pantang menyerah dan perjuangan. Bentuk \"S\" yang saling jalin-menjalin melambangkan ombak yang tidak pernah putus. Pesannya: manusia harus memiliki semangat juang yang tak pernah padam, terus memperbaiki diri, dan memperjuangkan kebenaran.",
    jenisLisensi: "commercial",
    price: 320000,
    creator: "Batik Parang Studio",
    mitraId: "MITRA-013",
    tags: ["batik", "parang"],
    resolution: "4096x4096px"
  },
  {
    id: "ASSET-014",
    title: "Batik Pekalongan",
    kategori: "Batik",
    thumbnail: "/assets/batik/batik-pekalongan/6.jpg",
    imageUrl: [
      "/assets/batik/batik-pekalongan/6.jpg",
      "/assets/batik/batik-pekalongan/7.jpg",
      "/assets/batik/batik-pekalongan/8.jpg",
      "/assets/batik/batik-pekalongan/9.jpg"
    ],
    description: "Koleksi Batik Pekalongan autentik dari LumbungRupa.",
    asalDaerah: "Pekalongan, pesisir utara Jawa",
    sejarahRingkas: "Pekalongan dijuluki \"Kota Batik Dunia\". Karena posisinya di pesisir, batik ini sangat adaptif. Pada masa penjajahan Jepang, muncul \"Batik Jawa Hokokai\" dengan motif pagi-sore yang sangat detail. Motif khasnya adalah \"Buketan\" (rangkaian bunga) pengaruh Belanda.",
    maknaFilosofis: "Dinamika dan adaptasi. Batik Pekalongan tidak terikat pakem kuno, melainkan merayakan perubahan zaman. Motif bunga yang cerah melambangkan keindahan alam dan kegembiraan hidup yang terus mekar.",
    jenisLisensi: "commercial",
    price: 330000,
    creator: "Batik Pekalongan Studio",
    mitraId: "MITRA-014",
    tags: ["batik", "pekalongan"],
    resolution: "4096x4096px"
  },
  {
    id: "ASSET-015",
    title: "Batik Priangan",
    kategori: "Batik",
    thumbnail: "/assets/batik/batik-priangan/1.jpg",
    imageUrl: [
      "/assets/batik/batik-priangan/1.jpg",
      "/assets/batik/batik-priangan/2.jpg",
      "/assets/batik/batik-priangan/3.jpg",
      "/assets/batik/batik-priangan/4.jpg"
    ],
    description: "Koleksi Batik Priangan autentik dari LumbungRupa.",
    asalDaerah: "Tasikmalaya dan sekitarnya (Jawa Barat)",
    sejarahRingkas: "Batik Priangan berkembang dengan identitas Sunda yang kuat. Ciri khasnya adalah motif flora dan fauna yang digambarkan secara luwes dan anggun, dengan warna-warna yang lebih \"manis\" dan cerah dibanding batik Solo/Yogya.",
    maknaFilosofis: "Keanggunan dan harmoni alam. Mencerminkan estetika Sunda yang mengutamakan keselarasan hidup dengan alam sekitar. Motif-motifnya (seperti merak, anggrek) mengajak manusia untuk merawat dan mengagumi keindahan ciptaan Tuhan.",
    jenisLisensi: "commercial",
    price: 340000,
    creator: "Batik Priangan Studio",
    mitraId: "MITRA-015",
    tags: ["batik", "priangan"],
    resolution: "4096x4096px"
  },
  {
    id: "ASSET-016",
    title: "Batik Sekar Jagad",
    kategori: "Batik",
    thumbnail: "/assets/batik/batik-sekar/1.jpg",
    imageUrl: [
      "/assets/batik/batik-sekar/1.jpg",
      "/assets/batik/batik-sekar/38.jpg",
      "/assets/batik/batik-sekar/49.jpg",
      "/assets/batik/batik-sekar/9.jpg"
    ],
    description: "Koleksi Batik Sekar autentik dari LumbungRupa.",
    asalDaerah: "Yogyakarta & Solo",
    sejarahRingkas: "Secara visual terlihat seperti peta pulau-pulau atau kumpulan aneka bunga yang disatukan. Namanya berasal dari kata \"Kar\" (Peta) dan \"Jagad\" (Dunia), atau \"Sekar\" (Bunga) dan \"Jagad\" (Dunia). Motif ini melambangkan keragaman budaya Nusantara yang bersatu dalam harmoni.",
    maknaFilosofis: "Keindahan dalam keberagaman (Unity in Diversity). Motif ini melambangkan keragaman dunia yang disatukan dalam keindahan. Sering digunakan untuk melamar pasangan, dengan makna \"mengikat hati\" atau melambangkan cinta yang seluas dunia.",
    jenisLisensi: "commercial",
    price: 350000,
    creator: "Batik Sekar Studio",
    mitraId: "MITRA-016",
    tags: ["batik", "sekar"],
    resolution: "4096x4096px"
  },
  {
    id: "ASSET-017",
    title: "Batik Sidoluhur",
    kategori: "Batik",
    thumbnail: "/assets/batik/batik-sidoluhur/13.jpg",
    imageUrl: [
      "/assets/batik/batik-sidoluhur/13.jpg",
      "/assets/batik/batik-sidoluhur/2.jpg",
      "/assets/batik/batik-sidoluhur/24.jpg",
      "/assets/batik/batik-sidoluhur/35.jpg"
    ],
    description: "Koleksi Batik Sidoluhur autentik dari LumbungRupa.",
    asalDaerah: "Surakarta, Jawa Tengah",
    sejarahRingkas: "Salah satu dari seri motif \"Sido\" (Menjadi). Motif ini biasanya dikenakan pada upacara mitoni (tujuh bulanan kehamilan) atau oleh pengantin. Dulu dibuat oleh para empu batik dengan laku puasa agar doanya merasuk ke kain.",
    maknaFilosofis: "Keluhuran budi. \"Sido\" berarti menjadi, \"Luhur\" berarti mulia/tinggi. Pemakainya didoakan agar menjadi orang yang berbudi pekerti luhur, berkedudukan tinggi, dan dihormati masyarakat karena kebaikannya, bukan hanya karena jabatannya.",
    jenisLisensi: "commercial",
    price: 360000,
    creator: "Batik Sidoluhur Studio",
    mitraId: "MITRA-017",
    tags: ["batik", "sidoluhur"],
    resolution: "4096x4096px"
  },
  {
    id: "ASSET-018",
    title: "Batik Sidomukti",
    kategori: "Batik",
    thumbnail: "/assets/batik/batik-sidomukti/1.jpg",
    imageUrl: [
      "/assets/batik/batik-sidomukti/1.jpg",
      "/assets/batik/batik-sidomukti/13.jpg",
      "/assets/batik/batik-sidomukti/14.jpg",
      "/assets/batik/batik-sidomukti/2.jpg"
    ],
    description: "Koleksi Batik Sidomukti autentik dari LumbungRupa.",
    asalDaerah: "Surakarta (Solo).",
    sejarahRingkas: "Motif wajib bagi pengantin Jawa (Solo) saat upacara pernikahan (panggih). Biasanya menggunakan zat pewarna soga alam (coklat).",
    maknaFilosofis: "Kemakmuran dan kebahagiaan. \"Sido\" berarti menjadi, \"Mukti\" berarti makmur/bahagia/sejahtera (di dunia dan akhirat). Harapannya, pasangan pengantin akan menjalani rumah tangga yang bahagia, berkecukupan, dan penuh berkah.",
    jenisLisensi: "commercial",
    price: 370000,
    creator: "Batik Sidomukti Studio",
    mitraId: "MITRA-018",
    tags: ["batik", "sidomukti"],
    resolution: "4096x4096px"
  },
  {
    id: "ASSET-019",
    title: "Batik Sogan",
    kategori: "Batik",
    thumbnail: "/assets/batik/batik-sogan/1.jpg",
    imageUrl: [
      "/assets/batik/batik-sogan/1.jpg",
      "/assets/batik/batik-sogan/19.jpg",
      "/assets/batik/batik-sogan/20.jpg",
      "/assets/batik/batik-sogan/32.jpg"
    ],
    description: "Koleksi Batik Sogan autentik dari LumbungRupa.",
    asalDaerah: "Yogyakarta dan Surakarta",
    sejarahRingkas: "Sogan sebenarnya merujuk pada jenis pewarnaan (warna coklat klasik) yang berasal dari kulit batang pohon Soga (Peltophorum pterocarpum). Ini adalah warna \"asli\" batik klasik sebelum adanya pewarna kimia. Motif apa pun (Parang, Truntum, dll) yang menggunakan palet warna ini disebut Batik Sogan.",
    maknaFilosofis: "Kerendahan hati dan membumi. Warna coklat tanah melambangkan unsur tanah/bumi. Mengingatkan manusia bahwa mereka berasal dari tanah dan akan kembali ke tanah, sehingga harus hidup dengan rendah hati dan bersahaja.",
    jenisLisensi: "commercial",
    price: 380000,
    creator: "Batik Sogan Studio",
    mitraId: "MITRA-019",
    tags: ["batik", "sogan"],
    resolution: "4096x4096px"
  },
  {
    id: "ASSET-020",
    title: "Batik Tambal",
    kategori: "Batik",
    thumbnail: "/assets/batik/batik-tambal/1.jpg",
    imageUrl: [
      "/assets/batik/batik-tambal/1.jpg",
      "/assets/batik/batik-tambal/2.jpg",
      "/assets/batik/batik-tambal/24.jpg",
      "/assets/batik/batik-tambal/35.jpg"
    ],
    description: "Koleksi Batik Tambal autentik dari LumbungRupa.",
    asalDaerah: "Yogyakarta",
    sejarahRingkas: "Terlihat seperti kain perca (potongan-potongan kain beda motif) yang dijahit jadi satu. Dalam kepercayaan Jawa kuno, batik ini dianggap memiliki kekuatan magis untuk penyembuhan. Dulu sering diselimutkan kepada orang sakit.",
    maknaFilosofis: "Memperbaiki diri. \"Tambal\" berarti menambal atau memperbaiki yang rusak. Filosofinya: manusia harus selalu introspeksi diri, menambal kekurangan (sifat buruk/penyakit) dengan kebaikan, untuk mencapai kesempurnaan lahir dan batin.",
    jenisLisensi: "commercial",
    price: 390000,
    creator: "Batik Tambal Studio",
    mitraId: "MITRA-020",
    tags: ["batik", "tambal"],
    resolution: "4096x4096px"
  },
  {
    id: "ASSET-021",
    title: "Relief Karmawibhangga Borobudur",
    kategori: "Relief",
    thumbnail: "/assets/relief/Relief%20Karmawibhangga%20Borobudur/001-Killing-Living-Beings-Original.jpg",
    imageUrl: [
      "/assets/relief/Relief%20Karmawibhangga%20Borobudur/001-Killing-Living-Beings-Original.jpg",
      "/assets/relief/Relief%20Karmawibhangga%20Borobudur/022-Hypocrisy-and-Contentiousness-leads-to-Ugliness-Original.jpg",
      "/assets/relief/Relief%20Karmawibhangga%20Borobudur/039-Despising-the-Undistinguished-leads-to-being-Undistinguished-Original.jpg",
      "/assets/relief/Relief%20Karmawibhangga%20Borobudur/040-Approving-Praise-of-Others-leads-to-being-Distinguished-Original.jpg"
    ],
    description: "Relief Karmawibhangga Borobudur dalam detail relief autentik Borobudur.",
    asalDaerah: "Candi Borobudur, Magelang, Jawa Tengah (Abad ke-8/9 Masehi).",
    sejarahRingkas: 'Relief ini dikenal sebagai "Kaki yang Tersembunyi". Terletak di bagian paling dasar Candi Borobudur, relief ini sengaja ditutup dengan batu tambahan (struktur encasement) tak lama setelah dibuat, kemungkinan karena alasan teknis (untuk menahan beban candi agar tidak longsor) atau alasan etis (karena menampilkan adegan duniawi yang vulgar). Terdiri dari 160 panel, relief ini baru ditemukan kembali pada tahun 1885 oleh J.W. Ijzerman. Seluruh panel sempat difoto oleh Kassian Cephas sebelum ditutup kembali. Saat ini, hanya sebagian kecil di sudut tenggara yang dibuka untuk umum. Relief ini adalah "kapsul waktu" paling otentik yang merekam kehidupan sehari-hari masyarakat Jawa Kuno, mulai dari cara berpakaian, arsitektur rumah, alat musik, hingga flora dan fauna, tanpa filter idealisme kedewaan.',
    maknaFilosofis: "Relief ini mengilustrasikan naskah suci Mahakarmavibhanga yang mengajarkan filosofi bahwa setiap tindakan manusia memiliki konsekuensi yang setimpal. Dalam penggambarannya, relief ini menampilkan hubungan sebab-akibat yang jelas, di mana panel sebab memperlihatkan perbuatan manusia baik buruk maupun terpuji—seperti bergunjing, membunuh, bersedekah, atau berziarah—sedangkan panel akibat menggambarkan hasil dari perbuatan tersebut yang akan diterima di kehidupan sekarang atau kehidupan selanjutnya (reinkarnasi). Secara mendalam, relief ini berfungsi sebagai cermin kejujuran manusia karena tidak hanya menampilkan hal-hal yang suci, tetapi juga secara gamblang memvisualisasikan nafsu, kekerasan, dan realitas duniawi (Kamadhatu) yang harus disadari sepenuhnya oleh manusia sebelum mereka dapat mendaki ke tingkat spiritual yang lebih tinggi, yakni Rupadhatu dan Arupadhatu.",
    jenisLisensi: "enterprise",
    price: 400000,
    creator: "Studio Relief Borobudur",
    mitraId: "MITRA-021",
    tags: ["relief", "relief-karmawibhangga-borobudur"],
    resolution: "6000x3000px"
  },
  {
    id: "ASSET-022",
    title: "Wayang Abimanyu",
    kategori: "Wayang",
    thumbnail: "/assets/wayang/abimanyu/abimanyu003.jpg",
    imageUrl: [
      "/assets/wayang/abimanyu/abimanyu003.jpg",
      "/assets/wayang/abimanyu/abimanyu004.jpg",
      "/assets/wayang/abimanyu/abimanyu004d.jpg",
      "/assets/wayang/abimanyu/abimanyu005.jpg"
    ],
    description: "Putra dari Arjuna dan Dewi Sembadra; dikenal sebagai ksatria yang halus budi namun pemberani. Dijuluki 'Putra Wahyu' karena menerima wahyu cakraningrat.",
    asalDaerah: "Jawa (Gaya Surakarta/Yogyakarta)",
    golongan: "Satria (Pandawa - Generasi Kedua)",
    sejarahRingkas: "Putra Arjuna dan Dewi Sembadra, Abimanyu dikenal karena keberaniannya dan kisah tragisnya saat gugur di Kurusetra setelah terjebak dalam formasi Cakrabyuha.",
    maknaFilosofis: "Melambangkan ksatria sejati yang menepati janji; pengorbanannya mengajarkan bahwa keberanian adalah maju meski tahu kemungkinan kalah.",
    jenisLisensi: "commercial",
    price: 410000,
    creator: "Sanggar Wayang Nusantara",
    mitraId: "MITRA-022",
    tags: ["wayang", "abimanyu"],
    resolution: "4096x4096px"
  },
  {
    id: "ASSET-023",
    title: "Wayang Anoman",
    kategori: "Wayang",
    thumbnail: "/assets/wayang/anoman/anoman001a.jpg",
    imageUrl: [
      "/assets/wayang/anoman/anoman001a.jpg",
      "/assets/wayang/anoman/anoman002b.jpg",
      "/assets/wayang/anoman/anoman003.jpg",
      "/assets/wayang/anoman/anoman003c.jpg"
    ],
    description: "Kera berbulu putih, putra Batara Bayu; tokoh lintas zaman yang muncul di Ramayana membantu Rama dan di Mahabharata membantu Pandawa. Memiliki umur panjang sebagai titisan dewa dan kesaktian setara dewa.",
    asalDaerah: "Jawa (Gaya Surakarta/Yogyakarta)",
    golongan: "Wanara (Kera Putih)",
    sejarahRingkas: "Kera berbulu putih putra Batara Bayu. Tokoh lintas zaman—muncul di Ramayana membantu Rama dan di Mahabharata membantu Pandawa—dikenal karena kesaktian dan umur panjangnya sebagai titisan dewa.",
    maknaFilosofis: "Pengabdian tanpa pamrih dan kesucian hati. Warna putih melambangkan kesucian; Anoman mengajarkan bahwa kemuliaan dinilai dari dharma dan bakti, bukan dari rupa.",
    jenisLisensi: "commercial",
    price: 420000,
    creator: "Sanggar Wayang Nusantara",
    mitraId: "MITRA-023",
    tags: ["wayang", "anoman"],
    resolution: "4096x4096px"
  },
  {
    id: "ASSET-024",
    title: "Wayang Arjuna",
    kategori: "Wayang",
    thumbnail: "/assets/wayang/arjuna/arjuna001.jpg",
    imageUrl: [
      "/assets/wayang/arjuna/arjuna001.jpg",
      "/assets/wayang/arjuna/arjuna002.jpg",
      "/assets/wayang/arjuna/arjuna003.jpg",
      "/assets/wayang/arjuna/arjuna004.jpg"
    ],
    description: "Satria paling tampan di dunia wayang, penengah Pandawa yang dikenal sebagai 'Lelananging Jagad' (Lelaki pujaan dunia). Ahli memanah tak tertandingi yang memiliki senjata sakti Pasopati dan sering bertapa untuk memperoleh kesaktian.",
    asalDaerah: "Jawa (Gaya Surakarta/Yogyakarta)",
    golongan: "Satria (Pandawa ke-3)",
    sejarahRingkas: "Arjuna adalah penengah Pandawa, diceritakan sebagai pemanah ulung yang mendapat kesaktian melalui tapa dan disiplin spiritual. Senjata sakti Pasopati menjadikannya tokoh sentral dalam pertempuran dan pelajaran kepemimpinan.",
    maknaFilosofis: "Fokus dan pengendalian diri. Keahlian memanah Arjuna adalah metafora fokus pikiran (manah = hati/pikiran); ia mengajarkan pentingnya mengheningkan cipta untuk mencapai tujuan.",
    jenisLisensi: "commercial",
    price: 430000,
    creator: "Sanggar Wayang Nusantara",
    mitraId: "MITRA-024",
    tags: ["wayang", "arjuna"],
    resolution: "4096x4096px"
  },
  {
    id: "ASSET-025",
    title: "Wayang Bagong",
    kategori: "Wayang",
    thumbnail: "/assets/wayang/bagong/bagong001.jpg",
    imageUrl: [
      "/assets/wayang/bagong/bagong001.jpg",
      "/assets/wayang/bagong/bagong002.jpg",
      "/assets/wayang/bagong/bagong003.jpg",
      "/assets/wayang/bagong/bagong003c.jpg"
    ],
    description: "Anak bungsu Semar, tercipta dari bayangan Semar; berbentuk bulat dengan mata dan mulut lebar, berwatak lugu dan ceplas-ceplos, kadang 'nge-gas' namun jujur dan kritis.",
    asalDaerah: "Jawa (Punakawan Gaya Yogyakarta)",
    golongan: "Punokawan (Penyabar/Pelawak)",
    sejarahRingkas: "Anak bungsu Semar yang menjadi bagian penting dari tradisi Punokawan; tampil sebagai pelengkap pertunjukan wayang dengan peran pelawak sekaligus penasihat rakyat melalui humor dan komentar sosial.",
    maknaFilosofis: "Kritik sosial dan kejujuran rakyat. Bagong merepresentasikan suara rakyat yang berani mengkritik penguasa dengan humor—kejujurannya mungkin terdengar kasar atau lucu, namun mengandung kebenaran yang nyata.",
    jenisLisensi: "commercial",
    price: 440000,
    creator: "Sanggar Wayang Nusantara",
    mitraId: "MITRA-025",
    tags: ["wayang", "bagong"],
    resolution: "4096x4096px"
  },
  {
    id: "ASSET-026",
    title: "Wayang Baladewa",
    kategori: "Wayang",
    thumbnail: "/assets/wayang/baladewa/baladewa009.jpg",
    imageUrl: [
      "/assets/wayang/baladewa/baladewa009.jpg",
      "/assets/wayang/baladewa/baladewa010.jpg",
      "/assets/wayang/baladewa/baladewa011.jpg",
      "/assets/wayang/baladewa/baladewa012.jpg"
    ],
    description: "Raja berkulit putih (bule/albino), kakak Kresna yang sangat temperamental: mudah marah, bicaranya keras, namun jujur dan mudah memaafkan. Meski berpihak pada Kurawa karena hubungan keluarga, Kresna menjauhkan Baladewa dari pertempuran Baratayuda agar tidak terlibat.",
    asalDaerah: "Jawa (Gaya Surakarta/Yogyakarta)",
    golongan: "Raja (Mandura), Kakak Kresna",
    sejarahRingkas: "Raja dari Mandura yang terkenal karena kulitnya yang pucat dan watak temperamental. Ia dikenal sebagai tokoh yang loyal pada ikatan keluarga sehingga cenderung memihak Kurawa, namun pada masa perang Baratayuda Kresna meminta Baladewa untuk dijauhkan agar tidak mencampuri konflik saudara.",
    maknaFilosofis: "Watak keras tapi hati bersih. Baladewa mengajarkan bahwa orang yang bicara keras belum tentu jahat; ia juga menjadi simbol kenetralan atau dilema moral ketika konflik memisahkan keluarga.",
    jenisLisensi: "commercial",
    price: 450000,
    creator: "Sanggar Wayang Nusantara",
    mitraId: "MITRA-026",
    tags: ["wayang", "baladewa"],
    resolution: "4096x4096px"
  },
  {
    id: "ASSET-027",
    title: "Wayang Bima",
    kategori: "Wayang",
    thumbnail: "/assets/wayang/bima/bima001.jpg",
    imageUrl: [
      "/assets/wayang/bima/bima001.jpg",
      "/assets/wayang/bima/bima002.jpg",
      "/assets/wayang/bima/bima002b.jpg",
      "/assets/wayang/bima/bima003.jpg"
    ],
    description: "Raksasa di antara Pandawa, tubuh tinggi besar dengan kuku Pancanaka. Jujur, blak-blakan, dan sangat kuat; tidak menggunakan bahasa halus kecuali kepada gurunya, Dewa Ruci.",
    asalDaerah: "Jawa (Gaya Surakarta/Yogyakarta)",
    golongan: "Satria (Pandawa ke-2)",
    sejarahRingkas: "Bima (Werkudara) dikenal sebagai anggota Pandawa yang berotot dan penuh tenaga. Ia melakukan pencarian spiritual, termasuk kisah mencari 'Air Perwitasari' (Dewa Ruci), yang melambangkan pencarian jati diri. Wataknya yang lugas dan kekuatannya membuatnya menjadi pembela tak tergoyahkan dalam pertempuran.",
    maknaFilosofis: "Keteguhan prinsip dan kejujuran mutlak. Bima mengajarkan bahwa kebenaran harus ditegakkan tanpa pandang bulu; perjalanannya mencari Dewa Ruci melambangkan perjalanan batin menuju pengenalan diri dan Tuhan.",
    jenisLisensi: "commercial",
    price: 460000,
    creator: "Sanggar Wayang Nusantara",
    mitraId: "MITRA-027",
    tags: ["wayang", "bima"],
    resolution: "4096x4096px"
  },
  {
    id: "ASSET-028",
    title: "Wayang Buta",
    kategori: "Wayang",
    thumbnail: "/assets/wayang/buta/buta001.jpg",
    imageUrl: [
      "/assets/wayang/buta/buta001.jpg",
      "/assets/wayang/buta/buta001a.jpg",
      "/assets/wayang/buta/buta002.jpg",
      "/assets/wayang/buta/buta003.jpg"
    ],
    description: "Wayang tokoh Buta dari khasanah wayang Nusantara.",
    asalDaerah: "Jawa (Tokoh Raksasa Umum)",
    sejarahRingkas: "Buta atau raksasa merupakan representasi pasukan musuh atau penghuni hutan yang sering menjadi rintangan para ksatria.",
    maknaFilosofis: "Melambangkan hawa nafsu yang tidak terkendali, kekacauan, dan sifat angkara murka dalam diri manusia.",
    jenisLisensi: "commercial",
    price: 470000,
    creator: "Sanggar Wayang Nusantara",
    mitraId: "MITRA-028",
    tags: ["wayang", "buta"],
    resolution: "4096x4096px"
  },
  {
    id: "ASSET-029",
    title: "Wayang Cakil",
    kategori: "Wayang",
    thumbnail: "/assets/wayang/cakil/cakil001.jpg",
    imageUrl: [
      "/assets/wayang/cakil/cakil001.jpg",
      "/assets/wayang/cakil/cakil001a.jpg",
      "/assets/wayang/cakil/cakil002.jpg",
      "/assets/wayang/cakil/cakil003.jpg"
    ],
    description: "Raksasa dengan rahang bawah menjorok (mencakil); sering tampil dalam adegan 'Perang Kembang' melawan ksatria halus dan selalu akhirnya kalah.",
    asalDaerah: "Jawa (Tokoh Antagonis Khas)",
    golongan: "Raksasa (Khusus)",
    sejarahRingkas: "Raksasa dengan rahang bawah yang menjorok ke depan (mencakil). Selalu muncul dalam adegan 'Perang Kembang' melawan ksatria halus (biasanya Arjuna). Selalu kalah dan mati tertusuk kerisnya sendiri.",
    maknaFilosofis: "Kejahatan yang memakan diri sendiri. Cakil melambangkan gangguan gigih namun bodoh; kematiannya oleh keris sendiri melambangkan 'Senjata Makan Tuan'.",
    jenisLisensi: "commercial",
    price: 480000,
    creator: "Sanggar Wayang Nusantara",
    mitraId: "MITRA-029",
    tags: ["wayang", "cakil"],
    resolution: "4096x4096px"
  },
  {
    id: "ASSET-030",
    title: "Wayang Durna",
    kategori: "Wayang",
    thumbnail: "/assets/wayang/durna/durna002.jpg",
    imageUrl: [
      "/assets/wayang/durna/durna002.jpg",
      "/assets/wayang/durna/img000.jpg",
      "/assets/wayang/durna/img002.jpg",
      "/assets/wayang/durna/img003.jpg"
    ],
    description: "Guru besar ilmu perang Astina; sosok bungkuk berhidung betet yang mengajar Pandawa dan Kurawa, terikat sumpah jabatan.",
    asalDaerah: "Jawa (Gaya Surakarta/Yogyakarta)",
    golongan: "Pendidik / Guru (Pendeta)",
    sejarahRingkas: "Guru besar ilmu perang yang mengajar kedua pihak, memiliki kedekatan khusus pada beberapa murid (terutama Arjuna), namun terikat sumpah jabatan untuk membela Astina.",
    maknaFilosofis: "Dilema intelektual dan loyalitas. Durna melambangkan kecerdasan yang tersesat karena ikatan duniawi dan ambisi jabatan.",
    jenisLisensi: "commercial",
    price: 490000,
    creator: "Sanggar Wayang Nusantara",
    mitraId: "MITRA-030",
    tags: ["wayang", "durna"],
    resolution: "4096x4096px"
  },
  {
    id: "ASSET-031",
    title: "Wayang Dursasana",
    kategori: "Wayang",
    thumbnail: "/assets/wayang/dursasana/ctr133.jpg",
    imageUrl: [
      "/assets/wayang/dursasana/ctr133.jpg",
      "/assets/wayang/dursasana/ctr134.jpg",
      "/assets/wayang/dursasana/ctr135.jpg",
      "/assets/wayang/dursasana/dursasana001g.jpg"
    ],
    description: "Salah satu Kurawa yang paling beringas; tubuh besar dan perilaku kasar serta sembrono, terkenal mempermalukan Drupadi.",
    asalDaerah: "Jawa (Gaya Surakarta/Yogyakarta)",
    golongan: "Satria (Kurawa - Adik Duryudana)",
    sejarahRingkas: "Adik Duryudana yang terkenal beringas dan sembrono; tokoh yang mempermalukan Drupadi dalam adegan permainan dadu.",
    maknaFilosofis: "Kesewenang-wenangan: manifestasi tindakan tanpa pertimbangan, kekasaran, dan pelecehan martabat manusia.",
    jenisLisensi: "commercial",
    price: 500000,
    creator: "Sanggar Wayang Nusantara",
    mitraId: "MITRA-031",
    tags: ["wayang", "dursasana"],
    resolution: "4096x4096px"
  },
  {
    id: "ASSET-032",
    title: "Wayang Duryudana",
    kategori: "Wayang",
    thumbnail: "/assets/wayang/duryudana/img007.jpg",
    imageUrl: [
      "/assets/wayang/duryudana/img007.jpg",
      "/assets/wayang/duryudana/img008.jpg",
      "/assets/wayang/duryudana/img009.jpg",
      "/assets/wayang/duryudana/img010.jpg"
    ],
    description: "Raja Astina dan pemimpin Kurawa; gagah dan sakti namun hatinya dipenuhi iri dengki yang dipengaruhi Sengkuni.",
    asalDaerah: "Jawa (Gaya Surakarta/Yogyakarta)",
    golongan: "Raja (Astina), Ketua Kurawa",
    sejarahRingkas: "Raja Astina yang menolak mengembalikan hak Pandawa; kekuatannya besar namun dikuasai rasa iri dan hasutan.",
    maknaFilosofis: "Ambisi kekuasaan dan iri hati; pelajaran tentang kehancuran moral ketika kekuasaan dicari tanpa integritas.",
    jenisLisensi: "commercial",
    price: 510000,
    creator: "Sanggar Wayang Nusantara",
    mitraId: "MITRA-032",
    tags: ["wayang", "duryudana"],
    resolution: "4096x4096px"
  },
  {
    id: "ASSET-033",
    title: "Wayang Gareng",
    kategori: "Wayang",
    thumbnail: "/assets/wayang/gareng/img000.jpg",
    imageUrl: [
      "/assets/wayang/gareng/img000.jpg",
      "/assets/wayang/gareng/img001.jpg",
      "/assets/wayang/gareng/img002.jpg",
      "/assets/wayang/gareng/img003.jpg"
    ],
    description: "Anak tertua Semar yang cacat: kaki pincang, tangan ceko, dan mata juling; dulunya ksatria tampan yang mengalami kerusakan tubuh lalu diangkat menjadi anak Semar.",
    asalDaerah: "Jawa (Punakawan Gaya Surakarta/Yogyakarta)",
    golongan: "Punokawan (Anak Tertua Semar)",
    sejarahRingkas: "Dulunya ksatria tampan yang menderita luka hingga cacat, kemudian diangkat menjadi anak Semar dan menjadi bagian Punokawan sebagai penjaga moral.",
    maknaFilosofis: "Kehati-hatian: simbol penderitaan yang diubah menjadi kebijaksanaan—kaki pincang mengingatkan untuk berhati-hati, tangan bengkok menghindari mengambil hak orang lain.",
    jenisLisensi: "commercial",
    price: 520000,
    creator: "Sanggar Wayang Nusantara",
    mitraId: "MITRA-033",
    tags: ["wayang", "gareng"],
    resolution: "4096x4096px"
  },
  {
    id: "ASSET-034",
    title: "Wayang Gatotkaca",
    kategori: "Wayang",
    thumbnail: "/assets/wayang/gatotkaca/img009.jpg",
    imageUrl: [
      "/assets/wayang/gatotkaca/img009.jpg",
      "/assets/wayang/gatotkaca/img010.jpg",
      "/assets/wayang/gatotkaca/img011.jpg",
      "/assets/wayang/gatotkaca/img019.jpg"
    ],
    description: "Ksatria berkekuatan luar biasa dan tulang seperti kawat, putra Bima yang mampu terbang dan menjadi perisai bagi Pandawa.",
    asalDaerah: "Jawa (Gaya Surakarta/Yogyakarta)",
    golongan: "Satria (Pringgadani), Putra Bima",
    sejarahRingkas: "Putra Bima yang diberkahi kekuatan luar biasa dan kemampuan terbang; gugur saat menyongsong senjata musuh demi menyelamatkan pasukan Pandawa.",
    maknaFilosofis: "Bela negara dan pengorbanan; Gatotkaca melambangkan kesiapan berkorban untuk melindungi bangsa.",
    jenisLisensi: "commercial",
    price: 530000,
    creator: "Sanggar Wayang Nusantara",
    mitraId: "MITRA-034",
    tags: ["wayang", "gatotkaca"],
    resolution: "4096x4096px"
  },
  {
    id: "ASSET-035",
    title: "Wayang Karna",
    kategori: "Wayang",
    thumbnail: "/assets/wayang/karna/karna012.jpg",
    imageUrl: [
      "/assets/wayang/karna/karna012.jpg",
      "/assets/wayang/karna/karna013.jpg",
      "/assets/wayang/karna/karna014.jpg",
      "/assets/wayang/karna/karna015.jpg"
    ],
    description: "Putra Dewi Kunti dan Batara Surya, dibuang saat bayi dan dibesarkan oleh kusir; sosok tragis yang memilih loyalitas kepada Duryudana.",
    asalDaerah: "Jawa (Gaya Surakarta/Yogyakarta)",
    golongan: "Raja (Awangga), Kakak Tertua Pandawa",
    sejarahRingkas: "Karna, anak surya, dibesarkan di kalangan rendah dan kemudian menjadi ksatria besar. Ia memihak Kurawa demi balas budi kepada Duryudana meski sadar kebenaran berada pada sisi lain.",
    maknaFilosofis: "Dilema moral dan balas budi; Karna mengajarkan tentang tragisnya loyalitas yang salah arah dan harga diri yang tinggi.",
    jenisLisensi: "commercial",
    price: 540000,
    creator: "Sanggar Wayang Nusantara",
    mitraId: "MITRA-035",
    tags: ["wayang", "karna"],
    resolution: "4096x4096px"
  },
  {
    id: "ASSET-036",
    title: "Wayang Kresna",
    kategori: "Wayang",
    thumbnail: "/assets/wayang/kresna/kresna018.jpg",
    imageUrl: [
      "/assets/wayang/kresna/kresna018.jpg",
      "/assets/wayang/kresna/kresna019.jpg",
      "/assets/wayang/kresna/kresna020.jpg",
      "/assets/wayang/kresna/kresna021.jpg"
    ],
    description: "Penasihat agung Pandawa, titisan Dewa Wisnu yang sangat cerdik dan ahli strategi; dikenal sebagai dalang kemenangan.",
    asalDaerah: "Jawa (Gaya Surakarta/Yogyakarta)",
    golongan: "Raja (Dwarawati), Titisan Wisnu",
    sejarahRingkas: "Kresna adalah raja dan penasihat Pandawa, berperan sebagai arsitek strategi kemenangan dan pemegang senjata cakra; sosoknya memadukan kebijaksanaan ilahi dengan diplomasi.",
    maknaFilosofis: "Kebijaksanaan ilahi dan strategi; mengajarkan bahwa penegakan kebenaran kadang memerlukan kecerdikan dan taktik.",
    jenisLisensi: "commercial",
    price: 550000,
    creator: "Sanggar Wayang Nusantara",
    mitraId: "MITRA-036",
    tags: ["wayang", "kresna"],
    resolution: "4096x4096px"
  },
  {
    id: "ASSET-037",
    title: "Wayang Nakula Sadewa",
    kategori: "Wayang",
    thumbnail: "/assets/wayang/nakula_sadewa/img003.jpg",
    imageUrl: [
      "/assets/wayang/nakula_sadewa/img003.jpg",
      "/assets/wayang/nakula_sadewa/nasa003.jpg",
      "/assets/wayang/nakula_sadewa/nasa009.JPG",
      "/assets/wayang/nakula_sadewa/nasa010.jpg"
    ],
    description: "Putra kembar Pandu dan Dewi Madrim; Nakula dan Sadewa adalah duo yang setia—Nakula ahli kuda, Sadewa bijaksana dan tenang.",
    asalDaerah: "Jawa (Gaya Surakarta/Yogyakarta)",
    golongan: "Satria (Pandawa Kembar)",
    sejarahRingkas: "Dua saudara kembar yang menjadi bagian tak terpisahkan dari barisan Pandawa: Nakula pengurus kuda dan Sadewa menjadi sumber pengetahuan dan kebijaksanaan tersembunyi.",
    maknaFilosofis: "Kesetiaan dan pelayanan; kembar ini melambangkan dukungan setia terhadap pemimpin dan pengabdian tanpa pamrih.",
    jenisLisensi: "commercial",
    price: 560000,
    creator: "Sanggar Wayang Nusantara",
    mitraId: "MITRA-037",
    tags: ["wayang", "nakula-sadewa"],
    resolution: "4096x4096px"
  },
  {
    id: "ASSET-038",
    title: "Wayang Patih Sabrang",
    kategori: "Wayang",
    thumbnail: "/assets/wayang/patih_sabrang/pasa013.jpg",
    imageUrl: [
      "/assets/wayang/patih_sabrang/pasa013.jpg",
      "/assets/wayang/patih_sabrang/pasa015.jpg",
      "/assets/wayang/patih_sabrang/pasa016.jpg",
      "/assets/wayang/patih_sabrang/pasa017.jpg"
    ],
    description: "Patih/jenderal dari kerajaan asing/seberang, digambarkan kasar dan berangasan, sering menjadi musuh awal dalam lakon.",
    asalDaerah: "Jawa (Tokoh Generik)",
    golongan: "Patih (Kerajaan Asing/Seberang)",
    sejarahRingkas: "Tokoh generik yang menggambarkan jenderal atau patih dari kerajaan non-Jawa; sering digambarkan kasar dan menjadi antagonis dalam lakon.",
    maknaFilosofis: "Ancaman eksternal: simbol gangguan luar yang harus dihadapi dengan ketenangan dan strategi.",
    jenisLisensi: "commercial",
    price: 570000,
    creator: "Sanggar Wayang Nusantara",
    mitraId: "MITRA-038",
    tags: ["wayang", "patih-sabrang"],
    resolution: "4096x4096px"
  },
  {
    id: "ASSET-039",
    title: "Wayang Petruk",
    kategori: "Wayang",
    thumbnail: "/assets/wayang/petruk/petruk003.JPG",
    imageUrl: [
      "/assets/wayang/petruk/petruk003.JPG",
      "/assets/wayang/petruk/petruk010.jpg",
      "/assets/wayang/petruk/petruk017.jpg",
      "/assets/wayang/petruk/petruk019.jpg"
    ],
    description: "Anak Semar bertubuh tinggi dengan hidung mancung; cerdas, jenaka, dan lihai beradaptasi, sering menjadi pusat lakon 'Petruk Dadi Ratu'.",
    asalDaerah: "Jawa (Punakawan Gaya Surakarta/Yogyakarta)",
    golongan: "Punokawan (Anak Tengah)",
    sejarahRingkas: "Tokoh punokawan paling cerdik yang sering menggunakan kecerdikannya untuk menggoda dan mengkritik priyayi; sering menjadi protagonis dalam episode jenaka.",
    maknaFilosofis: "Kecerdasan rakyat jelata: adaptasi, humor, dan ketajaman intuisi yang memampukan rakyat menanggapi situasi sosial.",
    jenisLisensi: "commercial",
    price: 580000,
    creator: "Sanggar Wayang Nusantara",
    mitraId: "MITRA-039",
    tags: ["wayang", "petruk"],
    resolution: "4096x4096px"
  },
  {
    id: "ASSET-040",
    title: "Wayang Puntadewa",
    kategori: "Wayang",
    thumbnail: "/assets/wayang/puntadewa/puntadewa010.jpg",
    imageUrl: [
      "/assets/wayang/puntadewa/puntadewa010.jpg",
      "/assets/wayang/puntadewa/puntadewa014.jpg",
      "/assets/wayang/puntadewa/puntadewa015.jpg",
      "/assets/wayang/puntadewa/puntadewa017.jpg"
    ],
    description: "Sulung Pandawa (Yudhistira) yang dikenal sangat sabar, tidak pernah berbohong, dan memegang jimat Kalimasada; sosok raja yang mirip pendeta.",
    asalDaerah: "Jawa (Gaya Surakarta/Yogyakarta)",
    golongan: "Raja (Amarta), Pandawa Tertua",
    sejarahRingkas: "Puntadewa adalah pemimpin yang menempatkan dharma di atas segalanya; sifatnya sabar dan jujur, sering diposisikan sebagai simbol moral kerajaan.",
    maknaFilosofis: "Kesucian dan kesabaran tanpa batas: simbol Dharma dan kepemimpinan berbasis moral.",
    jenisLisensi: "commercial",
    price: 590000,
    creator: "Sanggar Wayang Nusantara",
    mitraId: "MITRA-040",
    tags: ["wayang", "puntadewa"],
    resolution: "4096x4096px"
  },
  {
    id: "ASSET-041",
    title: "Wayang Semar",
    kategori: "Wayang",
    thumbnail: "/assets/wayang/semar/semar005.jpg",
    imageUrl: [
      "/assets/wayang/semar/semar005.jpg",
      "/assets/wayang/semar/semar016.jpg",
      "/assets/wayang/semar/semar018.jpg",
      "/assets/wayang/semar/semar021.jpg"
    ],
    description: "Pamong dan tokoh Punokawan yang sebenarnya adalah Batara Ismaya; figur yang menggabungkan unsur bapak-ibu dalam fisiknya dan menjadi pengasuh moral para ksatria.",
    asalDaerah: "Jawa (Punakawan Utama)",
    golongan: "Punokawan (Dewa / Pamong)",
    sejarahRingkas: "Semar adalah Batara Ismaya yang turun ke bumi untuk menjaga dan membimbing ksatria; figurnya penuh paradoks simbolik (bapak-ibu, tua-anak) yang menegaskan kebijaksanaan tersembunyi.",
    maknaFilosofis: "Hakekat hidup (eling lan waspada): simbol kebijaksanaan tertinggi yang tersembunyi dalam kesederhanaan dan pengasuhan moral masyarakat.",
    jenisLisensi: "commercial",
    price: 600000,
    creator: "Sanggar Wayang Nusantara",
    mitraId: "MITRA-041",
    tags: ["wayang", "semar"],
    resolution: "4096x4096px"
  },
  {
    id: "ASSET-042",
    title: "Wayang Sengkuni",
    kategori: "Wayang",
    thumbnail: "/assets/wayang/sengkuni/sengkuni008.jpg",
    imageUrl: [
      "/assets/wayang/sengkuni/sengkuni008.jpg",
      "/assets/wayang/sengkuni/sengkuni009.jpg",
      "/assets/wayang/sengkuni/sengkuni011.jpg",
      "/assets/wayang/sengkuni/sengkuni012.jpg"
    ],
    description: "Paman Kurawa yang paling licik; bicara manis namun penuh racun, berperan besar menghasut konflik demi ambisinya.",
    asalDaerah: "Jawa (Gaya Surakarta/Yogyakarta)",
    golongan: "Patih (Astina), Paman Kurawa",
    sejarahRingkas: "Tokoh licik yang berperan sebagai dalang di balik perseteruan Pandawa-Kurawa; menggunakan tipu daya dan fitnah untuk mencapai tujuan politiknya.",
    maknaFilosofis: "Provokator dan manipulator: simbol politisi jahat yang merusak tatanan dari dalam.",
    jenisLisensi: "commercial",
    price: 610000,
    creator: "Sanggar Wayang Nusantara",
    mitraId: "MITRA-042",
    tags: ["wayang", "sengkuni"],
    resolution: "4096x4096px"
  },
  {
    id: "ASSET-043",
    title: "Wayang Togog",
    kategori: "Wayang",
    thumbnail: "/assets/wayang/togog/img001.jpg",
    imageUrl: [
      "/assets/wayang/togog/img001.jpg",
      "/assets/wayang/togog/togog003d%20(2).jpg",
      "/assets/wayang/togog/togog010.jpg",
      "/assets/wayang/togog/togog011.jpg"
    ],
    description: "Kakak Semar (Tejamantri) yang bertugas sebagai Punokawan pihak musuh/seberang; sering memberi nasihat baik yang tidak diindahkan oleh tuannya.",
    asalDaerah: "Jawa (Punakawan Seberang)",
    golongan: "Punokawan (Pihak Musuh/Seberang)",
    sejarahRingkas: "Kakak Semar yang turun untuk mengasuh raksasa dan raja jahat; nasihatnya kerap tak digubris sehingga perannya tragis.",
    maknaFilosofis: "Pengingat yang diabaikan: simbol suara nurani yang sering diacuhkan oleh mereka yang dikuasai nafsu.",
    jenisLisensi: "commercial",
    price: 620000,
    creator: "Sanggar Wayang Nusantara",
    mitraId: "MITRA-043",
    tags: ["wayang", "togog"],
    resolution: "4096x4096px"
  }
];