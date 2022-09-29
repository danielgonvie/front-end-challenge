import { FeaturedSongs as FeaturedSongsView } from '$/components/FeaturedSongs';
import { SearchInput as DefaultSearchInput } from '$/components/SearchInput';
import { MusicPlayer as DefaultMusicPlayer } from '$/components/MusicPlayer';
import styled from 'styled-components';

export const Container = styled.article`
  padding-block: 2.5rem 6.3rem;
`;

export const SearchInput = styled(DefaultSearchInput)`
  margin-block-start: 1.375rem;
  margin: 2.5rem 0rem;
`;

export const FeaturedSongs = styled(FeaturedSongsView)`
  margin: 0px;
`;

export const MusicPlayer = styled(DefaultMusicPlayer)`
  position: absolute;
`;
