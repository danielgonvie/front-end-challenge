import { Container, Input, SearchLineIcon } from './styles';
import { SearchInputProps } from './types';

export const SearchInput = ({
  placeholder,
  className,
  handleChange,
}: SearchInputProps) => {
  function onChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    handleChange(e.target.value);
  }

  return (
    <Container className={className}>
      <SearchLineIcon />
      <Input
        name="search"
        label="search"
        hideLabel={true}
        placeholder={placeholder}
        onChange={onChangeInput}
      />
    </Container>
  );
};
