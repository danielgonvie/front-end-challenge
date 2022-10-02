import { AppContext } from '$/context/AppContext';
import React, { useContext } from 'react';

import { Component, Container } from './styles';
import { Props } from './types';

export const Dropdown = React.forwardRef<HTMLSelectElement, Props>(
  ({ className, name, ...props }, ref) => {
    const { setSortedBy } = useContext(AppContext);

    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSortedBy(event.target.value);
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
