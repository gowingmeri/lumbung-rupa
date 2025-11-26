export interface Suggestion {
  id: string;
  name: string;
  category: string;
  region: string;
}

export const suggestion: Suggestion[] = [
  { id: "1", name: "Batik Parang", category: "Tekstil", region: "Yogyakarta" },
  { id: "2", name: "Wayang Kulit", category: "Seni Pertunjukan", region: "Jawa Tengah" },
  { id: "3", name: "Songket Palembang", category: "Tekstil", region: "Sumatra Selatan" },
  { id: "4", name: "Ukiran Jepara", category: "Kerajinan", region: "Jawa Tengah" },
  { id: "5", name: "Tenun Ikat", category: "Tekstil", region: "NTT" },
  { id: "6", name: "Keris", category: "Senjata Tradisional", region: "Jawa" },
  { id: "7", name: "Angklung", category: "Alat Musik", region: "Jawa Barat" },
  { id: "8", name: "Tari Saman", category: "Seni Pertunjukan", region: "Aceh" },
  { id: "9", name: "Batik Mega Mendung", category: "Tekstil", region: "Cirebon" },
  { id: "10", name: "Gamelan", category: "Alat Musik", region: "Jawa" },
];
