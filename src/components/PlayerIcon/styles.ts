import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 2rem;
  margin: 1rem 0rem;
  background-color: ${({ theme }) => theme.color.grayscale900};
  border-radius: 50%;
  cursor: pointer;
`;

export const PlayState = styled.span`
  color: ${({ theme }) => theme.color.white};
  font-size: 1rem;
  user-select: none;
`;
