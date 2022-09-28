export type Song = {
  id: number;
  name: string;
  image: string;
  description: string;
  genre: string;
  audio: { url: string };
  author: { name: string };
};

export type Data = {
  songs: {
    songs: [Song];
  };
};
