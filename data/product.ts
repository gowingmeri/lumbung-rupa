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
  jenisLisensi: "personal" | "commercial" | "enterprise";
  price: number;

  creator: string;     
  mitraId: string;          
  tags: string[];

  resolution?: string;
  isGenerative?: boolean;
  metadata?: Record<string, any>;
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
    description: "Koleksi Batik Betawi autentik dari LumbungRupa.",
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
    description: "Koleksi Batik Celup autentik dari LumbungRupa.",
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
    jenisLisensi: "commercial",
    price: 340000,
    creator: "Batik Priangan Studio",
    mitraId: "MITRA-015",
    tags: ["batik", "priangan"],
    resolution: "4096x4096px"
  },
  {
    id: "ASSET-016",
    title: "Batik Sekar",
    kategori: "Batik",
    thumbnail: "/assets/batik/batik-sekar/1.jpg",
    imageUrl: [
      "/assets/batik/batik-sekar/1.jpg",
      "/assets/batik/batik-sekar/38.jpg",
      "/assets/batik/batik-sekar/49.jpg",
      "/assets/batik/batik-sekar/9.jpg"
    ],
    description: "Koleksi Batik Sekar autentik dari LumbungRupa.",
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
    description: "Wayang tokoh Abimanyu dari khasanah wayang Nusantara.",
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
    description: "Wayang tokoh Anoman dari khasanah wayang Nusantara.",
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
    description: "Wayang tokoh Arjuna dari khasanah wayang Nusantara.",
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
    description: "Wayang tokoh Bagong dari khasanah wayang Nusantara.",
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
    description: "Wayang tokoh Baladewa dari khasanah wayang Nusantara.",
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
    description: "Wayang tokoh Bima dari khasanah wayang Nusantara.",
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
    description: "Wayang tokoh Cakil dari khasanah wayang Nusantara.",
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
    description: "Wayang tokoh Durna dari khasanah wayang Nusantara.",
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
    description: "Wayang tokoh Dursasana dari khasanah wayang Nusantara.",
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
    description: "Wayang tokoh Duryudana dari khasanah wayang Nusantara.",
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
    description: "Wayang tokoh Gareng dari khasanah wayang Nusantara.",
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
    description: "Wayang tokoh Gatotkaca dari khasanah wayang Nusantara.",
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
    description: "Wayang tokoh Karna dari khasanah wayang Nusantara.",
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
    description: "Wayang tokoh Kresna dari khasanah wayang Nusantara.",
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
    description: "Wayang tokoh Nakula Sadewa dari khasanah wayang Nusantara.",
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
    description: "Wayang tokoh Patih Sabrang dari khasanah wayang Nusantara.",
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
    description: "Wayang tokoh Petruk dari khasanah wayang Nusantara.",
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
    description: "Wayang tokoh Puntadewa dari khasanah wayang Nusantara.",
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
    description: "Wayang tokoh Semar dari khasanah wayang Nusantara.",
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
    description: "Wayang tokoh Sengkuni dari khasanah wayang Nusantara.",
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
    description: "Wayang tokoh Togog dari khasanah wayang Nusantara.",
    jenisLisensi: "commercial",
    price: 620000,
    creator: "Sanggar Wayang Nusantara",
    mitraId: "MITRA-043",
    tags: ["wayang", "togog"],
    resolution: "4096x4096px"
  }
];
