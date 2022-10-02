import { visuallyHidden } from '$/styles/utils/mixins';
import styled from 'styled-components';

export const Label = styled.label<{ $visuallyHidden: boolean }>`
  margin-block-end: 0.25rem;

  display: inline-block;

  color: ${({ theme }) => theme.color.grayscale900};
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-feature-settings: 'tnum' on, 'lnum' on;
  ${({ $visuallyHidden }) => $visuallyHidden && visuallyHidden}
`;

export const Component = styled.input`
  width: 100%;
  height: 2.5rem;
  padding: 0.5rem 0.75rem;

  color: ${({ theme }) => theme.color.grayscale900};

  font-size: 1rem;
  line-height: 1.5rem;

  background: ${({ theme }) => theme.color.white};

  border: 0.0625rem solid ${({ theme }) => theme.color.grayscale300};
  border-radius: 0.5rem;
  outline-color: ${({ theme }) => theme.color.grayscale900};
  font-feature-settings: 'tnum' on, 'lnum' on;

  ::placeholder {
    color: ${({ theme }) => theme.color.grayscale500};
  }
`;

export const Container = styled.div<{ $disabled: boolean }>`
  display: block;
  min-width: 20rem;
  margin: 0;

  opacity: ${({ $disabled }) => ($disabled ? 0.3 : 1)};
`;
