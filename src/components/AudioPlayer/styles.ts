import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 35%;
`;

export const Timer = styled.span``;

export const SongRange = styled.input`
  overflow: hidden;
  display: block;
  appearance: none;
  max-width: 700px;
  width: 100%;
  margin: 0;
  height: 2rem;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.grayscale900};
  margin: 0 0.75rem;

  &:before {
    background-color: red;
  }

  &:after {
    background-color: red;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 0.625rem;
    width: 0.625rem;
    border-radius: 50%;
    margin: -0.15625rem 0;
    background: ${({ theme }) => theme.color.white};
    cursor: pointer;
  }

  &::-moz-range-thumb {
    border: none;
    height: 0.625rem;
    width: 0.625rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.color.white};
    cursor: pointer;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: pointer;

    border-radius: 0.1rem;
    background: ${({ theme }) => theme.color.malibu500};
  }
`;

export const MainAudio = styled.audio``;
