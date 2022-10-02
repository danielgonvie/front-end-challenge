import styled from 'styled-components';

export const Component = styled.select`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 0.25rem 0.5rem 0.5rem;
  gap: 0.5rem;

  width: 9.875rem;
  height: 2.5rem;

  border: 0px solid ${({ theme }) => theme.color.grayscale300};
  background-color: #f5f6f7;
  border-radius: 0.4rem;
  & option {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem;
    gap: 1rem;

    width: 14.5rem;
    height: 3rem;

    ${({ theme }) => theme.color.white};
    border-radius: 0.25rem;
  }
  &:focus {
    outline: none;
  }
`;

export const Container = styled.div`
  display: block;
  min-width: 10rem;
  margin: 0;
`;
