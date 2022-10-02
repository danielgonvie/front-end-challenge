import { Song } from '$/context/types';

export const checkLiked = (song: Song) => {
  const likedSongs: number[] | null = JSON.parse(
    localStorage.getItem('likedSongs') as string,
  ) as number[];
  if (likedSongs !== null) {
    return likedSongs.includes(song.id);
  }
  return false;
};

export const filterAndSort = (
  arr: Song[],
  sortedBy: string,
  searchQuery: string,
) => {
  const filteredArr: Song[] = arr.filter((song: Song) =>
    Object.values(song).some((keyValue) =>
      keyValue.toString().toLowerCase().includes(searchQuery.toLowerCase()),
    ),
  );

  return sortedBy === 'author'
    ? filteredArr.sort((a, b) => a.author.name.localeCompare(b.author.name))
    : filteredArr.sort((a, b) => a[sortedBy].localeCompare(b[sortedBy]));
};

export const getAudioDuration = (audio: HTMLAudioElement) => {
  const duration: number = audio.duration;
  const totalNumberOfSeconds = Math.round(duration);
  const hours = Math.floor(totalNumberOfSeconds / 3600);
  const minutes = Math.floor((totalNumberOfSeconds - hours * 3600) / 60);
  const seconds = Math.floor(
    totalNumberOfSeconds - (hours * 3600 + minutes * 60),
  );
  const result = `${minutes < 10 ? +minutes : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;

  return result;
};
