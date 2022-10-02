import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.grayscale900};
  width: 100%;
  margin: 10rem 0;
`;
