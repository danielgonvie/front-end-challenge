import { css } from 'styled-components';
import type {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';

export const prettyScrollbar = ({
  vertical = true,
  size = '6px',
}: {
  vertical?: boolean;
  size?: string;
}): FlattenInterpolation<ThemeProps<DefaultTheme>> => css`
  scrollbar-width: thin;
  scrollbar-color: transparent;
  &::-webkit-scrollbar {
    ${vertical
      ? css`
          width: ${size};
        `
      : css`
          height: ${size};
        `}
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.grayscale100};
    border: none;
    border-radius: 4px;
  }
`;

export const visuallyHidden = css`
  position: absolute !important;

  width: 0.0625rem !important;
  height: 0.0625rem !important;
  margin: -0.0625rem !important;
  padding: 0 !important;
  overflow: hidden !important;

  white-space: nowrap !important;

  border: 0 !important;

  clip: rect(0.0625rem, 0.0625rem, 0.0625rem, 0.0625rem) !important;
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important;
`;
