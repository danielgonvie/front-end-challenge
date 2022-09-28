import { Dropdown as DefaultDropdown } from '$/components/Dropdown';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0rem;
`;

export const Dropdown = styled(DefaultDropdown)`
  margin: 0rem;
`;
