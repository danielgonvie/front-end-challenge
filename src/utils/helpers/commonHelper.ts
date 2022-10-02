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

export const parseTime = (time: number) => {
  const totalNumberOfSeconds = Math.round(time);
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

export const getAudioDuration = (audio: HTMLAudioElement) => {
  const duration: number = audio.duration;
  return parseTime(duration);
};

export const likeHasChange = (
  liked: boolean,
  likedSongs: number[],
  setter: (arg: number[]) => void,
  songId: number,
) => {
  const likedSongsArr: number[] = [...likedSongs];
  liked
    ? likedSongsArr.splice(likedSongsArr.indexOf(songId), 1)
    : likedSongsArr.push(songId);
  localStorage.setItem('likedSongs', JSON.stringify(likedSongsArr));
  setter(likedSongsArr);
};

export const playHasChange = (
  playing: boolean,
  currentSong: Song,
  setterPlaying: (arg: boolean) => void,
  setterCurrentSong: (arg: Song) => void,
) => {
  setterPlaying(playing);
  setterCurrentSong(currentSong);
};

export const handlePrev = (
  currentPlayingId: number,
  playlist: Song[],
  setterCurrentSong: (arg: Song) => void,
) => {
  const currentSongIndex = playlist.findIndex(
    (song) => song.id === currentPlayingId,
  );

  if (currentSongIndex === 0) {
    const nextSong = { ...playlist[playlist.length - 1] };
    return setterCurrentSong(nextSong);
  }
  const nextSong = { ...playlist[currentSongIndex - 1] };

  return setterCurrentSong(nextSong);
};

export const handleNext = (
  currentPlayingId: number,
  playlist: Song[],
  setterCurrentSong: (arg: Song) => void,
) => {
  const currentSongIndex = playlist.findIndex(
    (song) => song.id === currentPlayingId,
  );

  if (currentSongIndex === playlist.length - 1) {
    const nextSong = { ...playlist[0] };
    return setterCurrentSong(nextSong);
  }
  const nextSong = { ...playlist[currentSongIndex + 1] };
  return setterCurrentSong(nextSong);
};

