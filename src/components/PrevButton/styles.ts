import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 2rem;
  margin: 1rem 0rem;
  cursor: pointer;
`;

export const PreviousIcon = styled.span`
  color: ${({ theme }) => theme.color.white};
  font-size: 1rem;
  user-select: none;
`;
