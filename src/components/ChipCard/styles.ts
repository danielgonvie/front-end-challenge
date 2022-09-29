import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.malibu100};
  border-radius: 47px;
  padding: 0.25rem 0.5rem;
  color: ${({ theme }) => theme.color.grayscale900};
`;
