import { gql, useQuery } from '@apollo/client';

import { Data, Song } from './SongServiceTypes';

export const GET_SONGS = gql`
  query SongsQuery {
    songs {
      songs {
        id
        image
        name
        description
        genre
        audio {
          url
        }
        author {
          name
        }
      }
    }
  }
`;

export function useGetSongs() {
  const { data, loading, error } = useQuery<Data>(GET_SONGS);
  if (loading) return { loading };
  if (error) return { error };
  if (data) {
    const songs: Song[] = data.songs.songs;
    return songs;
  }
}
