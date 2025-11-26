export interface Carousel {
  id: string;
  thumbnail: string;
  title: string;
  from: string;
}

export const carousels: Carousel[] = [
  {
    id: "1",
    thumbnail: "/assets/batik/batik-bali/2.jpg",
    title: "Batik Kawung Classic",
    from: "Yogyakarta"
  },
  {
    id: "2",
    thumbnail: "/assets/batik/batik-bali/2.jpg",
    title: "Batik Parang Heritage",
    from: "Solo"
  },
  {
    id: "3",
    thumbnail: "/assets/batik/batik-bali/2.jpg",
    title: "Batik Mega Mendung",
    from: "Cirebon"
  },
  {
    id: "4",
    thumbnail: "/assets/batik/batik-bali/2.jpg",
    title: "Batik Sido Mukti",
    from: "Yogyakarta"
  }
];
