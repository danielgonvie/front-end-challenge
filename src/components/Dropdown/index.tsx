import React from 'react';

import { Component, Container } from './styles';
import { Props } from './types';

export const Dropdown = React.forwardRef<HTMLSelectElement, Props>(
  ({ className, name, onChangeSort, ...props }, ref) => {
    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const value = event.target.value;
      onChangeSort(value);
    };

    return (
      <Container className={className}>
        <Component
          {...props}
          className={className}
          ref={ref}
          id={name}
          name={name}
          onChange={selectChange}
        >
          {/* Aquí podemos hacer un componete sub para las opciones */}
          <option value="name">by name</option>
          <option value="author">by author</option>
          <option value="genre">by genre</option>
        </Component>
      </Container>
    );
  },
);
